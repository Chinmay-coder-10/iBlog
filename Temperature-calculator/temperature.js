const tempinput = document.getElementById('tempinput');
const results = document.getElementsByClassName('valuecontainer')[0];
const cel = document.getElementsByClassName('cel')[0];
const fah = document.getElementsByClassName('fah')[0];
console.log(fah);

tempinput.addEventListener('input', function showResults(){
    const tempfinalvalue = tempinput.value * 9/5+32;
    results.innerHTML = `Value is ${tempfinalvalue}`;
});



