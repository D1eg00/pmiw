function reproducirSonido() {
  if (!sonidoIntro.isPlaying()) {
    sonidoIntro.play();
  }
  sonidoEnReproduccion = true;
}

function detenerSonido() {
  if (sonidoIntro.isPlaying()) {
    sonidoIntro.stop();
  }
  sonidoEnReproduccion = false;
}

function keyPressed() {
  if (key === 'r') {
    reproducirSonido();
  } else if (key === 'd') {
    detenerSonido();
  }
}
