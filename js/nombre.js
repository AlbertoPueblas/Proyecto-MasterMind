//Constantes.
const contNombre = document.getElementById('caja'); 
const datoNombre = localStorage.getItem('nombre');
//Variables.
let boton = document.getElementById("boton")
let btnInicio = document.getElementById("inicio")
let btnFacil = document.getElementById("levelEasy")
let btNormal = document.getElementById ('btnNormal')
let btDificil = document.getElementById("btnDificil")
//Pinta el nombre en pantalla.
contNombre.textContent = datoNombre;
//Evento que guarda el nombre.
boton.addEventListener("click",function(){
        localStorage.setItem("nombre", barra.value);
           
})

//Evento que elimina el nombre y los colores.
btnInicio.addEventListener("click",function(){

    localStorage.removeItem('nombre');
    localStorage.removeItem('savedColor1');
    localStorage.removeItem('savedColor2');
    localStorage.removeItem('savedColor3');
    localStorage.removeItem('savedColor4');
    localStorage.removeItem('savedColor5');
    localStorage.removeItem('savedColor6');

})
//Eventos para pedir nombre cuando el campo este vacío.
btnFacil.addEventListener("click",function(){
    if(datoNombre===null){
        alert("Es necesario un NickName");

    }else{
        window.location.href="./level1/colores.html"
    }
})

btNormal.addEventListener("click",function(){
    if(datoNombre===null){
        alert("Es necesario un NickName");

    }else{
        window.location.href="./level2/colNorm.html"
    }
})

btDificil.addEventListener("click",function(){
    if(datoNombre===null){
        alert("Es necesario un NickName");

    }else{
        window.location.href="./level3/colDif.html"
    }
})

