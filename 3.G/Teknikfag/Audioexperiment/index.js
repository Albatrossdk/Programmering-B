let beatInterval = (60 / 138) * 1000; // Calculate the interval between beats
let songDuration = 5 * 60 * 1000 + 11 * 1000; // Convert song duration to milliseconds
let beatTimes = []; // Initialize an empty array for beat times
let currentBeat = 0; // Initialize the current beat to 0
let fallingCircles = []; // Initialize an empty array for falling circles
let circleSpeed = 5; // Set the speed for all falling circles

function setup() {
  createCanvas(400, 400);
  frameRate(60); // Set the frame rate to 60 fps
}

function draw() {
  background(220);
  stroke(0);
  line(0, height/2, width, height/2); // Draw the horizontal line
  
  // Draw the falling circles and check if they hit the line at the right time
  for (let i = 0; i < fallingCircles.length; i++) {
    let circle = fallingCircles[i];
    circle.y += circleSpeed;
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(circle.x, circle.y, circle.size, circle.size);
    if (circle.y >= height/2 && abs(circle.x - beatTimes[circle.beatIndex]) <= circle.size/2 && !circle.hit) {
      circle.hit = true;
    }
  }
  
  // Check if it's time to create a new falling circle
  if (currentBeat < beatTimes.length) {
    let elapsedTime = millis() - beatTimes[currentBeat];
    if (elapsedTime >= beatInterval && elapsedTime < beatInterval + 100) {
      fallingCircles.push({
        x: random(width), // Set the x position randomly
        y: 0, // Start at the top of the screen
        size: random(10, 50), // Set the size randomly
        beatIndex: currentBeat, // Set the beat index
        hit: false // Initialize the hit flag to false
      });
    }
    if (elapsedTime >= beatInterval) {
      currentBeat++;
    }
  }
  
  // Remove the falling circles that have hit the line
  for (let i = fallingCircles.length - 1; i >= 0; i--) {
    if (fallingCircles[i].hit) {
      fallingCircles.splice(i, 1);
    }
  }
}

function preload() {
  // Load the song
  song = loadSound('./assets/bongo2.mp3', function() {
    // Calculate the beat times when the song is loaded
    for (let i = 1; i * beatInterval < song.duration() * 1000; i++) {
      if (i % 4 === 0) {
        beatTimes.push(i * beatInterval);
      }
    }
    // Start the song
    song.play();
  });
}