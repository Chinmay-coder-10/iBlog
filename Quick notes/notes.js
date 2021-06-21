console.log("This is notes.js");


let gifpre = document.getElementById('gifpreloader');
let gifpretext = document.getElementById('preloadertext');

function startpre() {
    gifpre.style.display = "block";
    gifpretext.style.display = "block";

    function stoppre() {
        gifpre.style.display = "none";
        gifpretext.style.display = "none";
    }

    setTimeout(stoppre, 450);
}
