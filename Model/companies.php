<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use PDO;
use Exception;

class Companies extends BaseModel
{

    public function getAllCompanies()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM companies");
            $stmt->execute();
            $companies = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($companies);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getFirstFiveCompanies()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM companies  LIMIT 3");
            $stmt->execute();
            $companies = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($companies);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}