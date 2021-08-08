canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
linewidth=1;
var mouseevent="empty";
var last_x,last_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    linewidth=document.getElementById("width").value;
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown")
{
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.moveTo(last_x,last_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
}
last_x=current_x;
last_y=current_y;
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
