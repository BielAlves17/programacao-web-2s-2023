function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        console.log("Não é possível calcular a multiplicação das matrizes.");
        return null;
    }

    const resultMatrix = [];

    for (let i = 0; i < rowsA; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < colsB; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return resultMatrix;
}


const matrixA = [
    [1, 2],
    [3, 4]
];

const matrixB = [
    [5, 6],
    [7, 8]
];


const matrixC = multiplyMatrices(matrixA, matrixB);

if (matrixC) {
    console.log("Matriz C (Resultado da multiplicação AxB):");
    for (let i = 0; i < matrixC.length; i++) {
        console.log(matrixC[i].join("\t"));
    }
}