class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 50;
    this.vida = 1;
    this.img = imagenes[3];
  }

  dibujar() {
    image(this.img, this.posX, this.posY, this.ancho + 20, 80);
  }

  teclaPresionada() {
    this.mover();
  }

  mover() {
    if (keyCode === LEFT_ARROW && this.posX > 0) {
      this.posX -= 8;
    } else if (keyCode === RIGHT_ARROW && this.posX < width - this.ancho) {
      this.posX += 8;
    }
  }
}
