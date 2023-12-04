<?php

require __DIR__ . '/backend/vendor/autoload.php';

use App\Core\Database;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/backend');
$dotenv->load();

$db = new Database();

try {
    $connection = $db->connect();
    echo 'Connected successfully to the database.';
} catch (\PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
