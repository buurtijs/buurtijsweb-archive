document.title = "BUURTIJS - Solidarity Payment";

let cnv;

let drawing1;


let s;
let sSize;
let textX;
let textY;
var textWidth;
let mobBr = 580;


function preload (){
  // drawing1 = loadImage ("images/Bike2-s.png");
}
// ADD DRAWING LINK ABOVE


function setup() {
  // cnv = createCanvas(windowWidth, 400);

// drawing size
  drawingX = windowWidth;

 // s = ('WE ARE ASKING FOR A SOLIDARITY PAYMENT');
 // s2 = ('Under a solidarity model, we do not sell you a product but instead sell you our labour, our work, our time. What wage do you want to give to us? This should be based on your own wage. So if you are a freelancer and you earn €5 an hour, then you can pay us that. But if you earn €80 an hour, then you can pay us that.');

// text size, and adapted for mobile or not
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

image (drawing1, 0, 0);
 drawing1.resize(drawingX, 0);

textAlign(LEFT)
textFont('HERAHUGHES', sSize)
text(s, textX, textY, textWidth, 450);
text(s2, textX, textY+30, textWidth, 450);
text(s2, textX, textY+150, textWidth, 450);





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
