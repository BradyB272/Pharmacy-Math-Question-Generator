

const arr = ['mg/mL', 'mcg/mL', 'mg/L'];
let num = null

function genConversion () {
  function clearBox(elementID){ //this resets the question
      document.getElementById(elementID).innerHTML = "";
  }

  clearBox('output');

  function shuffle(a) { //this function just shuffles the array pasted in
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

   function randomNum() {
    var number = Math.floor((Math.random() * 100) +1);
    return number
  }

  num = randomNum()

  shuffle(arr);

  output.innerHTML += "Convert " + num + ' ' + arr[0] + ' to ' + arr[1]

}

function solveProb() {
  function clearBox(elementID){ //this resets the question
      document.getElementById(elementID).innerHTML = "";
  }

  clearBox('answer');

  if (arr[0] === 'mg/mL' && arr[1] === 'mcg/mL') {
  answer.innerHTML += "Answer: " + num*1000 + arr[1]
} else if (arr[0] === 'mcg/mL' && arr[1] === 'mg/mL'){
  answer.innerHTML += "Answer: " + num/1000 + arr[1]
} else if (arr[0] === 'mcg/mL' && arr[1] === 'mg/L'){
  answer.innerHTML += "Answer: " + num + arr[1]
} else if (arr[0] === 'mg/mL' && arr[1] === 'mg/L'){
  answer.innerHTML += "Answer: " + num*1000 + arr[1]
}  else if (arr[0] === 'mg/L' && arr[1] === 'mcg/mL'){
  answer.innerHTML += "Answer: " + num + arr[1]
} else if (arr[0] === 'mg/L' && arr[1] === 'mg/mL'){
  answer.innerHTML += "Answer: " + num/1000 + arr[1]
}

}
