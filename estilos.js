function cambiarEstilo() {
  var estiloActual = document.getElementById("estilo1");
  var nuevoEstilo = document.getElementById("estilo2");
  if (estiloActual.getAttribute("href") == "estilo1.css") {
    estiloActual.setAttribute("href", "estilo2.css");
    nuevoEstilo.setAttribute("href", "estilo1.css");
  } else {
    estiloActual.setAttribute("href", "estilo1.css");
    nuevoEstilo.setAttribute("href", "estilo2.css");
  }
}