<?php
namespace Ydm;

class PublicAndDownloadController {
    public static function download(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'document'      => 'string|trim',
        ]);

        $filename = $_SERVER['DOCUMENT_ROOT']."/document/".$requested['document'];
        if (file_exists($filename)){
            $res->file($filename);
        }else{
            $res->body("File does not exist.");
            $res->send();
        }
    }
    public static function public(\Klein\Request $req, \Klein\Response $res, $src, $app) {
        $requested = $app->requester::validate($req->params(), [
            'type'      => 'string|trim',
            'name'      => 'string|trim',
        ]);

        $filename = $_SERVER['DOCUMENT_ROOT']."/public/".$requested['type']."/".$requested['name'];
        if (file_exists($filename)){
            $res->file($filename);
        }else{
            $res->body("File does not exist.");
            $res->send();
        }
    }
}