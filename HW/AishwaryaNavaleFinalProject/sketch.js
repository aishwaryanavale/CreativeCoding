var page1=true;
var page2;
var page3;
var page4;

var input, button, greet;

var button1;
var button2;

var postCard;

var greetingsText = "";

var currentPostCard = {"greeting" : "", "message" : "", "front" : "", "back" : ""};
var postCardList = [];
var postCardFront;
var c;
var messageString = "";

var jsonFile;

var currentNumber;

var fonts;


function preload() {

postCard = loadImage('postcard.jpg');
input = createInput();
input1 = createInput();

//jsonFile.loadJson("assets/postcards.json");

fonts = loadFont("assets/TravelingTypewriter.ttf");

}

function setup() {
  //currentNumber = localStorage.getItem("postcards");
  //console.log(currentNumber);


  // put setup code here

  //console.log(currentPostCard["greeting"]);

  //postCardList.push(currentPostCard);

  //console.log(postCardList[0]);
  //console.log(postCardList[0]["greeting"]);


 c = createCanvas(2000,1700);

//page1
  capture = createCapture(VIDEO);
  capture.size(800,600);
  capture.hide();

button = createButton('Capture'); //page1
button1 = createButton('Write a Message')//page2
button2 = createButton('Send') //page3
button3 = createButton('Send another Postcard') //page4

button.hide();



  page1=true;
  page2=false;
  page3=false;

  capture.size(800,600);
  capture.position(100,100);

  button.position(800,700);
  input.position(600,700);

  button1.position(800,700);

  button2.position(800,700);

  button3.position(800,700);


  capture.show();
  button.show();
  button1.hide();
  input1.hide();
  button2.hide();
  button3.hide();

//page2

  button.mousePressed(function(){
    page1=false;
    page2=true;
    page3=false;
    page4=false;

    //greetingsText = input.value();
    currentPostCard["greeting"] = input.value();
      input.position(100, 650);

          textAlign(LEFT);
          textSize(20);

          capture.hide();
            button.hide();
            input.hide();
            input1.hide();

            button1.show();
            button2.hide();
            button3.hide();
  });
//page3
  button1.mousePressed(function(){
    page1=false;
    page2=false;
    page3=true;
    page4=false;

  //  var frontImagePath = "assets/front" + currentNumber;
  //  saveCanvas(c, frontImagePath, 'jpg');

    capture.hide();
      button.hide();
      input.hide();

      button1.hide();
      button2.show();
      button3.hide();

  });

  button2.mousePressed(function(){
    page1=false;
    page2=false;
    page3=false;
    page4=true;

    capture.hide();
      button.hide();
      input.hide();
      input1.hide();

      button1.hide();
      button2.hide();

      button3.show();

      //var backImagePath = "assets/back" + currentNumber;
      //saveCanvas(c, backImagePath, 'jpg');
//page4
  });
  button3.mousePressed(function(){
    page1=true;
    page2=false;
    page3=false;
    page4=false;

    input.show();
    
    button.show();
    capture.show();
    capture.size(800,600);
    capture.position(100,100);

    button.position(800,700);
    input.position(600,700);


    //currentNumber++;
    //localStorage.setItem("postcards", currentNumber);

    saveCanvas(c, "mypostcard", 'jpg');

  });

  textFont(fonts);
  textSize(40);

}

function draw() {
//put drawing code here
background(255);

//page1
if(page1){


}else if(page2){

image(postCard,100,100,800,600);
fill("white");
image(currentPostCard["front"],103,103,1587,1187);
text(currentPostCard["greeting"],200,680);

}else if(page3){
    image(postCard,100,100,800,600);
    fill(0);
    text(currentPostCard["message"],150,200,400,400);

}else if(page4){

  image(postCard,100,100,800,600);
  fill("white");
  image(currentPostCard["front"],103,103,1587,1187);
  text(currentPostCard["greeting"],200,680);

  image(postCard,1000,100,800,600);
  fill("black");
  text(currentPostCard["message"],1050,200,400,400);
  }

}

function mousePressed(){

  if(page1){
    //postCardFront =
    currentPostCard["front"] = capture.get();

  }

  //saveCanvas(c, 'myCanvas', 'jpg');

}

function keyPressed(){
  if(page3){
    console.log(keyCode);
    if(keyCode >= 65 && keyCode <= 90){
      currentPostCard["message"] += key;
      console.log(keyCode);
    }

    if(keyCode == 32){
      currentPostCard["message"] += key;
      console.log(keyCode);
    }

    if(keyCode == RETURN){
      currentPostCard["message"] += "\n";
    }
    if(keyCode == 8){
      // currentPostCard["message"].slice(0, -1);
    }
  }

}

//end of code
