<?php 
include('config.php');

if(isset($_GET['id']) && $_GET['action'] === "delete"){
    $id = mysqli_real_escape_string($conn, $_GET['id']);
    $sql = "DELETE FROM uesrs WHERE id=$id";

    if(mysqli_query($conn, $sql)){
        header("Location: index.php");
    }
    else{
        die("Error deleting data");
    }
}
?>