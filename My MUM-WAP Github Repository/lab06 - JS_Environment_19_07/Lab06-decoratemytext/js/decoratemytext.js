let executingBiggerDecorations = false;
let interval = null;

function biggerDecorations() {
  // alert("Hello, world!");
  let textareaElem = document.getElementById("textarea");
  let textareaElemStyle = getComputedStyle(textareaElem);
  // let sizeInPt = Math.floor(parseInt(textareaElemStyle.getPropertyValue("font-size")) / 1.33);
  // let sizeInPx = Math.ceil((sizeInPt + 2) * 1.33);
  // textareaElem.style.fontSize = sizeInPx + "px";
  let newSize = (parseInt(textareaElemStyle.getPropertyValue("font-size")) + 2)
  textareaElem.style.fontSize = newSize + "px";
  // let interval=null;



  // console.log(increase);
}

function bling() {
  // alert("Checkbox toggled");
  let textareaElem = document.getElementById("textarea");
  let bling = document.getElementById("bling");
  let body = document.getElementById("body");
  if (bling.checked) {
    textareaElem.style.fontWeight = "bold";
    textareaElem.style.color = "green";
    textareaElem.style.textDecoration = "underline";
    body.style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    body.style.backgroundRepeat = "repeat";
  } else {
    textareaElem.style.fontWeight = "normal";
    textareaElem.style.color = "#000";
    textareaElem.style.textDecoration = "none";
    body.style.backgroundImage = "none";
    body.style.backgroundRepeat = "repeat";
  }
}

function pigLatin() {
  let textarea = document.getElementById("textarea");
  // let textSplit = textarea.value.trim().split(" ");
  let textSplit = textarea.value.split(" ");
  let newTextSplit = [];

  for (let i = 0; i < textSplit.length; i++) {

    newTextSplit[i] = translatePigLatin(textSplit[i]);

  }


  let newText = "";
  // const vowels = ["a","e","i","o","u"];
  // for(let i = 0; i < textSplit.length; i++){
  //   if(vowels.indexOf(textSplit[i][0].toLowerCase()) < 0){
  //     newTextSplit[i] = textSplit[i].substring(1) + textSplit[i][0] + "ay";
  //   } else {
  //     newTextSplit[i] = textSplit[i] + "ay";
  //   }
  // }

  for (let i = 0; i < newTextSplit.length; i++) {
    newText += newTextSplit[i] + " ";
  }
  textarea.value = newText;
}

// CODE BELOW WAS OBTAINED FROM
// https://www.freecodecamp.org/forum/t/freecodecamp-algorithm-challenge-guide-pig-latin/16039
function translatePigLatin(str) {

  if ((str != "" && str!="\n") ) {
    //finding all the consonants in the beginning of the str. 
    //by using && below I'm achiving a concept called Intersection of Regular Expressions
    //where your pattern finds the union of two or more RegEx rules. 
    //In Java you can achive this with RegEx special character '&&' 
    //but in Javascript you can use the following instead. 
    //Credit goes to http://stackoverflow.com/q/6595477
    var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');

    //if no consonants found (i.e. str starts with vowels)
    //use replace to remove consonants and construct newStr else add 'way' in the end
    if ((consChars !== '') && (consChars !==  null)) {
      newStr = str.replace(consChars, '') + consChars + "ay";
    } else {
      newStr = str + "way";
    }
    return newStr;
  }
  else {
    return "";
  }
}

// function malkovitch(){
//   let textarea = document.getElementById("textarea");
//   let textSplit = textarea.value.split(" ");
//   for(let i = 0; i < textSplit.length; i++){
//     if(textSplit[i].length >= 5){
//       textarea.value = textarea.value.replace(textSplit[i], "Malkovitch");
//     }
//   }
// }

function main() {

  document.getElementById("bling").onchange = bling;
  document.getElementById("biggerDecorations").onclick = function () {

    if (!executingBiggerDecorations) {
      interval = setInterval(biggerDecorations, 500);
      // executingBiggerDecorations = true;
    }
    else {
      clearInterval(interval);
      // interval = false;
    }

    executingBiggerDecorations = !executingBiggerDecorations;

  };
  document.getElementById("pigLatin").onclick = pigLatin;
  // document.getElementById("malkovitch").onclick = malkovitch;
}

window.onload = main;
