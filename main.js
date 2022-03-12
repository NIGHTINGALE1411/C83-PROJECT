var mouseevent="empty"
var lastpositionx, lastpositiony
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="blue"
widthofline=1

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e)
{mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    color=document.getElementById("color").value
circle(mousex,mousey)
}
function circle(mousex,mousey) {
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=5
    ctx.arc(mousex,mousey,40,0,2*Math.PI)
    ctx.stroke()
     
 }
canvas.addEventListener("mousemove",mousemove)
function mousemove(e){

if (mouseevent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
     ctx.moveTo(lastpositionx,lastpositiony)

     console.log("x="+lastpositionx+"y="+lastpositiony)
     ctx.lineTo(currentpositionx,currentpositiony)
     console.log(currentpositionx,currentpositiony)
     ctx.stroke()
}
lastpositionx=currentpositionx
lastpositiony=currentpositiony

}
 function ClearArea() {
     ctx.clearRect(0,0,800,600)     
 }
 canvas.addEventListener("mouseup",mouseup)
 function mouseup(e){
     mouseevent="mouseup"
    
 }
 canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
    mouseevent="mouseleave"
}


