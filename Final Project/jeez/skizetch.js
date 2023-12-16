var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shape2X = 60;
var shape2Y = 80;
var shape3x = 20;
var shape3y = 20;
var shape4x = 16;
var shape4y = 32;
var shape5x = 32;
var shape5y = 16;

var shape1, shape2, shape3, shape4, shape5;
function setup() {
    createCanvas(500, 600);
    shape1 = new Rectangle(100,100,20,30,120,20,200);
    shape2 = new Rectangle(200,300,50,80,220,120,20);
    shape3 = new Rectangle(100,100,20,30,120,20,200);
    shape4 = new Rectangle(200,300,50,80,220,120,20);
    shape5 = new Rectangle(200,300,50,80,220,120,20);
    createCharacter(200, 350);
}
function draw() {

    background(255,220,220);
    stroke(0);
    fill(0);

    createBorders(10);
    
    drawCharacter();
    characterMovement();

    textSize(12);
    text("ESCAPE", width-50,height-50)

    fill(0,255,0);
    rect(characterX,characterY,25);

    shape1.draw();
    shape2.draw();
    shape3.draw();
    shape4.draw();
    shape5.draw();

   if(characterX > width && characterY > width-50)
   {
       fill(0);
       stroke(5);
       textSize(26);
       text("Victory!", width/2-50, height/2-50);

    fill(0,0,0)
    circle(mouseShapeX, mouseShapeY, 25)
   }
}

function characterMovement() {
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;  
        console.log("movement: " + characterX); 
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

function createCharacter(x,y) {

    characterX = x;
    characterY = y;
}    

function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function drawCharacter() {
    fill(255,0,0);
    circle(shapeX, shapeY, 10);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

