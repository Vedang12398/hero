
var player;
var score=0;
var wormGroup;
var bgImage
var rjImage
var wormsImage
function preload()
{
  bgImage=loadImage("images/swampImg.png")
rjImage=loadImage("images/frog.png")
wormsImage=loadImage("images/worm.png")
}
function setup() {
createCanvas(600,600);
swamp=createSprite(300,300,200,200)
swamp.scale=2
swamp.addImage(bgImage)
player = createSprite(40,550,30,30);
player.scale=0.4
player.addImage(rjImage)
wormGroup= new Group();
}

function draw() {
background("black"); 
player.x= mouseX;
player.y= mouseY;

generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(80,380),random(290,380),40,5);
  worm.scale=0.2
  worm.addImage(wormsImage)
  worm.shapeColor="green"
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
