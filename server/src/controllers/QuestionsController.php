<?php
namespace Ydm;

class QuestionsController {
    private static $dim = 'D';
    private static $subDim = 'S';
    private static $quest = 'Q';

    public static function index(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $questions      = $app->db::findAll('questions', 'ORDER BY subdimension ASC, number ASC');

        $retval = new \stdClass();
        foreach ($questions as $question) {
            if ($question->subdimension === NULL) {
                $dimensionID        = $question->id;

                $d = $retval->$dimensionID = new \stdClass();

                $d->id              = $dimensionID;
                $d->dimension       = (int)$question->dimension;
                $d->name            = $question->question;
                $d->subdimensions   = new \stdClass();
            } else if ($question->number === NULL) {
                $dimensionID        = $question->rdimension_id;
                $subdimensionID     = $question->id;

                $ssdm = $retval->$dimensionID->subdimensions->$subdimensionID = new \stdClass();

                $ssdm->id           = $subdimensionID;
                $ssdm->subdimension = (int)$question->subdimension;
                $ssdm->name         = $question->question;
                $ssdm->questions    = new \stdClass();
            } else {
                $dimensionID    = $question->rdimension_id;
                $subdimensionID = $question->rsubdimension_id;
                $questionID     = $question->id;

                $q = $retval->$dimensionID;
                $r = $q->subdimensions->$subdimensionID;
                $s = $r->questions->$questionID = new \stdClass();

                $s->id          = $questionID;
                $s->number      = (int)$question->number;
                $s->question    = $question->question;
                $s->answers     = array();

                foreach (unserialize($question->answers) as $answer)
                    $s->answers[] = json_decode($answer);
            }
        };
        $res->json(stdToArray($retval));
    }
    public static function addDimension(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'dimension'     => 'integer',
            'name'          => 'string|trim',
        ]);

        $dimension = $app->db::findOne('questions',
            'role = ? AND dimension = ?', [self::$dim, $requested['dimension']]
        );
        if ($dimension !== NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_already_exists',
            ]);
            return;
        }

        $question = $app->db::dispense('questions');
        $question->role         = self::$dim;
        $question->dimension    = $requested['dimension'];
        $question->subdimension = NULL;
        $question->number       = NULL;
        $question->question     = $requested['name'];
        $question->answers      = NULL;
        $app->db::store($question);

        $res->json([
            'error'=>false,
            'addDimension'=>'succeed',
            'dimensionID'=>$question->id,
        ]);
    }
    public static function addSubDimension(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'dimension'     => 'integer',
            'subdimension'  => 'integer',
            'name'      => 'string|trim',
        ]);

        $dimension = $app->db::findOne('questions',
            'role = ? AND dimension = ?', [self::$dim, $requested['dimension']]
        );
        if ($dimension === NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_not_found',
            ]);
            return;
        }
        $subdimension = $app->db::findOne('questions',
            'role = ? AND rdimension_id = ? AND subdimension = ?', [self::$subDim, $dimension->id, $requested['subdimension']]
        );
        if ($subdimension !== NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'subdimension_already_exists',
            ]);
            return;
        }

        $question = $app->db::dispense('questions');
        $question->role         = self::$subDim;
        $question->dimension    = $requested['dimension'];
        $question->subdimension = $requested['subdimension'];
        $question->number       = NULL;
        $question->question     = $requested['name'];
        $question->answers      = NULL;
        $question->rdimension   = $dimension;
        $app->db::store($question);

        $res->json([
            'error'=>false,
            'addSubDimension'=>'succeed',
            'subDimensionID'=>$question->id,
        ]);
    }
    public static function add(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'dimension'     => 'integer',
            'subdimension'  => 'integer',
            'number'        => 'integer',
            'question'      => 'string|trim',
            'answers'       => 'array',
        ]);

        $dimension = $app->db::findOne('questions',
            'role = ? AND dimension = ?', [self::$dim, $requested['dimension']]
        );
        $subdimension = $app->db::findOne('questions',
            'role = ? AND rdimension_id = ? AND subdimension = ?', [self::$subDim, $dimension->id, $requested['subdimension']]
        );
        if ($subdimension === NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_or_subdimension_not_found',
            ]);
            return;
        }
        $questionc = $app->db::findOne('questions',
            'role = ? AND rdimension_id = ? AND rsubdimension_id = ? AND number = ?',
            [self::$quest, $dimension->id, $subdimension->id, $requested['number']]
        );
        if ($questionc !== NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'question_already_exists',
            ]);
            return;
        }

        $question = $app->db::dispense('questions');
        $question->role          = self::$quest;
        $question->dimension     = $requested['dimension'];
        $question->subdimension  = $requested['subdimension'];
        $question->number        = $requested['number'];
        $question->question      = $requested['question'];
        $question->answers       = serialize($requested['answers']);
        $question->rdimension    = $dimension;
        $question->rsubdimension = $subdimension;
        $app->db::store($question);

        $res->json([
            'error'=>false,
            'add'=>'succeed',
            'questionID'=>$question->id,
        ]);
    }
    public static function remove(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'questionID'     => 'string|trim',
        ]);

        $questions = $app->db::find('questions',
            'id = ? OR rdimension_id = ? OR rsubdimension_id = ?',
            [$requested['questionID'], $requested['questionID'], $requested['questionID']]
        );

        $app->db::trashAll($questions);

        $res->json([
            'error'=>false,
            'remove'=>'succeed',
        ]);
    }
}