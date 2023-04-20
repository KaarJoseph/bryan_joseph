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
/*
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}*/