var illus;
let song, analyzer;

// load jpg. and mp3 files
function preload() {
  illus = loadImage("./assets/home2.jpg");
  song = loadSound("./assets/opera.mp3");
}

// function for mouse interaction
function togglePlay() {
  if (song.isPlaying() == false) {
    song.play();
  } else {
    song.stop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // allow any part of the window as a play/stop toggle
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  song.play();

  // link the data of the amplitude with the file song
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}


function draw() {
  background(255);
  // call the image file as background
  image(illus, windowWidth / 2, (windowHeight / 2) - 50, illus.width / 2, illus.height / 2);
  let rms = analyzer.getLevel();
  fill(200, 200, 200, 50);
  stroke(0);
  strokeWeight(1.5);
  ellipse((width / 2) - 32, (height / 2) + 55, 15 + rms * 300, 3 + rms * 700);


  var titlehome = "· A home solo ·";
  drawingContext.font = "normal 13px Roboto Slab";
  drawingContext.textAlign = "center";
  fill(0);
  noStroke()
  text(titlehome, (width / 2) - 18, (height / 2) + 165);

  var int = "click to listen";
  drawingContext.font = "normal 8px Roboto Slab";
  drawingContext.textAlign = "center";
  fill(220);
  noStroke()
  text(int, (width / 2) - 18, (height / 2) + 180);

  fill(220);
  noStroke();
  translate(windowWidth / 2, windowHeight / 2);
  scale(1);
  triangle(-32, 145, -20, 130, -7, 145);
  scale(0.5);

}
