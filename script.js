const buttons = document.querySelectorAll(".read-more-btn");
const textElements = document.querySelectorAll(".hideText");
var btn = document.getElementsByClassName(".read-more-btn");


buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const textElement = textElements[index];
    textElement.classList.toggle("showText");
    
  });
});

btn.addEventListener("click", function onClick() {
  // Verificamos si el texto actual del botón es "Haz clic aquí"
  if (boton.innerHTML === "Haz clic aquí") {
    // Si es así, lo cambiamos por "Clic hecho"
    boton.innerHTML = "Clic hecho";
  } else {
    // Si no, lo cambiamos de regreso a "Haz clic aquí"
    boton.innerHTML = "Haz clic aquí";
  }});