let resetIcon = document.getElementsByClassName("resetIcon")[0];
const searchTxt = document.querySelector("#searchTxt");
let vogWrapper = document.getElementsByClassName("vogWrapper")[0];
let searchIcon = document.getElementById("searchIcon");
let mainsearch = document.getElementsByClassName("mainsearch")[0];
let viewgooglebtn = document.getElementsByClassName("viewgooglebtn")[0];
// let preloaderStart = document.getElementsByClassName("preloader-start")[0];
let info = document.getElementsByClassName("info")[0];
console.log();

const resetValue = () => {
  if (searchTxt.value === "") {
    return;
  }
  searchTxt.value = "";
};
function vog() {
  if(searchTxt.value === ""){
    return;
}
  let url = "https://www.google.com/search?q=" + searchTxt.value;
  window.open(url);
}
searchIcon.addEventListener("click", () => {
  viewgooglebtn.style.display = "block"  
  let word = searchTxt.value;
  getdata(word);
});

async function getdata(word) {
  let response = await fetch(
    `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=f276c47d-117a-4e13-8554-01e72d75d1d9`
  );
  const data = await response.json();
  console.log(data);
  let defination = data[0].shortdef[0];
  info.innerHTML = defination;
}

// function viewg() {
//     let url = "https://www.google.com/search?q="+searchTxt.value;
//     vogWrapper.innerHTML = `<a href="${url}">view on google</a>`
// }

viewg();
