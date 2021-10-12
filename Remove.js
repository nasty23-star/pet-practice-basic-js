let xy = document.querySelector(".step");
   xy.addEventListener("click",Remove);
xy.addEventListener("mouseout", Out);
  function Remove()
   { xy.innerHTML = "вы нашли ключ. но где замок?<br>";
   }