<?php

declare(strict_types=1);

namespace App\Model;

use App\Database;

class Invoices
{
    private $id_invoices;
    private $ref;
    private $id_compagnies;
    private $created_at;
    private $updated_at;
    private $due_date;

    public function __construct(int $id_invoices, string $ref, int $id_compagnies, string $created_at, string $updated_at, string $due_date)
    {
        $this->id_invoices = $id_invoices;
        $this->ref = $ref;
        $this->id_compagnies = $id_compagnies;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
        $this->due_date = $due_date;
    }

    public function getId(): int
    {
        return $this->id_invoices;
    }

    public function getRef(): string
    {
        return $this->ref;
    }

    public function getIdCompagnies(): int
    {
        return $this->id_compagnies;
    }

    public function getCreatedAt(): string
    {
        return $this->created_at;
    }

    public function getUpdatedAt(): string
    {
        return $this->updated_at;
    }

    public function getDueDate(): string
    {
        return $this->due_date;
    }
}