// class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome;
//         this.preco = preco;
//         this.quantidade = quantidade;
//     }
// }

/**
 * 1 -> IDENTIFICAR AS VIOLAÇÕES AOS PRINCÍPIOS SOLID:
 * - A classe "Estoque" possui múltiplas responsabilidade o que viola o Princípio da Responsabilidade Única (SRP);
 * - A classe "Estoque" precisa ser modificada para adicionar novas funcionalidades, ou seja, o código não está aberto a extenções, violando o Princípio Aberto/Fechado (OCP);
 */

// class Estoque {
//     constructor() {
//         this.produtos = [];
//     }

//     adicionarProduto(produto) {
//         this.produtos.push(produto);
//     }

//     removerProduto(produto) {
//         const index = this.produtos.findIndex((p) => p.nome === produto.nome);
//         if (index !== -1) {
//             this.produtos.splice(index, 1);
//         }
//     }

//     listarProdutos() {
//         return this.produtos;
//     }
// }

// // Utilização do Estoque
// const estoque = new Estoque();

// const produto1 = new Produto("Camiseta", 29.99, 50);
// estoque.adicionarProduto(produto1);

// const produto2 = new Produto("Calça Jeans", 89.99, 30);
// estoque.adicionarProduto(produto2);

// console.log("Produtos em estoque:", estoque.listarProdutos());

// estoque.removerProduto(produto1);

// console.log("Produtos em estoque após a remoção:", estoque.listarProdutos());


// 2 -> REFATORAÇÃO (APLICAR CLEAN CODE E SOLID).

class Product {
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

class Stock {
    constructor(storage){
        this.storage = storage;
    }

    addProduct(product){
        this.storage.add(product);
    }

    removeProduct(product){
        this.storage.remove(product);
    }

    listProduct(){
        return this.storage.list();
    }
}

class MemoryStorage {
    constructor(){
        this.product = [];
    }

    add(product){
        this.product.push(product);
    }

    remove(product){
        const index = this.product.findIndex((p) => p.name === product.name);
        if(index !== -1){
            this.product.splice(index, 1);
        }
    }

    list(){
        return this.product;
    }
}

// Utilização do "Stock" com o "MemoryStorage"
const storage = new MemoryStorage();
const stock = new Stock(storage);

const product1 = new Product('Camisetas', 79.90, 150);
stock.addProduct(product1);

const product2 = new Product('Calça', 109.90, 125);
stock.addProduct(product2);

console.log('Produtos em estoque:', stock.listProduct());

stock.removeProduct(product1);

console.log('Produtos em estoque após a remoção:', stock.listProduct());