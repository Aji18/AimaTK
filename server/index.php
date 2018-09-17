<?php

require_once __DIR__.'/pvendor/loader.php';
require_once __DIR__.'/vendor/autoload.php';

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

$klein = new \Klein\Klein();
$klein->respond(function ($req, $res, $src, $app) use ($klein) {
    $klein->response()->header('Access-Control-Allow-Origin', 'http://localhost:3000');
    $klein->response()->header('Access-Control-Allow-Credentials', 'true');

    $app->requester = new \Ydm\Requester;
    $app->register('db', function() {
        \Ydm\Database::connect();
        return new \Ydm\Database;
    });

    $klein->onError(function ($klein, $msg, $typ, $err) {
        $res = $klein->response();
        switch ($typ) {
            case 'Ydm\RequesterException':
                $res->code(400);
                $res->body(json_encode([
                    'error'=>true,
                    'ermsg'=>$msg,
                    'ertrc'=>(DEV) ? $err->getTraceAsString() : null,
                ]));
                $res->send();
                break;
                break;
            default:
                $res->code(500);
                if (DEV)
                    $res->body(json_encode([
                        'error'=>true,
                        'ermsg'=>$msg,
                        'ertrc'=>$err->getTraceAsString(),
                    ]));
                else
                    $res->body('Sorry something happen in server! Please contact admin!');
                $res->send(1);
                break;
        }
    });
});

$klein->with("/api", "src/routers/apiRouters.php");
$klein->respond(function (\Klein\Request $req, \Klein\Response $res, $src, $app) {
    if (!$res->isSent())
        $res->body('Render Main Page');
});

$klein->dispatch();