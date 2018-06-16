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
}