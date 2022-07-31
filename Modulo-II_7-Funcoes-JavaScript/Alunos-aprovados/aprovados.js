const listaAlunos = [
    {
        nome: 'Amanda',
        nota: 5,
        turma: '1A'
    },
    {
        nome: 'Bernardo',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Carolina',
        nota: 4,
        turma: '1C',
    },
];


function alunosAprovados (alunos, media) {
    let aprovados = [];
    for (let i  = 0; i < alunos.length; i++){
        const {nota, nome} = alunos[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log (alunosAprovados(listaAlunos,5));