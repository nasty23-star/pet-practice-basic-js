const txt1 = " Нет окон. Лишь дверь впереди. На полу матрас и больше ничего.";
let k = 0;
const times = 60;
function justFunc() {
  if (k < txt1.length) {
    document.getElementById("just").innerHTML += txt1.charAt(k);
    k++;
    setTimeout(justFunc, times);
  }
}