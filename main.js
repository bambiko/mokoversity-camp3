( function() {
  var canvas = document.getElementById('game'),
      ctx = canvas.getContext('2d'),
      circleX = Math.floor(Math.random()*300),
      circleY = Math.floor(Math.random()*300),
      circleR = Math.floor(Math.random()*100);
  //canvas size
  canvas.width = 500;
  canvas.height = 500;
  //Gradient costent
  var grd=ctx.createRadialGradient(75,50,5,90,60,100);
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

