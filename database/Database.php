<?php

namespace App\Database;

use PDO;
use PDOException;

class Database
{

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    private $host = $_ENV['DB_HOST'];
    private $user = $_ENV['DB_USERNAME'];
    private $pass = $_ENV['DB_DATABASE'];
    private $dbname = $_ENV['DB_NAME'];
    private $charset = 'utf8mb4';

    public function __construct()
    {
        // Set DSN
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname . ';charset=utf8mb4';

        // Set options
        $options = 
        [
            PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION,
        ];

        // Create a new PDO instance
        try {
            $this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
            // echo "Connected successfully";
        } catch (PDOException $e) {
            $this->error = $e->getMessage();
            echo $this->error;
        }

    }

    public function getConnection()
    {
        return $this->dbh;
    }
}