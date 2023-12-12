<?php

declare(strict_types=1);

namespace App\Model;   

use App\Model\BaseModel;
use PDO;
use Exception;

class InvoicesModel
{
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
            $stmt = $this->connection->prepare("SELECT * FROM invoices  LIMIT 3");
            $stmt->execute();
            $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($invoices);
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
}