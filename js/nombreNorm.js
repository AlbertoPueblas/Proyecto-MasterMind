//Constantes.
const miDiv = document.getElementById('caja'); 
const datoNombre = localStorage.getItem('nombre');
//Variables.
let boton = document.getElementById("boton")
let inicio = document.getElementById("inicio")
miDiv.textContent = datoNombre;
let btnFacil = document.getElementById("levelEasy")

//Evento que guarda el nombre.
boton.addEventListener("click",function(){
        localStorage.setItem("nombre", barra.value);
        //console.log(localStorage.nombre);    
})

//Evento que elimina el nombre y los colores.
inicio.addEventListener("click",function(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('savedColor1');
    localStorage.removeItem('savedColor2');
    localStorage.removeItem('savedColor3');
    localStorage.removeItem('savedColor4');
})
//Evento para pedir nombre cuando el campo este vacío.
btnNormal.addEventListener("click",function(){
    if(datoNombre===null){
        alert("Es necesario un nombre para jugar");

    }else{
        window.location.href="./level2/coloresNorm.html"
    }
})