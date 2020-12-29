var dog,happyDog;
var database;
var foodS,foodStock;
var dogimg,dogimg2;

function preload()
{
  dogimg=loadImage("images/dog.png")
  dogimg2=loadImage("images/dog1.png")

}

function setup() {
  createCanvas(600,600);
  database=firebase.database();
  dog = createSprite(400,300,10,10)
  dog.addImage(dogimg);
  dog.scale=0.4;
  var foodStock=database.ref('food')
  foodStock.on("value",readStock)

}


function draw() {  
 
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogimg2);
  }
 
drawSprites();
fill("yellow")
textSize(30)
strokeWeight(3)
text("Press UP_ARROW key to feed Drago Milk! ",10,80)
text("Food Remaining : "+ foodS,200,550)
}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
  x=x-1;
  database.ref('/').update({
 food:x
  })
}

