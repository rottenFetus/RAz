<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
 echo implode('~',prendiDati());

function connettiDB(){
  $mysqliLink = new mysqli('192.168.1.127', 'Minestrone', 'gioele123', 'prova');
  if(mysqli_connect_errno()){
    exit();
  }
  return $mysqliLink;
}

function prendiDati(){

  $mysqliLink=connettiDB();

  $query=$mysqliLink->query("SELECT * FROM dizionario");

  $parole=[];

  while($row = mysqli_fetch_assoc($query)){
    $parole[]=$row['parole'];
  }
  return $parole;
}
?>
