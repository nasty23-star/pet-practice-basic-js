let x = document.getElementById("x");
x.addEventListener("click", someOher);
x.addEventListener("dblclick", laterFunc);
function someOher() {
  Array.from(document.querySelectorAll(".any")).forEach(el => el.remove());
}
  
  function laterFunc() {
    document.querySelector(".later").innerHTML = "ищи дорогу справа";
  }

 