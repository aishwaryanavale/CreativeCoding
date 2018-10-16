var bgColor=255;
var img;


function setup() {
  // put setup code here
  createCanvas(400,400);
img = loadImage("../mickBody.png");
}

function draw() {

  background(bgColor);
  image(img, 0, 0);

  strokeWeight(2);
  // put drawing code here
  noStroke();

  fill("black");
  // crown and face
  ellipse(200,200,200,200);

  ellipse(100,100,125,125);
  ellipse(300,100,125,125);

  //jaw
  fill("#ffe0bd");
  ellipse(200,300,250,125);

  // eye placeholder

  ellipse(175,200,75,125);
  ellipse(215,200,75,125);


  //eyebrows
  stroke("black");
  if(mouseIsPressed)
  {
    bgColor="random(0,255)";
  arc(175, 180, 30, 20, PI, 2*PI);
  arc(215, 180, 30, 20, PI, 2*PI);
  }
  else {
    arc(175, 175, 30, 20, PI, 2*PI);
    arc(215, 175, 30, 20, PI, 2*PI);


  }
  // eyes
  if(mouseIsPressed)
  {
    fill("#ffcd94");
  noStroke();

    ellipse(175,215,40,65);
    ellipse(215,215,40,65);

  } else{
    fill("white");
    noStroke();

    ellipse(175,215,40,65);
    ellipse(215,215,40,65);
  }


  //eyeballs
  if (mouseX>0 && mouseX<=width/2 && mouseY >0 && mouseY< height)
  {

    fill("black");
    noStroke();
    if(mouseIsPressed)
    {

    }
    else {

      ellipse(165,225,25,40);
      ellipse(205,225,25,40);
    }
  }

    else if (mouseX>width/2 && mouseX<=width && mouseY >0 && mouseY< height)
  {

    fill("black");
    noStroke();
    if(mouseIsPressed)
    {

    }
    else {

      ellipse(185,225,25,40);
      ellipse(225,225,25,40);
    }
  }

  else {
    fill("black");
    noStroke();
    if(mouseIsPressed)
    {

    }
    else {

      ellipse(175,225,25,40);
      ellipse(215,225,25,40);
    }
  }



  //nose
  fill("black")
  ellipse(200,275,75,20);
    fill("white")
    ellipse(200,270,20,05);

  noFill();
  stroke("black");


  fill("pink");
  arc(200, 318, 60, 20, 2*PI, PI);
fill("#ffe0bd");
  arc(200, 290, 120, 60, 2*PI, PI);







}
