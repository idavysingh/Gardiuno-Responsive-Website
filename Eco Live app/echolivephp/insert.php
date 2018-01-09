<?php
$servername 	= "localhost";
$username 		= "root";
$password 		= "root";
$dbname 		= "ecolive";

$humidity		= $_POST['humidity'];
$moisture		= $_POST['moisture'];
$light			= $_POST['light'];
$water			= $_POST['water'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO live_data (humidity,	moisture,	light,	water) VALUES ($humidity,	$moisture,	$light,	$water)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>