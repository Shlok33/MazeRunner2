var smileEmojiImg;
var game, gameState;
var form;
var player, maze;

function preload(){
 smileEmojiImg = loadImage("Happy.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  /*smileEmoji = createSprite(displayWidth/2, displayHeight/2, 5, 5)
  smileEmoji.addImage(smileEmojiImg)
  smileEmoji.scale = 0.15;*/
}


function draw(){
  /*if(playerCount === 4){
    game.update(1);
  }*/

  if(gameState === 1){
    clear();
    game.play();
  }
  /*if(gameState === 2){
    game.end();
  }*/

}
