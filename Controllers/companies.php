<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\Companies;

class CompaniesController extends Controller
{
    private $companiesModel;

    public function __construct()
    {
        $this->companiesModel = new Companies;
    }

    public function getAllCompanies()
    {
        $this->companiesModel->getAllCompanies();
    }

    public function getCompany($id)
    {
        $this->companiesModel->getCompany($id);
    }
    
    public function getCompanieslastFive()
    {
        $this->companiesModel->getCompanieslastFive();
    }

    public function createCompany($data)
    {
        $this->companiesModel->createCompany($data);
    }

    public function updateCompany($data)
    {
        $this->companiesModel->updateCompany($data);
    }

    public function deleteCompany($id)
    {
        $this->companiesModel->deleteCompany($id);
    }
}
