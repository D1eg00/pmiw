class PantallaIntruccion {
  constructor(juego) {
    this.juego = juego;
    this.img = imagenes[5];
  }

  dibujar() {
    image(this.img, 0, 0, width, height);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(32);
    text("instruccion", width / 2, 100);
    textSize(18);
    textAlign(LEFT, TOP);
    fill(200);
    text("Haz clic para volver a la pantalla inicial", width /2-150, height - 50);
  }

  mousePressed() {
    this.juego.cambiarPantalla(new PantallaInicial(this.juego));
  }
}
