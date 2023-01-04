// LINHAS m == board.length
// COLUNAS n == board[i].length

function batalhaNaval(tabela) {
    let linhas = tabela.length
    let coluna = 0
    const numBarcos = []
    tabela.forEach(linhas => {

        // coluna = linhas.length
        // linhas.forEach(campo => {
        //     if(campo === 'X'){
        //         numBarcos.push(campo)
        //     }
        // });
    });
    return numBarcos.length
}

console.log(batalhaNaval([['X', '.', 'X'], ['.', '.', 'X'], ['X', 'X', 'X']]))

// se tiver dois X juntos é um barco tamanho 2 (na horizontal ou vertical)
//ver se na posição 1, 2 e 3 possui algum X, e se tiver vai contar como um só barco