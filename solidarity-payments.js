document.title = "BUURTIJS - Solidarity Payment";

let cnv;
var wage;
var xTubs;

function setup() {
  cnv = createCanvas(windowWidth, 400);
  wage = select('#wage');
  wage.input(updatePayments);
  xTubs = select('#xtubs')
  xTubs.input(updatePayments)

//   createP('€ "input" /hr');
// createP('1 tub = 15 mins = €... <br> 2 tubs = 30 mins = €... <br> 3 tubs = 45 mins = €... <br> x tubs = x mins = €...')
// createA('http://p5js.org/', 'link to pay')
}

function draw() {
// background (33, 33, 33);
}

function updatePayments(){
priceOne = wage.html() / 4;
priceTwo = wage.html() / 2;
priceThree = wage.html()* 0.75;
tubMins = xTubs.html() * 15;
priceX = wage.html() * xTubs.html() / 4;
  select('#onetub').html(priceOne);
  select('#twotub').html(priceTwo);
  select('#threetub').html(priceThree);
  select('#tubmins').html(tubMins);
  select('#xtub').html(priceX);
}

// function updatePaymentx(){
// tubMins = xTubs.html() * 15;
// priceX = wage.html() * xTubs / 4;
//   select('#tubmins').html(tubMins);
//   select('#xtub').html(priceX);
// }



    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
