
from collections import defaultdict
def isValidSoduku(board):
    # keeping track of each row and column index by using set inside a hash map
    row =defaultdict(set)
    col = defaultdict(set)
    box = defaultdict(set)
    
