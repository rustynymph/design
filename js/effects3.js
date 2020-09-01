var noiseMax = -1;
var zoff = 0;
var count = 0;
var ca, cb, cc;
var ox, oy;
var MAX;

function setup() {
	canvas_width = windowWidth;
    canvas_height = $(document).height();
    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-3');
    cnv.parent('canvascontainer');
    
    count = 0;

	angleMode(DEGREES);

	ca = color("#0CCBCFAA");
    cb = color("#FE68B5AA");
    cc = color("#A7F542AA");

	ox = width / 2;
	oy = height;

	MAX = width > height ? width : height;

	noFill();
	background(29, 29, 29);
}

function draw() {
    stroke(lerpColor(ca, cb, abs(sin(zoff * 100))));
    push();
    translate(ox, oy);
    beginShape();
    for (var t = 0; t < 360; t++) {
        var xoff = map(cos(t), -1, 1, 0, noiseMax);
        var yoff = map(sin(t), -1, 1, 0, noiseMax);

        var n = noise(xoff, yoff, zoff);
        var r = map(n, 0, 1, 0, height * 1.5);
        var x = r * cos(t);
        var y = r * sin(t);
        vertex(x, y);
    }
    endShape(CLOSE);

    //zoff += 0.015;
    zoff += 0.009;
    count = count + 1;

    if (count >= 500) {
        noLoop();
    }
}

function windowResized() {
    canvas_width = windowWidth;
    canvas_height = $(document).height();
    resizeCanvas(canvas_width, canvas_height);

	background(29, 29, 29);
    count = 0;
    loop();
}