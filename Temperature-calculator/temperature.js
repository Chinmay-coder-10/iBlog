const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');

function celToFah() {
    fahrenheitInput.value = celsiusInput.value*9/5+32
};
function fahToCel() {
    fahval = (fahrenheitInput.value-32)×5/9;
    celsiusInput.value = fahval;
   alert("Alert function completed");
};




