<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\companies;
use App\Model\invoices;
use App\Model\contacts;
use PDO;

class WelcomeController

{
    public function getFirstFiveCompanies();
    {
        $this->companiesModel->getFirstFiveCompanies();
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