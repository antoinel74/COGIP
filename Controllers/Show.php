<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\companies;
use App\Model\invoices;
use App\Model\contacts;
use PDO;


class ShowController extends Controller
{
    private $companiesModel;
    private $invoicesModel;
    private $contactsModel;

    public function __construct()
    {
        $this->companiesModel = new Companies;
        $this->invoicesModel = new Invoices;
        $this->contactsModel = new Contacts;
    }

    public function getCompaniesById()
    {
        $this->companiesModel->getCompaniesById();
    }

    public function getFirstFiveInvoices()
    {
        $this->invoicesModel->getFirstFiveInvoices();
    }

    public function getFirstFiveContacts()
    {
        $this->contactsModel->getFirstFiveContacts();
    }
}