<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use App\Database\Database;
use PDO;
use Exception;

class ContactsModel
{
    protected $connection;

    public function __construct()
    {
        $this->connection = (new Database())->connect();
    }
        
        public function getAllContacts()
        {
            try {
                $stmt = $this->connection->prepare("SELECT * FROM contacts");
                $stmt->execute();
                $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
                header('Content-Type: application/json');
                echo json_encode($contacts);
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
    
        public function getFirstFiveContacts()
        {
            try {
                $stmt = $this->connection->prepare("SELECT * FROM contacts LIMIT 5");
                $stmt->execute();
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } catch (Exception $e) {
                echo $e->getMessage();
            }        }

        public function getContactById($id)
        {
            try {
                $stmt = $this->connection->prepare("SELECT * FROM contacts WHERE id = :id");
                $stmt->bindParam(':id', $id);
                $stmt->execute();
                $contact = $stmt->fetch(PDO::FETCH_ASSOC);
                header('Content-Type: application/json');
                echo json_encode($contact);
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }

        public function createContact($data)
        {
            try {
                $stmt = $this->connection->prepare("INSERT INTO contacts (first_name, last_name, email, phone, company_id) VALUES (:first_name, :last_name, :email, :phone, :company_id)");
                $stmt->bindParam(':first_name', $data['first_name']);
                $stmt->bindParam(':last_name', $data['last_name']);
                $stmt->bindParam(':email', $data['email']);
                $stmt->bindParam(':phone', $data['phone']);
                $stmt->bindParam(':company_id', $data['company_id']);
                $stmt->execute();
                header('Content-Type: application/json');
                echo json_encode(['message' => 'Contact created']);
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }
}