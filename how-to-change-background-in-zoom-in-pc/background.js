console.log("This is iBlog");

let audioblog = new Audio();
audioblog.src = "../Audio/How-to-change-virtual-background-in-zoom.mp3";

let stopbtn = document.getElementById("stopbtn");
let resumebtn = document.getElementById("resumebtn");
let voicediv = document.getElementById("voicediv");
let voiceIcon = document.getElementById("vocal");
let h1 = document.getElementsByClassName("h2main")[0];
let description = document.getElementsByClassName("description")[0];
let notesEl = document.getElementById("impnote");
let followsteps = document.getElementById("followsteps");
let step1 = document.getElementById("step1");
// console.log();

voiceIcon.addEventListener("click", function () {
  audioblog.play();
  stopbtn.style.display = "block";
  resumebtn.style.display = "none";

  function highlighth1() {
    h1.style.background = "#ffe000";
  }
  function highlightdescription() {
    h1.style.background = "white";
    description.style.background = "#ffe000";
  }
  function highlightimgnote() {
    h1.style.background = "white";
    description.style.background = "white";
    notesEl.style.background = "#ffe000";
  }
  function highlightimgfollowsteps() {
    h1.style.background = "white";
    description.style.background = "white";
    notesEl.style.background = "white";
    followsteps.style.background = "white";
    steps.style.background = "red";
  }

  function highlightfollowsteps1() {
    h1.style.background = "white";
    description.style.background = "white";
    notesEl.style.background = "white";
    followsteps.style.background = "white";
    step1.style.background = "#ffe000";
  }

  setTimeout(highlighth1, 10);
  setTimeout(highlightdescription, 3000);
  setTimeout(highlightimgnote, 14100);
  setTimeout(highlightimgfollowsteps, 17000);
  setTimeout(highlightfollowsteps1, 19000);
});

stopbtn.addEventListener("click", function () {
  stopbtn.style.display = "none";
  resumebtn.style.display = "block";
  audioblog.pause();
});

resumebtn.addEventListener("click", function () {
  resumebtn.style.display = "none";
  stopbtn.style.display = "block";
  audioblog.play();
});

