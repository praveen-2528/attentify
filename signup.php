<?php

// Connect to database
$servername = "sql307.byetcluster.com"; // Replace with your actual server name if different
$username = "ezyro_35806009";
$password = "Manusha@5";
$dbname = "ezyro_35806009_attentify";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// If form is submitted
if (isset($_POST['submit'])) {
    // Retrieve input data
    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $college = $_POST['college'];
    $year = $_POST['year'];
    $branch = $_POST['branch'];
    $section = $_POST['section'];
    $roll_number = $_POST['roll_number'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate data (e.g., check for empty fields, valid email format)
    // ...

    // Hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into database
    $sql = "INSERT INTO attentify (name, dob, college, year, branch, section, roll_number, phone_number, email, password)
            VALUES ('$name', '$dob', '$college', '$year', '$branch', '$section', '$roll_number', '$phone_number', '$email', '$hashed_password')";

if (mysqli_query($conn, $sql)) {
    // Success
    header("Location: success.php"); // Redirect to success page
    exit();
    } else {
        // Failure
        echo "Registration failed!";
    }
} else {
    // Display signup form (your existing HTML code will be displayed here)
}

mysqli_close($conn);

?>
