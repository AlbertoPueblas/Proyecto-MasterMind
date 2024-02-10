const colorInput = document.querySelectorAll('input[type="color"]');
const guardarColor = document.getElementById('guardarColor');
const colorCircles = document.querySelectorAll('.color-circle');
const btnAceptar = document.getElementById('btnAceptar'); // Asegúrate de que btnAceptar esté definido en HTML



//Evento inicio que borra el localStorage.
inicio.addEventListener("click",function(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('savedColor1');
    localStorage.removeItem('savedColor2');
    localStorage.removeItem('savedColor3');
    localStorage.removeItem('savedColor4');

})


// Guardar los 4 colores en Local Storage
guardarColor.addEventListener('click', function() {
    colorInput.forEach((input, index) => {
        // Guardar los 4 colores en Local Storage
        localStorage.setItem(`savedColor${index + 1}`, input.value);
        colorCircles[index].style.backgroundColor = input.value;
    });
});

//Evento que guarda los colores en localStorage
btnAceptar.addEventListener("click", function() {
    // Puedes guardar el color en Local Storage al hacer clic en btnAceptar
    localStorage.getItem("savedColor", colorInput[0].value); // Suponiendo que solo quieres guardar el primer color
    window.location.href = "../level1/tabFacil.html";
});

// Al hacer clic en un círculo, cambiar el color con el color guardado en Local Storage
colorCircles.forEach((circle, index) => {
    const colorToApply = localStorage.getItem(`savedColor${index + 1}`);
    circle.addEventListener('click', function() {
        if (colorToApply) {
            circle.style.backgroundColor = colorToApply;
        }
    });
});
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