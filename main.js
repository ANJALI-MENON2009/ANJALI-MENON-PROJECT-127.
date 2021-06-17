parinda = "" ;
rightWristX = 0 ;
leftWristX = 0 ;
rightWristy = 0 ;
leftWristY = 0 ;

function preload() {
  // parinda = loadSound("parinda.mp3") ;
}

function setup() {
  canvas = createCanvas(400, 300) ;
  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video, modelLoaded) ;
  posenet.on('pose', gotResult) ;
}
function draw() {
  image(video, 0, 0, 400, 300) ;
}

function modelLoaded() {
  console.log("Model is ready to use...") ;
}
function gotResult(results) {
  console.log(results) ;
  rightWristX = results[0].pose.rightWrist.x ;
  rightWristY = results[0].pose.rightWrist.y ;
  leftWristX = results[0].pose.leftWrist.x ;
  leftWristY = results[0].pose.leftWrist.y ;

}