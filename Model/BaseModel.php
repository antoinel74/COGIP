<?php

namespace App\Model;

use App\Database\Database;


class BaseModel
{
    protected $connection;

    public function getConnection()
    {
        // Instancier la classe Database et appeler la méthode connect() au moment de la demande
        $database = Database::getInstance();
        $this->connection = $database->getConnection();

        return $this->connection;
    }
}
