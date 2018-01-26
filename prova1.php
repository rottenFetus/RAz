<?php
$servername = "localhost";
$username = "Minestrone";
$password = "gioele123";
$dbname = "prova";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM classificona";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
      echo $row["nome"] . "-" . $row["punteggio"] . "/";
  }
} else {
  echo "0 results";
}
$conn->close();
 ?>
