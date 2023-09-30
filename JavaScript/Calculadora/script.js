        // Função para realizar a soma
        function efectuarSoma() {
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            var resultado = numero1 + numero2;
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }

        // Função para realizar a subtração
        function efectuarSubtracao() {
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            var resultado = numero1 - numero2;
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }

        // Função para realizar a multiplicação
        function efectuarMultiplicacao() {
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            var resultado = numero1 * numero2;
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }

        // Função para realizar a divisão
        function efectuarDivisao() {
            var numero1 = parseFloat(document.getElementById("numero1").value);
            var numero2 = parseFloat(document.getElementById("numero2").value);
            if (numero2 === 0) {
                document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
            } else {
                var resultado = numero1 / numero2;
                document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
            }
        }