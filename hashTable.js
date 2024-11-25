// hash function is any function that can be used to map data of abitrary size to data of a fixed sized .
// the value returned by a hash function called hash value, hash codes, digest, or simply hash

class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size)

    }

    _hash(key){
        let total = 0
        let constant = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * constant + value) % this.keyMap.length
        }
        return total
    }
    // set
    // accepts a key and a value 
    // hashes the key
    //  stores the key-value pair in the hash table array via seprate chaining
    set(key, value){
       let hashedKey = this._hash(key)
        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = []

        }
        this.keyMap[hashedKey].push([key, value])

    }
    // accept a key 
    // hashes the key
    // Retrieves the key-value pair in the hash table

    get(key){
        let hashedKey = this._hash(key)
        if(this.keyMap[hashedKey]){
            for(let subArray of this.keyMap[hashedKey]){
                if(subArray[0] === key){
                    return subArray
                }
            }
           
        }
       return undefined
    }
}
let ht = new HashTable()
ht.set("hello", "good")