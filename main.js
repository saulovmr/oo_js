function Concessionária (marca) {
    this.marca = marca;  
}

function Carro(marca, nome, modelo, valor) {
    Concessionária.call(this, marca);
    this.nome = nome;
    this.modelo = modelo;
    this.valor = valor;

}

function Especificacoes(marca, nome, modelo, valor, velocidadeMax, consumo, cor) {
    Concessionária.call(this, marca);
    Carro.call(this, nome, modelo, valor);

    this.velocidadeMax = velocidadeMax;
    this.consumo = consumo;
    this.cor = cor;
}

const comprador1 = new Carro("GM", "Onix", "LTZ", 45000);
const comprador2 = new Carro("Fiat", "Mobi", "Like", 40000);
const comprador3 = new Especificacoes("FORD", "FIESTA", "Fastback", 60000, 145, 12, "Azul");

console.log(comprador1);
console.log(comprador2);
console.log(comprador3);