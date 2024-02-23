<?php
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "abc_db";

$conn = mysqli_connect($hostname,$username,$password,$dbname);

$query = "INSERT INTO users(`id`, `name`, `email`, `phno`, `password`) VALUES(4, 'test1', 'test1@google.com', '+919874563210', '12345')";

$res = mysqli_query($conn, $query);

if($res){
    echo "Record inserted...";
}
else{
    die("Query error: ". mysqli_connect_error());
}
?>