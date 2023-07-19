  let result;
  var memoria = [10, 40, 40, 8, 20, 60, 100]; //Memórias para serem alocadas
  
  function first() {
    var valordopacote = prompt("Qual o tamanho do pacote?")
    result = valordopacote;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Tamanho do pacote: ${result}MB`;

    let resultHTML = document.getElementById("result")

    for (let i=0; i<=6; i++){
      if (valordopacote > memoria[i]){
          resultHTML.innerHTML += `<p>A memória-${i} de tamanho ${memoria[i]}MB não alocou o pacote</p>`
        
      }else{
          resultHTML.innerHTML += `<p class="alocado">A memória-${i} de tamanho ${memoria[i]}MB conseguiu alocar o pacote</p>`
        i = 7
      }
    }    
  }