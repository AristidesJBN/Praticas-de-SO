//Os comentários são para explicar o código e as funções das linhas

let result; //variável local para "manejar" resultados
var memoria = [10, 40, 40, 8, 20, 60, 100]; //Memórias para serem alocadas no first-fit e best-fit

function first() {
  var valordoprocesso = prompt("Qual o tamanho do processo?") //coleta valor da variável
  result = valordoprocesso;
  const resultElement = document.getElementById("result"); //toma referencia da linha 23 do código HTML para a próxima linha
  resultElement.innerHTML = `Tamanho do processo: ${result}MB`; //"cola" esse texto direto no HTML

  let resultHTML = document.getElementById("result") //toma referencia da linha 23 do código HTML para os paragrafos do laço à seguir

  for (let i=0; i<=6; i++){ //laço de 7 repetições pois a array possui 7 indices | [0, 1, 2, 3, 4, 5, 6] = 7
    if (valordoprocesso > memoria[i]){ //valida se a memória NÃO suporta aquele processo
        resultHTML.innerHTML += `<p>A memória-${i} de tamanho ${memoria[i]}MB não alocou o processo</p>` 
        if (i == 6){ //valida que não conseguiu alocar em nenhum
          resultHTML.innerHTML += `<p class="naoalocado">Não existe memória capaz de alocar o processo de ${valordoprocesso}MB</p>` 
        }
    }else{ //alocado
        resultHTML.innerHTML += `<p class="alocado">A memória-${i} de tamanho ${memoria[i]}MB conseguiu alocar o processo</p>`
      i = 7 //encerra o laço
    }
  } //Esse laço com essas condições, resumidamente coloca o processo no primeiro espaço de memória que ele encontra, tal qual o metodo first-fit.
}

function round() { 
  var cpu = 220; //espaço
  var cp = []; // CP == CPU Processes

  for (let i=0; i<=3; i++){ //laço de 4 repetições, coleta os valores da array nas posições 0, 1, 2, 3
    cp[i] = prompt(`Qual o ms do burst-time ${i+1}`) //burst-time = quantos ms o processo precisa para ser executado
  }
  let resultHTML = document.getElementById("result") //toma referencia da linha 23 do código HTML para os parágrafos que representam os processos

  while (cpu != 0){ //até preencher todo espaço
    for (let p=0; p<=3; p++){ //laço de 4 repetições referente aos processos
      for (let r=0; r<=2; r++){ //tempo de alocação = 30ms ∴ laço de 3 repetições | [0, 1, 2] = 3
        if (cp[p] > 0 || cp[p] === undefined){ //valida se o processo precisa de continuidade ∴ 0 = encerrou
        cp[p] = cp[p]-10 //10ms por alocação
        cpu = cpu-10 //10ms por alocação
        resultHTML.innerHTML += `<p class="p${p}">Processo  ${p+1} à processar ${cp[p]}</p>` //imprime o processo e quanto falta para processar
        }else{ //se o processo encerrou ∴ encerra o laço
          r = 4
        }
      }
    } //Esse conjunto de laços dividem cada processo pelo mesmo tempo de alocação enquanto ativos em partes iguais, assim como o escalonamento round-robin.
  }
  
}

function priority() {

}

function best() {
  var valordoprocesso = prompt("Qual o tamanho do processo?") //coleta valor da variável
  result = valordoprocesso;
  const resultElement = document.getElementById("result"); //toma referencia da linha 23 do código HTML para a próxima linha
  resultElement.innerHTML = `Tamanho do processo: ${result}MB`; //"cola" esse texto direto no HTML
  var ap; // AP == Alocation Position
  var sap = 100; // SA == Save Alocation Position

  let resultHTML = document.getElementById("result") //toma referencia da linha 23 do código HTML para os paragrafos do laço à seguir

  for (let i=0; i<=6; i++){ //laço de 7 repetições pois a array possui 7 indices | [0, 1, 2, 3, 4, 5, 6] = 7
    if (valordoprocesso > memoria[i]){ //valida se a memória NÃO suporta aquele processo
        if (i == 6){ //valida que não conseguiu alocar em nenhum
          resultHTML.innerHTML += `<p class="naoalocado">Não existe memória capaz de alocar o processo de ${valordoprocesso}MB</p>` 
        }
    }else{ 
      if (sap > memoria[i]){
        sap = memoria[i]
        ap = i
    }
  } //Esse laço com essas condições, resumidamente coloca o processo no primeiro espaço de memória que ele encontra, tal qual o metodo first-fit.
  if (i == 6){
    for (let i=0; i<=6; i++){
      if (i == ap){
        resultHTML.innerHTML += `<p class="best">A memória-${i} de tamanho ${memoria[i]}MB alocou o processo</p>`
      }else{
        resultHTML.innerHTML += `<p>A memória-${i} de tamanho ${memoria[i]}MB não alocou o processo</p>` 
      }
    }
  }
}
}

function preemptive() {

}

function dynamic() {
  
}