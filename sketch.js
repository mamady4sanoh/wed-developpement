//The setup function only happens once
var flushing=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseY,21,220); //an RGB color for the canvas' background
  //circle
  stroke(54,51,88) // an RGB color for the circle's border
  strokeWeight(5);
  fill(220,56,22,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,100,flushing,flushing); // center of canvas,

  fill(130, 30, 310);
  strokeWeight(0);
  ellipse(mouseX-225,mouseY-225,50,50);
  stroke(248,76,19);
  strokeWeight(5);
  line(50,200,400,flushing);
  strokeWeight(0);
  triangle(250,120,230,10,80,random(200,500));
  strokeWeight(2);
  fill(random(30,200),200,random(40,150));
  textSize(100);
  textFont("Helvetica");
  text('Genereux',22,300)
  stroke(0,0,0);
  ellipse(random(width),random(height),10,10);
}

function mousePressed () {
flushing= flushing+10;
}

if (flushing >= 255) 
  {flushing=0;
  }  else {
    flushing= flushing+10;
  }
