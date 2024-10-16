let estado;
let textos = [];
let botonA = [];
let botonB = [];

let imagenes = [];  // Array para las imágenes

function preload() {
  //
  for (let i = 0; i <= 25; i++) {  // 25 imágenes
    let img = loadImage(`data/img${i}.jpg`);
    imagenes.push(img);  // Agrega la imagen al array
  }
}

function setup() {
  createCanvas(640, 480);
  inicializar();
}

function draw() {
  if (estado === 0) {
    pantallaInicio();
  } else if (estado === 25) {
    pantallaCreditos();
  } else if (estado === 1 || estado === 2) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 3) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 4 || estado === 5 || estado === 6) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 7) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 8) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 9) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 10 ||estado === 11) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 12) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 13 || estado === 14 || estado === 15 || estado === 16) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 17) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 18 || estado === 19 || estado === 20|| estado === 21) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  } else if (estado === 22) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado]);
  } else if (estado === 23 || estado === 24) {
    pantallaHistoriaUnBoton(textos[estado], botonA[estado]);
  }
}
function mousePressed() {
  if (estado === 0) {
    if (colisionBoton(width / 2, height * 0.75, 200, 40)) {
      estado = 1;  // Inicia la historia
    } else if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 25;  // Pantalla de créditos
    }
  } else if (estado === 1) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 2;  // Avanza al estado 2
    }
  } else if (estado === 2) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 3;  // Avanza al estado 3
    }
  } else if (estado === 3) {
    // Botón (SI)
    if (colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 4;  // Va al estado 4 (Sí)
      // Botón (NO)
    } else if (colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 5;  // Va al estado 5 (No)
    }
  } else if (estado === 4 || estado === 5) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 6;  // Va al estado 6
    }
  } else if (estado === 6) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 7;  // Va al estado 7
    }
  } else if (estado === 7) {
    // Botón (SI)
    if (colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 8;  // Va al estado 8 (No)
      // Botón (NO)
    } else if (colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 9;  // Va al estado 9 (Sí)
    }
  } else if (estado === 8) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 10;  //  Va al estado 10
    }
  } else if (estado === 9) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;  // Vuelveal estado 0
    }
  } else if (estado === 10) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 11;  // Va al estado 11
    }
  } else if (estado === 11) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 12;  //  Va al estado 12
    }
  } else if (estado === 12) {
    // Botón (SI)
    if (colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 13;  // Va al estado 13 (Sí)
    }
    // Botón (NO)
    else if (colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 14;  // Va al estado 14 (No)
    }
  } else if (estado === 13) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 15;  // Va al estado 15
    }
  } else if (estado === 14) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 16; // Va al estado 16
    }
  } else if (estado === 15) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 16;  // Va al estado 16
    }
  } else if (estado === 16) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 17;  // Va al estado 17
    }
  } else if (estado === 17) {
    // Botón (SI)
    if (colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 18;  // Va al estado 18 (Sí)
    }
    // Botón (NO)
    else if (colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 19;  // Va al estado 19 (No)
    }
  } else if (estado === 18) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 20;  // volver al estado 20
    }
  } else if (estado === 19) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;  // volver al estado 0
    }
  } else if (estado === 20) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 21;  // Va al estado 21
    }
  } else if (estado === 21) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 22;  // Va al estado 22
    }
  } else if (estado === 22) {
    // Botón (Sí)
    if (colisionBoton(width / 2 - 200, height * 0.75 + 60, 200, 40)) {
      estado = 23;  // Va al estado 13 (Sí)
    }
    // Botón (NO)
    else if (colisionBoton(width / 2 + 200, height * 0.75 + 60, 200, 40)) {
      estado = 24;  // Va al estado 14 (No)
    }
  } else if (estado === 23) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;  // volver al estado 0
    }
  } else if (estado === 24) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;  // volver al estado 0
    }
  } else if (estado === 25) {
    if (colisionBoton(width / 2, height * 0.75 + 60, 200, 40)) {
      estado = 0;  // Regresa al inicio
    }
  }
  console.log("estado: " + estado);
}
