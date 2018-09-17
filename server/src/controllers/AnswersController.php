<?php
namespace Ydm;

class AnswersController {
    public static function all(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'uuid'      => 'string|trim',
        ]);

        $answers = $app->db::find('answers', 'user_id = ?', [$requested['uuid']]);

        $res->json(stdToArray($answers));
    }
    public static function add(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'uuid'      => 'string|trim',
            'quid'      => 'string|trim',
            'answer'    => 'string'
        ]);

        $user = $app->db::findOne('users', 'id = ?', [$requested['uuid']]);
        $ques = $app->db::findOne('questions', 'id = ?', [$requested['quid']]);
        if ($user === NULL || $ques === NULL) {
            $res->code(400);
            $res->json([
                'error'=>true,
                'ermsg'=>'user_or_ques_not_found',
            ]);
            return;
        }

        $answer = $app->db::findOne('answers', 'user_id = ? AND ques_id = ?', [$user->id, $ques->id,]);
        if ($answer === NULL) {
            $answer = $app->db::dispense('answers');
            $answer->user = $user;
            $answer->ques = $ques;
        }
        $answer->answer = $requested['answer'];
        $app->db::store($answer);

        $res->json([
            'error'=>false,
            'add'=>'succeed',
            'answerID'=>$answer->id,
        ]);
    }

    public static function allInstitute(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'uuid'      => 'string|trim',
        ]);
        $institute = $app->db::findOne('institutes', 'user_id = ?', [$requested['uuid']]);
        $res->json($institute);
    }
    public static function addInstitute(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'uuid'      => 'string|trim',
            'answer'    => 'string'
        ]);

        $user = $app->db::findOne('users', 'id = ?', [$requested['uuid']]);
        if ($user === NULL) {
            $res->code(400);
                $res->json([
                'error'=>true,
                'ermsg'=>'user_not_found',
            ]);
            return;
        }

        $answer = $app->db::findOne('institutes', 'user_id = ?', [$user->id]);
        if ($answer === NULL) {
            $answer = $app->db::dispense('institutes');
            $answer->user = $user;
        }
        $answer->answer = $requested['answer'];
        $app->db::store($answer);

        $res->json([
            'error'=>false,
            'add'=>'succeed',
            'answerID'=>$answer->id,
        ]);
    }
}