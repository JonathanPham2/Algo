
from collections import defaultdict
def isValidSoduku(board):
    # keeping track of each row and column index by using set inside a hash map
    row =defaultdict(set)
    col = defaultdict(set)
    box = defaultdict(set)
    for r in range(len(board)):
        for c in range(len(board[0])):
            current_value = board[r][c]
            box_coordinate = f'{r//3}, {c//3}' # coordinate for sub-box inside board 3x3 keeping track of each value inside sub-box
            if current_value != ".":
                if current_value in row[r] or current_value in col[c] or current_value in box[box_coordinate]:
                    return False
                row[r].add(current_value)
                col[c].add(current_value)
                box[box_coordinate].add(current_value)
    return True
    
board1 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
print(isValidSoduku(board1))