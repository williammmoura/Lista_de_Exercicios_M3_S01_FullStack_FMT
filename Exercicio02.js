// function fatorial(n) {
//     if (n === 0) return 1;
//     else return n * fatorial(n - 1);
// }

// // Teste a função
// console.log(fatorial(5)); // Saída esperada: 120
// console.log(fatorial(0)); // Saída esperada: 1
// console.log(fatorial(10)); // Saída esperada: 3628800


function fatorial(numero){
    if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)){
        throw new Error('O número deve ser inteiro e maior, ou igual, a zero');
    }

    if (numero === 0 ){
        return 1;
    } else{
        return numero * fatorial(numero - 1);
    }
}

//Teste da função
try{
    console.log(fatorial(5));
    console.log(fatorial(0));
    console.log(fatorial(10));
}catch(error) {
    console.error(error.message);
}