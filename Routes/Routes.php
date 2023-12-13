<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\WelcomeController;
use App\Controllers\InvoicesController;
use App\Controllers\ContactsController;
use App\Controllers\CompaniesController;
use App\Controllers\ShowController;

$router = new Router();

// Créez les instances des contrôleurs au début
$welcomeController = new WelcomeController();
$invoicesController = new InvoicesController();
$contactsController = new ContactsController();
$companiesController = new CompaniesController();
$showController = new ShowController();

$router->get('/', function () use ($welcomeController) {
    $welcomeController->getFirstFiveCompanies();
    $welcomeController->getFirstFiveInvoices();
    $welcomeController->getFirstFiveContacts();
});

$router->get('/invoices', function () use ($invoicesController) {
    $invoicesController->getAllInvoices();
});

$router->get('/invoices/(\d+)', function ($id) use ($invoicesController) {
    $invoicesController->getInvoice($id);
});

$router->post('/invoices', function () use ($invoicesController) {
    $data = json_decode(file_get_contents('php://input'), true);
    $invoicesController->createInvoice($data);
});

$router->get('/contacts', function () use ($contactsController) {
    $contactsController->getAllContacts();
});

$router->get('/contacts/(\d+)', function ($id) use ($contactsController) {
    $contactsController->getContact($id);
});

$router->post('/contacts', function () use ($contactsController) {
    $data = json_decode(file_get_contents('php://input'), true);
    $contactsController->createContact($data);
});

$router->get('/companies', function () use ($companiesController) {
    $companiesController->getAllCompanies();
});

$router->get('/companies/(\d+)', function ($id) use ($companiesController) {
    $companiesController->getCompany($id);
});

$router->post('/companies', function () use ($companiesController) {
    $data = json_decode(file_get_contents('php://input'), true);
    $companiesController->createCompany($data);
});

$router->get('/companies/(\d+)/show', function ($id) use ($showController) {
    $showController->getCompaniesById($id);
    $showController->getFirstFiveInvoices();
    $showController->getFirstFiveContacts();
});

$router->run();
