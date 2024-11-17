function inicializar() {
  estado = 0;  // Inicio

  // estado 1: Un boton para avanzar estado 2
  textos[1] = "Presentación del personaje principal Tobey Marshall";
  botonA[1] = "Continuar..";
  imagenes[1] = loadImage("data/img1.jpg");

  // Estado 2:
  textos[2] = "Tobey  participa  en carreras ilegales\n y es traicionado por su antiguo amigo y rival Dino Brewster";
  botonA[2] = "Continuar..";
  imagenes[2] = loadImage("data/img2.jpg");

  // estado 3: Dos botonee (Sí o No)
  textos[3] = "¿Está buscando venganza por lo sucedido?";
  botonA[3] = "Sí";
  botonB[3] = "No";
  imagenes[3] = loadImage("data/img3.jpg")

    // estado 4:
    textos[4] = "Forma un equipo de amigos\n  para construir un coche deportivo";
  botonA[4] = "Continuar..";
  imagenes[4] = loadImage("data/img4.jpg")

    // Estado 5:
    textos[5] = "Retoma su rutina de reparar autos\n  y participa en carreras ilegales.";
  botonA[5] = "Continuar..";
  imagenes[5] = loadImage("data/img5.jpg");

  // estada 6:
  textos[6] = "Debe recuperar su reputación\n escalando una lista de corredores buscados";
  botonA[6] = "Continuar..";
  imagenes[6] = loadImage("data/img6.jpg");

  // Estado 7: Dos botones (Sí o No)
  textos[7] = "¿Tobey acepta el desafío?";
  botonA[7] = "Sí";
  botonB[7] = "No";
  imagenes[7] = loadImage("data/img7.jpg");

  // Estado 8:
  textos[8] = "Tobey realiza largos recorridos\n por la ciudad y es perseguido por la policía";
  botonA[8] = "Continuar..";
  imagenes[8] = loadImage("data/img8.jpg");

  // Estada 9:
  textos[9] = "Se queda en el taller,\n dedicándose a reparar y modificar coches deportivos";
  botonA[9] = "Fin";
  imagenes[9] = loadImage("data/img9.jpg");

  // estado 10:
  textos[10] = "En medio de la competencia,\n Tobey es embestido por otro corredor\n y logra escapar del lugar del choque.";
  botonA[10] = "Continuar..";
  imagenes[10] = loadImage("data/img10.jpg");

  // Estado 11:
  textos[11] = "Se refugia en el taller de un amigo";
  botonA[11] = "Continuar..";
  imagenes[11] = loadImage("data/img11.jpg");

  // Estado 12: Dos botones (Sí o No)
  textos[12] = "¿Continúa con su recorrido?";
  botonA[12] = "Sí";
  botonB[12] = "No";
  imagenes[12] = loadImage("data/img12.jpg");

  // Estado 13:
  textos[13] = "Consigue otro auto deportivo e intenta salir del lugar.";
  botonA[13] = "Continuar..";
  imagenes[13] = loadImage("data/img13.jpg");

  // estado 14:
  textos[14] = "Se queda en el taller,\n esperando a ver qué sucede después de lo ocurrido";
  botonA[14] = "Continuar..";
  imagenes[14] = loadImage("data/img14.jpg");

  // Esttado 15:
  textos[15] = "En medio de la carretera,\n Tobey es perseguido por otros corredores,\n pero logra escapar de ellos";
  botonA[15] = "Continuar..";
  imagenes[15] = loadImage("data/img15.jpg");

  // estado 16:
  textos[16] = "Recibe una invitación para participar\n en la legendaria carrera llamada ‘The DeLeon’";
  botonA[16] = "Continuar..";
  imagenes[16] = loadImage("data/img16.jpg");


  // Estado 17: Dos votones (Sí o No)
  textos[17] = "¿Acepta la carrera?";
  botonA[17] = "Sí";
  botonB[17] = "No";
  imagenes[17] = loadImage("data/img17.jpg");


  // Estado 18:
  textos[18] = "Tobey Marshall se dirige al lugar asignado para la carrera";
  botonA[18] = "Continuar..";
  imagenes[18] = loadImage("data/img18.jpg");


  // estado 19:
  textos[19] = "Permanece en el taller y es arrestado por la policía";
  botonA[19] = "Fin";
  imagenes[19] = loadImage("data/img19.jpg");

  // Estado 20:
  textos[20] = "En medio de la carrera, Tobey  Marshall\n es perseguido por patrullas y un helicóptero";
  botonA[20] = "Continuar..";
  imagenes[20] = loadImage("data/img20.jpg");


  // Estado 21:
  textos[21] = "Se produce un gran accidente que involucra\n a todos los participantes y a la policía";
  botonA[21] = "Continuar..";
  imagenes[21] = loadImage("data/img21.jpg");

  // Estado 22: Dos botones (Sí o No)
  textos[22] = "¿Se queda y ayuda a los demás participantes a escapar?";
  botonA[22] = "Sí";
  botonB[22] = "No";
  imagenes[22] = loadImage("data/img22.jpg");

  // Estado 23:
  textos[23] = "Tobey Marshall logra ganarse el respeto de\n los demás participantes y mejorar su reputación";
  botonA[23] = "Fin";
  imagenes[23] = loadImage("data/img23.jpg");

  // estado 25:
  textos[24] = "Intenta ganar la carrera, pero es atrapado por la policia";
  botonA[24] = "Fin";
  imagenes[24] = loadImage("data/img24.jpg");
}
