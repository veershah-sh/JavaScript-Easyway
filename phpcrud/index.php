<?php
session_start();
include('config.php');
if (!isset($_SESSION['admin_logged_in'])) {
    header("location:login.php");
    die();
}
setcookie("demo", "test", time() + (86400 * 7), "/");
$sql = "SELECT * FROM uesrs";

$res = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="navbar">
        <div class="logo">Test Admin</div>
        <div class="navlist">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="add_data.php">Add User</a></li>
            <li class="nav-item"><a href="users.php">Users</a></li>
            <li class="nav-item"><a href="logout.php">Logout</a></li>
        </div>
    </div>
    <h1>Users Data</h1>

    <?php 
        if(isset($_COOKIE['demo'])){
            echo $_COOKIE['demo'];
        }
    ?>

    <table border="1">
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Time Stamp</th>
            <th>Actions</th>
        </tr>

        <?php 
            while($row = mysqli_fetch_assoc($res)){
                echo "<tr>";
                echo "<td>".$row['id']."</td>";
                echo "<td>".$row['username']."</td>";
                echo "<td>".$row['password']."</td>";
                echo "<td>".$row['date_time']."</td>";
                echo "<td><a href='edit_data.php?id=" . $row["id"] . "'>Edit</a> |  <a href='delete_data.php?id=". $row["id"] ."&action=delete'>Delete</a></td>";
                echo "</tr>";
            }
        ?>
    </table>
</body>

</html>
