var particles_a = [];
var particles_b = [];
var particles_c = [];
var particles_d = [];
var nums =200;
var noiseScale = 1000;
var count = 0;

function setup(){
	canvas_width = windowWidth;
    canvas_height = $(document).height();
    cnv = createCanvas(canvas_width, canvas_height);
    cnv.position(0, 0);
    cnv.style('z-index', '-3');
	cnv.parent('canvascontainer');
	startDrawing();
}

function startDrawing() {
	background(29, 29, 29);
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height));
		particles_b[i] = new Particle(random(0, width),random(0,height));
		particles_c[i] = new Particle(random(0, width),random(0,height));
		particles_d[i] = new Particle(random(0, width),random(0,height));
	}
}

function draw(){
	noStroke();
    smooth();
    if (count > 250) {
        noLoop();
    }
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,1.2);
		var alpha = map(i,0,nums,0,50);

		fill(242,0,129,alpha);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(66, 245, 242,alpha);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(255,255,255,alpha);
		particles_c[i].move();
		particles_c[i].display(radius);
        particles_c[i].checkEdge();
        
		fill(167, 245, 66,alpha);
		particles_d[i].move();
		particles_d[i].display(radius);
		particles_d[i].checkEdge();
    }  
    count++;
}


function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(50, width);
			this.pos.y = random(50, height);
		}
	}

	this.display = function(r){
		//ellipse(this.pos.x, this.pos.y, r, r);
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	startDrawing();
  }