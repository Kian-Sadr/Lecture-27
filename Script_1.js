//Collecting elements for easier reading later
let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");

context.beginPath();
context.arc(450, 50, 30, 2, 0);
context.fillStyle = "aquamarine";
context.fill();

context.beginPath();
context.arc(250, 150, 50, Math.PI, 0);
context.strokeStyle = "red";
context.lineWidth = 4;
context.stroke();
