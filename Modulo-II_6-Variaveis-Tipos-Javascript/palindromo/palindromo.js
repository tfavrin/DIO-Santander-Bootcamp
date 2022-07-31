
//solução 1
function verificarPalindromo1(string) {
    if (!string) return "Defina uma string";

    return string.split("").reverse().join("") === string;
}

console.log (verificarPalindromo1("")); //inserir uma string

//solução 2
function verificarPalindromo2(string) {
    if (!string) return "Defina uma string";

    for(let i = 0; i < string.length / 2; i++){
        if (string [i] !== string [string.length - 1 - i]) {
        return false;
        }
    }
    return true;
}

console.log(verificarPalindromo2("")); //inserir uma string