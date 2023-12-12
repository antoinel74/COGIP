<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use PDO;
use Exception;

class ContactsModel
{
    
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
                $stmt = $this->connection->prepare("SELECT * FROM contacts  LIMIT 3");
                $stmt->execute();
                $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
                header('Content-Type: application/json');
                echo json_encode($contacts);
            } catch (Exception $e) {
                echo $e->getMessage();
            }
        }

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
}