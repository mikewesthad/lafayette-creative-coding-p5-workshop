/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		mouseIsPressed
		mouseButton
		mouseX, mouseY
        keyPressed(...)
        key, keyCode

	See index.html for disabling the right click menu.
*/

var colorHue = 0;

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

	// Fill the canvas with a color before we start drawing
	background(0, 0, 0);

	// Switch to HSB mode and set max values for: hue, saturation, value, alpha
	colorMode(HSB, 360, 100, 100, 1);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	// console.log(mouseIsPressed, mouseButton);

    colorHue += 5;
	// Wrap the hue around if it exceeds 360
    if (colorHue > 360) {
        colorHue -= 360;
    }

    fill(colorHue, 100, 100); // Constantly changing hue
    stroke(0, 0, 100); // White

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            // Normal ellipse
            ellipse(mouseX, mouseY, 20);
            // Flipped horizontally
            ellipse(width - mouseX, mouseY, 20);
            // Flipped vertically
            ellipse(mouseX, height - mouseY, 20);
            // Flipped vertically && horizontally
            ellipse(width - mouseX, height - mouseY, 20);
        } else if (mouseButton === RIGHT) {
            background(0, 0, 0);
        }
    }
}

function keyPressed() {
    // console.log(keyCode, key);

    if (key === "S") {
        saveCanvas("screenshot", "png");
    }
}
