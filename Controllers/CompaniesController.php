<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Model\CompaniesModel;

class CompaniesController extends Controller
{
    private $companiesModel;

    public function __construct()
    {
        $this->companiesModel = new CompaniesModel;
    }

    public function getAllCompanies()
    {
        $this->companiesModel->getAllCompanies();
    }

    public function getCompanyById($id)
    {
        $this->companiesModel->getCompanyById($id);
    }
    
    public function getFirstFiveCompanies()
    {
        $this->companiesModel->getFirstFiveCompanies();
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
