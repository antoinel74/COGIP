<?php

declare(strict_types=1);

namespace App\Model;

use App\Model\BaseModel;
use PDO;
use Exception;

class ContactsModel extends BaseModel
{
    public function getAllContacts()
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT contacts.*, companies.name AS company_name 
            FROM contacts 
            INNER JOIN companies ON contacts.company_id = companies.id
            LIMIT :limit OFFSET :offset");
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
            $stmt = $this->getConnection()->prepare("SELECT contacts.*, companies.name AS company_name 
            FROM contacts 
            INNER JOIN companies ON contacts.company_id = companies.id
            ORDER BY id DESC LIMIT 5");
            $stmt->execute();
            $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $contacts = array('Last contacts' => $contacts);
            header('Content-Type: application/json');
            echo json_encode($contacts, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }        
    }

    public function getContactById($id)
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT contacts.*, companies.name AS company_name 
            FROM contacts 
            INNER JOIN companies ON contacts.company_id = companies.id
            WHERE contacts.id = :id");
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
