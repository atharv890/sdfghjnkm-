gaana="";
right_WristX=0;
right_WristY=0;
left_WristX=0;
left_WristY=0;
score=0;
function preload(){
    gaana="hi.mp3";
}
function setup(){
    canvas=createCanvas(650,500);
    canvas.position(400,200);
    video=createCapture(VIDEO);
video.hide();
hi=ml5.poseNet(video,modelloaded);
hi.on("pose",gotResults);
}
function modelloaded(){
    console.log("Model is loaded")
}
function draw(){
    image(video,0,0,650,500);
    filter(OPAQUE);
    if(score>0.2){
stroke("red");
fill("yellow");
circle(left_WristX,left_WristY,20);
gaana.stop();
}
}
function bye(){
    gaana.play();
    gaana.setVolume(0.5);
    gaana.rate(1.0);
}
function gotResults(results){
    if(results){
        console.log(results);
        score=results[0].pose.keypoints[9].score;
        left_WristX=results[0].pose.leftWrist.x;
        right_WristX=results[0].pose.rightWrist.x;
        right_WristY=results[0].pose.rightWrist.y;
        left_WristY=results[0].pose.leftWrist.y;
        console.log("left_WristX : "+left_WristX,"right_WristY :"+right_WristX, "right_WristX :"+right_WristY, "left_WristY : "+left_WristY);
    }}