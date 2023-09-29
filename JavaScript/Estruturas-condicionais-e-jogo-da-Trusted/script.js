//Definição das variaveis dos Jogadores
var inputPlayer1 = document.getElementById("player1");
var inputPlayer2 = document.getElementById("player2");

//criando função mostrar resultado
function showResult(){

    //Mostrar 3 possiveis resultados: Ganhou Player 1, Ganhou player2, Empate

    var scorePlayer1 = parseFloat(inputPlayer1.value);//convertidas as variáveis para decimal através do parsefloat
    var scorePlayer2 = parseFloat(inputPlayer2.value);

    //Usadas condicionais IF, ELSE If e ELSE
    if(scorePlayer1 > scorePlayer2){
        alert("O Jogador 1 Venceu!");
    }else if(scorePlayer1 < scorePlayer2){
        alert("O Jogador 2 Venceu!");
    }else{
        alert("Empate!")
    }

    //alert("O Resultado é:" )
}