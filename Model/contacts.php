<?php

declare(strict_types=1);

namespace App\Model;

use App\Database;

class Contacts
{  
    private $id_contacts;
    private $name;
    private $company_id;
    private $email;
    private $phone;
    private $created_at;
    private $updated_at;

    public function __construct(int $id_contacts, string $name, string $company_id, string $email, string $phone, string $created_at, string $updated_at)
    {
        $this->id_contacts = $id_contacts;
        $this->name = $name;
        $this->firstname = $company_id;
        $this->email = $email;
        $this->phone = $phone;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }

    public function getId(): int
    {
        return $this->id_contacts;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function getEmail(): string
    {
        return $this->email;
    }
    
    public function getPhone(): string
    {
        return $this->phone;
    }

    public function getCreatedAt(): string
    {
        return $this->created_at;
    }

    public function getUpdatedAt(): string
    {
        return $this->updated_at;
    }
}