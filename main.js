var gameModule = (
  function() {

    var timeoutVar,
        counter = 0;

    var color = ['#ff0000', '#00ff00', '#0000ff'];
    var length = color.length;

    function touchEvent(evt) {
      var x = evt.clientX,
          y = evt.clientY;
      cosole.log("Click!");
    }

    function start() {
      document.getElementById("main").addEventListener("click", touchEvent, false);
      startGame();
    }

    function startGame() {
      var canvas = document.getElementById('game'),
          ctx = canvas.getContext('2d'),
          circleX = Math.floor(Math.random()*300),
          circleY = Math.floor(Math.random()*300),
          circleR = Math.floor(Math.random()*100);
      
      //canvas size
      //放在function中才會每次都清空畫布=每次都重畫一次畫布
      canvas.width = 500;
      canvas.height = 500;
      
      //Gradient costent
      var grd=ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
      grd.addColorStop(0,"white");
      grd.addColorStop(1,"DarkOrchid");
      //fill the gradient in the circle
      ctx.fillStyle = color[counter % length];
      //draw the purple circle
      ctx.beginPath();
      ctx.arc(circleX, circleY, circleR, 0, Math.PI*2, true);
      //fill the circle with color(fillStyle)
      ctx.fill();
      //draw the circle line
      ctx.stroke();

      if (counter >= 10) {
        gameOver();
        //for code quality?! - sometimes benifit
      }
      else {
        timeoutVar = setTimeout(start, 250); //每1000毫秒呼叫自己(start)
        counter += 1;
      }
    
    }

    function gameOver() {
      console.log("Counter: " + counter);
    }

    return {
      //<Module_name>: <function_name>
      startTheFirstModule: start
    }
  }
) ();

gameModule.startTheFirstModule();