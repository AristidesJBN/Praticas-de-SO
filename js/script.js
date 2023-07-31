//Os comentários são para explicar o código e as funções das linhas

let result; //variável local para "manejar" resultados
var memoria = [10, 40, 40, 8, 20, 60, 100]; //Memórias para serem alocadas no first-fit e best-fit

function first() {
  var valordoprocesso = Number(prompt("Qual o tamanho do processo?")) //coleta valor da variável
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

  quantum = Number(prompt(`Insira o valor de Quantum sendo terminado em 0 (Ex: 10ms, 20ms... 100ms)`))
  quantum = quantum/10;

  for (let i=0; i<=3; i++){ //laço de 4 repetições, coleta os valores da array nas posições 0, 1, 2, 3
    cp[i] = Number(prompt(`Qual o ms do burst-time ${i+1}`)) //burst-time = quantos ms o processo precisa para ser executado
  }
  let resultHTML = document.getElementById("result") //toma referencia da linha 23 do código HTML para os parágrafos que representam os processos

  while (cpu != 0){ //até preencher todo espaço
    for (let p=0; p<=3; p++){ //laço de 4 repetições referente aos processos
      for (let r=0; r <= (quantum-1); r++){ //ex: Se o quantum for = 30ms ∴ laço de 3 repetições | [0, 1, 2] = 3
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
    const processos = [];
    const n = prompt(`Qual a quantidade de processos?`)

    for (i = 0; i < n; i++) {
      var te = Number(prompt(`Qual o tempo de execução do processo ${i+1}?`))
      var pr = Number(prompt(`Qual a prioridade do processo ${i+1}?`))
      processos[i] = {tempoExecucao: te, prioridade: pr }
    }

    processos.sort((a, b) => a.prioridade - b.prioridade); //Ordenar do menor pro maior

    let tempoTotalExecucao = 0;
    let tempoTotalEspera = 0;

    for (i = 0; i < n; i++) {
      const processo = processos[i];
      tempoTotalEspera += tempoTotalExecucao; //"armazena" os valores somando consigo mesmo
      tempoTotalExecucao += processo.tempoExecucao; // //
    }

    const tempoMedioEspera = tempoTotalEspera / n; //Média do tempo

    const resultHTML = document.getElementById("result"); //toma referencia da linha 23 do código HTML para os parágrafos que representam os processos
    resultHTML.innerHTML = 
    `<p class="p0">Tempo total de execução: ${tempoTotalExecucao}</p>
    <p class="p0">Tempo médio de espera: ${tempoMedioEspera}</p>`;
  }

function best() {
  var valordoprocesso = Number(prompt("Qual o tamanho do processo?")) //coleta valor da variável
  result = valordoprocesso;
  const resultElement = document.getElementById("result"); //toma referencia da linha 23 do código HTML para a próxima linha
  resultElement.innerHTML = `Tamanho do processo: ${result}MB`; //"cola" esse texto direto no HTML
  var ap; // AP == Alocation Position
  var sap = 100; // SAP == Save Alocation Position

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

/////////////prioridade preemptiva

var ArrayPrioridade = []
var ArrayTempo  = []
var anterior = 0
var TimeInicial = [];
var TimeResultado = [];
var Tw = 0;
var Tt = 0
//Inserindo nova tarefa
function inserir() {
    var Tempo = prompt("Tempo para a tarefa ser executada: ")
    var Prioridade = prompt("Informe a prioridade: ")
    ArrayPrioridade.push(Prioridade)
    
    ArrayTempo.push(Tempo)
    var inicio = new Date()
    TimeInicial.push(inicio)
    
    //Impreme arrays
    for(x = 0; x <= ArrayPrioridade.length; x++){  
  console.log(ArrayTempo[x] + " " + ArrayPrioridade[x])
  
    }
    
    //Chama função que verifica qual a maior prioridade
    verificar()
}

function verificar(){
   //Verifica qual o maior valor na fila de prioridade
    var max = ArrayPrioridade.reduce(function(a, b) { 
   return Math.max(a, b); }, );
   
   //Verifica se o processo adicionado é mais prioritário que o anterior
    if (anterior < max){
        executar(max)
    } 
    else{
           console.log("Em espera")
           anterio = 0
           executar()
    }

    //Atualiza o valor de processo prioritário anterior para o processo de maior prioridade 
    anterior = max  
}

//Realiza o processo
function executar(max){

//Percorre o array de prioridades
    for(i = 0; i <= ArrayPrioridade.length; i++){
        if (ArrayPrioridade[i] == max){
        
        //Armazena os valos para poder excluir dos arrays quando foram finalizados
            Maior = ArrayPrioridade[i]
            Time = ArrayTempo[i]
            Inicio = TimeInicial[i]
            //Executa o cronômetro em milissegundos 
            var processo = ArrayTempo[i]
            
            const TempoExecucao = setTimeout(finalizar, processo*1000);
             console.log(processo*1000)
             
     
            //Acionada quando o processo é completo
            function finalizar(){
            console.log("Tamanho: " + ArrayPrioridade.length)
            //Localiza a prioridade
                var indice1 = ArrayPrioridade.indexOf(Maior);
                var indice2 = ArrayTempo.indexOf(Time);
                
                 //Determina o horário em que o processo foi finalizada 
                var fim = new Date()
                
                //Adiciona ao Array que Armazena o tempo de espera
                var prioridades = ArrayPrioridade.length
                // Tw = Tempo de espera e Tt = Tempo total                
                for(x = 0; x < ArrayPrioridade.length; x++){
                var Final = fim.getMilliseconds();
                var Init = Inicio.getMilliseconds();
                resultado = Final - Init
                TimeResultado.push(resultado)
                    var TempoEspera = 0
                    
                    var TempodeExecucao = 0
                    TempoEspera = TempoEspera + resultado
                    console.log("TE: " + TempoEspera)
                    console.log("TR: " + resultado)
                    var Tw = TempoEspera/prioridades   
                                                      
                    TempodeExecucao = TempodeExecucao + ArrayTempo[x]
                    var Tt = TempodeExecucao/prioridades
                    document.getElementById("result").innerHTML = `<p>Tempo de espera (milissegundos): ${Tw} </p><p> Tempo de Execução (segundos): ${Tt} </p>`
                      executar()
                }
                 
                 //Exclui os itens localizados 
                ArrayPrioridade.splice(indice1, 1);
                ArrayTempo.splice(indice2, 1);
                console.log("finalizado")               
                                 
                 for(x = 0; x <= ArrayPrioridade.length; x++){  
              console.log(ArrayTempo[x] + " " + ArrayPrioridade[x] +" " + TimeResultado[x])
                }
            
            }
        }
    }
}

function dynamic() {
  cpu = 278; //espaço
  cp = []; // CP == CPU Processes

  for (let i=0; i<=3; i++){ //laço de 4 repetições, coleta os valores da array nas posições 0, 1, 2, 3
    cpL = Number(prompt(`Qual o ms do burst-time ${i+1}?`))
    cpQ = Number(prompt(`Quantum do processo ${i+1}?`))
    cp[i] = {dyProcess: cpL, dyQuantum: cpQ } //burst-time = quantos ms o processo precisa para ser executado
  }

  let resultHTML = document.getElementById("result") //toma referencia da linha 23 do código HTML para os paragrafos do laço à seguir

  
  aap = []; //Array Alocation Position
  asap = [] //Array Save Alocation Position
 
  for (let i=0; i<=3; i++){
    const dCP = cp[i];
    for (let j=0; j<=6; j++){
      if (dCP.dyProcess > memoria[j]){
        if (j == 6){
          //nada alocado
        }
      }else{
        if (asap[i] > memoria[j] || asap[i] == undefined){
          asap[i] = memoria[j]
          aap[i] = j
        }
      }
      if (j == 6){
        memoria[aap[i]] = 0;
      }
    }
  }

  for (let i=0; i<=3; i++){
    dCP = cp[i];
    resultHTML.innerHTML += `<p class="p${i}">O processo ${i+1} ficou alocada na memória ${(aap[i])+1} <br><br/> O processo possuia tamanho de ${dCP.dyProcess} ficou alocada na memória com ${asap[i]}</p>`
  }
  for (i=0; i<=6; i++){
    if (memoria[i] != 0){
      resultHTML.innerHTML += `<p>A memória ${i+1} "sobrou" na CPU tendo espaço de ${memoria[i]}MB </p>`
    }
  }

  for (let i=0; i<=3; i++){
    const imprimirCP = cp[i];
    while (imprimirCP.dyProcess > 0){
      console.log(imprimirCP.dyProcess)
      resultHTML.innerHTML += `<p class="p${i}">Processo  ${i+1} à processar ${imprimirCP.dyProcess}</p>`
      var tamanhoprocessoatual = imprimirCP.dyProcess
      var quantumatual = imprimirCP.dyQuantum
      imprimirCP.dyProcess = tamanhoprocessoatual - quantumatual
      console.log(imprimirCP.dyProcess)
    }
  }
  }

