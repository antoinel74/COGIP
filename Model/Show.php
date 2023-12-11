<?php

declare(strict_types=1);

namespace App\Model;

use App\Database;

class Show
{

    // one comapny

    private $id_compagnies;
    private $name_compagnies;
    private $type_id;
    private $tva;
    private $compagnies_created_at;
    private $compagnies_updated_at;

    // all contacts from this company

    private $id_contacts;
    private $name_contacts;
    private $firstname;
    private $email;
    private $phone;
    private $contacts_created_at;
    private $contacts_updated_at;

    // all invoices from this company

    private $id_invoices;
    private $ref;
    private $id_compagnies;
    private $invoices_created_at;
    private $invoices_updated_at;
    private $due_date;

