<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
 echo implode('~',prendiDati());

function connettiDB(){
  $mysqliLink = new mysqli('198.91.81.7', 'razx10m2', 'LOLxdtunzi5.', 'razx10m2_tabella');
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
