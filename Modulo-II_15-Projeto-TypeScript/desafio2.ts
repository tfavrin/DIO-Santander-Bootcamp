type pessoa = {nome: string, idade: number, profissao: TiposProfissao};
enum TiposProfissao {
    Atriz,
    Padeiro
}

let pessoa1: pessoa ={
    nome: "Maria",
    idade: 29,
    profissao: TiposProfissao.Atriz
}

let pessoa2: pessoa ={
    nome: "Roberto",
    idade: 19,
    profissao: TiposProfissao.Padeiro
}

let pessoa3: pessoa ={
    nome: "Laura",
    idade: 23,
    profissao: TiposProfissao.Atriz
}

let pessoa4: pessoa ={
    nome: "Carlos",
    idade: 19,
    profissao: TiposProfissao.Padeiro
}
