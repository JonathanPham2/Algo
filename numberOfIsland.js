var numIslands = function(grid) {
    let islandCount = 0
    let visited = new Set()
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[r].length; c ++){
            let validIsland = grid[r][c];
            if(visited.has(`${r, c}`) || validIsland == "0" ) continue
            dfs(r, c, grid, visited)
            islandCount++
        }
    }
    return islandCount

    
};
const dfs = (row, col, grid, visited) => {
    const stack = [[row, col]]
    while(stack.length){
        let [x, y] = stack.pop()
        // console.log(currentSquare)
        if(visited.has(`${x, y}`)) continue
        visited.add(`${x, y}`)
        let neighbors = getValidNeighbors(x, y, grid)
        stack.push(...neighbors)
        
    }

}
const getValidNeighbors = (row, col, grid) => {
    const validNeighbors = []
    const neighborCoords = [
        [row +1, col],
        [row - 1, col],
        [row, col + 1],
        [row, col -1 ]
    ]
    for(let neighbor of neighborCoords){
        let[row, col] = neighbor
        if(row < 0 || row > grid.length  -1 || col < 0 || col > grid[row].length -1 ) continue
        if(grid[row][col] === "0") continue
        validNeighbors.push([row, col])
    }
    return validNeighbors
}


let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
let grid2 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
console.log(numIslands(grid2))