<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "prayosha_db";

// $port = 3306;
// $socket = "";

$con = mysqli_connect($hostname, $username, $password, $dbname);

if(!$con){
    die("Connection failed: ". mysqli_connect_error());
}
else{
    echo "Connection successful.";
}

?>
