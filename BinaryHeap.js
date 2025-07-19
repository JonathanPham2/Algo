// Push the value into the values property on the heap
// Bubble Up:
    // Create a variable called index which is the length of the values property -1
    // Create a vairable called parentIndex which is the floor of (index-1)/2
    // Keep looping as long as the values element at the parentIndex is less than values element at the child index
    // Swap the value of the values element at the parentIndex witht the value of the element property at the child Index
    // Set the index to be the parentIndex and start over

class MaxBinaryHeap {
    constructor(){
        this.values = [41]
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length -1 
        let element = this.values[idx]
        while(idx > 0 ){
            let parentIndex = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIndex]
            if(element <= parent) break
            this.values[parentIndex] = element
            this.values[idx] = parent
            idx = parentIndex
        }

    }

    extractMax(){
        let max = this.values[0]
        let end = this.values.pop()
        if(this.values.length > 0 ){
            this.values[0] = end
        
            this.sinkDown()
        }
        return max 
    }
    sinkDown(){
        let idx = 0
        let element = this.values[idx]
        const length = this.values.length
         
        while(true){
            let leftChildIdex =  2 * idx + 1
            let rightChildIdex =  2 * idx + 2
            let swap = null
            let leftChild, rightChild
            if(leftChildIdex < length){
                leftChild = this.values[leftChildIdex]
                if(leftChild > element){
                    swap = leftChildIdex
                }
            }
            if(rightChildIdex < length){
                rightChild = this.values[rightChildIdex]
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdex
                }
            }
            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element 
            idx = swap
            



        }
    }
}

// let heap = new MaxBinaryHeap()
// console.log("before",heap)
heap.insert(100)
// console.log("after",heap)
// heap.insert(1)
// console.log("after insert small value", heap)
// console.log(heap.extractMax()) 
