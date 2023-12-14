<?php

namespace App\Utilities;

use InvalidArgumentException;

class Pagination
{
    private $itemsPerPage;
    private $currentPage;

    public function __construct($itemsPerPage, $currentPage)
    {
        if (!is_int($itemsPerPage) || !is_int($currentPage) || $itemsPerPage <= 0 || $currentPage <= 0) {
            throw new InvalidArgumentException("Invalid pagination parameters.");
        }

        $this->itemsPerPage = $itemsPerPage;
        $this->currentPage = $currentPage;
    }

    public function getItemsPerPage()
    {
        return $this->itemsPerPage;
    }

    public function getCurrentPage()
    {
        // Assurez-vous que la page actuelle n'est jamais inférieure à 1
        return max(1, $this->currentPage);
    }

    public function getTotalPages($totalItems)
    {
        return ceil($totalItems / $this->itemsPerPage);
    }

    public function getLimitClause()
    {
        $offset = ($this->currentPage - 1) * $this->itemsPerPage;
        return "LIMIT $offset, {$this->itemsPerPage}";
    }
}