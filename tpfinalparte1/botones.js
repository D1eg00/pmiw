function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  if (colisionBoton(x, y, w, h)) {
    fill(20, 200, 0);  // Efecto rollover
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {
  return (mouseX > x - w / 2 && mouseX < x + w / 2 &&
    mouseY > y - h / 2 && mouseY < y + h / 2);
}

function pantallaHistoriaUnBoton(txt_pantalla, txt_btn_A) {
  push();
  background(255, 0, 0);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width / 2, height / 2 + 30);
  dibujaBoton(txt_btn_A, width / 2, height * 0.75 + 60, 200, 40);
  pop();
}

function pantallaHistoriaDosBotones(txt_pantalla, txt_btn_A, txt_btn_B) {
  push();
  background(255, 0, 0);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width / 2, height / 2 + 30);
  dibujaBoton(txt_btn_A, width / 2 - 200, height * 0.75 + 60, 200, 40);
  dibujaBoton(txt_btn_B, width / 2 + 200, height * 0.75 + 60, 200, 40);
  pop();
}
