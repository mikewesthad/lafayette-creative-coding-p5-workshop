/*
	Video and Webcam

	Note: Again, you'll need a local server for this one. See comment at the top
	of 04-images.

	For loading video or the webcam, you need to include p5.dom in index.html!
	Hop over to index and uncomment out the script that points to p5.dom. This
	demo uses the webcam, but the same process works if you load a video with
	createVideo(...). See the p5.dom reference page.

	Check out the p5 reference page: http://p5js.org/reference.
	Check out the p5.dom reference page: http://p5js.org/reference/#/libraries/p5.dom.

	New p5 variables and functions:
		saturation(...), hue(...), brightness(...)

	New p5.dom variables and functions:
		createVideo(...)
		createCapture(...)
		p5.MediaElement: play(), loop(), show()
		p5.Element: size(), position()
*/

var capture;
var sampleSizeSlider;

function setup() {
	createCanvas(640, 480);

    // Creates a new HTML5 video element with a live feed, that lives outside of
    // the p5 canvas. See: http://p5js.org/reference/#/p5/createCapture
	capture = createCapture(VIDEO);
	capture.size(640, 480); // Shrink the camera feed to a smaller size
    capture.position(0, height); // Place it below our canvas
	// capture.hide(); // Hides the camera feed

	// Create a slider on the page so that we can change the sample size (see
	// draw) interactively. This comes from the p5.dom library. Under the hood,
	// this creates an input element in HTML.
	sampleSizeSlider = createSlider(5, 30, 10); // Min, max, default value
    sampleSizeSlider.position(width + 20, 20);

	rectMode(CENTER);
}

function draw() {
	// Draw the current frame to the screen and filter it
	// image(capture, 0, 0);
	// filter(POSTERIZE, 3);

	// If we want to read the pixels, we need to load pixels on every frame
	capture.loadPixels();

	// If there are no pixels available, exit the draw function early so nothing
	// else runs below this point
	if (!capture.pixels || capture.pixels.length === 0) {
		return;
	}

	// Clear the screen
	background(0);

	// Loop over a sample of the pixels! There are a lot of pixels here, so we
	// can't loop over each individual one. Instead, we will skip around using
	// the value from the slider on the page
	var stepSize = sampleSizeSlider.value();
	for (var px = 0; px < capture.width; px += stepSize) {
		for (var py = 0; py < capture.height; py += stepSize) {
			// Pixels are stored in a giant, single-dimension array. Here's how
			// we convert from an x, y position to an index in that array:
			var i = 4 * (py * capture.width + px);

			// Accessing the color channels of a pixel
			var r = capture.pixels[i];
			var g = capture.pixels[i + 1];
			var b = capture.pixels[i + 2];
			var a = capture.pixels[i + 3];

			fill(r, g, b, 200);
			noStroke();

			// Getting color information using an array. If we have RGBA values,
			// we can calculate hue, saturation, brightness:
			var pixelSaturation = saturation([r, g, b, a]);
			var pixelBrightness = brightness([r, g, b, a]);
			var pixelHue = hue([r, g, b, a]);

			// Change the width and height based on brightness and saturation
			var rectWidth = map(pixelSaturation, 0, 100, 0, 2 * stepSize);
			var rectHeight = map(pixelBrightness, 0, 100, 0, 2 * stepSize);

			// Draw a rotated rectangle (based on hue) where the pixel in the
			// image would be
			rectMode(CENTER);
			angleMode(DEGREES);
			push();
				translate(px, py);
				rotate(pixelHue);
				rect(0, 0, rectWidth, rectHeight);
			pop();
		}
	}

	// You can do something more interesting than just drawing rotated
	// rectangles! E.g. you could create a brush that pulls color information
	// live from the camera feed (or from a loaded video)
}
