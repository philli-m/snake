<?php
$dbc = mysqli_connect('127.0.0.1', 'root', 'ServantEgg86', 'snake_wins')
  or die('Error connecting to MySQL server.');

//assigning php variables to the data stored in the $POST 
  $game_id = $_POST['game_count'];
  $true_tiles = $_POST['num_tiles'];
  $name = $_POST['term'];
  //check database connection before querying? 
  
  $query = "INSERT INTO tile_count (true_tiles, gamer_id) VALUES ('$true_tiles', '$name')"; // Explain SQL Injection to me and how it can be prevented

  	 mysqli_query($dbc, $query)
  		or die(mysqli_error($dbc)); //gives detailed error - mysqli_query() expects parameter 1 to be mysqli, null given in 

  mysqli_close($dbc);

?>
