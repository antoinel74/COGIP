<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\CompaniesModel;
use App\Model\InvoicesModel;
use App\Model\ContactsModel;
use PDO;


class ShowController extends Controller
{
    private $companiesModel;
    private $invoicesModel;
    private $contactsModel;

    public function __construct()
    {
        $this->companiesModel = new CompaniesModel;
        $this->invoicesModel = new InvoicesModel;
        $this->contactsModel = new ContactsModel;
    }
    
    public function getCompany($id)
    {
        $this->companiesModel->getCompany($id);
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