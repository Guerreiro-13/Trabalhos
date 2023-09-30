



/*function geraRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
        //alert("O número é " + valor)
    
  }*/ 

        // Função para gerar o número aleatório
        function gerarNumeroAleatorio() {
            var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            document.getElementById("numeroGerado").innerHTML = "Número aleatório: " + numeroAleatorio;
        }