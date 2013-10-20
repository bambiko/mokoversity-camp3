/* jslint browser: true, devel: true, closure: true */

var gameModule = (function (document) {

    "use strict"; //表示使用嚴謹模式

    var counter = 0,
        circleX,
        circleY,
        circleR,
        scores,
        colors = ['#ff0000', '#00ff00', '#0000ff'],
        length = colors.length;

    function gameOver() {
        console.log("Final Scores: " + scores);

        var api = "http://127.0.0.1:3000/scores?scores=" + scores;

        $.ajax({ url: api });
    }

    function startGame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

        circleX = Math.floor(Math.random() * 800);
        circleY = Math.floor(Math.random() * 800);
        circleR = Math.floor(Math.random() * 200);

        //canvas size
        //放在function中才會每次都清空畫布=每次都重畫一次畫布
        canvas.width = 900;
        canvas.height = 900;

        //fill the gradient in the circle
        ctx.fillStyle = colors[counter % length];
        //draw the purple circle
        ctx.beginPath();
        ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2, true);
        //fill the circle with color(fillStyle)
        ctx.fill();
        //draw the circle line
        ctx.stroke();

        if (counter >= 10) {
            gameOver();
            //for code quality?! - sometimes benifit
        } else {
            setTimeout(startGame, 2000); //每1000毫秒呼叫自己(start)
            counter += 1;
        }

    }

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            temp = (circleX - x) * (circleX - x) + (circleY - y) * (circleY - y);
        console.log("Clicked: " + x + ", " + y);
        if (temp < circleR * circleR) {
            scores = scores + (500 - circleR);
            console.log("Hit! Plus... " + scores);
        }
    }

    function start() {
        scores = 0;
        document.getElementById("main").addEventListener("click", touchEvent, true);
        startGame();
    }

    return {
        //<Module_name>: <function_name>
        startTheFirstModule: start
    };
}(document));

gameModule.startTheFirstModule();