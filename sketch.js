var dog,sadDog,happyDog;
var feed,addFood;
var foodObj;
var database;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  feed = createButton("feed the dog");
  feed.position(700,95);
  
  addFood = createButton("add food");
  addFood.position(800,95);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

 function feedDog(){
   dog.addImage(happyDog);

   if(foodObj.getFoodStock()<=0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0);
   
   }else{
     foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   }
 }