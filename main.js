value = "";

function setup()
{
  canvas = createCanvas(400,300);
  canvas.center();
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   document.getElementById("form_control").value;
}

function modelLoaded()
{
  console.log("Model loaded!")
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

