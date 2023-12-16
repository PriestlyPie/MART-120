var headX = 100;
var headY = 150;
var bodyX = 80;
var bodyY = 170;
var armX1 = 70;
var armX2 = 130;
var armsY = 205;
var legX1 = 85;
var legX2 = 115;
var legsY = 270;

var size = 5;
var count = 0;
var sizeDirection = 2;

function setup() {
    createCanvas(200, 300);
    movement = floor(random() * 10) + 1;
}

function draw() {
    background(220);
    textSize(12);
    //head  
    circle (headX, headY, 50);
    if (headX >= 200 || headX <= 0) {
        movement *= -1;}
    headX += movement;
    //body
    rect (bodyX, bodyY, 40, 70);
    if (bodyX >= 200 || bodyX <= 0) {
        movement *= -1;}
    if (bodyY >= 300 || bodyY <= 0) {
        movement *= -1;}
    bodyY += movement;
    bodyX += movement;
    //arms
    ellipse (armX1, armsY, 20, 70)
    if (armsY >= 300 || armsY <= 0) {
        movement *= -1;}
    armsY += movement;
    ellipse (armX2, armsY, 20, 70)
    if (armsY >= 300 || armsY <= 0) {
        movement *= -1;}
    armsY += movement;
    //legs
    ellipse (legX1, legsY, 20, 70)
    if (legX1 >= 200 || legX1 <= 0) {
        movement *= -1;}
    legX1 += movement;
    ellipse (legX1, legsY, 20, 70)
    if (legX2 >= 200 || legX2 <= 0) {
        movement *= -1;}
    legX2 += movement;
    //nose
    triangle (95, 155, 100, 145, 105, 155)
    //eyes
    circle (90, 145, 10)
    point (90, 145)
    circle (110, 145, 10)
    point (110, 145)
    //mouth
    line (90, 160, 110, 160)
    text ('joner broome', 130, 290)
    text ('this is me.', 30, 120)

    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text ('me, circa 2023', 50, 50)

}