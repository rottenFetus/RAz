<?php
$servername = "localhost";
$username = "Minestrone";
$password = "gioele123";
$dbname = "prova";

$q = $_REQUEST["q"];
$p = $_REQUEST["p"];
$n = $_REQUEST["n"];
$s = $_REQUEST["s"];

$s[count($s)] = $p;
$n[count($n)] = $q;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

for($i = 0; $i < count($s); $i++) {
    for($j = $i; $j < count($s); $j++) {
      if($s[$j] > $s[$i]) {
        $temp = $s[$j];
        $s[$j] = $s[$i];
        $s[$i] = $temp;

        $temp1 = $n[$j];
        $n[$j] = $n[$i];
        $n[$i] = $temp1;
      }
    }
}
for($x = 1; $x <= 8; $x++) {
  $sql = "UPDATE classificona SET nome='".$n[$x - 1]."', punteggio='".$s[$x - 1]."' WHERE id='".$x."'";
  $conn->query($sql);
}

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
