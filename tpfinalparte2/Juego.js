class Juego {
  constructor() {
    this.pantallaActual = new PantallaInicial(this);
  }

  cambiarPantalla(nuevaPantalla) {
    this.pantallaActual = nuevaPantalla;
  }

  dibujar() {
    this.pantallaActual.dibujar();
  }

  teclaPresionada() {
    if (this.pantallaActual.teclaPresionada) {
      this.pantallaActual.teclaPresionada();
    }
  }
}
