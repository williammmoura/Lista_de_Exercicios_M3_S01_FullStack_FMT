// class Forma {
//     constructor(tipo, medidas) {
//         this.tipo = tipo;
//         this.medidas = medidas;
//     }

//     calcularArea() {
//         if (this.tipo === "quadrado") {
//             return this.medidas.lado * this.medidas.lado;
//         } else if (this.tipo === "circulo") {
//             return Math.PI * this.medidas.raio * this.medidas.raio;
//         } else if (this.tipo === "triangulo") {
//             return (this.medidas.base * this.medidas.altura) / 2;
//         }
//     }

//     calcularPerimetro() {
//         if (this.tipo === "quadrado") {
//             return 4 * this.medidas.lado;
//         } else if (this.tipo === "circulo") {
//             return 2 * Math.PI * this.medidas.raio;
//         } else if (this.tipo === "triangulo") {
//             return this.medidas.lado1 + this.medidas.lado2 + this.medidas.lado3;
//         }
//     }
// }

// const forma1 = new Forma("quadrado", { lado: 5 });
// console.log("Área do quadrado:", forma1.calcularArea());
// console.log("Perímetro do quadrado:", forma1.calcularPerimetro());

// const forma2 = new Forma("circulo", { raio: 3 });
// console.log("Área do círculo:", forma2.calcularArea());
// console.log("Perímetro do círculo:", forma2.calcularPerimetro());

// const forma3 = new Forma("triangulo", {
//     base: 4,
//     altura: 6,
//     lado1: 3,
//     lado2: 4,
//     lado3: 5,
// });
// console.log("Área do triângulo:", forma3.calcularArea());
// console.log("Perímetro do triângulo:", forma3.calcularPerimetro());


// REFATORAÇÃO Método SOLID 

class CalculaForma{
    constructor(calculador){
        this.calculador = calculador;
    }
    calcularArea(){
        return this.calculador.calcularArea();
    }
    calcularPerimetro(){
        return this.calculador,this.calcularArea();
    }
}

class CalculaQuadrado{
    constructor(medidas){
        this.medidas = medidas;
    }
    calcularArea() {
        return this.medidas.lado ** 2;
    }
    calcularPerimetro() {
        return 4 * this.medidas.lado;
    }
}

class CalculaCirculo{
    constructor(medidas) {
        this.medidas = medidas;
    }
    calcularArea() {
        return Math.PI * this.medidas.raio * this.medidas.raio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.medidas.raio;
    }
}

class CalculaTriangulo{
    constructor(medidas){
        this.medidas = medidas;
    }

    calcularArea() {
        return (this.medidas.base * this.medidas.altura) / 2;
    }

    calcularPerimetro() {
        return (this.medidas.lado1 + this.medidas.lado2 + this.medidas.lado3);
    }
}

const forma1 = new CalculaForma(new CalculaQuadrado({
    lado: 5
}));
console.log('Área do quadrado:', forma1.calcularArea());
console.log('Perímetro do quadrado:', forma1.calcularPerimetro());

const forma2 = new CalculaForma(new CalculaCirculo({
    raio: 4
}));
console.log('Área do círculo:', forma2.calcularArea());
console.log('Perímetro do círculo:', forma2.calcularPerimetro());

const forma3 = new CalculaForma(new CalculaTriangulo({
    base: 4, altura: 8, lado1: 3, lado2: 3, lado3: 3 
}));
console.log('Área do triângulo:', forma3.calcularArea());
console.log('Perímetro do triângulo:', forma3.calcularPerimetro());