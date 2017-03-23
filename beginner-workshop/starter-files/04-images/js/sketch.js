/*
	Images!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		preload()
		loadImage(...)

	p5.image variables and functions:
		img.resize(...)
		img.loadPixels(...)
		img.get(...)
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Fill the canvas with a color before we start drawing
	background(255, 255, 255);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			// Left mouse clicked!
		}
	}
}

// keyPressed is another function built into p5. Any code you put inside of
// keyPressed is run whenever a key on the keyboard is pressed.
function keyPressed() {
	if (key === "S") {
		saveCanvas("screenshot", "png");
	}
}
