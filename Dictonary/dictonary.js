let resetIcon = document.getElementsByClassName('resetIcon')[0];
let searchTxt = document.getElementById('searchTxt');
let searchWrapper = document.getElementsByClassName('searchWrapper');

console.log()
 
const resetValue =()=>{
    if (searchTxt.value === "") {
        return;
    }
    searchTxt.value = "";
}

searchWrapper.innerHTML = `<a id="searchAnchortag" href="https://www.google.com/search?q=${searchTxt.value}"> 
     View on Google 
    <img id="searchIcon" style="cursor: pointer;" src="../Images/15-150759_search-clipart.png" alt="Search-icon">
 </a> `
