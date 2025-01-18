from collections import deque
def wallAndGate(grid):
    # initialize queue 
    ROWS, COLS = len(grid), len(grid[0])
    queue = deque()
    # loop through grid and push all gates to the queue
    for r in range(ROWS):
        for c in range(COLS):
            if grid[r][c] == 0:
                queue.append((r, c))
    if not queue:
        return grid
    #bfs neighor of the gates 
    while queue:
    # extract row, col and step from the queue
        row, col = queue.popleft()
        for dr, dc in [(1,0),(0,1),(-1,0),(0,-1)]:
            nr, nc = row + dr, col + dc
            if 0 <= nr < ROWS and 0 <= nc < COLS and grid[nr][nc] == float('inf'):
                queue.append((nr, nc))
                grid[nr][nc] = grid[row][col] + 1
    return grid
    # if it is an empty room insert a step value to it
    # then put all it valid neighbor into the queue

test_grid = [
    [float('inf'), -1, 0, float('inf')],
    [float('inf'), float('inf'), float('inf'), -1],
    [float('inf'), -1, float('inf'), -1],
    [0, -1, float('inf'), float('inf')]
]
test_grid2 = [
    [-1, -1],
    [-1, -1]
]
test_grid3 = [
    [float('inf'), float('inf')],
    [float('inf'), float('inf')]
]

test_grid4 = [
    [float('inf'), float('inf'), 0],
    [float('inf'), -1, float('inf')],
    [float('inf'), float('inf'), float('inf')]
]

test_grid5 = [
    [0, -1, float('inf')],
    [-1, float('inf'), 0],
    [float('inf'), float('inf'), float('inf')]
]

test_grid6 = [
    [0]
]
print(wallAndGate(test_grid6))
