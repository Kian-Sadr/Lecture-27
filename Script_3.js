//Collecting elements for easier reading later
let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");
let square_size=50;
let shifting_tracker = 0;
let animation_length = 100;
let moving_up = true;


context.fillStyle = "red";
let center_x = canvas.width/2;
let center_y = canvas.height/2;
let half_square = square_size/2
/*A red square at the exact center of the canvas to start*/
context.fillRect(center_x-half_square, center_y-half_square, square_size, square_size);

function move_up(){
    //Use moving_up to control up/down direction
    if (moving_up == true)
        return;
    moving_up = true;
    window.requestAnimationFram(shifting);
}

function move_down(){
    if (moving_up == false)
        return;
    moving_up = false;
    window.requestAnimationFram(shifting);
}

function shifting(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();

    context.beginPath();
    context.fillStyle = "red";
    context.fillRect(center_x - half_square, center_y-half_square + shifting_tracker, square_size, square_size);

    if(!moving_up){
        shifting_tracker += 10;
    }
    else
    {
        shifting_tracker -= 10;
    }

    context.fill();
    context.restore();

    if(shifting_tracker < animation_length && shifting_tracker > 0)
    {
        window.requestAnimationFram(shifting);
    }
}
