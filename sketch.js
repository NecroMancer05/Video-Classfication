let classifier;
let video;

function setup() {

  noCanvas();
  video = createCapture(VIDEO);
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}


function modelReady() {

  select('#status').html('Model loaded');

  classifyVideo();
}

function classifyVideo() {

  classifier.predict(video, gotResult);
}

function gotResult(error, results) {

  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
  classifyVideo();
}
