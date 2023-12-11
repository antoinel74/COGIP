<?php

declare(strict_types=1);

namespace App\Model;

use App\Database;

class Welcome
{
    // last 5 invoices
    private $id_invoices;
    private $ref;
    private $id_compagnies;
    private $invoices_created_at;
    private $invoices_updated_at;
    private $due_date;

    // last 5 contacts
    private $id_contacts;
    private $name_contacts;
    private $company_id;
    private $email;
    private $phone;
    private $contacts_created_at;
    private $contacts_updated_at;

    // last 5 compagnies
    private $id_compagnies;
    private $name_compagnies;
    private $type_id;
    private $country;
    private $tva;
    private $compagnies_created_at;
    private $compagnies_updated_at;

    public function __construct(
        int $id_invoices,
        string $ref,
        int $id_compagnies,
        string $invoices_created_at,
        string $invoices_updated_at,
        string $due_date,
        int $id_contacts,
        string $name_contacts,
        int $company_id,
        string $email,
        string $phone,
        string $contacts_created_at,
        string $contacts_updated_at,
        int $id_compagnies,
        string $name_compagnies,
        int $type_id,
        string $country,
        string $tva,
        string $compagnies_created_at,
        string $compagnies_updated_at
    ) {
        $this->id_invoices = $id_invoices;
        $this->ref = $ref;
        $this->id_compagnies = $id_compagnies;
        $this->invoices_created_at = $invoices_created_at;
        $this->invoices_updated_at = $invoices_updated_at;
        $this->due_date = $due_date;
        $this->id_contacts = $id_contacts;
        $this->name_contacts = $name_contacts;
        $this->company_id = $company_id;
        $this->email = $email;
        $this->phone = $phone;
        $this->contacts_created_at = $contacts_created_at;
        $this->contacts_updated_at = $contacts_updated_at;
        $this->id_compagnies = $id_compagnies;
        $this->name_compagnies = $name_compagnies;
        $this->type_id = $type_id;
        $this->country = $country;
        $this->tva = $tva;
        $this->compagnies_created_at = $compagnies_created_at;
        $this->compagnies_updated_at = $compagnies_updated_at;
    }

    // 3 last contacts

    public function get3lastContacts(): array
    {
        $db = new Database();
        $query = "SELECT contacts.*, companies.name AS company_name 
        FROM contacts 
        INNER JOIN companies ON contacts.company_id = companies.id;
        ORDER BY id_contacts DESC LIMIT 3";
        return $db->query($sql, []);
    }

    // 3 last compagnies

    public function get3lastCompagnies(): array
    {
        $db = new Database();
        $sql  = "SELECT companies.*, types.name AS type_name 
                FROM companies 
                INNER JOIN types ON companies.type_id = types.id;
                ORDER BY id_compagnies DESC LIMIT 3";
        return $db->query($sql, []);
    }

    // 3 last invoices

    public function get5lastInvoices(): array
    {
        $db = new Database();
        $sql  = "SELECT companies.*, types.name AS type_name 
        FROM companies 
        INNER JOIN companies ON contacts.id_company = companies.id;
        ORDER BY id_invoices DESC LIMIT 3";
        return $db->query($sql, []);
    }
}





    




    
