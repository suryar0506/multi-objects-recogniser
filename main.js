
var status = "";
var objects = [];

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    document.getElementById("status_display").innerHTML = "Detecting objects ";
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model is ready to go!");
    status = true;
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
    image(video, 0, 0, 380, 380);
    
if(status != ""){
    r = random(255);
    g = random(255);
    b = random(255);

    objectDetector.detect(video, gotResult);
    for(var i = 0; i<objects.length; i++){
        fill(r, g, b);
        textSize(15);
        textFont('Arial');
        strokeWeight(2);
        percentage = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percentage + "%", objects[i].x + 10, objects[i].y + 30);
        noFill();
        strokeWeight(5);
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        document.getElementById("objects_count_display").innerHTML = objects.length;
    }
}
    
}