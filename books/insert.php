<?php 
$data = json_decode(file_get_contents("php://input"));
$bname = mysql_real_escape_string($data->bname);
$bauthor = mysql_real_escape_string($data->bauthor);
$bprice = mysql_real_escape_string($data->bprice);
$blanguage = mysql_real_escape_string($data->blanguage);
mysql_connect("localhost", "root", ""); 
mysql_select_db("books-library");
mysql_query("INSERT INTO books('book-name', 'book-author', 'book-price', 'book-longuage') VALUES('".$bname."','".$bauthor."','".$bprice."','".$blanguage."')");
?>