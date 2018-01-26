<?php
$servername = "192.168.1.127";
$username = "Minestrone";
$password = "gioele123";
$dbname = "prova";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT parole FROM dizionario";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
      echo $row["parole"] . "-";
  }
} else {
  echo "0 results";
}
$conn->close();
 ?>
