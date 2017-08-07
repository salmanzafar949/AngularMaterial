<<?php 


$data = json_decode(file_get_contents("php://input"));
$name = mysql_real_escape_string($data->name);
$lname = mysql_real_escape_string($data->lname);
$dpt = mysql_real_escape_string($data->dpt);
$acct = mysql_real_escape_string($data->acct);
mysql_connect("localhost","root","");
mysql_select_db("sqldb1");
mysql_query("INSERT into registration(`name`, `lname`, `dpt`, `accnt`) VALUES('"$name"','"$lname"','"$dpt"','"$acct"')");

 ?>