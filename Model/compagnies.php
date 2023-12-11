<?php

declare(strict_types=1);

namespace App\Model;   

use App\Database;

class Compagnies
{
    private $id_compagnies;
    private $name;
    private $type_id;
    private $tva;
    private $created_at;
    private $updated_at;

    public function __construct(int $id_compagnies, string $name, int $type_id, string $tva, string $created_at, string $updated_at)
    {
        $this->id_compagnies = $id_compagnies;
        $this->name = $name;
        $this->type_id = $type_id;
        $this->tva = $tva;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    }

    public function getId(): int
    {
        return $this->id_compagnies;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getTypeId(): int
    {
        return $this->type_id;
    }

    public function getTva(): string
    {
        return $this->tva;
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



