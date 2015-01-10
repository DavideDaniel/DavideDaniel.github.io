// PONG aka Way too ambitious of a project David...
// ===============================================
// Embraced Object oriented programming from the start
// and this game is probably the reason why.
// The game lends itself to explaining objects and their 
// relationships in regards to writing code.

//Players - controllable object
var Player = function ( x, y )
{
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 5;
    this.draw = function ( pad )
    {
        pad.fillRect( this.x, this.y, this.width, this.height );
        
    }
};

//Ball - independent object
var Ball = function ()
{
    this.x = 0;
    this.y = 0;
    this.r = 5;
    this.velocityX = 2;
    this.velocityY = 7;
    this.draw = function ( ball )
    {
        ball.beginPath();
        ball.arc( this.x, this.y, this.r, 0, Math.PI * 2, false );
        ball.fill();
    }
    this.refresh = function ()
    {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};

//	Game functionality
// 	==================
// 	Pulls variables from other objects and sets static dimensions.
// 	Also contains function to draw and refresh canvas.
var GameEngine = function ()
{
    //canvas element and measurements
    var canvas = document.getElementById( "the_canvas" );
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext( "2d" );
    this.context.fillStyle = "#fff";
    //player pad dimensions
    this.player1 = new Player( 0, 5 ); //can use relative sizing as well, but this was easy for now
    this.player1.x = this.width / 2 - this.player1.width / 2; //center starting location
    this.player2 = new Player( 0, 490 );
    this.player2.x = this.width / 2 - this.player2.width / 2;
    
    this.player1Mr = true;
    this.player2Mr = true;
    
    //ball dimensions and velocity
    this.ball = new Ball();
    this.ball.x = this.width / 2; // ball pops out in the center
    this.ball.y = this.height / 2;
    
    //draw functions
    // canvas.addEventListener("click", the_canvas.draw);
    // canvas.addEventListener("click", pongGame.B.draw);
    this.draw = function ()
    {
        // draw the table
        this.context.clearRect( 0, 0, this.width, this.height );
        this.context.fillRect( 0, this.height, this.width, 2 );
        // draw the ball
        this.ball.draw( this.context );
        // draw the players
        this.player1.draw( this.context );
        this.player2.draw( this.context );
    }
    var score1 = 0;
    var score2 = 0;
    //Collision modeling - action for what if ball collides with player
    // 	this.collides = function(ball){
    // 		if (this.ball.x === this.player1.x && this.ball.y === this.player.y) {
    // 			this.ball.y -= this.ball.y;
    // // var aligner3 = document.querySelector("#aligner3");
    // var inputOne = document.querySelector("#inputOne");
    // 	inputOne.innerText = score1++;
    // }
    // 		if (this.ball.x === this.player1.x && this.ball.y === this.player.y) {
    // 			this.ball.y += this.ball.y;
    // // var aligner3 = document.querySelector("#aligner3");
    // var inputTwo = document.querySelector("#inputOne");
    // 	inputTwo.innerText = score2++;
    // }}
    // }
    //refreshes the location of the ball and possibly the score on button click? future maybe
    this.refresh = function ()
    {
        this.ball.refresh();
        //collision with walls
        if ( this.ball.x > this.width || this.ball.x < 3 )
        {
            this.ball.velocityX = -this.ball.velocityX;
        }
        else if ( this.ball.y > this.height || this.ball.y < 3 )
        {
            this.ball.velocityY = -this.ball.velocityY;
        }
        //collision with players
        if ( this.ball.x > this.player1.width && this.ball.x < this.player1.x + this.player1.width &&
            this.ball.y  > this.player1.height && this.ball.y < this.player1.y + this.player1.height )
        {
            var inputOne = document.querySelector( "#inputOne" );
            this.ball.velocityY = -this.ball.velocityY;
             inputOne.innerText = score1++;
        }
        if ( this.ball.x + this.ball.r > this.player2.width && this.ball.x < this.player2.x + this.player2.width &&
            this.ball.y + this.ball.r > this.player2.height && this.ball.y < this.player2.y + this.player2.height )
        {
            var inputTwo = document.querySelector( "#inputTwo" );
            this.ball.velocityY = -this.ball.velocityY;
            inputTwo.innerText = score2++;
        }
    }
}
var pongGame = new GameEngine();

// pongGame.collides();
// window.addEventListener('keydown',function(evt) {
// if (evt.keyCode == 65) {
// 	//A is pressed
//   pongGame.player1Mr(false);
//   alert(keyCode)
// }
// else if (evt.keyCode == 68) {
// 	//D is pressed
// 	 pongGame.player1Mr(true);
// }	
// },true);


//making a scoring system
//start animating the game
Loop = function ()
{
    pongGame.refresh();
    pongGame.draw();
};
//start the loop and refresh at 60fps
setInterval( Loop, 1000 / 60 );