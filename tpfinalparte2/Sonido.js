class Sonido {
  constructor(archivo) {
    this.sonido = loadSound(archivo);
    this.enReproduccion = false;
  }

  reproducir() {
    if (!this.sonido.isPlaying()) {
      this.sonido.play();
      this.enReproduccion = true;
    }
  }

  detener() {
    if (this.sonido.isPlaying()) {
      this.sonido.stop();
      this.enReproduccion = false;
    }
  }

  pausar() {
    if (this.sonido.isPlaying()) {
      this.sonido.pause();
      this.enReproduccion = false;
    }
  }
}
