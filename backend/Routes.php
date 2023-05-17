<?php

use Lib\RouterAbstract;

class Rotas extends RoteadorAbstract
{
    public function __construct()
    {

        //Rotas de Pessoa
        $this->adicionarRota('GET', '/pessoas', \Src\Controller\PeopleController::class, 'index');
        $this->adicionarRota('GET', '/pessoas/{id}', \Src\Controller\PeopleController::class, 'show');
        $this->adicionarRota('POST', '/pessoas', \Src\Controller\PeopleController::class, 'store');
        $this->adicionarRota('PUT', '/pessoas/{id}', \Src\Controller\PeopleController::class, 'update');
        $this->adicionarRota('DELETE', '/pessoas/{id}', \Src\Controller\PeopleController::class, 'destroy');
    }
}
