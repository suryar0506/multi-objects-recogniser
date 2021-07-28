var img = "";
var status = "";
var objects = [];

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(700, 500);
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
        objects = result;
    }
}

function draw(){
    image(img, 0, 0, 700, 500);
    
if(status != ""){
    for(var i = 0; i<objects.length; i++){
        fill('red');
        textSize(15);
        textFont('Arial');
        strokeWeight(2);
        percentage = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percentage + "%", objects[i].x + 10, objects[i].y + 30);
        noFill();
        strokeWeight(5);
        stroke('red');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
    
}