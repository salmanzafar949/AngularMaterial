<?php
// Including database connections
require_once 'connectdb.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$name = mysqli_real_escape_string($con, $data->name);
$id = mysqli_real_escape_string($con, $data->id);

// mysqli insert query
$query = "INSERT into login (`id`, `name`) VALUES ('$id','$name')";
// Inserting data into database
mysqli_query($con, $query);
echo true;