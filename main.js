canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();