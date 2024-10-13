function pantallaInicio() {
  push();
  background(255, 0, 0);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Need Of Speed\n¿Estás preparado\npara esta aventura?", width / 2, height / 2);
  dibujaBoton("EMPEZAR", width / 2, height * 0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width / 2, height * 0.75 + 60, 200, 40);
  pop();
}

function pantallaCreditos() {
  push();
  background(255, 0, 0);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Película basada en videojuego: Need Of Speed", width/2, height/3);
  text("Nombres: Diego Miranda 91378/5\n  Moncada Pérez leonardo Daniel: 119092/4", width/2, height/2);

  // Botón de volver
  dibujaBoton("VOLVER", width / 2, height * 0.75 + 60, 200, 40);
  pop();
}
