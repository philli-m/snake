 //<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>

var context = document.getElementById('canvas').getContext('2d');

 var x = 100;
 var y = 100;

grid = [];
tile_count = 0;
game_count = 0;
game_over = false;

function buttonPress(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    var x = 100;
    var y = 100;
    console.log("button");
}

//mapping the canvas grid to track collision detection and labelling all usable coordinates in the grid as false
     for (i = 0; i < 200; ++i) {
         grid[i] = [];

         for (j = 0; j < 200; ++j) {
             grid[i][j] = false;
         }
     }
   console.log("hello");
 //description of movement
     function rect(e) {
        console.log(e);
         switch (e.keyCode) {

             case 38:
                 (y = y - 10);
                 break;

             case 40:
                 (y = y + 10);
                 break;

             case 39:
                 (x = x + 10);
                 break;

             case 37:
                 (x = x - 10);
                 break;
         }

         //confirming starting location of dot and size
         context.fillRect(x, y, 10, 10);

         //if statment within movement function to check grid coordinate is new and then labelling  contacted coordinates as true
         if (grid[x][y] === false) {
             grid[x][y] = true;
             //tile_count = tile_count + 1;
             //console.log(tile_count);
         //stopping timer and keydown behavior then resetting the canvas
         } else {
            //sending both the counts before resetting board
                //game_count = game_count + 1;
                  //  console.log(ocount);

                      //  $.ajax({
                      //      type:"POST",
                      //      url: "snake.php",
                      //      data: {game_count, tile_count}
                     //   });
                     //   tile_count = 0;

             clearInterval(timer);
             game_over = true;
             //context.clearRect(0, 0, canvas.width, canvas.height);

             //button still not working!

             for (i = 0; i < 200; ++i) {
             grid[i] = [];

             for (j = 0; j < 200; ++j) {
                 grid[i][j] = false;
                 tile_count = 0;
                 document.onkeydown = null;
            }
            }
        }

         //random color generation
         var colors = [];

         //loop describing 3 random number generations which are then pushes to empty array
         for (var g = 0; g < 3; g++) {
             colors.push(Math.floor(Math.random() * 255));
         }

         //calling dot to the assign random numbers as rgb colors in css format
         context.fillStyle = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
     }

 //timer variable to allow continuous movement
 var timer;

 function resetMap(e) {
   console.log("I've been clicked");
   context.clearRect(0, 0, canvas.width, canvas.height);
   x = 100;
   y = 100;
   clearInterval(timer);
   gameOver = false;
   for (i = 0; i < 200; ++i) {
       grid[i] = [];

       for (j = 0; j < 200; ++j) {
           grid[i][j] = false;
       }
   }
 }


 // debugger
 //describes the continuous movement of the dot by repeating past movement until key is pressed again
 document.onkeydown = function (e) {
     clearInterval(timer);
     //console.log(x, y);
     timer = setInterval(rect, 100, e);

 };
