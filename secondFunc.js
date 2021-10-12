const txt2 = "Кто вы? Невозможно вспомнить. Память стерта.";
let l=0;
let time = 40;
function secondFunc() {
  if (l < txt2.length) {
    document.getElementById("second").innerHTML += txt2.charAt(l);
    l++;
    setTimeout(secondFunc, time);
  }
}
