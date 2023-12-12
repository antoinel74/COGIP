<?php

namespace App\Model;

use App\Database;


class BaseModel
{
    protected $connection;

    public function __construct()
    {
        $this->connection = Database::getConnection();
    }
}