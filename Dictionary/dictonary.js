console.log("HI script");
showNotes();

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="card my-3 mx-3 shownotec historycard" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">You searched for</h5>
        <p style="color: black;" class="card-text">
        ${element}
           </p>
           <button data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
           <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
         </svg></button>
           
    </div>
</div>
                `;
  });

  
  let viewhistory = document.getElementById("viewhistory");
  viewhistory.addEventListener("click", () => {
    notesElm.style.display = "flex";
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="nohistory mx-3">
    <p>No word searched type any word and click search</p>
</div>`;
  }
}

// function displaynotes(){
// }

function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let resetIcon = document.getElementsByClassName("resetIcon")[0];
// const userName = prompt("Enter your name");
const searchTxt = document.querySelector("#searchTxt");
//const other = document.getElementsByClassName('other');
//let vogWrapper = document.getElementsByClassName("vogWrapper")[0];
let searchbtn = document.getElementById("searchbtn");
let historybtn = document.getElementsByClassName("historybtn")[0];
let mainsearch = document.getElementsByClassName("mainsearch")[0];
let notfound = document.getElementsByClassName("notfound")[0];
let viewongooglebtn = document.getElementsByClassName("viewongooglebtn")[0];
let mainContainer = document.getElementsByClassName("main-container")[0];
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
  let url = "https://www.google.com/search?q=" + searchTxt.value + " meaning";
  window.open(url);
}
searchbtn.addEventListener("click", () => {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(searchTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
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
searchTxt.addEventListener("keyup", (e) => {

  //notfound.style.display = "none";
  if (e.keyCode === 13) {
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(searchTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
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
  }
});
//mainContainer.addEventListener('click', () => {
//    overlay.style.background = "transparent";
//})
//other.addEventListener('click', ()=>{
//    overlay.style.background = "red";
//})
//searchTxt.addEventListener('input', () => {
//  overlay.style.background = "#0000005e";
//})

async function getdata(word) {
  let response = await fetch(
    `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=f276c47d-117a-4e13-8554-01e72d75d1d9`
  );
  const data = await response.json();
  if (!data.length) {
    notfound.style.display = "block";
    viewongooglebtn.style.display = "none";
    preloader.style.display = "none";
    //notfound.style.display = "none";
    return;
  }
  if (data.length) {
    notfound.innerHTML = "";
    //notfound.style.display = "none";
    //return;
  }
  console.log(data);

  let defination = data[0].shortdef[0];
  info.innerHTML = defination;
}

// function viewg() {
//     let url = "https://www.google.com/search?q="+searchTxt.value;
//     vogWrapper.innerHTML = `<a href="${url}">view on google</a>`
// }
