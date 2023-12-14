<?php

namespace App\Utilities;

class Pagination
{
    private $itemsPerPage;
    private $currentPage;

    public function __construct($itemsPerPage, $currentPage)
    {
        $this->itemsPerPage = $itemsPerPage;
        $this->currentPage = $currentPage;
    }

    public function getItemsPerPage()
    {
        return $this->itemsPerPage;
    }

    public function getCurrentPage()
    {
        return $this->currentPage;
    }
}
