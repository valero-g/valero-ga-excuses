
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getWord(list,numElements){
  return list[Math.floor(Math.random()*numElements)]
}

window.onload = function() {
  //write your code here
  var el = document.getElementById("excuse");
  el.innerHTML= "<p>"+ getWord(who,4) + " " + getWord(action,4) + " " + getWord(what,3) + " " + getWord(when,5) + "!!!</p>";
};
