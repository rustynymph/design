var bubbleSize = 100;

function setup(){
	canvas_width = windowWidth;
    canvas_height = $(document).height();
    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-3');
    cnv.parent('canvascontainer');
    colorMode(RGB); // Try changing to HSB or HSL.
    if (canvas_width < 400){
        bubbleSize = 50;
    } else if (canvas_width < 800) {
        bubbleSize = 70;
    } else {
        bubbleSize = 90;
    }  
}

function draw(){
    setColors();
    makeBubble();
}

function windowResized() {
	canvas_width = windowWidth;
    canvas_height = $(document).height();
    if (canvas_width < 400){
        bubbleSize = 50;
    } else if (canvas_width < 800) {
        bubbleSize = 70;
    } else {
        bubbleSize = 90;
    }   
    resizeCanvas(windowWidth, windowHeight);
}

function setColors() {
    //var inter = map(mouseX, 0, windowWidth, 0, 1);
    //var c = lerpColor(color(171, 171, 171), color(134, 141, 219), inter);
    //var c = lerpColor(color(171, 171, 171), color(235, 47, 204), inter);
    //var c = lerpColor(color(250, 85, 85), color(132, 142, 245), inter);
    //var c = lerpColor(color(255, 204, 0), color(92, 92, 255), inter);
    //var c = lerpColor(color('hsl(48, 100%, 50%)'), color('hsl(240, 100%, 68%)'), inter)
    //fill(c);
    fill(0);
    //stroke(c);
    stroke(255);
}

function makeBubble() {
    ellipse(mouseX, mouseY, bubbleSize, bubbleSize);
}