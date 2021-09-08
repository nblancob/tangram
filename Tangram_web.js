let dx;

function setup() {
  createCanvas(1000,600,WEBGL);

}


function draw() {
  fill(255,23,53);
  strokeWeight(43);
  //line(23,42,12);
  if (dist(500,296,mouseX,mouseY)<30){
    cursor(HAND);
    if(mouseIsPressed){
      push();
      //translate(mouseX,mouseY);
      pop();
    }
  else{cursor(ARROW);
      }
  }
  fill(43,23,53);
  quad( -75, 0, 0, -75, 75, 0, 0, 75);
}

function mouseWheel(event) {
  dx=dx+event.delta;
  redraw();
}
