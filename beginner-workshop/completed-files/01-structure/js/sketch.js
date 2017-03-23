/*
	Let's create some shapes with p5. Ellipses, rectangles, lines, oh my.

	Check out the p5 reference page: http://p5js.org/reference. See the
	structure, shape and color sections.

	p5 structure:
		setup(), draw()

	p5 global functions:
		createCanvas(...)
		background(...)
		fill(...), noFill(...)
		stroke(...), noStroke(...), strokeWeight(...)
		ellipse(...), rect(...)

	p5 global variables:
		mouseX, mouseY

	Color picker: http://alloyui.com/examples/color-picker/hsv/
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
    // Create a drawing surface
    createCanvas(800, 600);

	// Draw a black background using the RGB color model
	background(0, 0, 0);

	// Set the style for drawing
	fill(255, 255, 255);
	stroke(255, 200, 0);
	strokeWeight(10);

	// Draw some shapes using that set style
	ellipse(200, 100, 200); // x, y, diameter
	rect(150, 150, 100, 200); // x, y, w, h
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	// Draw a circle at the mouse position:
    fill(100, 0, 255);
    stroke(255, 255, 255);
    strokeWeight(1);
    ellipse(mouseX, mouseY, 20);

	// You can also draw a line from the previous mouse point to the current
	// mouse point
    // stroke(255, 255, 255);
    // strokeWeight(1);
    // line(pmouseX, pmouseY, mouseX, mouseY);
}
