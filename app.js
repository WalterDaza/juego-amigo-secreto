let listaAmigos = [];
let escribirListaAmigos = document.getElementById("listaAmigos");
let nombresSorteados = [];

if (listaAmigos.length === 0) {
  escribirListaAmigos.innerText = "Está vacia, ¡ingresa tus amigos!";
}

//Función para agregar amigo y realizar verificaciones de campo

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo == "") {
    mensajeAlerta(
      "mensajes-alerta",
      "El campo esta vacio, por favor escribe un nombre",
      "#b12f2f"
    );
  } else if (listaAmigos.includes(nombreAmigo)) {
    mensajeAlerta(
      "mensajes-alerta",
      "El nombre del amigo ingresado ya existe en la lista, se sugiere agregar los apellidos de la persona",
      "#b12f2f"
    );
  } else {
    listaAmigos.push(nombreAmigo);

    document.getElementById("amigo").value = "";

    mensajeAlerta(
      "mensajes-alerta",
      "Nombre guardado con exito, ingresa un nuevo nombre",
      "#48b848"
    );
    escribirListaAmigos.innerText = recorrerListaAmigos(listaAmigos);
    deshabilitarBoton();
  }
}

//Función que me para el manejo de texto de eqtiqueta HTML

function mensajeAlerta(idHTML, texto, color) {
  let mensaje = document.getElementById(idHTML);
  mensaje.innerText = texto;
  mensaje.style.color = color;
}

//Función para recorrer la lista de amigos

function recorrerListaAmigos(lista) {
  return lista.join("\n");
}

//Función que me sortea los amigos aletoreamente y actualiza la lista

function sortearAmigo(lista) {
  let indiceRandom = Math.floor(Math.random() * lista.length);

  if (lista.length === 1) {
    mensajeAmigoSorteado(
      "mostrar-amigo-sorteado",
      lista[indiceRandom],
      "section-mostrar-amigo",
      "flex"
    );
    escribirListaAmigos.innerText =
      "Todos los amigos han sido sorteados, ingresa nuevos amigos para nuevos sorteos";
    lista.pop();
    deshabilitarBoton();
      return;
    } else {
    mensajeAmigoSorteado(
      "mostrar-amigo-sorteado",
      lista[indiceRandom],
      "section-mostrar-amigo",
      "flex"
    );
    nombresSorteados.push(lista[indiceRandom]);
    lista.splice(indiceRandom, 1);
    escribirListaAmigos.innerText = recorrerListaAmigos(listaAmigos);
    return lista[indiceRandom];
  }
}

//Función de mostrar amigo secreto sorteado como card

function mensajeAmigoSorteado(idHTML, nombre, idContent, display) {
  let contenedor = document.getElementById(idContent);
  let mensaje = document.getElementById(idHTML);
  mensaje.innerText = `El amigo secreto sorteado es ¡${nombre}!`;
  contenedor.style.display = display;
}

//Función para cerrar la card de amigo secreto sorteado

function cerrarMensajeAmigoSorteado() {
  let cerrar = document.getElementById("section-mostrar-amigo");
  cerrar.style.display = "none";
}

// Función para deshabilitra la lista si esta vacia

function deshabilitarBoton () {
    if(listaAmigos.length > 0){
        document.getElementById("btn-sortear").removeAttribute("disabled");
    } else {
        document.getElementById("btn-sortear").setAttribute("disabled", true);
    }
}
