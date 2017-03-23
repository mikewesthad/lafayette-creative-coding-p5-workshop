/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		windowWidth, windowHeight
		mouseIsPressed
		mouseButton
		mouseX, mouseY
		random(...)
		colorMode(...)
        keyPressed(...)
        key, keyCode

	Color picker: http://alloyui.com/examples/color-picker/hsv/

	See index.html for disabling the right click menu.
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	// Canvas that matches the size of the browser window
	createCanvas(windowWidth, windowHeight);

	// Fill the canvas with a color before we start drawing
	background(255, 255, 255);

	// Switch to HSB mode and set the max values for each color channel:
	// 	hue = 360
	// 	sat = 100
	// 	bright = 100
	// 	alpha = 1
	colorMode(HSB, 360, 100, 100, 1);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	// Open the console in the browser to see these printed out:
	console.log(mouseIsPressed, mouseButton);
	
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			// Left mouse button pressed - draw ellipse symmetry

			noStroke();
			fill(300, random(20, 100), 100);
			// If you add a 4th parameter to the fill, it is for transparency

			// Draw at the mouse
			ellipse(mouseX, mouseY, 100);
			// Flip horizontally
			ellipse(width - mouseX, mouseY, 100);
			// Flip vertically
			ellipse(mouseX, height - mouseY, 100);
			// Flip both vertically and horizontally
			ellipse(width - mouseX, height - mouseY, 100);

			// You could also randomize the diameter of the circle!

		} else if (mouseButton === RIGHT) {
			// Right mouse button pressed - clear the screen

			background(0, 0, 100);

		} else if (mouseButton === CENTER) {
			// Center mouse button pressed - draw line symmetry

			stroke(10, random(20, 100), 100);
			strokeWeight(20);
			// Line: x1, y1, x2, y2
			line(mouseX, mouseY, width - mouseX, height - mouseY);

		}
	}
}


// keyPressed is another function built into p5. Any code you put inside of
// keyPressed is run whenever a key on the keyboard is pressed.
function keyPressed() {
	// Open the console in the browser to see the key variable printed out
	console.log(key);

	// Save if the key is the "S" key - this is not case sensitive. If you need
	// case sensitivity, see the keyTyped function documentation.
	if (key === "S") {
		saveCanvas("screenshot", "png");
	}
}
