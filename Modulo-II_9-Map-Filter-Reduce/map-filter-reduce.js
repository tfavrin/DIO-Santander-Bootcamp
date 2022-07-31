//ARRAY ORIGINAL 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//MAP COM THIS
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};


function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('MAP COM THIS: quando this.maca =>', mapComThis(nums, maca));
console.log('MAP COM THIS: quando this.laranja =>', mapComThis(nums, laranja));

//MAP SEM THIS
function mapSemThis (arr){
    return arr.map(function(item){
        return item * 2;
    });
}

console.log('MAP SEM THIS: ', mapSemThis(nums));

//FILTER
function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

console.log('FILTER: filtrar os números pares do Array Original =>', filtraPares(nums));

//REDUCE
function somaNumeros(arr){
    for (i = 0; i < arr.length; i++) {
    return arr.reduce(function(prev,current){
        return prev + current;
    })}
}

console.log('REDUCE: soma dos números do Array Original', somaNumeros(nums)); 

//Compras e Saldo Final
const listaCompras = [
    {
        nome: 'sabao em pó',
        preco: 15,
    },

    {
        nome: 'desinfetante',
        preco: 8,
    },

    {
        nome: 'amaciante',
        preco: 10
    },
];

const saldo = 100;

function efetuarCompra (saldo, listaCompras){
    return listaCompras.reduce(function (prev, current, i){
        console.log(i+1, 'º produto');
        console.log('Saldo atual: ', prev);
        console.log('Produto', current);
        return prev-current.preco;
    }, saldo);
}

console.log (efetuarCompra(saldo, listaCompras));