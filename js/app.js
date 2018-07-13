// Enemies our player must avoid
var Enemy = function(number) {
  this.x=0;
  this.y=(number+1)*83-20;
  this.speed=Math.floor(Math.random()*10+1);// This gives the bugs a varying speed
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position using dt which standardizes the time across computers.
Enemy.prototype.update = function(dt) {
    this.x=this.x+15*dt*this.speed; //this updates the x position of the enemy by using the dt and the original speed of the bug.
    if (this.x>550){
      this.x=-100; //this resets the bug to be back on the left side of the screen.
      this.speed=Math.floor(Math.random()*10+1); //changes the speed of the bug for the next trip across the screen.
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class
class Hero {
  constructor(){
    this.x=202;
    this.y=415;
    this.sprite='images/char-horn-girl.png';
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

// this method checks if they are at the winning level and then resets the player.
  update(){
    if (this.y<30){
      this.x=202;
      this.y=415;
      youWin();
    }
  }

  // checks which key was pressed and then moves the player that direction.
  handleInput(code){
    switch(code){
      case 'left':
      if(this.x>100){
      this.x= this.x-101;
      }
      break;
      case 'right':
      if (this.x<404){
      this.x= this.x+101;
      }
      break;
      case 'up':
      if (this.y>30){
      this.y=this.y-83;
      }
      break;
      case 'down':
      if (this.y<400){
      this.y+=83;
      }
      break;
    }
  }
}
//Instantiate your player.
let player = new Hero();

// Create enemy objects and place in an array called allEnemies
let allEnemies=[];
for (var i=0; i<3; i++){
  let enemy= new Enemy(i);
  allEnemies.push(enemy);
}

//function with steps if player reaches the top.
function youWin(){
  var modal =document.getElementById('myModal');
  modal.style.display="block";
  document.querySelector("#button").addEventListener("click", function(){
    modal.style.display="none";
  });
}

//document.querySelector("#button").addEventListener("click", init)
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
