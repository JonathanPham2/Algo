class Graphs {
    constructor(){
        this.adjacencyList = {}
        
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]


    }
    recursiveTraversal(vertex){
        if(this.adjacencyList[vertex].length === 0){
            return
        }
        let neighbor = this.adjacencyList[vertex].pop()
        if(!visitedVertex.has){
            visitedVertex.add(neighbor)
            resultArray.push(neighbor)
            recursiveTraversal(neighbor)
        }

    
    }
    DFS(node){
        let resultArray = [node]
        let visitedVertex = new Set(node)
        let  recursiveTraversal = (vertex ) =>{
           
            if(this.adjacencyList[vertex].length === 0){
                
                return
            }
            
           for(let neighbor of [...this.adjacencyList[vertex]]){
            if(!visitedVertex.has(neighbor)){
                visitedVertex.add(neighbor)
                resultArray.push(neighbor)
                recursiveTraversal(neighbor)
            }
        }

        
        }
       
        recursiveTraversal(node)
        console.log(visitedVertex)

        return resultArray

    }
    dfsIterative(start){
        let stack = []
        stack.push(start)
        let visisted = new Set()
        let result = []
        while (stack.length !== 0){
           let vertex = stack.pop()
            if(!visisted.has(vertex)){
                result.push(vertex)
                visisted.add(vertex)
                for(let neighbor of this.adjacencyList[vertex]){
                    stack.push(neighbor)
                }
                
            }
        
        }
        return result 
    }
    bfs(start){
        let result = []
        let visited = new Set()
        let queue = [start]

        while(queue.length){
            let vertex = queue.shift()
            visited.add(vertex) 
            result.push(vertex)
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
            
            

        }
        return result 
    }
}
let g = new Graphs()


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


console.log(g)
let node =  "A"

console.log(g.bfs(node))