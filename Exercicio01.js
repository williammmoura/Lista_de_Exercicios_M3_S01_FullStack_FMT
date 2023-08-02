// function P(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// // Teste a função
// console.log(P(7)); // Saída esperada: true
// console.log(P(12)); // Saída esperada: false

// REFATORAÇÃO

function Num_Primos(numero){
    if (numero < 2){
        return false;
    };
    for (let i =2 ; i < numero; i++){
        if(numero % i === 0){
            return false;
        };
    return true;
    };
};

// Teste da função:
console.log(Num_Primos(7))