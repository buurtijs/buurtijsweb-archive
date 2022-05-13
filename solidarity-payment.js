document.title = "BUURTIJS - Solidarity Payment";

let cnv;
var wage;
var xTubs;
var solidaritySwitch
let solidText;

function setup() {
  cnv = createCanvas(10, 10);
  wage = select('#wage');
  wage.input(updatePayments);
  xTubs = select('#xtubs')
  xTubs.input(updatePayments)

  solidaritySwitch = select('#whatsolidarity')
  solidaritySwitch.mousePressed(changeClass);

solidText = select('#solidText')
solidText.mousePressed(changeBack)

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

function changeClass () {
  select('#solidText').class('solidaritypop')
}

function changeBack () {
  select('#solidText').class('solidaritypopHide')
}
