class Enemigo {
  constructor(posX, posY, velY) {
    this.posX = posX;
    this.posY = posY;
    this.velY = velY;
    this.vida = true;
    this.ancho = 50;
    this.alto = 50;
    this.img = imagenes[4];
  }

  dibujar() {
    if (this.vida) {
      image(this.img, this.posX, this.posY, 80, 100);
      this.caer();
    }
  }

  caer() {
    this.posY += this.velY;

    if (this.posY > height) {
      this.posY = -random(100, 300);
      this.posX = random(0, width - this.ancho);
    }
  }
}
