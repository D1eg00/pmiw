class PantallaInicial {
  constructor(juego) {
    this.juego = juego;
    this.btnJuego = new Boton(220, 200, 200, 50, "Jugar");
    this.btnCredito = new Boton(220, 300, 200, 50, "Instrucción");
    this.img = loadImage("data/pantalla.png");
    this.sonido = new Sonido("data/nine.mp3"); 
    this.botonPlay = false;
    this.botonStop = false;
    this.crearBotonesSonido();
  }

  dibujar() {
    image(this.img, 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Pantalla Inicial", width / 2, 100);

    this.btnJuego.dibujar();
    this.btnCredito.dibujar();
  }

  mousePressed() {
    if (this.btnJuego.estaSobreBoton()) {
      this.sonido.detener();
      this.juego.cambiarPantalla(new PantallaJuego(this.juego));
    } else if (this.btnCredito.estaSobreBoton()) {
      this.sonido.detener();
      this.juego.cambiarPantalla(new PantallaIntruccion(this.juego));
    }
  }

  crearBotonesSonido() {
    this.botonPlay = createButton("Play");
    this.botonPlay.position(5,450);
    this.botonPlay.mousePressed(() => this.sonido.reproducir());

    this.botonStop = createButton("Stop");
    this.botonStop.position(595, 450);
    this.botonStop.mousePressed(() => this.sonido.detener());
  }
}
