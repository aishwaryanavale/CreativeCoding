var a = 1;
var num1 = 3;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I'm a sentence";
var setupVariable = 5;

var charColor = "orange";
var eyeSize = 20;

var facePosX = 100;
var facePosY = 100;


function setup() {
  // put setup code here
  createCanvas(400,400);
  background("black");


  console.log(a + num1);
  console.log(a-num1);
  console.log(a + b);
  //single line comment
  //console.log(a * b);

  /*
  Block of comments
  */

//this is only in setup scope, only available in setup

}

function draw() {
  background("black");
  facePosX = mouseX;
  facePosY = mouseY;
  // put drawing code here
  stroke('black');
  strokeWeight(num1);
  //does not work, setupVariable's scope is only in the setup.
  //strokeWeight(setupVariable);

  strokeWeight(setupVariable);

  fill(charColor);
  //eyes
  ellipse(facePosX,facePosY,eyeSize,eyeSize);
  ellipse(facePosX + 60,facePosY,eyeSize,eyeSize);
  //mouth
  rect(facePosX,320,180,20);
  //mole

  stroke('green');
  strokeWeight(5);
  point(width/2,height/2);

  line(facePosX,330,facePosX,330);
  //pacperson
  arc(100,200,100,100,QUARTER_PI, PI + HALF_PI + QUARTER_PI);
}

function mousePressed (){
  charColor = "blue"
}
