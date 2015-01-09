var switchOn = true;
                function init(){
                setInterval(draw,200);
}
                var draw = function() {
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                
                var radius = 10;
                var randRad = Math.floor(Math.random()*(25 - 1));
                var x = Math.floor(Math.random()*(800+ 1));
                var y = Math.floor(Math.random()*(800+ 1));
                var numOfCircs = 10;
                
                // var initiate = function(){
                // setInterval(draw_ex01,20);
                // }
                // var randColor = Math.floor(Math.random()*255+1);
                var r = Math.floor(Math.random()*255+1);
                var g = Math.floor(Math.random()*255+1);
                var b = Math.floor(Math.random()*255+1);
                var a = 1;
                ctx.save();
                if (switchOn == true) {

                for (var i = 0; i < numOfCircs; i++) {
                
                ctx.arc(x, y, randRad, 0, Math.PI*2, true);

                
                
                ctx.fillStyle = "rgba("+r+", "+g+", "+b+", "+a+")";
                ctx.fill();
                ctx.beginPath();
                ctx.restore(); 

}
                }
                else{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = "bold 50px/60px 'helvetica' ";
                ctx.fillStyle = "rgba(140, 239, 113, 1)";
                ctx.fillText('Click Start', canvas.width/2, canvas.height/2)
              };
               
                }

                var refresh = function () {
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                }
                // var direction = 0;
                // var animate = function() {
                    //      animate += 0.00001;
                    //      for (var i = 0; i < Things.length; i++) {
                        //           Things[i]
                    //      };
                // }
                // var Switch = function () {
                // if (switchOn == false) {
                // setInterval(draw, 200);
                // refresh();
                // switchOn = true;
                // } else {
                // setInterval(draw, 20);
                // switchOn = false;
                // }
                // }
                // setInterval(draw, 60);
                init();
                // var startButton = document.querySelector("#start");
                // startButton.addEventListener("click", Switch);
                // var stopButton = document.querySelector("#stop");
                // stopButton.addEventListener("click", Switch);