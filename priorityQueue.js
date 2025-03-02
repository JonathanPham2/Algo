class PriorityQueue{
    constructor(){
        this.value = []
    }
    enqueue(val, priority){
       let newNode = new Node(val, priority)
        this.value.push(newNode)
        this.bubbleDown()
    }
    bubbleDown(){
        let idx = this.value.length - 1
        let element = this.value[idx]
        while(idx > 0 ){
            let parentIdx = Math.floor((idx -1) / 2)
            let parentElement = this.value[parentIdx]
            if(element.priority >= parentElement.priority) break
            this.value[parentIdx] = element
            this.value[idx] = parentElement
            idx = parentIdx

        }
    }

    dequeue(){
        if(this.value.length === 0 ){
            return null
        }
       let  highestPriority = this.value[0]
       let lowest = this.value.pop()
       if(this.value.length > 0){
        this.value[0] = lowest
        this.sinkDown()
       }
       return highestPriority
    }
    // sinkDown(){
    //    let idx = 0 
    //    let element = this.value[idx]
    //    let length = this.value.length
    //    while(true){
    //     let leftChildIndex = 2 * idx +1
    //     let rightChildIndex = 2 * idx + 2
    //     let swap = null
    //     let leftChild, rightChild
    //     if(leftChildIndex < length){
    //         leftChild = this.value[leftChildIndex]
    //         if(leftChild.priority <  element.priority){
    //             swap = leftChildIndex
    //         }
    //     }
    //     if(rightChildIndex < length){
    //         rightChild = this.value[rightChildIndex];
    //         if((swap === null && rightChild.priority < element.priority) || (swap !== null && leftChild.priority > rightChild.priority)){
    //             swap = rightChildIndex
    //         }
    //     }
        if(swap === null) break
        this.value[idx] = this.value[swap]
        this.value[swap] = element
        idx = swap

       }
    }
}

class Node{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}