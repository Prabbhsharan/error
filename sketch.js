var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  //background("green")
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  npc1 = createSprite( Math.random(176,displayWidth - 30), Math.random(10,displayHeight - 20),20,70);
  npc1.shapeColor = "blue"
  npc2 = createSprite( Math.random(50,displayWidth - 50),y = Math.random(30, displayHeight),20,35);
  npc2.shapeColor = "red"
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
track.depth = npc1.depth;
npc1.depth = npc1.depth+1;
}
