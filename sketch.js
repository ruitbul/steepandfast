function setup() {
	createCanvas(800, 800);
	background(0);

	
  beginShape();
  vertex(245, 24);
  vertex(249, 30);
  vertex(76, 363);
  endShape(CLOSE);

  beginShape();
  vertex(245, 24);
  vertex(341, 108);
  vertex(245, 29);
  endShape();

  
  beginShape();
  vertex(179, 163);
  vertex(241, 227);
  vertex(175, 163);
  endShape();

  ellipse(132, 236, 13, 13);
}