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
		windowWidth, windowHeight
		mouseX, mouseY
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
    // Create a canvas of a particular size. windowWidth and windowHeight are
    // the size of the browser window.
    createCanvas(windowWidth, windowHeight);

	// Draw a black background using RGB
	background(0, 0, 0);

	// Set the style for drawing
	fill(255, 255, 255);
	stroke(255, 200, 0);
	strokeWeight(10);

	// Draw some shapes
	ellipse(200, 100, 100); // x, y, diameter
	rect(150, 150, 100, 200); // x, y, w, h
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	fill(100, 0, 255);
	stroke(255, 255, 255);
	strokeWeight(2);

    // Mouse coordinates relative to the canvas
	ellipse(mouseX, mouseY, 40);
}
