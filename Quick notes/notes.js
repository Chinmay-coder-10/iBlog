console.log("This is notes.js");
showNotes();

let gifpre = document.getElementById("gifpreloader");
let gifpretext = document.getElementById("preloadertext");

//Preloader
function startpre() {
  gifpre.style.display = "block";
  gifpretext.style.display = "block";

  function stoppre() {
    gifpre.style.display = "none";
    gifpretext.style.display = "none";
  }

  setTimeout(stoppre, 200);
}
let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");
console.log(addTitle);
//Quick notes

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
let myObj = {
  title: addTitle.value,
  text: addTxt.value
}

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
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
            <div aria-label="Single click notes text to copy" class="noteCard uniquenoteCard my-2 mx-2 card" style="width: 18rem;">
            <button id="${index}" onclick="editNote(this.id)" class="btn-octicon tooltipped tooltipped-nw editbtn" type="submit" aria-label="Edit this file" data-hotkey="e" data-disable-with="">
<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-pencil">
<path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
</svg>
</button>  
<svg id="star" class="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" width="21px" height="20px">
<path  d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
</svg> 
<div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p onclick="copy();" style="user-select: all;" class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>
                 
         `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No note to display.Enter something and click "Add note"`;
  }
}

// Function to delete a note
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

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
function editNote(index) {
  let notes = localStorage.getItem("notes");
  let addTxtedit = document.getElementById("addTxt");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.findIndex((element, index) => {
    addTxtedit.value = element;
  });
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

function star() {
  let star = document.getElementById("star");
  star.addEventListener("click", function () {
    star.style.background = "black";
  });
  star.addEventListener("dblclick", function () {
    star.style.background = "grey";
  });
}
star();
/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/

{
  /* <svg class="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" width="21px" height="20px">
<path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
</svg> */
}

let copyinp = document.getElementById("notetext");
let copybtn = document.getElementById("copybtn");

function copy() {
  document.execCommand("Copy");
}

addTxt.addEventListener("input", function entereventchinu() {
  document.execCommand("enter");
  console.log("Enter");
});

// copybtn.addEventListener('click', function copy() {
//   document.execCommand('Copy');
// })

{
  /* <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p onclick="copy();" style="user-select: all;" class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div> */
}
{
  /* <svg id="star" class="star-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" width="21px" height="20px">
<path  d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855
	l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z"/>
</svg>   */
}
