//criando um objecto
var pesssoa = {nome: 'Rui', idade: 45};

//criando uma classe
class Pessoa /*deve começar com letra maiuscula - uma classe é como se fosse um molde*/{

    constructor(nome,idade,endereco){

        this.nome = nome; //este elemento pessoa vai ser igual que recebermos no construtor
        this.idade = idade;
        this.endereco = endereco;

    }

   andar(){
    console.log('a pessoa' + this.nome + 'está andando...');
   }

}

var pessoa1 = new Pessoa('Rui',45,'Rua 1º de Maio')//criando um novo objecto 'pessoa1' com base na classe Pessoa