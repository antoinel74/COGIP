<?php

declare(strict_types=1);

namespace App\Model;

use App\Model\BaseModel;
use App\Database\Database;
use PDO;
use Exception;

class CompaniesModel extends BaseModel
{
    protected $connection;

    public function __construct()
    {
        $this->connection = (new Database())->connect();
    }
    
    public function getAllCompanies()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM companies");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            $this->handleError('Error fetching all companies', $e);
        }
    }

    public function getFirstFiveCompanies()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM companies LIMIT 5");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            echo $e->getMessage();
        }    }

    public function getCompanyById($id)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM companies WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            $this->handleError('Error fetching company by ID', $e);
        }
    }

    private function handleError($message, Exception $exception)
    {
        throw new Exception($message . ': ' . $exception->getMessage());
    }

    private function encodeToJson($data)
    {
        header('Content-Type: application/json');
        return json_encode($data);
    }

    public function createCompany($data)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO companies (name, address, city, country, email, phone) VALUES (:name, :address, :city, :country, :email, :phone)");
            $stmt->bindParam(':name', $data['name']);
            $stmt->bindParam(':address', $data['address']);
            $stmt->bindParam(':city', $data['city']);
            $stmt->bindParam(':country', $data['country']);
            $stmt->bindParam(':email', $data['email']);
            $stmt->bindParam(':phone', $data['phone']);
            $stmt->execute();
            return $this->encodeToJson($data);
        } catch (Exception $e) {
            $this->handleError('Error creating company', $e);
        }
    }
}
