class Boton {
  constructor(posX, posY, ancho, alto, texto) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  dibujar() {
    fill(20, 200, 0, 100);
    rect(this.posX, this.posY, this.ancho, this.alto, 10);
    fill(0);
    textSize(20);
    text(this.texto, this.posX + this.ancho / 2, this.posY + this.alto / 2);
  }

  estaSobreBoton() {
    return (
      mouseX > this.posX &&
      mouseX < this.posX + this.ancho &&
      mouseY > this.posY &&
      mouseY < this.posY + this.alto);
  }
}
