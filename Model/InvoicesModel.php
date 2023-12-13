<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use App\Database\Database;
use PDO;
use Exception;

class InvoicesModel
{
    protected $connection;

    public function __construct()
    {
        $this->connection = (new Database())->connect();
    }

    public function getAllInvoices()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM invoices");
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
            $stmt = $this->connection->prepare("SELECT * FROM invoices LIMIT 5");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getInvoiceById($id)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM invoices WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $invoice = $stmt->fetch(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($invoice);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function getInvoicesOneCompany($id)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM invoices WHERE company_id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $invoice = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($invoice);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    
    public function createInvoice($data)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO invoices (company_id, number, date, supply_date, comment) VALUES (:company_id, :number, :date, :supply_date, :comment)");
            $stmt->bindParam(':company_id', $data['company_id']);
            $stmt->bindParam(':number', $data['number']);
            $stmt->bindParam(':date', $data['date']);
            $stmt->bindParam(':supply_date', $data['supply_date']);
            $stmt->bindParam(':comment', $data['comment']);
            $stmt->execute();
            header('Content-Type: application/json');
            echo json_encode($data);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

}