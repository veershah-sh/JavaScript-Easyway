<?php

session_start();
include('config.php');
$login_error = '';
// Check if the admin is already logged in
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header("location:index.php");
    die();
}

if (isset($_POST["submit"])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * FROM uesrs WHERE username = '$username' and password = '$password'";
    $result = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($result);

    if ($count > 0) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['admin_logged_in'] = true;
        header("location:index.php");
        die();
    } else {
        $login_error = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form method="post">
        Username: <input type="text" name="username" placeholder="Enter username..."> <br><br>
        Password: <input type="password" name="password" placeholder="Enter password..."><br><br>
        <?php echo $login_error; ?>
        <button type="submit" name="submit">Login</button>
    </form>
</body>
</html>