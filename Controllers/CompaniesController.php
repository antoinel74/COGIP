<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\CompaniesModel;

class CompaniesController extends Controller
{
    private $CompaniesModel;

    public function __construct()
    {
        $this->CompaniesModel = new CompaniesModel;
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
        $this->CompaniesModel->getCompanieslastFive();
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
