/*
	Video and Webcam

	Note: Again, you'll need a local server for this one. See comment at the top
	of 04-images.

	For loading video or the webcam, you need to include p5.dom in index.html!
	Hop over to index and uncomment out the script that points to p5.dom.

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

var video;
var sampleSizeSlider;
var distanceSlider;

function setup() {
	createCanvas(640, 480);

    // Creates a new HTML5 video element (outside of the p5 canvas). See:
    // http://p5js.org/reference/#/p5/createVideo
    // Slides: supported formats
	video = createVideo("videos/electric-sheep.mp4");
	video.loop(); // Start the video playing and make it loop
    video.position(0, height); // Place the video below the canvas
	// video.hide(); // Hide the video

	// Create a slider on the page so that we can change the sample size
	// interactively (see draw).
	sampleSizeSlider = createSlider(10, 1000, 100); // Min, max, default value
    sampleSizeSlider.position(width + 20, 20);

	// Create a slider on the page so that we can change the distance for
	// scaling the rectangles interactively (see draw).
	distanceSlider = createSlider(50, 600, 100); // Min, max, default value
    distanceSlider.position(width + 20, 60);

	rectMode(CENTER);
}

function draw() {
	// Draw the current frame to the screen and filter it
	// image(video, 0, 0);
	// filter(POSTERIZE, 3);

	// If we want to read the pixels, we need to load pixels on every frame
	video.loadPixels();

	// If there are no pixels available, exit the draw function early so nothing
	// else runs below this point
	if (!video.pixels || video.pixels.length === 0) {
		return;
	}

	if (mouseIsPressed) {
		// Get the current values from the sliders
		var maxDistance = distanceSlider.value();
		var samples = sampleSizeSlider.value();

		for (var i = 0; i < samples; i++) {
			// Pick a random point in the video (and make sure it is a whole
			// number by using floor)
			var x = floor(random(0, video.width));
			var y = floor(random(0, video.height));

			// Get the RGB for that random point
			var pixelIndex = 4 * (y * video.width + x);
			var r = video.pixels[pixelIndex];
			var g = video.pixels[pixelIndex + 1];
			var b = video.pixels[pixelIndex + 2];

			noStroke();
			fill(r, g, b, 200);

			// Draw a rectangle - it should be big when it is close to the mouse
			// and small when it is far from the mouse
			var d = dist(x, y, mouseX, mouseY);
			var s = map(d, 0, maxDistance, 50, 0);
			s = constrain(s, 0, 50);
			rect(x, y, s, s);
		}
	}
}
