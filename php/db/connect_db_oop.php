<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "prayosha_db";

// $port = 3306;
// $socket = "";

$con = new mysqli($hostname, $username, $password, $dbname);

if($con->connect_error){
    die("Connection failed: ". $con->connect_error);
}
else{
    echo "Connection successful.";
}

?>