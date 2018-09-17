<?php

require_once __DIR__.'/../controllers/UsersController.php';
require_once __DIR__.'/../controllers/QuestionsController.php';
require_once __DIR__.'/../controllers/AnswersController.php';
require_once __DIR__.'/../controllers/PublicAndDownloadController.php';

$this->respond('GET', '/users/', '\Ydm\UsersController::index');
$this->respond('GET', '/users/[*:uuid]/result/', '\Ydm\UsersController::result');
$this->respond('GET', '/questions/', '\Ydm\QuestionsController::index');
$this->respond('GET', '/questions/add/', '\Ydm\QuestionsController::add');
$this->respond('GET', '/questions/add/dimension/', '\Ydm\QuestionsController::addDimension');
$this->respond('GET', '/questions/add/dimension/sub/', '\Ydm\QuestionsController::addSubDimension');
$this->respond('GET', '/questions/remove/', '\Ydm\QuestionsController::remove');
$this->respond('GET', '/answers/[*:uuid]/all/', '\Ydm\AnswersController::all');
$this->respond('GET', '/answers/[*:uuid]/add/', '\Ydm\AnswersController::add');
$this->respond('GET', '/answers/[*:uuid]/all/institute/', '\Ydm\AnswersController::allInstitute');
$this->respond('GET', '/answers/[*:uuid]/add/institute/', '\Ydm\AnswersController::addInstitute');


$this->respond('GET', '/download/', '\Ydm\PublicAndDownloadController::download');
$this->respond('GET', '/public/[*:type]/[*:name]', '\Ydm\PublicAndDownloadController::public');