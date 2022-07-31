function calcularIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const morador1 = {
    nome: 'Laura',
    idade: 29,
};
const morador2 = {
    nome: 'Marilia',
    idade: 27,
};
const morador3 = {
    nome: 'Mauro',
    idade: 29,
};
const morador4 = {
    nome: 'Rafael',
    idade: 27,
};
const morador5 = {
    nome: 'Pedro',
    idade: 26,
};
const morador6 = {
    nome: 'Talita',
    idade: 24,
};

console.log(calcularIdade.call(morador1, 5));