const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');

function celToFah() {
    fahrenheitInput.value = celsiusInput.value*9/5+32
};
function fahToCel() {
    celsiusInput.value =  fahrenheitInput.value*5/9-32
};




