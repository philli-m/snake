
<!--https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest http://blog.teamtreehouse.com/beginners-guide-to-ajax-development-with-php  https://github.com/carpedm20/snake-web https://github.com/Pnatani/Snake-Game/blob/master/Snake.php-->
<?php
$dbc = mysqli_connect('127.0.0.1', 'root', 'ServantEgg86', 'snake_wins')
  or die('Error connecting to MySQL server.');
  
  $game_id = $_POST['game_count'];
  $true_tiles = $_POST['tile_count'];

  	$query = "INSERT INTO 'tile_count' ('game_id, true_tiles') Values ('$game_id', 'title_count')";

  	 mysqli_query($dbc, $query)
  		or die('Error querying database.');

//printing to screen customer added? 
  echo 'Customer added.';
//closeing connection to database 
  mysqli_close($dbc);
?>

<?php 
?> 