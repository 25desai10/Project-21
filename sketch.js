var wall,thickness;
var bullet,speed,weight,holder;



function setup() {
  createCanvas(1600,400);

  holder = createSprite(100,200,25,25);

  bullet = createSprite(120,200,15,10);
  bullet.shapeColor = "white"
  
    bullet.velocityX = 6;

    

  wall = createSprite(1200,200,thickness,300);

  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(0);  

  thickness = random(22,83);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    bullet.velocityX = 0;
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

   else if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}


function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }

  return false;
}


