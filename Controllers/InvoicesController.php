<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\InvoicesModel;

class InvoicesController extends Controller
{
    private $invoicesModel;

    public function __construct()
    {
        $this->invoicesModel = new InvoicesModel;
    }

    public function getAllInvoices()
    {
        $this->invoicesModel->getAllInvoices();
    }

    public function getInvoice($id)
    {
        $this->invoicesModel->getInvoice($id);
    }

    public function getInvoicesLastFive()
    {
        $this->invoicesModel->getInvoicesLastFive();
    }

    public function createInvoice($data)
    {
        $this->invoicesModel->createInvoice($data);
    }

    public function updateInvoice($data)
    {
        $this->invoicesModel->updateInvoice($data);
    }

    public function deleteInvoice($id)
    {
        $this->invoicesModel->deleteInvoice($id);
    }
}