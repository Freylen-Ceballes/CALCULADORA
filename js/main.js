document.addEventListener("DOMContentLoaded", () => {
const display = document.getElementById("display");
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonIgual = document.getElementById("igual");
const botonAC = document.getElementById('ac');
const botonMasMenos = document.getElementById("masmenos");
const botonPunto = document.getElementById("punto");

let operacionActual = '';
let operador = '';
let resultado = 0;
let enOperacion = false;

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (display.value === '0' || enOperacion) {
            display.value = e.target.textContent;
            enOperacion = false;
        } else {
        display.value += e.target.textContent;
        }
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (operador) {
            calcular();
        }
        operacionActual = display.value;
        operador = e.target.textContent;
        enOperacion = true;
    });
});

botonIgual.addEventListener("click", () => {
    calcular();
    operador = '';
});

botonAC.addEventListener("click", () => {
    display.value = '0';
    operacionActual = '';
    operador = '';
    resultado = 0;
    enOperacion = false;
});

botonMasMenos.addEventListener("click", () => {
    display.value = String(parseFloat(display.value) * -1);
});

botonPunto.addEventListener("click", () => {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});

function calcular() {
    if (operador) {
        switch (operador) {
            case '+':
                resultado = parseFloat(operacionActual) + parseFloat(display.value);
                break;
            case '-':
                resultado = parseFloat(operacionActual) - parseFloat(display.value);
                break;
            case '*':
                resultado = parseFloat(operacionActual) * parseFloat(display.value);
                break;
            case '/':
                if (display.value == '0') {
                    alert("No se puede dividir entre cero");
                    return;
                }
                resultado = parseFloat(operacionActual) / parseFloat(display.value);
                break;
            default:
                return;
        }
        display.value = resultado;
        enOperacion = true;
    }
}
});
