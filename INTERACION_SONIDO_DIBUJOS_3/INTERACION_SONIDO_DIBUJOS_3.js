let dibujos = [];
let dibujoActual = 0;

function setup() {
  createCanvas(800, 600);
  noStroke();
  cargarDibujo1();
  cargarDibujo2();
  cargarDibujo3();
}

function draw() {
  dibujos[dibujoActual].dibujar();
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    dibujoActual = (dibujoActual + 1) % dibujos.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
