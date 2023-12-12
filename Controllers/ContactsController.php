<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\ContactsModel;

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

    public function getContact($id)
    {
        $this->contactsModel->getContact($id);
    }

    public function getContactsLastFive()
    {
        $this->contactsModel->getContactsLastFive();
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