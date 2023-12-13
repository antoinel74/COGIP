<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\ContactsModel;
use PDO;

class ContactsController extends Controller
{
    private $contactsModel;

    public function __construct()
    {
        $this->contactsModel = new ContactsModel;
    }

    public function getAllContacts()
    {
        $this->contactsModel->getAllContacts();
    }

    public function getContactById($id)
    {
        $this->contactsModel->getContactById($id);
    }

    public function getFirstFiveContacts()
    {
        $this->contactsModel->getFirstFiveContacts();
    }

    public function createContact($data)
    {
        $this->contactsModel->createContact($data);
    }

    public function updateContact($data)
    {
        $this->contactsModel->updateContact($data);
    }

    public function deleteContact($id)
    {
        $this->contactsModel->deleteContact($id);
    }
}