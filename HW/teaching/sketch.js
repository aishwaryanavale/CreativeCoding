var aish = "#c8a2c8";
var wdth = 100;
var hey;
var counter = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
  hey = loadImage("../download.jpeg");
wdth=wdth++;



}

function draw() {
  // put drawing code here
  background(aish);
  fill("black");
  rect(50,50,wdth,50);

  fill(aish);
  rect(wdth,wdth,wdth,wdth);
  image(hey, 70,80);
    if(mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100)
    {
        aish = "blue";
    }
    else{
  aish = "#c8a2c8";
}

for(var i=0, i<5, i++){
rect(40,40,80,40);

}
}
