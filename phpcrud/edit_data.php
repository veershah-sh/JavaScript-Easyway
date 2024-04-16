<?php 
include('config.php');

if(isset($_GET['id'])){
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    $sql = "SELECT * FROM uesrs WHERE id = $id";
    $res = mysqli_query($conn, $sql);
    $row = mysqli_num_rows($res);
    if($row == 1){
        $data = mysqli_fetch_assoc($res);
        $username = $data['username'];
        $password = $data['password'];
    }
}

if(isset($_POST['submit'])){
    $user = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "UPDATE uesrs SET username='$user', password='$pass' WHERE id = $id";

    if(mysqli_query($conn, $sql)){
        header("Location: index.php");
    }
    else{
        die("Error updating data");
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Data</title>
</head>
<body>
    <form method="post">
        <input type="text" name="username" placeholder="Enter username..." value=<?php echo $username;?>>
        <br><br>
        <input type="text" name="password" placeholder="Enter password..." value=<?php echo $password;?>>
        <br><br>
        <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>