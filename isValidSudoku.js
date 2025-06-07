const isValidSudoku = (board) => {
    let row = new Map(new Set())
    let col =  new Map(new Set())
    let box = new Map(new Set())

    for (let r = 0; r < board.length;r++){
        for (let c = 0; c < board[0].length; c++){
            let current_value = board[r][c]
            let box_coordinate = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`
            if(current_value !== "."){
                if(!row[r]) row[r] = new Set()
                if(!col[c]) col[c] = new Set()
                if(!box[box_coordinate]) box[box_coordinate] = new Set()
                if(row[r].has(current_value) || col[c].has(current_value) || box[box_coordinate].has(current_value)){
                    return false
                }
                row[r].add(current_value)
                // col[c].add(current_value)
                // box[box_coordinate].add(current_value)
            }
        }
    }
    return true


}
board1 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board1))