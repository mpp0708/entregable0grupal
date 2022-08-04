alert("Registro")

function clickTitulo (){
    console.log("El usuario hizo click");

}

const tituloform = document.getElementById("titulo");
tituloform.addEventListener("click", clickTitulo);