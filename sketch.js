
var barco;
var barcoandando;

var mar;
var mar2;

function preload(){

mar2=loadAnimation("sea.png");
barcoandando=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  
  mar=createSprite(200,200,50,50);
  mar.addAnimation("fundo",mar2);
  mar.scale=0.25;

  barco = createSprite(100,200,20,20);
  barco.addAnimation("andando",barcoandando);
  barco.scale=0.25;

  createCanvas(400,400);
}
function draw() {
    drawSprites();
}
