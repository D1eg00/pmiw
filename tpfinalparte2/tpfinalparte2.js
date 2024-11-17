/*

 Comision: 5
 Diego Miranda
 legajo: 91378/5
 
 */

let objJuego;
let imagenes = [];
let nombresImagenes = ["pantalla.png", "ganar.jpg", "perder.jpg", "Personaje.png", "Mono.png", "instruccion.png", "estado.png"];

function preload() {
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage("data/" + nombresImagenes[i]);
  }
}
function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();
  if (keyIsPressed) {
    if (objJuego.pantallaActual.teclaPresionada) {
      objJuego.pantallaActual.teclaPresionada();
    }
  }
}

function mousePressed() {
  if (objJuego.pantallaActual.mousePressed) {
    objJuego.pantallaActual.mousePressed();
  }
}
