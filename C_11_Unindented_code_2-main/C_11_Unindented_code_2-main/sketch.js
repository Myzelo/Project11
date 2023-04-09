/*var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage, invisibleLimit;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    //invisible ground
    invisibleGround = createSprite(10,190,400,10);
    //sprite.visible = false
    invisibleGround.visible = false;
    //invisble limit
    // invisibleLimit = createSprite(50, 60, 400, 20);
    // invisibleLimit.visible = false; 

}

function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space") && trex.y > 160) {
     trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
     ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    //trex.collide(invisibleLimit);
    drawSprites();
}
*/


function twomultiple(i,r){
 try{
    var double = i/r;
   console.log(double);
 }
 catch(error){
    console.log("Error: "+error)
 }
}

twomultiple(10,0)
