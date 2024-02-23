<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "abc_db";

$conn = mysqli_connect($hostname,$username,$password,$dbname);

$query = "CREATE TABLE users(
    id int,
    name varchar(20),
    email varchar(50),
    phno varchar(15),
    password varchar(20)
)";

$res = mysqli_query($conn, $query);

if($res){
    echo "Table Created";
}
else{
    die("Query error: ". mysqli_connect_error());
}
?>