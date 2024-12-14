var numIslands = function(grid) {
    let islandCount = 0
    let visited = new Set()
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c ++){
            let validIsland = grid[r][c];
            if(visited.has([r,c]) || validIsland == "0" ) continue
            dfs(r, c, grid, visited)
            islandCount++
        }
    }
    return islandCount

    
};
const dfs = (row, col, grid, visited) => {
    const stack = [[row, col]]
    while(stack.length){
        let currentSquare = stack.pop()
        console.log(currentSquare)
        if(visited.has(currentSquare)) continue
        visited.add(currentSquare)
        let neighbors = getValidNeighbors(currentSquare, grid)
        stack.push(...neighbors)
        
    }

}
const getValidNeighbors = (currentSquare, grid) => {
    let [row, col ] = currentSquare
    const validNeighbors = []
    const neighborCoords = [
        [row +1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col -1 ]
    ]
    for(let )
}


let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

console.log(numIslands(grid))