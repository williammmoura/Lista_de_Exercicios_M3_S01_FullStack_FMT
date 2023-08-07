// Sistema de Gerenciamento de Pedidos Online

/**
 * 1 - O sistema deve permitir que os clientes façam pedidos de produtos.
 * 2 - Cada pedido pode conter vários itens com suas quantidades.
 * 3 - O sistema deve calcular o valor total do pedido.
 * 4 - O sistema deve gerar uma nota fiscal para cada pedido.
 */


//Princípio da Responsabilidade Única (SRP)
class Pedido{
    constructor(cliente){
        this.cliente = cliente;
        this.itens = [];
    }
    
    adicionarItem(item){
        this.itens.push(item);
    }

    calcularValorTotal(){
        return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0)
    }
}

class ItemPedido{
    constructor(produto, quantidade){
        this.produto = produto;
        this.quantidade = quantidade;
    }

    calcularSubtotal(){
        return this.produto.preco * this.quantidade;
    }
}

//Princípio do Aberto/Fechado (OCP) 
class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
}

// Criar produtos
const produto1 = new Produto("Notebook", 4500);
const produto2 = new Produto("PlayStation5", 4000);

//Criar cliente
const cliente = new Cliente("William", "Rua Quadrada, 321");

//Criar itens de pedido
const item1 = new ItemPedido(produto1, 2);
const item2 = new ItemPedido(produto2, 1);

//Criar pedido e adicionar itens
const pedido = new Pedido(cliente);
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

//Calcular valor total do pedido
const valorTotal = pedido.calcularValorTotal();

console.log(`Valor total do pedido: R$ ${valorTotal.toFixed(2)}`);