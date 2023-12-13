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
            ORDER BY id DESC");
            $stmt->execute();
            $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $contacts = array('All_Contacts' => $contacts);
            header('Content-Type: application/json');
            echo json_encode($contacts, JSON_PRETTY_PRINT);
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
            $contacts = array('Contacts by companies' => $contacts);
            header('Content-Type: application/json');
            echo json_encode($contacts, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }        
    }

    public function getContactsbycompagnies()
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT contacts.*, companies.name AS company_name 
            FROM contacts 
            INNER JOIN companies ON contacts.company_id = companies.id
            ORDER BY companies.name ASC");
            $stmt->execute();
            $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $contacts = array('Contacts by companies' => $contacts);
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
            WHERE contacts.id = :id
            ORDER BY id DESC LIMIT 5");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $contacts = array('Contact' => $contacts);
            header('Content-Type: application/json');
            echo json_encode($contacts, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getCompanyContacts()
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT contacts.*, companies.name AS company_name 
            FROM contacts 
            INNER JOIN companies ON contacts.company_id = companies.id
            ORDER BY companies.name ASC");
            $stmt->execute();
            $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $contacts = array('Contacts by companies' => $contacts);
            header('Content-Type: application/json');
            echo json_encode($contacts, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }        
    }
}
