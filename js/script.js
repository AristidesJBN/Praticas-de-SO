  let result;
  var memoria = [10, 40, 40, 8, 20, 60, 100]; //Memórias para serem alocadas no first-fit e best-fit
  
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

  function round() { //logica quase certa
    var cpu = 220;
    var pa = []; // PA == Process Array
    var cp = []; // CP == CPU Processes

    for (let i=0; i<=3; i++){
      pa[i] = prompt(`Qual o ms da burst-time ${i+1}`)
    }
    let resultHTML = document.getElementById("result")

    for (cpu; cpu != 0; cpu = cpu-10){
      for (let p=0; p<=3; p++){
        for (let r=0; r<=3; r++){
          cp[r] = pa[p]-10
          resultHTML.innerHTML += `<p class="p${p}">pa:${pa[p]} cp: ${cp[r]}</p>`
        }
      }
    }
    
  }
  
  function priority() {

  }

  function best() {

  }
  
  function dynamic() {

  }