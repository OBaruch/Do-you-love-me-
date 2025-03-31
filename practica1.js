//Selectores

const btnYES = document.querySelector(".yes");
const btnNO = document.querySelector(".no");
const imagenBailando = document.querySelector("img");

//Eventos

btnYES.addEventListener("click", saltaImagen);
btnNO.addEventListener("mouseover", () => {
  const nuevaPosX = Math.random() * (window.innerWidth - btnNO.offsetWidth);
  const nuevaPosY = Math.random() * (window.innerHeight - btnNO.offsetHeight);

  btnNO.style.left = `${nuevaPosX}px`;
  btnNO.style.top = `${nuevaPosY}px`;
});

const btnCrush = document.querySelector("#crush");
btnCrush.addEventListener("click", () => {
  alert("mandame dm linda");
});


//Funciones

function saltaImagen() {
  imagenBailando.remove();
  btnYES.remove();
  btnNO.remove();
  creaImagen();
  crearFrase();
}

function creaImagen() {
  imagenBailando.remove();
  const imagen2 = document.createElement("img");
  imagen2.src = "Imagenes/bmo2.gif";
  document.body.appendChild(imagen2);
}

function crearFrase() {
  const nuevaFrase = document.createElement("p");
  nuevaFrase.classList.add("nueva-frase");
  nuevaFrase.innerHTML = "i LOVE u too!!!";

  document.body.appendChild(nuevaFrase);
}

//Estilos en el documento
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
