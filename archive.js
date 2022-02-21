document.title = "BUURTIJS";

let cnv;

let mobBr = 580;
var banBack;
let mobBan= 'IMPORTANT ANNOUNCEMENT: WE ARE STILL WORKING ON OUR MOBILE SITE - FOR THE FULL EXPERIENCE PLEASE LOOK ON A MUCH LARGER SCREEN :)';
let banX;
let banSpeed = 2;

let layer1;
let layer2;
let layer3;
let layer4;
let layer5;
let layer6;
let layer7;
let layer8;
let layer82;
let layer83;

// opacities for each layer - separate one needed to have them all switch on and off independently
var layer1Vis = 1;
var layer2Vis = 1;
var layer3Vis = 1;
var layer4Vis = 1;
var layer5Vis = 1;
var layer6Vis = 1;
var layer7Vis = 1;
var layer8Vis = 1;
var layer82Vis = 0.85;

// layer positions
var layerX, layerY;

// these are to change the size of the button
let buttonX = 50;
let buttonY = 100;
let buttonDist = 40;
let bttnSize = 30; //diameter of the button/switch
// button border
let buttBor = 6
var rectX; //buttonX minus half (buttonDist+buttBor)

// our 8 boos
let switchOn = false,
switchText = 'ON'; //initial text to display on the button
let switchOn2 = false,
switchText2 = 'ON'; //initial text to display on the button
let switchOn3 = false,
switchText3 = 'ON'; //initial text to display on the button
let switchOn4 = false,
switchText4 = 'ON'; //initial text to display on the button
let switchOn5 = false,
switchText5 = 'ON'; //initial text to display on the button
let switchOn6 = false,
switchText6 = 'ON'; //initial text to display on the button
let switchOn7 = false,
switchText7 = 'ON'; //initial text to display on the button
let switchOn8 = false,
switchText8 = 'ON'; //initial text to display on the button

// scale factor
var sf;

// zoom button coordinates
let zoomX;
let zoominY = 55;
let zoomoutY = 80;

// direction button coords
let leftX, rightX;
let upY=140;
let lrY=200;
let downY=165;
let mf = 35;


function setup() {
cnv = createCanvas(windowWidth, windowHeight);
layerX= windowWidth/2;
layerY= windowHeight/2;
// all the layers in their starting position
  layer1= createImg("images/1.svg");
  layer1.style('width', '100');
  layer2= createImg("images/2.svg");
        layer2.style('width', '100');
  layer3= createImg("images/3.svg");
            layer3.style('width', '100');
  layer4= createImg("images/4.svg");
        layer4.style('width', '100');
layer5= createImg("images/5.svg");
    layer5.style('width', '100');
layer6= createImg("images/6.svg");
      layer6.style('width', '100');
layer7= createImg("images/7.svg");
          layer7.style('width', '100');
layer8= createImg("images/8-1.svg");
      layer8.style('width', '100');
layer82= createImg("images/8-2.svg");
      layer82.style('width', '100');
layer83= createImg("images/8-3.svg");
      layer83.style('width', '100');

// mainly to translate origin to centre
layer1.addClass('layerClass')
layer2.addClass('layerClass')
layer3.addClass('layerClass')
layer4.addClass('layerClass')
layer5.addClass('layerClass')
layer6.addClass('layerClass')
layer7.addClass('layerClass')
layer8.addClass('layerClass')
layer82.addClass('layerClass')
layer83.addClass('layerClass')

banX = windowWidth;

if (windowWidth <= mobBr) {
buttonX = -50;
  zoomX = -50;
  leftX = -50;
  rightX = -50;
  rectX= -50;
  sf = 550;
  banBack = windowHeight-50;
}
  else if (windowWidth >= mobBr) {
    buttonX = 50;
      zoomX = windowWidth-50;
      leftX = zoomX-13;
      rightX = zoomX+13;
      rectX = 32;
      sf = 100;
      banBack = windowHeight;
  }


//   layer1Button = createButton ("1")
// layer1Button.mouseClicked(butL1)

}



function draw() {

  // zoom buttons x positions, to change with screen size changes, also with mob break point
  if (windowWidth <= mobBr) {
  buttonX = -50;
    zoomX = -50;
    leftX = -50;
    rightX = -50;
      rectX= -50;
        banX = banX - banSpeed
        banBack = windowHeight-50;
  }
    else if (windowWidth >= mobBr) {
      buttonX = 50;
        zoomX = windowWidth-50;
        leftX = zoomX-13;
        rightX = zoomX+13;
        rectX = 32;
          banX = windowWidth
          banBack = windowHeight;
    }

    if (banX <=-2610){
      banX = windowWidth;
    }

// layer positions
layer1.position(layerX,layerY);
layer2.position(layerX,layerY);
layer3.position(layerX,layerY);
layer4.position(layerX,layerY);
layer5.position(layerX,layerY);
layer6.position(layerX,layerY);
layer7.position(layerX,layerY);
layer8.position(layerX,layerY);
layer82.position(layerX,layerY);
layer83.position(layerX,layerY);

// this is to allow for scaling using mousewheel
layer1.style('width', sf+"%");
layer2.style('width', sf+"%");
layer3.style('width', sf+"%");
layer4.style('width', sf+"%");
layer5.style('width', sf+"%");
layer6.style('width', sf+"%");
layer7.style('width', sf+"%");
layer8.style('width', sf+"%");
layer82.style('width', sf+"%");
layer83.style('width', sf+"%");



  layer1.style('opacity', layer1Vis);
    layer2.style('opacity', layer2Vis);
      layer3.style('opacity', layer3Vis);
        layer4.style('opacity', layer4Vis);
          layer5.style('opacity', layer5Vis);
            layer6.style('opacity', layer6Vis);
              layer7.style('opacity', layer7Vis);
                layer8.style('opacity', layer8Vis);
                  layer82.style('opacity', layer82Vis);
                  layer83.style('opacity', layer82Vis);

  if (switchOn) {
                      layer1Vis = (0); //if the state of the switch is 'On', initiate background color change
                      switchText = 'OFF';
                    } else {
                      layer1Vis = 1; //if the state of the switch is not 'On', make background dark
                      switchText = 'ON';
                    }

  if (switchOn2) {
    layer2Vis = (0); //if the state of the switch is 'On', initiate background color change
    switchText2 = 'OFF';
  } else {
    layer2Vis = 1; //if the state of the switch is not 'On', make background dark
    switchText2 = 'ON';
  }
  if (switchOn3) {
      layer3Vis = (0); //if the state of the switch is 'On', initiate background color change
      switchText3 = 'OFF';
    } else {
      layer3Vis = 1; //if the state of the switch is not 'On', make background dark
      switchText3 = 'ON';
    }
  if (switchOn4) {
    layer4Vis = (0); //if the state of the switch is 'On', initiate background color change
    switchText4 = 'OFF';
  } else {
    layer4Vis = 1; //if the state of the switch is not 'On', make background dark
    switchText4 = 'ON';
  }
  if (switchOn5) {
    layer5Vis = (0); //if the state of the switch is 'On', initiate background color change
    switchText5 = 'OFF';
  } else {
    layer5Vis = 1; //if the state of the switch is not 'On', make background dark
    switchText5 = 'ON';
  }
  if (switchOn6) {
    layer6Vis = (0); //if the state of the switch is 'On', initiate background color change
    switchText6 = 'OFF';
  } else {
    layer6Vis = 1; //if the state of the switch is not 'On', make background dark
    switchText6 = 'ON';
  }
if (switchOn7) {
    layer7Vis = (0); //if the state of the switch is 'On', initiate background color change
    switchText7 = 'OFF';
  } else {
    layer7Vis = 1; //if the state of the switch is not 'On', make background dark
    switchText7 = 'ON';
  }
  if (switchOn8) {
    layer8Vis = (0); //if the state of the switch is 'On', initiate background color change
    layer82Vis = (0);
    switchText8 = 'OFF';
  } else {
    layer8Vis = 1; //if the state of the switch is not 'On', make background dark
    layer82Vis = (0.85);
    switchText8 = 'ON';
  }

// background/borders for on off buttonDist, and direction buttons
  scale(1);
  noStroke();
  fill (56);
  circle(buttonX, buttonY, bttnSize+buttBor)
  rect(rectX,buttonY,bttnSize+buttBor,7*buttonDist)
  circle(buttonX, buttonY+7*buttonDist, bttnSize+buttBor)

  circle(zoomX, zoominY, bttnSize+buttBor)
  circle(zoomX, zoomoutY, bttnSize+buttBor)
  circle(zoomX, upY, bttnSize+buttBor)
  circle(zoomX, downY, bttnSize+buttBor)
  circle(leftX, lrY, bttnSize+buttBor)
  circle(rightX, lrY, bttnSize+buttBor)


  // this is 'button 1' with on/off text
  noStroke();
  fill ("#3C68C3");
  circle(buttonX, buttonY, bttnSize)
  fill (33,33,33)
  textFont('HERAHUGHES', 18)
  textAlign(CENTER, CENTER);
  text(switchText, buttonX, buttonY);

  // this is 'button 2' with on/off text
  noStroke();
  fill ("#F05E65");
  circle(buttonX, buttonY+buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText2, buttonX, buttonY+buttonDist);

  // this is 'button 3' with on/off text
  noStroke();
  fill ("#C9C8C9");
  circle(buttonX, buttonY+2*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText3, buttonX, buttonY+2*buttonDist);

  // this is 'button 4' with on/off text
  noStroke();
  fill ("#77CDEE");
  circle(buttonX, buttonY+3*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText4, buttonX, buttonY+3*buttonDist);

  // this is 'button 5' with on/off text
  noStroke();
  fill ("#EFA0BF");
  circle(buttonX, buttonY+4*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText5, buttonX, buttonY+4*buttonDist);

  // this is 'button 6' with on/off text
  noStroke();
  fill ("#FAF057");
  circle(buttonX, buttonY+5*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText6, buttonX, buttonY+5*buttonDist);

  // this is 'button 7' with on/off text
  noStroke();
  fill ("#715DA9");
  circle(buttonX, buttonY+6*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText7, buttonX, buttonY+6*buttonDist);

  // this is 'button 8' with on/off text
  noStroke();
  fill ("#16A86D");
  circle(buttonX, buttonY+7*buttonDist, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text(switchText8, buttonX, buttonY+7*buttonDist);

  // these are the zoom buttons
  noStroke();
  fill (165);
  circle(zoomX, zoominY, bttnSize)
  circle(zoomX, zoomoutY, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text('+', zoomX, zoominY);
   text('–', zoomX, zoomoutY);

     // these are the arrow buttons
  noStroke();
  fill (165);
  circle(zoomX, upY, bttnSize)
  circle(zoomX, downY, bttnSize)
  circle(leftX, lrY, bttnSize)
  circle(rightX, lrY, bttnSize)
  fill (33,33,33)
  textAlign(CENTER, CENTER);
  text('^', zoomX, upY);
  text('v', zoomX, downY)
  text('<', leftX, lrY)
  text('>', rightX,lrY)

// mobile banner for the time being, because we don't have time to develop the web version proper :(

rect (0,banBack, windowWidth, 50)
fill ("#C9C8C9");
textSize (50)
textAlign (LEFT, TOP)
text(mobBan, banX, windowHeight-50)
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);

}



function mouseClicked() {

// switch on and off buttons
  let distance = dist(mouseX, mouseY, buttonX, buttonY);
  let distance2 = dist(mouseX, mouseY, buttonX, buttonY+buttonDist);
  let distance3 = dist(mouseX, mouseY, buttonX, buttonY+2*buttonDist);
  let distance4 = dist(mouseX, mouseY, buttonX, buttonY+3*buttonDist);
  let distance5 = dist(mouseX, mouseY, buttonX, buttonY+4*buttonDist);
  let distance6 = dist(mouseX, mouseY, buttonX, buttonY+5*buttonDist);
  let distance7 = dist(mouseX, mouseY, buttonX, buttonY+6*buttonDist);
  let distance8 = dist(mouseX, mouseY, buttonX, buttonY+7*buttonDist);

// zoom button distances
  let distancezIn = dist(mouseX, mouseY, zoomX, zoominY);
let distancezOut = dist(mouseX, mouseY, zoomX, zoomoutY);
// move button distances
 let distanceUp = dist(mouseX, mouseY, zoomX, upY);
let distanceDown = dist(mouseX, mouseY, zoomX, downY);
 let distanceLeft = dist(mouseX, mouseY, leftX, lrY);
let distanceRight = dist(mouseX, mouseY, rightX, lrY);


  if (distance <= bttnSize / 2) {
    switchOn = !switchOn;
  }
  if (distance2 <= bttnSize / 2) {
      switchOn2 = !switchOn2;
    }
  if (distance3 <= bttnSize / 2) {
        switchOn3 = !switchOn3;
      }
  if (distance4 <= bttnSize / 2) {
          switchOn4 = !switchOn4;
        }
  if (distance5 <= bttnSize / 2) {
            switchOn5 = !switchOn5;
          }
  if (distance6 <= bttnSize / 2) {
    switchOn6 = !switchOn6;
            }
  if (distance7 <= bttnSize / 2) {
        switchOn7 = !switchOn7;
              }
  if (distance8 <= bttnSize / 2) {
          switchOn8 = !switchOn8;
                }

                // zoom controls
                  if (distancezIn <= bttnSize / 2) {
                    sf = sf+30
                  }
                if (distancezOut <= bttnSize / 2) {
                   sf=sf-30
                  }

              // move controls
                if (distanceUp <= bttnSize / 2) {
                   layerY=layerY+mf
                  }
                if (distanceDown <= bttnSize / 2) {
                   layerY=layerY-mf
                  }
                if (distanceLeft <= bttnSize / 2) {
                   layerX=layerX+mf
                  }
                if (distanceRight <= bttnSize / 2) {
                   layerX=layerX-mf
                  }

  }


  // function butL1() {
  //  if (layer1Vis === 1) {
  //   layer1Vis = 0;
  //   switchOn = !switchOn;
  // } else {
  //   layer1Vis = 1;
  //   switchOn = !switchOn;
  // }
  // }


// to allow movement with the arrows
  function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    layerX=layerX+mf;
  } else if (keyCode === RIGHT_ARROW) {
    layerX=layerX-mf;
  }else if (keyCode === UP_ARROW) {
    layerY=layerY+mf;
  }else if (keyCode === DOWN_ARROW) {
    layerY=layerY-mf;
  }
}

  // prevent default doubleclick
function doubleClicked() {
  return false;
}


  window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0)
      sf *= 1.05;
    else
      sf *= 0.95;
  });
