var img = "";
var status = "";

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_display").innerHTML = "Detecting objects ";
}

function modelLoaded(){
    console.log("Model is ready to go!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    } else {
        console.log(result);
    }
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
    rect(30, 60, 700, 450);

    fill('red');
    textSize(20);
    textFont('Arial');
    strokeWeight(2);
    text("Cat", 275, 90);
    noFill();
    strokeWeight(5);
    stroke('red');
    rect(260, 60, 350, 450);
}