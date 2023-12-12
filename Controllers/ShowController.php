<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\CompaniesModel;
use App\Model\InvoicesModel;
use App\Model\ContactsModel;
use PDO;


class ShowController extends Controller
{
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