let points = [];
let index = 0;


function setup() {
  createCanvas(400, 400);
  background(0);
  
  // Draw the text to screen
  fill(255);
  textSize(60);
  textAlign(CENTER, TOP);
  text("NATURE", 200, 100);
  textAlign(CENTER, CENTER);
  text("OF", 200, height/2);
  textAlign(CENTER, BASELINE);
  text("CODE", width/2, height/2 + 100);
  
  //Scan the canvas for white pixels and save their positions
  loadPixels();
  for (let x = 0; x < width; x += 3) { 
    for (let y = 0; y < height; y += 3) {
      let pix = get(x, y);
      if (pix[0] > 128) { // If the pixel is bright (white text)
        points.push({x: x, y: y});
      }
    }
  }
  
  background('black');
}

function draw() {

    
  if (index < points.length) {
    let p = points[index];
    stroke(0, 255, 100);
    strokeWeight(4);
    point(p.x, p.y);
    index++;
  }
  
}