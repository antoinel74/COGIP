<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use PDO;
use Exception;

class InvoicesModel extends BaseModel{

    public function getAllInvoices()
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT invoices.*, companies.name AS company_name 
            FROM invoices 
            INNER JOIN companies ON invoices.id_company = companies.id 
            ORDER BY invoices.id 
            LIMIT :limit OFFSET :offset");
            $stmt->execute();
            $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($invoices);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getFirstFiveInvoices()
    {
        try {
            $stmt = $this->getConnection()->prepare("SELECT invoices.*, companies.name AS company_name 
            FROM invoices 
            INNER JOIN companies ON invoices.id_company = companies.id
            ORDER BY id DESC LIMIT 5");
            $stmt->execute();
            $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $invoices = array('Last invoices' => $invoices);
            header('Content-Type: application/json');
            echo json_encode($invoices, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getInvoiceById($id)
    {
        try {
            $stmt = $this->connection->prepare("SELECT invoices.*, companies.name AS company_name 
            FROM invoices 
            INNER JOIN companies ON invoices.id_company = companies.id 
            WHERE invoices.id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $invoices = $stmt->fetch(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($invoices, JSON_PRETTY_PRINT);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    // public function createInvoice($data) {
    //     $query = "INSERT INTO invoices (ref, id_company, created_at, updated_at, due_date) VALUES (:ref, :id_company, NOW(), NOW())";
    //     $stmt = $this->db->prepare($query);
    //     $stmt->bindParam(':ref', $data['ref']);
    //     $stmt->bindParam(':id_company', $data['id_company'], PDO::PARAM_INT);
    //     $stmt->execute();
    //     return $this->db->lastInsertId();
    // }

    // public function updateInvoice($id, $data) {
    //     $query = "UPDATE invoices SET ref = :ref, id_company = :id_company, updated_at, due_date = NOW() WHERE id = :id";
    //     $stmt = $this->db->prepare($query);
    //     $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    //     $stmt->bindParam(':ref', $data['ref']);
    //     $stmt->bindParam(':id_company', $data['id_company'], PDO::PARAM_INT);
    //     $stmt->execute();
    //     return $stmt->rowCount();
    // }

    // public function deleteInvoice($id) {
    //     $query = "DELETE FROM invoices WHERE id = :id";
    //     $stmt = $this->db->prepare($query);
    //     $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    //     $stmt->execute();
    //     return $stmt->rowCount();
    // }

    // public function getInvoicesOneCompany($id)
    // {
    //     try {
    //         $stmt = $this->connection->prepare("SELECT * FROM invoices WHERE company_id = :id");
    //         $stmt->bindParam(':id', $id);
    //         $stmt->execute();
    //         $invoice = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //         header('Content-Type: application/json');
    //         echo json_encode($invoice);
    //     } catch (Exception $e) {
    //         echo $e->getMessage();
    //     }
    // }
    
    // public function createInvoice($data)
    // {
    //     try {
    //         $stmt = $this->connection->prepare("INSERT INTO invoices (company_id, number, date, supply_date, comment) VALUES (:company_id, :number, :date, :supply_date, :comment)");
    //         $stmt->bindParam(':company_id', $data['company_id']);
    //         $stmt->bindParam(':number', $data['number']);
    //         $stmt->bindParam(':date', $data['date']);
    //         $stmt->bindParam(':supply_date', $data['supply_date']);
    //         $stmt->bindParam(':comment', $data['comment']);
    //         $stmt->execute();
    //         header('Content-Type: application/json');
    //         echo json_encode($data);
    //     } catch (Exception $e) {
    //         echo $e->getMessage();
    //     }
    // }

}