/*
	Sound & noise!

	Note: Again, you'll need a local server for this one. See comment at the top
	of 04-images.

	For loading and manipulating sound, you need to include p5.sound in
	index.html! Hop over to index and uncomment out the script that points to
	p5.sound.

	Check out the p5 reference page: http://p5js.org/reference.
	Check out the p5.sound reference page: http://p5js.org/reference/#/libraries/p5.sound.
*/

var musicTrack;
var amplitude;

// Anything that goes in preload will be loaded BEFORE setup runs. This is
// exactly what we want when loading images, sounds, fonts, etc.
function preload() {
	musicTrack = loadSound("sounds/broke-for-free.mp3")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	// Start the music playing
	musicTrack.play();

	// Get the amplitude of all sounds playing though p5
	amplitude = new p5.Amplitude();
}

function draw() {
	background(0, 10); // Slowly clear the screen using a transparent black

	// Styling for the ellipse
	fill(255, 255, 255);
	stroke(255, 200, 0);
	strokeWeight(25);

	// Get the current volume (a number between 0 and 1)
	var level = amplitude.getLevel();
	// Use the volume to figure out a diameter for the ellipse
	var size = map(level, 0, 1, 100, 1000);
	ellipse(width / 2, height / 2, size);

	// Change the speed of playback based on the mouseX position on the screen
	var newRate = map(mouseX, 0, width, 0.01, 5);
	musicTrack.rate(newRate);
}
