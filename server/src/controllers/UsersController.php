<?php
namespace Ydm;
class UsersController {
    public static function index(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'name' => 'string|trim',
            'number' => 'string|trim',
        ]);

        $user = $app->db::findOrCreate('users', [
            'name'=>$requested['name'],
            'number'=>$requested['number']
        ]);

        $res->json([
            'error'=>false,
            'userID'=>$user->id,
        ]);
    }

    public static function result(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'uuid' => 'string|trim',
        ]);

        $instituteRaw = $app->db::findOne('institutes', 'user_id = ?', [$requested['uuid']]);
        $institute = json_decode($instituteRaw->answer);
        // get all questions
        $questionsRaw = $app->db::findAll('questions', 'ORDER BY subdimension ASC, number ASC');
        // get all answers
        $answersRaw = $app->db::findAll('answers', 'user_id = ?', [$requested['uuid']]);
        // parse all answers
        $answers = [];
        foreach ($answersRaw as $answerRaw) {
            $answers[$answerRaw->ques_id] = json_decode($answerRaw->answer);
        }
        // parse question and set to result
        $result = [];
        $result[0] = 0;
        foreach ($questionsRaw as $questionRaw) {
            if ($questionRaw->number !== NULL) {
                $dimension = $questionRaw->dimension;

                if (!isset($result[$dimension])) {
                    $result[$dimension] = 0;
                }

                $score = $answers[$questionRaw->id]->score;
                $result[$dimension] += $score;
                $result[0] += $score;
            }
        }

        $fresult = [];
        for($i = 0; $i < 5; $i++) {
            $r = new \stdClass();
            $r->score = $result[$i];

            $enum = UsersController::scoreSumToEnum($i, $r->score);
            $obje = UsersController::scoreEnumToObject($enum);

            $r->char = $obje['char'];
            $r->criteria = $obje['criteria'];

            $fresult[$i] = $r;
        }

        require_once 'src/result.php';
        $mpdf = new \Mpdf\Mpdf();
        $mpdf->WriteHTML(getResult($institute, $fresult));
        $mpdf->Output('Hasil Instrumen Deteksi Mutu_'.$institute->name.'_'.date('Y-d-m H-s').'.pdf', 'I');

        $res->send();
    }

    private static function scoreSumToEnum($dimension, $score) {
        switch ($dimension) {
            case 1:
                if ($score >= 30 && $score <= 36) {
                    return 'EScoreCriteria.A';
                } else if ($score >= 23 && $score <= 29 ) {
                    return 'EScoreCriteria.B';
                } else if ($score >= 16 && $score <= 22 ) {
                    return 'EScoreCriteria.C';
                } else if ($score >= 9 && $score <= 15) {
                    return 'EScoreCriteria.D';
                } else {
                    return 'EScoreCriteria.D';
                }
            case 2:
                if ($score >= 56 && $score <= 68) {
                    return 'EScoreCriteria.A';
                } else if ($score >= 43 && $score <= 55 ) {
                    return 'EScoreCriteria.B';
                } else if ($score >= 30 && $score <= 42 ) {
                    return 'EScoreCriteria.C';
                } else if ($score >= 17 && $score <= 29) {
                    return 'EScoreCriteria.D';
                } else {
                    return 'EScoreCriteria.D';
                }
            case 3:
                if ($score >= 147 && $score <= 180) {
                    return 'EScoreCriteria.A';
                } else if ($score >= 113 && $score <= 146 ) {
                    return 'EScoreCriteria.B';
                } else if ($score >= 79 && $score <= 112 ) {
                    return 'EScoreCriteria.C';
                } else if ($score >= 45 && $score <= 78) {
                    return 'EScoreCriteria.D';
                } else {
                    return 'EScoreCriteria.D';
                }
            case 4:
                if ($score >= 69 && $score <= 84) {
                    return 'EScoreCriteria.A';
                } else if ($score >= 53 && $score <= 68 ) {
                    return 'EScoreCriteria.B';
                } else if ($score >= 37 && $score <= 52 ) {
                    return 'EScoreCriteria.C';
                } else if ($score >= 21 && $score <= 36) {
                    return 'EScoreCriteria.D';
                } else {
                    return 'EScoreCriteria.D';
                }
            case 0:
                if ($score >= 299 && $score <= 368) {
                    return 'EScoreCriteria.A';
                } else if ($score >= 230 && $score <= 298 ) {
                    return 'EScoreCriteria.B';
                } else if ($score >= 161 && $score <= 229 ) {
                    return 'EScoreCriteria.C';
                } else if ($score >= 92 && $score <= 160) {
                    return 'EScoreCriteria.D';
                } else {
                    return 'EScoreCriteria.D';
                }
        }
    }
    private static function scoreEnumToObject($score) {
        switch ($score) {
            case 'EScoreCriteria.A':
                return [
                    'char'=>"A",
                    'criteria'=>"Sangat Berkualitas",
                ];
            case 'EScoreCriteria.B':
                return [
                    'char'=>"B",
                    'criteria'=>"Berkualitas",
                ];
            case 'EScoreCriteria.C':
                return [
                    'char'=>"C",
                    'criteria'=>"Kualitas Standar",
                ];
            case 'EScoreCriteria.D':
                return [
                    'char'=>"D",
                    'criteria'=>"Belum Berkualitas",
                ];
        }
    }
}