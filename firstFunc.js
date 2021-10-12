const txt ="Вы проснулись в комнате в совершенном одиночестве.";
let i = 0;
const speed = 50;
function firstFunc() {
if (i < txt.length) {
  document.getElementById("first").innerHTML += txt.charAt(i);
  i++;
  setTimeout(firstFunc, speed);
}
}