let resetIcon = document.getElementsByClassName('resetIcon')[0];
let searchTxt = document.getElementById('searchTxt');
console.log()
 
const resetValue =()=>{
    if (searchTxt.value === "") {
        return;
    }
    searchTxt.value = "";
}