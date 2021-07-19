let resetIcon = document.getElementsByClassName('resetIcon')[0];
let searchTxt = document.getElementById('searchTxt');
let searchWrapper = document.getElementsByClassName('searchWrapper);

console.log()
 
const resetValue =()=>{
    if (searchTxt.value === "") {
        return;
    }
    searchTxt.value = "";
}

searchWrapper.innerHTML = `<a href="https://www.google.com/search?q=${searchTxt.value}"> 
     View on Google 
 </a>`
