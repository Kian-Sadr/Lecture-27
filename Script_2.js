//Collecting elements for easier reading later
let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");

context.strokeStyle = "blue";
context.strokeRect(0, 0, 50, 50);

function draw_square(){
    context.fillStyle = "red";
    context.fillRect(0, 0, 50, 50);
}

function move_origin(x, y){
    //Fill In
}

function change_angle(){
    //Fill In
}

function change_scale(x, y){
    //Fill In
}