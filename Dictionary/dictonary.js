let resetIcon = document.getElementsByClassName("resetIcon")[0];
// const userName = prompt("Enter your name");
const searchTxt = document.querySelector("#searchTxt");
//let vogWrapper = document.getElementsByClassName("vogWrapper")[0];
let searchbtn = document.getElementById("searchbtn");
let mainsearch = document.getElementsByClassName("mainsearch")[0];
let viewongooglebtn = document.getElementsByClassName("viewongooglebtn")[0];
let preloader = document.getElementsByClassName("preloader")[0];
let info = document.getElementsByClassName("definationp")[0];
// let preloaderStart = document.getElementsByClassName("preloader-start")[0];
// let info = document.getElementsByClassName("info")[0];
// document.title = `Welcome ${userName}`;
console.log();

const resetValue = () => {
  if (searchTxt.value === "") {
    return;
  }
  searchTxt.value = "";
  info.innerHTML = "";
  viewongooglebtn.style.display = "none";
};
function viewongoogle() {
  if (searchTxt.value === "") {
    return;
  }
  let url = "https://www.google.com/search?q=" + searchTxt.value;
  window.open(url);
}
searchbtn.addEventListener("click", () => {
  // preloader.style.display = "block";
  viewongooglebtn.style.display = "block";
  if (searchTxt.value != "") {
    preloader.style.display = "block";
    //viewgooglebtn.style.display = "block";

    if (info.innerHTML !== "") {
      preloader.style.display = "none";
      if (searchTxt.innerHTML != "") {
        preloader.style.display = "block";
      }
    }
    if (searchTxt.value != "") {
      preloader.style.display = "block";
    }
  }
  function stoppre() {
    preloader.style.display = "none";
    // viewgooglebtn.style.display = "block";
    info.style.display = "block";
  }
  function startpre() {
    preloader.style.display = "block";
  }
  setTimeout(stoppre, 500);
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
