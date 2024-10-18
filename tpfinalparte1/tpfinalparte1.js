let clicDetectado  = false;
let estado;
let textos = [];
let botonA = [];
let botonB = [];

let imagenes = [];

// Sonido
let sonidoIntro;
let sonidoEnReproduccion = false;
let botonStop, botonPlay;

function preload() {
  for (let i = 0; i <= 25; i++) {
    imagenes [i]= loadImage("data/img"+i+".jpg");
  }
   sonidoIntro = loadSound("data/nine.mp3");
}

function setup() {
  createCanvas(640, 480);
  inicializar();
   for (let i=0; i<25; i++) {
    imagenes[i].resize(480, 480);
  }
}

function draw() {
  if (estado === 0) {
    pantallaInicio();
    if (clicDetectado && colisionBoton(width / 2, height * 0.75, 200, 40)) {
      estado = 1;
    } else if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 100;
    }
  } else if (estado === 100) {
    pantallaCreditos();
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;
    }
  } else if (estado === 1 || estado === 2) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      if (estado === 1) {
        estado = 2;
      } else if (estado === 2) {
        estado = 3;
      }
    } else if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 3;
    }
  } else if (estado === 3) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
    if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 4;
    } else if (clicDetectado && colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 5;
    }
  } else if (estado === 4 || estado === 5 || estado === 6 ) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      if (estado === 4) {
        estado = 6;
      } else if (estado === 5) {
        estado = 6;
      } else if (estado === 6) {
        estado = 7;
      }
    } else if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 7;
    }
  } else if (estado === 7) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
    if ( clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 8;
    } else if (clicDetectado && colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 9;
    }
  } else if (estado === 8 || estado === 9 || estado === 10 ||estado === 11) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {

      if (estado === 8) {
        estado = 10;
      } else if (estado === 9) {
        estado = 0;
      } else if (estado === 10) {
        estado = 11;
      } else if (estado === 11) {
        estado = 12;
      }
    } else if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 12;
    }
  } else if (estado === 12) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
    if ( clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 13;
    } else if (clicDetectado && colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 14;
    }
  } else if (estado === 13 || estado === 14 || estado === 15 || estado === 16) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {

      if (estado === 13) {
        estado = 15;
      } else if (estado === 14) {
        estado = 16;
      } else if (estado === 15) {
        estado = 16;
      } else if (estado === 16) {
        estado = 17;
      }
    } else if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 17;
    }
  } else if (estado === 17) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
    if ( clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 18;
    } else if (clicDetectado && colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 19;
    }
  } else if (estado === 18 || estado === 19 || estado === 20|| estado === 21) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {

      if (estado === 18) {
        estado = 20;
      } else if (estado === 19) {
        estado = 0;
      } else if (estado === 20) {
        estado = 21;
      } else if (estado === 21) {
        estado = 22;
      }
    } else if (clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 22;
    }
  } else if (estado === 22) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
    if ( clicDetectado && colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 23;
    } else if (clicDetectado && colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 24;
    }
  } else if (estado === 23 || estado === 24) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
    if (clicDetectado && colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      if (estado === 23) {
        estado = 0;
      } else if (estado === 24) {
        estado = 0;
      }
    }
  }
  clicDetectado = false;
}

function mousePressed() {
  clicDetectado = true;
  console.log("estado: " + estado);
}

function keyPressed() {
  if (key === 'r') {
    reproducirSonido();
  } else if (key === 'd') {
    detenerSonido();
  }
}
