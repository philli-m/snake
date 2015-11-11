var context = document.getElementById('canvas').getContext('2d');
var x = 100;
var y = 100;

var term;

var grid = [];
var num_tiles = 0;
//var game_count = 0;
var game_over = false;

var x_size = 200;
var y_size = 200;

var grid_x_size = 400;
var grid_y_size =400;

for (i = 0; i < grid_x_size; ++i) {
    grid[i] = [];

    for (j = 0; j < grid_y_size; ++j) {
        grid[i][j] = false;
    }
}

function game_stop() {
    clearInterval(timer);
    game_over = true;
    //game_count = game_count + 1;

    $.ajax({
        type:"POST",
        url: "snake.php",
        data: {num_tiles, term} //game_count
    });
    num_tiles = 0;
    //context.clearRect(0, 0, canvas.width, canvas.height);

}

//description of movement
function rect(e) {
    if (game_over) {
        return;
    }

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
        default:
            return;
    }
    //debugger;
    //console.log(grid[x][y]);

    if (grid[x][y] === false) {
        num_tiles = num_tiles+1; }


    if (x > x_size) {
        console.log("GAME OVER");
        game_stop();
        return;
    }
    if (x < 0) {
        console.log("GAME OVER");
        game_stop();
        return;
    }
    if (y > y_size) {
        console.log("GAME OVER");
        game_stop();
        return;
    }
    if  (y < 0) {
        console.log("GAME OVER");
        game_stop();
        return;
    }

    if (grid[x][y] === true) {
        console.log("GAME OVER");
        game_stop();
        return;
    }

    context.fillRect(x, y, 10, 10);
    grid[x][y] = true;

    var colors = [];

    for (var g = 0; g < 3; g++) {
        colors.push(Math.floor(Math.random() * 255));
    }

    context.fillStyle = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
}

var timer;

function restart() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    x = 100;
    y = 100;
    game_over = false;
     for (i = 0; i < x_size; ++i) {
       grid[i] = [];

       for (j = 0; j < y_size; ++j) {
           grid[i][j] = false;
       }
     }
}

document.onkeydown = function(e) {
    clearInterval(timer);
    timer = setInterval(rect, 100, e);

};
