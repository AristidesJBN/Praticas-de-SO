  function first() {
    var alt = parseFloat(document.getElementById("alt").value);
    var larg = parseFloat(document.getElementById("larg").value);

    if (alt/125 > larg/192){
      var X = alt*(192/125)
      var Y = alt
      document.getElementById("resultado").innerHTML = "A altura segue:" + Y;
      document.getElementById("resultado1").innerHTML = "Use a largura: " + X;
    }else{
      var Y = larg*(125/192)
      var X = larg
      document.getElementById("resultado").innerHTML = "Use a altura: " + Y;
      document.getElementById("resultado1").innerHTML = "A largura segue:" + X;
    }
  }

  //ativação/desativação da div

  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("idbutton");
    var containercompara = document.getElementById("idcontainercompara");
  
    button.addEventListener("click", function botao() {
      if (containercompara.style.display === "block") {
        containercompara.style.display = "none";
      } else {
        containercompara.style.display = "block";
      }
    });
  });