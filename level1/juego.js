// Recuperar los colores del Local Storage al cargar la página
window.addEventListener('load', function() {
    const colorCircles = document.querySelectorAll('.color-circle');
    for (let index = 0; index < colorCircles.length; index++) {
        const colorToApply = localStorage.getItem(`savedColor${index + 1}`);
        if (colorToApply) {
            colorCircles[index].style.backgroundColor = colorToApply;
        }
    }
});

const fichas = document.querySelectorAll('.ficha');
const colores = document.querySelectorAll('.color-circle');
let colorSeleccionado = '';

colores.forEach(color => {

    color.addEventListener('click', () => {
        colorSeleccionado = color.style.backgroundColor;
    });
});

fichas.forEach(ficha => {
    ficha.addEventListener('click', () => {

        if (colorSeleccionado !== '') {//Estrictamente diferente.
            ficha.style.backgroundColor = colorSeleccionado;
            combinacionActual = Array.from(fichas).map(f => f.style.backgroundColor);
        }
    });
});

//Evento llamado para borrar las clavijas una vez que se ha completado el juego
document.getElementById('siguienteIntento').addEventListener('click', () => {
    combinacionActual = [];

    fichas.forEach(ficha => {
        ficha.style.backgroundColor = '';
    });

    // Elimina los elementos hijos del clavijaDiv
    const clavijaDiv = document.getElementById('clavija');
    while (clavijaDiv.firstChild) {
        clavijaDiv.removeChild(clavijaDiv.firstChild);
    }

    tries = 0; // Reinicia el contador de intentos

});



let combinacionSecreta = colorCircles;
let combinacionActual = [];

document.getElementById('generarCombinacion').addEventListener('click', () => {
    // Generar una combinación secreta al azar de los colores previamente seleccionados
    combinacionSecreta = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colores.length);
        combinacionSecreta.push(colores[randomIndex].style.backgroundColor);
    }
    
});

document.getElementById('comprobarCombinacion').addEventListener('click', () => {
    if (combinacionActual.length === 4) {
        const resultado = verificarCombinacion();
        
    } else {
        alert('Por favor, Genera una combinación o completa las casillas antes de comprobar.');
    }
});

document.getElementById('siguienteIntento').addEventListener('click', () => {
    //devuelve el background al principal
    combinacionActual = [];
    fichas.forEach(ficha => {
        ficha.style.backgroundColor = '';
    });

    
});


let tries = 0;
let maxTries = 10;

function verificarCombinacion() {
    tries++;

    if (tries > maxTries) {
       
        return [];
    }

    const resultado = [];
    const clavijaDiv = document.getElementById('clavija');
    let row = document.createElement("div");

    row.id = "row" + tries.toString();
    row.classList.add("col-12")
    clavijaDiv.appendChild(row);

    let aciertos = 0;
    for (let i = 0; i < 4; i++) {
        if (combinacionActual[i] === combinacionSecreta[i]) {
            resultado.push('purple'); // Color morado para posición correcta
            aciertos++;
        } else if (combinacionSecreta.includes(combinacionActual[i])) {
            resultado.push('white');
        } else {
            resultado.push('black'); // Otra retroalimentación
        }

        const divResultado = document.createElement('div');
        divResultado.classList.add('color-circle');
        divResultado.style.backgroundColor = resultado[i];
        row.appendChild(divResultado);
    }

    if (aciertos === 4) {
        window.location.href="../pages/win.html"
    }

    if (tries === maxTries) {
        window.location.href="../pages/lose.html"

        
    }

    return resultado;
}