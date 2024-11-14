let matrixDiagonalSum = (matrix) => {
    // loop through main diagonal
    c = matrix[0].length -1
    let sum = 0
    for(let i = 0 ; i < matrix.length;i++){
        sum += matrix[i][i]
        console.log(sum)


    }
    //loop through secondary diagonal
    for(let r = 0; r < matrix.length; r++){
        
            sum += matrix[r][c]
            c--
    // console.log(sum)
            
        
    }
    if(matrix.length % 2 === 1){
        m =  Math.floor(matrix.length / 2)
        sum -= matrix[m][m]
    }
    // console.log(sum)
return sum


}

const matrix1 = [
    [7]
];

let result =  matrixDiagonalSum(matrix1)
console.log(result)