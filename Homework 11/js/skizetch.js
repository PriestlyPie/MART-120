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
var shapeXspeed;
var shapeYspeed;
var shape2Xspeed;
var shape2Yspeed;
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw() {
    background(255,220,220);
    stroke(0);
    fill(0);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);


    textSize(12);
    text("ESCAPE", width-50,height-50)

    fill(0,255,0);
    rect(characterX,characterY,25);

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
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }


    fill(255,0,0);
    circle(shapeX, shapeY, 10);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Victory!", width/2-50, height/2-50);
    }

    fill(0,0,0);
    circle(mouseShapeX, mouseShapeY, 25);

    fill(255,0,0);
    rect(shape2X, shape2Y, 10);

     shape2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
     shape2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

    shape2X -= shape2Xspeed;
    shape2Y -= shape2Yspeed;

    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
