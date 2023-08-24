function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < cols; j++) {
        transposed[j] = [];
        for (let i = 0; i < rows; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}


const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log("Matriz A:");
printMatrix(matrixA);


const transposedMatrixA = transposeMatrix(matrixA);
console.log("\nTransposta da Matriz A:");
printMatrix(transposedMatrixA);