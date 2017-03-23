/*
	Server test!

	This isn't code we wrote in the workshop, it is just some code that we can
	use to test whether or not the server is set up correctly.
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);

	background(0);
	textAlign(CENTER);
	textSize(200);
	fill(255, 167, 15);
	noStroke();
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
	var x = width / 2;
	var y = height / 2;
	if (mouseX !== 0 && mouseY !== 0) {
		x = mouseX;
		y = mouseY;
	}

	background(0, 25);
	push();
		translate(x, y);
		rotate(frameCount / 30)
		text("I'm working", 0, 0);
	pop();
}
