const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;
var board, board2, board3;
var pig, pig2;
var level = levelA;
var wall1, wall2, wall3;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    wall1 = new Ground(5, 200, 10, 1200);
    wall2 = new Ground(600, 5, 1200, 10);
    wall3 = new Ground(1195, 200, 10, 1200);

    if(level === levelA){
        levelE();
        
    }
   
   
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("red")
        text("Score  " + score, width-300, 50)
    
      

    Engine.update(engine);

    if(score === 180){
     levelC(); 
    
     }

    //strokeWeight(4);
    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();
    board.display();
    board2.display(); 
    board3.display();
    bird.display();
    platform.display();
    pig.display();
    pig.score();
    pig2.display();
    pig2.score();
    //pig3.display();
   // pig3.score();
    slingshot.display();
   
       
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:95});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


function levelA(){


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 330, 300, 140);

    board = new Ground(600,300,15,300);

    pig = new Pig(365,370)

    bird = new Bird(200,95);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:95});

    board2 = new Ground(900, 300, 0, 0);
    board3 = new Ground(900, 300, 0, 0);

}

function levelB(){

    ground = new Ground(600,height,1200,10);
    platform = new Ground(150, 330, 300, 140);
    bird = new Bird(200,95);
    slingshot = new SlingShot(bird.body,{x:200, y:95});
    board = new Ground(700, 300, 15, 300);
    board2 = new Ground(500, 300, 15, 200);
    pig = new Pig(-20,-20)
    Matter.Body.setStatic(pig.body,{isStatic:true});
    pig2 = new Pig(600,370);
    board3 = new Ground(900, 300, 0, 0);
}

function levelC(){

    ground = new Ground(600,height,1200,10);
    platform = new Ground(150, 330, 300, 140);
    bird = new Bird(200,95);
    slingshot = new SlingShot(bird.body,{x:200, y:95});
    board = new Ground(700, 350, 200, 15);
    board2 = new Ground(950, 300, 15, 220);
    pig = new Pig(-20,-20)
    Matter.Body.setStatic(pig.body,{isStatic:true});
    pig2 = new Pig(650,330);
    board3 = new Ground(600, 330, 15, 150);

}


function levelD(){

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 330, 300, 140);

    board = new Ground(745,300,305,15);
    
    pig = new Pig(-50,370)
    Matter.Body.setStatic(pig.body,{isStatic:true});
    pig2 = new Pig(800,380);
    bird = new Bird(200,95);
   // Matter.Body.setStatic(pig2.body,{isStatic:true});
   // pig3 = new Pig(800,330)
    slingshot = new SlingShot(bird.body,{x:200, y:95});

    

    board2 = new Ground(600, 250, 15, 90);
    board3 = new Ground(900, 300, 15, 180);

}


function levelE(){

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 330, 300, 140);

    board = new Ground(1000,120,15,115);
    
    pig = new Pig(-50,370)
    Matter.Body.setStatic(pig.body,{isStatic:true});
    pig2 = new Pig(925,150);
    bird = new Bird(200,95);
   // Matter.Body.setStatic(pig2.body,{isStatic:true});
   // pig3 = new Pig(800,330)
    slingshot = new SlingShot(bird.body,{x:200, y:95});

    

    board2 = new Ground(925, 70, 140, 15);
    board3 = new Ground(925, 170, 140, 15);




}