/*
	Images!

	Note! In order to run this sketch, you must view your webpage through a
	local server. Your sketch will work fine when it is hosted online on GitHub,
	but when viewing the files from your HD, the browser has security
	restrictions that won't allow loading images. In atom, you can use the
	atom-live-server package to create a local server. For alternatives, see:
		https://github.com/processing/p5.js/wiki/Local-server

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		preload()
		loadImage(...)

	p5.image variables and functions:
		img.resize(...)
		img.loadPixels(...)
		img.get(...)
*/

var img;

// Anything that goes in preload will be loaded BEFORE setup runs. This is
// exactly what we want when loading images, sounds, fonts, etc.
function preload() {
	img = loadImage("images/nasa-selfie.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	// The bigger the image, the slower the sketch will be. We will resize our
	// image to match the height of the canvas. (Using 0 with image resize means
	// that p5 will figure out the scaling so that the aspect ratio is
	// preserved.)
	img.resize(0, height);

	// Draw the image to the canvas at (0, 0). If you want a more abstract
	// drawing experience, comment out this line!
	image(img, 0, 0);

	// Before doing anything with pixels, we need to make sure they are loaded
	// for this image
	img.loadPixels();
}

function draw() {
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			var pixelColor = img.get(mouseX, mouseY);

			// Check out the pixelColor variable. It is an array with four
			// values: r, g, b, a
			// console.log(pixelColor);

			// Calculate a diameter for our circle based on the distance the
			// mouse has moved: small for small movements, big for big movements
			var d = dist(mouseX, mouseY, pmouseX, pmouseY);
			var diameter = map(d, 0, 100, 10, 200);
			diameter = constrain(diameter, 10, 200);

			// Draw a circle at the mouse position that has the color from the
			// image pixel underneath the mouse
			fill(pixelColor[0], pixelColor[1], pixelColor[2], 200);
			noStroke();
			ellipse(mouseX, mouseY, diameter);

		} else if (mouseButton === RIGHT) {
			background(255);
		}

	}
}
