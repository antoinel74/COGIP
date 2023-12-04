<!-- 

namespace App\Controllers;

use App\Core\Controller;

class HomeController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        return $this->view('welcome',["name" => "Cogip"]);
    }
} -->

<?php
declare(strict_types = 1);

class HomepageController 
{
    public function index()
    {
        // TODO: Préparez la connexion à la base de données (vous pouvez utiliser PDO, par exemple)
        require './queries/connectDb.php';
        $pdo = connectDb();
        
        // TODO: Remplacez la requête suivante par une requête SQL réelle pour récupérer les articles depuis la base de données
        $statement = $pdo->prepare("SELECT cogip.compagnies FROM cogip");
        $statement->execute();
    
        // Récupérez tous les articles sous forme de tableau associatif
        $rawArticles = $statement->fetchAll(PDO::FETCH_ASSOC);
    
        $Compagnies = [];
        foreach ($rawCompagnies as $rawCompagnies) {
            $Compagnies[] = new Article($rawCompagnies['id_article'], $rawCompagnies['title'], $rawCompagnies['description_article'], $rawCompagnies['publish_date'], $rawCompagnies['Author_Name']);
        }
    
        require 'View/home.php';
        // return $this->view('home',["compagnies" => $compagnies]);
    }
}