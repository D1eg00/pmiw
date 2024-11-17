class PantallaGanado {
  constructor(juego) {
    this.juego = juego;
    this.btnVolverJugar = new Boton(width / 2 - 100, height / 2 + 100, 200, 50, "Volver a Jugar");
    this.img = imagenes[1];
  }

  dibujar() {
    image(this.img, 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("¡Ganaste!", width / 2, height / 4);
    textSize(25);
    text("Credito: Diego Miranda Legajo: 91378/5", width / 2, height / 3);
    this.btnVolverJugar.dibujar();
  }

  mousePressed() {
    if (this.btnVolverJugar.estaSobreBoton()) {
      this.juego.cambiarPantalla(new PantallaJuego(this.juego));
    }
  }
}
