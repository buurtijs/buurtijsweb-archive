document.title = "BUURTIJS";

let x;
let y;

let xspeed;
let yspeed;


let bike2;
let bikeX;

let s;
let sSize;
let textX;
let textY;
var textWidth;
let mobBr = 580;
let cnv;


function preload (){
  bike2 = loadImage ("images/Bike2-s.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // cnv.position(0,0)
  x= random(width)
  y= random(height)
  xspeed = 3;
  yspeed = 3;
  bikeX = windowWidth/6;
 s = ('BUURTIJS is collaborative research project instigated by Honey Jones-Hughes and Antonio de la Hera exploring and mapping the production, processing and distribution of edible produce within and surrounding the city of Rotterdam. It evolved from a self-imposed challenge to make ice cream only from ingredients collected by bike, directly from the source. Out of this challenge a body of research related to food production emerged, tracking attempts to locate the most ‘ethical’ producers, with questions of sustainability, local resources, and regenerative agriculture.');

 if (windowWidth <= mobBr) {
   textX = 30;
   textY = 0.2*windowHeight;
   textWidth = windowWidth-60;
    sSize = 20;
 }
   else if (windowWidth >= mobBr) {
     textX = 0.20*windowWidth;
     textY = 0.30*windowHeight;
     textWidth = 480;
      sSize = 25;
   }

}

function draw() {
background (33, 33, 33);
fill('white');
textAlign(CENTER)
textFont('HERAHUGHES', sSize)
text(s, textX, textY, textWidth, 450);
 image (bike2, x, y);
  bike2.resize(bikeX, 0);

  x = x + xspeed;
  y = y + yspeed;

  if (x + bike2.width >= width) { xspeed = -xspeed;
    x = width - bike2.width;} else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;}


  if (y + bike2.height >= height) {
    yspeed = -yspeed;
    y = height - bike2.height; } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0; }


}



    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (windowWidth <= mobBr) {
    textX = 30;
    textY = 0.2*windowHeight;
    textWidth = windowWidth-60;
      sSize = 20;
  }
    else if (windowWidth >= mobBr) {
      textX = 0.20*windowWidth;
      textY = 0.30*windowHeight;
      textWidth = 480;
        sSize = 25;
    }
}

function mousePressed () {
window.open ("archive.html", '_self');
}
