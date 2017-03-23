/*
	Transformation - translate, rotate, scale

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		push() & pop()
		translate(...)
		rotate(...)
		scale(...)
		angleMode(...)
		rectMode(...)
		dist(...)
		map(...)

	See index.html for disabling the right click menu.
*/

var angle = 0;

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Fill the canvas with a color before we start drawing
	background(0, 0, 0);

	// Mode setup
	colorMode(HSB, 360, 100, 100, 1);
	angleMode(DEGREES);
	rectMode(CENTER);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			angle += 5; // Increment whenever the mouse is pressed

			// Change the scale based on how far the mouse has moved since the
			// last frame. Find the distance:
			var d = dist(pmouseX, pmouseY, mouseX, mouseY);
			// Remap the distance to the range 0.1 - 2
			var s = map(d, 0, 200, 0.1, 2);
			// Map doesn't prevent the value from going below 0.1 or above 2, so
			// we need to do an additional step to keep it in that range
			s = constrain(s, 0.1, 2);

			// Save the current style/transform
			push();

				// Apply transforms
				translate(mouseX, mouseY); 	// Move to the mouse position
				scale(s);					// Scale whatever is going to be drawn
				rotate(angle);				// Rotate whatever is going to be drawn

				// Draw transformed shapes - these are relative to the mouse
				// position. Here, draw a line connected by two circles.
				stroke(0, 0, 100);
				strokeWeight(3);
				line(-70, 0, 70, 0);
				noStroke();
				fill(20, 100, 100);
				ellipse(-70, 0, 20);
				ellipse(70, 0, 20);

			// Go back to the last style/transform. In other words, undo the
			// translate, scale and rotation we just applied.
			pop();
		} else {
			background(0, 0, 0);
		}
	}
}

function keyPressed() {
	if (key === "S") {
		saveCanvas("screenshot", "png");
	}
}
