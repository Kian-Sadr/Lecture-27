//Collecting elements for easier reading later
let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");
let square_size=50;
let shifting_tracker = 0;
let animation_length = 100;
let unchanged = true;


context.fillStyle = "red";
let center_x = canvas.width/2;
let center_y = canvas.height/2;
let half_square = square_size/2
/*A red square at the exact center of the canvas to start*/
context.fillRect(center_x-half_square, center_y-half_square, square_size, square_size);

function move_up(){
    //Use unchanged to control up/down direction
    if (unchanged == true)
        return;
    unchanged = true;
    //Code Here
}

function move_down(){
    if (unchanged == false)
        return;
    unchanged = false;
    //Code here
}

function shifting(){
    //To Create
}