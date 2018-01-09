<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$servername 	= "localhost";
$username 		= "root";
$password 		= "root";
$dbname 		= "ecolive";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * from live_data WHERE id > 0 ORDER BY id DESC LIMIT 1";

$result = $conn->query($sql);

$humidity		= array("Employee"=>"Humidity","color"=>"#388d2e");
$light          = array("Employee"=>"Light","color"=>"#c5c829");
$water          = array("Employee"=>"Water","color"=>"#354d82");
$moisture		= array("Employee"=>"Moisture","color"=>"#6d4430");



if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
		$humidity['Salary'] = $row["humidity"];
		$moisture['Salary'] = $row["moisture"];
		$light['Salary'] = $row["light"];
		$water['Salary'] = $row["water"];
    }
} else {
    echo "0 results";
}

$output_array = array($humidity,$light,$water,$moisture);
echo json_encode($output_array);
$conn->close();
?>