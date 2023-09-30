//criar array
// ["Nome","Categoria","Preço"]
/*var arrayBidimensionalLiteralProdutos = [];

arrayBidimensionalLiteralProdutos[0] = ["Maçã", "Frutos", 1.5];
arrayBidimensionalLiteralProdutos[1] = ["Pêra", "Frutos", 2];
arrayBidimensionalLiteralProdutos[2] = ["Laranja", "Frutos", 2];
arrayBidimensionalLiteralProdutos[3] = ["Tomate", "Frutos", 3];
arrayBidimensionalLiteralProdutos[4] = ["Alface", "Legumes", 1];
arrayBidimensionalLiteralProdutos[5] = ["Bróculos", "Legumes", 3];
arrayBidimensionalLiteralProdutos[6] = ["Batata", "Legumes", 2.5];
arrayBidimensionalLiteralProdutos[7] = ["Cenouras", "Legumes", 1.5];
arrayBidimensionalLiteralProdutos[8] = ["Feijão", "Leguminosas", 3.5];
arrayBidimensionalLiteralProdutos[9] = ["Grão", "Leguminosas", 3.5];
arrayBidimensionalLiteralProdutos[10] = ["Lentilhas", "Leguminosas", 4.5];*/

var arrayProdutos = [
    ["Nome", "Categoria", "Preço"],
    ["Maçã", "Frutos", 1.5],
    ["Pêra", "Frutos", 2],
    ["Laranja", "Frutos", 2],
    ["Tomate", "Frutos", 3],
    ["Alface", "Legumes", 1],
    ["Bróculos", "Legumes", 3],
    ["Batata", "Legumes", 2.5],
    ["Cenouras", "Legumes", 1.5],
    ["Feijão", "Leguminosas", 3.5],
    ["Grão", "Leguminosas", 3.5],
    ["Lentilhas", "Leguminosas", 4.5]
];

// Função para mostrar o conteúdo da tabela quando o botão for clicado
document.getElementById("listar").addEventListener("click", function() {
    var table = document.getElementById("listaProdutos");
    table.innerHTML = ""; // Limpa qualquer conteúdo anterior

        for (var i = 0; i < arrayProdutos.length; i++) {
            var row = table.insertRow(i);

            for (var j = 0; j < arrayProdutos[i].length; j++) {
                var cell = row.insertCell(j);
                cell.appendChild(document.createTextNode(arrayProdutos[i][j]));
            }
        }
       //Limpar o array
       document.getElementById("limpar").addEventListener("click", function() {
        arrayProdutos = []; // Define o array como vazio
        location.reload();
        });

});
 