<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/Core/Helper.php';
require_once __DIR__.'/Routes/Routes.php';

<?php

declare(strict_types=1);

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

//include all your model files here
require 'Model/Article.php';
//include all your controllers here
require 'Controller/HomepageController.php';

// Get the current page to load
// If nothing is specified, it will remain empty (home should be loaded)
$page = $_GET['page'] ?? null;

// Load the controller
// It will *control* the rest of the work to load the page
switch ($page) {
    case 'home':
        (new HomeController())->index();
        break;

}