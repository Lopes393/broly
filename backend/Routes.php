<?php

require_once 'Lib/RouterAbstract.php';

class Routes extends RouterAbstract
{
    public function __construct()
    {
        $this->adicionarRota('POST', '/feedback', \Src\Controller\FeedbackController::class, 'store');
    }
}
