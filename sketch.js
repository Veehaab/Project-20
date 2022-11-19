var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("imagens/garden.png");
    tomImg1= loadAnimation("imagens/tomOne.png");
    tomImg2=loadAnimation("imagens/tomTwo.png","imagens/tomThree.png");
    tomImg3= loadAnimation("imagens/tomFour.png");
    jerryImg1=loadAnimation("imagens/jerryOne.png");
    jerryImg2= loadAnimation("imagens/jerryTwo.png","imagens/jerryThree.png");
    jerryImg3=loadAnimation("imagens/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}