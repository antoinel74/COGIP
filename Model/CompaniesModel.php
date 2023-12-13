<?php

declare(strict_types=1);

namespace App\Model;

use App\Model\BaseModel;
use PDO;
use Exception;

class CompaniesModel extends BaseModel
{
    
    public function getAllCompanies()
    {
        try {
            $stmt = $this->connection->prepare("SELECT companies.*, types.name AS type_name 
            FROM companies 
            INNER JOIN types ON companies.type_id = types.id
            LIMIT :limit OFFSET :offset");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getFirstFiveCompanies()
    {
        try {
            $connection = $this->getConnection();
            $stmt = $this->connection->prepare("SELECT companies.*, types.name AS type_name
            FROM companies
            INNER JOIN types ON companies.type_id = types.id
            ORDER BY id DESC LIMIT 5");
            $stmt->execute();
            $companies = $stmt->fetchAll(PDO::FETCH_ASSOC); 
            $companies = array('Last companies' => $companies);
            header('Content-Type: application/json');
            echo json_encode($companies, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }


    public function getCompanyById($id)
    {
        try {
            $stmt = $this->connection->prepare("SELECT companies.*, types.name AS type_name 
            FROM companies 
            INNER JOIN types ON companies.type_id = types.id 
            WHERE companies.id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
