function inicializar() {
  estado = 0;  // Inicia en la pantalla de inicio

  // Estado 1: Un botón para avanzar al Estado 2
  textos[1] = "Presentación del personaje principal Tobey Marshall";
  botonA[1] = "Continuar.."; // Botón para ir al estado 2

  // Estado 2:
  textos[2] = "Tobey  participa  en carreras ilegales\n y es traicionado por su antiguo amigo y rival Dino Brewster";
  botonA[2] = "Continuar.."; // Botón para ir al estado 3

  // Estado 3: Dos botones (Sí o No)
  textos[3] = "¿Está buscando venganza por lo sucedido?";
  botonA[3] = "Sí"; // Botón para ir al estado 4
  botonB[3] = "No"; // Botón para ir al estado 5

  // Estado 4:
  textos[4] = "Forma un equipo de amigos\n  para construir un coche deportivo";
  botonA[4] = "Continuar.."; // Botón para ir al estado 6

  // Estado 5:
  textos[5] = "Retoma su rutina de reparar autos\n  y participa en carreras ilegales.";
  botonA[5] = "Continuar.."; // Botón para ir al estado 6

  // Estado 6:
  textos[6] = "Debe recuperar su reputación\n escalando una lista de corredores buscados";
  botonA[6] = "Continuar.."; // Botón para ir al estado 7

  // Estado 7: Dos botones (Sí o No)
  textos[7] = "¿Tobey acepta el desafío?";
  botonA[7] = "Sí"; // Botón para ir al estado 8
  botonB[7] = "No"; // Botón para ir al estado 9

  // Estado 8: Mensaje para el estado 8
  textos[8] = "Tobey realiza largos recorridos\n por la ciudad y es perseguido por la policía";
  botonA[8] = "Continuar.."; // Botón para ir al estado 10

  // Estado 9:
  textos[9] = "Se queda en el taller,\n dedicándose a reparar y modificar coches deportivos";
  botonA[9] = "Fin"; //// Botón para ir al estado 0

  // Estado 10:
  textos[10] = "En medio de la competencia,\n Tobey es embestido por otro corredor\n y logra escapar del lugar del choque.";
  botonA[10] = "Continuar.."; // Botón para ir al estado 11

  // Estado 11:
  textos[11] = "Se refugia en el taller de un amigo";
  botonA[11] = "Continuar.."; // Botón para continuar..

  // Estado 12: Dos botones (Sí o No)
  textos[12] = "¿Continúa con su recorrido?";
  botonA[12] = "Sí"; // Botón para ir al estado 13
  botonB[12] = "No"; // Botón para ir al estado 14

  // Estado 13:
  textos[13] = "Consigue otro auto deportivo e intenta salir del lugar.";
  botonA[13] = "Continuar.."; // Botón para continuar..

  // Estado 14:
  textos[14] = "Se queda en el taller,\n esperando a ver qué sucede después de lo ocurrido";
  botonA[14] = "Continuar.."; // Botón para continuar..

  // Estado 15:
  textos[15] = "En medio de la carretera,\n Tobey es perseguido por otros corredores,\n pero logra escapar de ellos";
  botonA[15] = "Continuar.."; // Botón para ir al estado 16

  // Estado 16:
  textos[16] = "Recibe una invitación para participar\n en la legendaria carrera llamada ‘The DeLeon’";
  botonA[16] = "Continuar.."; // Botón para ir al estado 17

  // Estado 17: Dos botones (Sí o No)
  textos[17] = "¿Acepta la carrera?";
  botonA[17] = "Sí"; // Botón para ir al estado 18
  botonB[17] = "No";

  // Estado 18:
  textos[18] = "Tobey Marshall se dirige al lugar asignado para la carrera";
  botonA[18] = "Continuar.."; //Botón de Continuar..

  // Estado 19:
  textos[19] = "Permanece en el taller y es arrestado por la policía";
  botonA[19] = "Fin"; // Botón para ir al estado 0

  // Estado 20: Mensaje para el estado 19
  textos[20] = "En medio de la carrera, Tobey  Marshall\n es perseguido por patrullas y un helicóptero";
  botonA[20] = "Continuar.."; // Botón para ir al estado 21

  // Estado 21:
  textos[21] = "Se produce un gran accidente que involucra\n a todos los participantes y a la policía";
  botonA[21] = "Continuar.."; // Botón para continuar..

  // Estado 22: Dos botones (Sí o No)
  textos[22] = "¿Se queda y ayuda a los demás participantes a escapar?";
  botonA[22] = "Sí"; // Botón para ir al estado 23
  botonB[22] = "No"; // Botón para ir al estado 24

  // Estado 23:
  textos[23] = "Tobey Marshall logra ganarse el respeto de\n los demás participantes y mejorar su reputación";
  botonA[23] = "Fin"; // Botón para ir al estado 0

  // Estado 25:
  textos[24] = "Intenta ganar la carrera, pero es atrapado por la policia";
  botonA[24] = "Fin"; // Botón para ir al estado o
}
