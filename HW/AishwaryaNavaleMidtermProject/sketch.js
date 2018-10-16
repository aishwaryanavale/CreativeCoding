var Backdrop;
var Caterpillar;

var Leaf1;
var Leaf2;
var Leaf3;
var Leaf4;

var Leafcopy1;
var Leafcopy2;
var Leafcopy3;
var Leafcopy4;

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var eaten1 = false;
var eaten2 = false;
var eaten3 = false;
var eaten4 = false;

var cocoon;
var butterfly;
var tulips;
var sizeX = 100;
var sizeY = 200;
var nextCounter=0;
var nextButton;

var beginX = 20.0; // Initial x-coordinate
var beginY = 10.0; // Initial y-coordinate
var endX = 570.0; // Final x-coordinate
var endY = 320.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = 0.01; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)


function preload(){
  Backdrop = loadImage('backdrop.jpg');
  Caterpillar = loadImage('caterpillar.png');

  Leaf1 = loadImage('Leaf-01.png');
  Leaf2 = loadImage('Leaf-02.png');
  Leaf3 = loadImage('Leaf-03.png');
  Leaf4 = loadImage('Leaf-04.png');

  Leafcopy1 = loadImage('Leafcopy01.png');
  Leafcopy2 = loadImage('Leafcopy02.png');
  Leafcopy3 = loadImage('Leafcopy03.png');
  Leafcopy4 = loadImage('Leafcopy04.png');

  cocoon = loadImage('cocoon.png');
  butterfly = loadImage('butterfly.png');
  tulips = loadImage('tulips.png');
}

function setup() {
  // put setup code here
  createCanvas(1450,800);
  nextButton = createButton("Next");
  nextButton.position(-200, -50, 50, 20);
  distX = endX - beginX;
distY = endY - beginY;


}

function draw() {
  // put drawing code here
  background(255,255,255);
image(Backdrop,0, 0);

//title
text("Little Wonders of Nature", 100, 75);
textSize(31);

pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }

//Leaf 1
if(eaten1 == false)
{
  image(Leaf1, 10, 160);
}

else if(eaten1 == true && counter1 == 1)
{
  image(Leafcopy1, 10, 160);
}
else if(eaten1 == true && counter1==2)
{

}
//Leaf2
if(eaten2 == false)
{
  image(Leaf2, 800, 150);
}

else if(eaten2 == true && counter2 == 1)
{
  image(Leafcopy2, 800, 150);
}
else if(eaten2 == true && counter2==2)
{

}

//Leaf3
if(eaten3 == false)
{
  image(Leaf3, 350, 430);
}

else if(eaten3 == true && counter3 == 1)
{
  image(Leafcopy3, 350, 430);
}
else if(eaten3 == true && counter3==2)
{

}

//Leaf4

if(eaten4 == false)
{
  image(Leaf4, 1150, 400);
}

else if(eaten4 == true && counter4 == 1)
{
  image(Leafcopy4, 1150, 400);
}
else if(eaten4 == true && counter4==2)
{

}

//cocoon

  if(counter1 == 2 && counter2 == 2 && counter3 == 2 && counter4 == 2)
  {
    image(cocoon, 725, 220,sizeX,sizeY);
    nextButton.position(1300, 50, 50, 20);
    textSize(50);
    if(nextCounter==0)
    {
      text("Day 1", 1150, 75);
      sizeX=50;
      sizeY=100;
    }
    else if (nextCounter == 1)
    {
      text("Day 5", 1150, 75);
      sizeX=60;
      sizeY=110;
    }

    else if (nextCounter == 2)
    {
      text("Day 10", 1125, 75);
      sizeX=100;
      sizeY=200;
    }

    else if (nextCounter == 3)
    {
      text("Day 14", 1125, 75);
      sizeX=140;
      sizeY=240;
    }

//tulips and butterfly
    else if (nextCounter == 4)
    {

    image(tulips, -150, 350);
    image(tulips, 550, 350);
    image(butterfly, x, y, 200, 175);

      nextButton.position(-200, -50, 50, 20);
      sizeX=1;
      sizeY=1;
    }


    nextButton.mousePressed(function(){
    console.log(nextCounter);
    nextCounter++;

    });

  }


//caterpillar

  else
  {
    image(Caterpillar,mouseX,mouseY,160,100);
  }
}


function mousePressed()
{
  if(mouseX>10 && mouseX<310 && mouseY>160 && mouseY<460)
  {
    eaten1 = true;
    counter1 = counter1+1;
  }

  if(mouseX>800 && mouseX<1000 && mouseY>150 && mouseY<350)
  {
    eaten2 = true;
    counter2 = counter2+1;
    console.log(eaten2);
  }

  if(mouseX>350 && mouseX<650 && mouseY>430 && mouseY<730)
  {
    eaten3 = true;
    counter3 = counter3+1;
    console.log(eaten3);
  }

  if(mouseX>1150 && mouseX<1300 && mouseY>400 && mouseY<550)
  {
    eaten4 = true;
    counter4 = counter4+1;
    console.log(eaten4);
  }



//butterfly interaction
//https://p5js.org/examples/motion-moving-on-curves.html
}

function keyPressed()
{
  if(key==' ')

    pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
  }


// end of code
