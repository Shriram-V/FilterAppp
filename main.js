function preload() {}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    posenet = poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}


function draw() {
    image(video, 0, 0, 350, 350);
}

function takeSnapshot() {
    save('Filter_image.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("X of left eye =" + results.[0].pose.leftEye.x);
        console.log("Y of left eye =" + results.[0].pose.leftEye.y);
        console.log("X of right eye =" + results.[0].pose.rightEye.x);
        console.log("Y of right eye =" + results.[0].pose.rightEye.y);
    }
}