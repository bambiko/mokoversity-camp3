( function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  var circleX = Math.floor(Math.random()*300);
  var circleY = Math.floor(Math.random()*300);
  var circleR = Math.floor(Math.random()*100);
  //canvas size
  canvas.width = 480;
  canvas.height = 320;
  //Gradient costent
  var grd=ctx.createRadialGradient(63,65,0,85,85,100);
  grd.addColorStop(0,"white");
  grd.addColorStop(1,"purple");
  //fill the gradient in the circle
  ctx.fillStyle = grd;
  //draw the purple circle
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleR, 0, Math.PI*2, true);
  //fill the circle with color(fillStyle)
  ctx.fill();
  //draw the circle line
  ctx.stroke();
} ) ();

