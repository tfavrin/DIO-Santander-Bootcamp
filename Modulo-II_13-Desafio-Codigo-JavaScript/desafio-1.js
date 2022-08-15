function elevarAoQuadrado (N){
    for (let i = 1; i <= N; i++){
        resultado = i ** 2;
        if (i % 2 === 0){
            console.log(`${i}^2 = ${resultado}`); 
        }
    }
}

elevarAoQuadrado(19);
