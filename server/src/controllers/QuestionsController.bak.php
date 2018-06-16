<?php
namespace Ydm;

function stdToArray($obj){
    $r = array();
    foreach ($obj as $k => $o) {
        foreach($o as $sk => &$sf){
            if(is_object($sf))
                $sf = stdToArray($sf);
        }
        $r[] = $o;
    }
    return $r;
}

class QuestionsController {
    public static function index(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $dimensions     = $app->db::findAll('qdimensions');
        $subdimensions  = $app->db::findAll('qsubdimensions');
        $questions      = $app->db::findAll('questions');

        $retval = new \stdClass();
        foreach ($dimensions as $dimension) {
            $dimensionID = $dimension->id;
            $d = $retval->$dimensionID = new \stdClass();
            $d->id              = $dimensionID;
            $d->dimension       = $dimension->dimension;
            $d->name            = $dimension->name;
            $d->subdimensions   = new \stdClass();
        };
        foreach ($subdimensions as $subdimension) {
            $dimensionID = $subdimension->dimension_id;
            $subdimensionID = $subdimension->id;

            $ssdm = $retval->$dimensionID->subdimensions->$subdimensionID = new \stdClass();
            $ssdm->id           = $subdimensionID;
            $ssdm->subdimension = $subdimension->subdimension;
            $ssdm->name         = $subdimension->name;
            $ssdm->questions    = new \stdClass();
        };
        foreach ($questions as $question) {
            $dimensionID    = $question->dimension_id;
            $subdimensionID = $question->subdimension_id;
            $questionID     = $question->id;

            $q = $retval->$dimensionID->subdimensions->$subdimensionID->questions->$questionID = new \stdClass();
            $q->id          = $questionID;
            $q->number      = $question->nunber;
            $q->question    = $question->question;
            $q->answers     = array();

            foreach (unserialize($question->answers) as $answer)
                $q->answers[] = json_decode($answer);
        }

        $res->json(stdToArray($retval));
    }
    public static function addDimension(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'dimension'     => 'integer',
            'name'          => 'string|trim',
        ]);

        $dimensions = $app->db::findOne('qdimensions', 'dimension = ?', [$requested['dimension']]);
        if ($dimensions !== NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_already_exists',
            ]);
            return;
        }

        $dimension = $app->db::dispense('qdimensions');
        $dimension->dimension    = $requested['dimension'];
        $dimension->name         = $requested['name'];
        $app->db::store($dimension);

        $res->json([
            'error'=>false,
            'addDimension'=>'succeed',
            'dimensionID'=>$dimension->id,
        ]);
    }
    public static function addSubDimension(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'dimension'     => 'integer',
            'subdimension'  => 'integer',
            'name'      => 'string|trim',
        ]);

        $dimension = $app->db::findOne('qdimensions', 'dimension = ?', [$requested['dimension']]);
        if ($dimension === NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_not_found',
            ]);
            return;
        }
        $dimensions = $app->db::findOne('qsubdimensions', 'dimension_id = ? AND subdimension = ?', [$dimension->id, $requested['subdimension']]);
        if ($dimensions !== NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'subdimension_already_exists',
            ]);
            return;
        }

        $subdimension = $app->db::dispense('qsubdimensions');
        $subdimension->dimension    = $dimension;
        $subdimension->subdimension = $requested['subdimension'];
        $subdimension->name         = $requested['name'];
        $app->db::store($subdimension);

        $res->json([
            'error'=>false,
            'addSubDimension'=>'succeed',
            'subDimensionID'=>$subdimension->id,
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


        $dimension = $app->db::findOne('qdimensions', 'dimension = ?', [$requested['dimension']]);
        $subdimension = $app->db::findOne('qsubdimensions', 'dimension_id = ? AND subdimension = ?', [$dimension->id, $requested['subdimension']]);
        if ($subdimension === NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'dimension_or_subdimension_not_found',
            ]);
            return;
        }

        $question = $app->db::dispense('questions');
        $question->dimension    = $dimension;
        $question->subdimension = $subdimension;
        $question->number       = $requested['number'];
        $question->question     = $requested['question'];
        $question->answers      = serialize($requested['answers']);
        $app->db::store($question);

        $res->json([
            'error'=>false,
            'add'=>'succeed',
            'questionID'=>$question->id,
        ]);
    }
    public static function remove(\Klein\Request $req, \Klein\Response $res, $src, $app) {

    }
}