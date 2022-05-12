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

    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
