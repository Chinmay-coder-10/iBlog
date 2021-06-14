let textBox = document.querySelector("#text");
let text = null;
let pre = document.getElementById("preloader1");
let values = document.getElementById("val");

function hidepre() {
  pre.style.display = "none";
  values.style.display = "block";
}
setTimeout(hidepre, 2500);

let data = {
  Words: 0,
  Sentences: 0,
  Uppercaes: 0,
  Lowercase: 0,
  Spaces: 0,
  Digits: 0,
  Vowels: 0,
  Consonants: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  text = textBox.value;
  //For capital letters - text.match(/[A-Z]/g
  //For small letters - text.match(/[a-z]/g)
  //For vowels - text.match(/[aeiou]/gi));
  //For consonants - 'Consonants are',text.match(/[bcdfghjklmnpqrstvwx]/gi)
  //For Words - 'Words are', text.match(/[a-zA-Z]+/g)
  //For Spaces - 'Number of Spaces are', text.match(/\s/g).length
  // console.log("Number of Spaces are", text.match(/\s/g).length);
  if (text != null) {
    data.Sentences = findLength(text.match(/\056/g));
    data.Words = findLength(text.match(/[a-zA-Z]+/g));
    data.Spaces = findLength(text.match(/\s/g));
    data.Uppercaes = findLength(text.match(/[A-Z]/g));
    data.Lowercase = findLength(text.match(/[a-z]/g));
    data.Digits = findLength(text.match(/\d/g));
    data.Vowels = findLength(text.match(/[aeiou]/gi));
    data.Consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="">
    <div class="main">
      <h1 class="h1">${data[item]}</h1>
      <div class="text">${item}</div>
    </div>
  </div>`;
  }
  document.querySelector(".values").innerHTML = htmlContent;
};


