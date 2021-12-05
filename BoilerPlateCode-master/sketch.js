var worms
var score=0
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 player1=createSprite(200,500,30,30)
 worms= new Group()
}

function draw() {
  background("black");
  stroke("yellow") 
  noFill() 
  ellipse(80,500,50,40)
  player1.x=mouseX;
  player1.y=mouseY;
  generateworms()
  for(var i = 0 ; i< (worms).length ;i++){
    var temp = (worms).get(i) ;
    if (player1.isTouching(temp)) {
      score++;
      temp.destroy();
      temp=null;
      }   
    }
    textSize(20);
    text("Worms destroyed: "+score,350,50);
  
  
  drawSprites()
  
}
function generateworms()
{
  if(frameCount%30==0){
    worm=createSprite(80,500,40,5)  
    worm.velocityX=random(-4,4)
    worm.velocityY=random(-4,4)
     worm.shapeColor="green"
worms.add(worm)
  }
}