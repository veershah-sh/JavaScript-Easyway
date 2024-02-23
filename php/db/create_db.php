<?php
$hostname = "localhost";
$username = "root";
$password = "";

$conn = mysqli_connect($hostname,$username,$password);

$query = "CREATE DATABASE abc_db";

$res = mysqli_query($conn, $query);

if($res){
    echo "Database Created";
}
else{
    die("Query error: ". mysqli_connect_error());
}
?>