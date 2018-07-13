// Enemies our player must avoid
var Enemy = function(number) {
  this.x=0;
  this.y=(number+1)*83-20;
  this.speed=Math.floor(Math.random()*10+1);// This gives the bugs a varying speed
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position using dt which standardizes the time across computers.
Enemy.prototype.update = function(dt) {
    this.x=this.x+12*dt*this.speed; //this updates the x position of the enemy by using the dt and the original speed of the bug.
    if (this.x>550){
      this.x=-150;//this resets the bug to be back on the left side of the screen.
      this.speed=Math.floor(Math.random()*10+1);
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Hero {
  constructor(){
    this.x=202;
    this.y=415;
    this.sprite='images/char-horn-girl.png';
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  update(){
    if (this.y<30){
      this.x=202;
      this.y=415;
      youWin();
    }
  }

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

let player = new Hero();

console.log(player);

//hero class
// constructor

    //methods
      //update position
        //check whether player is off board
        //check whether colision happened
        //check whether game is won
        //use event handler to see if keys have been pressed to move player.
    //render the new position of the sprite
    //reset hero back to starting spot if needed.
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies=[];
for (var i=0; i<3; i++){
  let enemy= new Enemy(i);
  allEnemies.push(enemy);
}
console.log(allEnemies);
// Place the player object in a variable called player

function youWin(){
  var modal =document.getElementById('myModal');
  modal.style.display="block";
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
