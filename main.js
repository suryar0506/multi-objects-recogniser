var img = "";

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('red');
    textSize(20);
    textFont('Arial');
    strokeWeight(2);
    text("Dog", 45, 90);
    noFill();
    strokeWeight(5);
    stroke('red');
    rect(30, 60, 350, 450);
}