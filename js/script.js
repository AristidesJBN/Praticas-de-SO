  let result;
  var memoria = [10, 40, 40, 8, 20, 60, 100]; //Memórias para serem alocadas
  
  function first() {
    var valordoprocesso = prompt("Qual o tamanho do processo?")
    result = valordoprocesso;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Tamanho do processo: ${result}MB`;

    let resultHTML = document.getElementById("result")

    for (let i=0; i<=6; i++){
      if (valordoprocesso > memoria[i]){
          resultHTML.innerHTML += `<p>A memória-${i} de tamanho ${memoria[i]}MB não alocou o processo</p>` 
          if (i == 6){
            resultHTML.innerHTML += `<p class="naoalocado">Não existe memória capaz de alocar o processo de ${valordoprocesso}MB</p>` 
          }
      }else{
          resultHTML.innerHTML += `<p class="alocado">A memória-${i} de tamanho ${memoria[i]}MB conseguiu alocar o processo</p>`
        i = 7
      }
    }    
  }

  function round() {

  }
  
  function priority() {

  }

  function best() {

  }
  
  function dynamic() {

  }