class PantallaJuego {
  constructor(juego) {
    this.juego = juego;
    this.cantidadEnemigos = 6;
    this.enemigosActivos = 4;
    this.velocidad = 2;
    this.despX = 0;
    this.despY = 5;
    this.crearPersonaje();
    this.crearEnemigos();
    this.img = imagenes[6];
    this.tiempoInicio = millis();
    this.duracion = 0;
  }

  dibujar() {
    image(this.img, 0, 0, width, height);
    this.personaje.dibujar();
    this.moverEnemigos();
    this.duracion = (millis() - this.tiempoInicio) / 1000;
    //
    fill(255);
    textSize(15);
    textAlign(LEFT, TOP);
    text("Duración: " + this.duracion.toFixed(2) + " segundos", 10, 10);
    //
    for (let i = 0; i < this.enemigos.length; i++) {
      const enemigo = this.enemigos[i];
      if (enemigo.vida && this.colision(this.personaje, enemigo)) {
        this.personaje.vida = 0;
        console.log("¡Perdiste!");
        this.juego.cambiarPantalla(new PantallaPerdiste(this.juego));
      }
    }

    if (this.duracion > 10) {
      console.log("¡Ganaste!");
      this.juego.cambiarPantalla(new PantallaGanado(this.juego));
    }
  }

  teclaPresionada() {
    if (this.personaje) {
      this.personaje.teclaPresionada();
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos.push(new Enemigo(random(0, width), -random(100, 300), this.velocidad));
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 390);
  }

  moverEnemigos() {
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].posX += this.despX;
      this.enemigos[i].posY += this.despY;
      if (this.enemigos[i].posY > height + 150) {
        this.enemigos[i].posY = -random(100, 300);
        this.enemigos[i].posX = random(0, width - this.enemigos[i].ancho);
      }
      this.enemigos[i].dibujar();
    }
    if (frameCount % 120 === 0) {
      this.velocidad += 0.5;
      this.despY = this.velocidad;
    }
  }

  colision(personaje, enemigo) {
    return (
      personaje.posX < enemigo.posX + enemigo.ancho &&
      personaje.posX + personaje.ancho > enemigo.posX &&
      personaje.posY < enemigo.posY + enemigo.alto &&
      personaje.posY + 80 > enemigo.posY);
  }
}
