<?php
include('config.php');

if(isset($_POST['submit'])){
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "INSERT INTO uesrs (`username`, `password`, `date_time`) VALUES ('$username', '$password', current_timestamp())";

    if(mysqli_query($conn, $sql)){
        header("Location: index.php");
    }
    else{
        die("Data not inserted");
    }
}
?>