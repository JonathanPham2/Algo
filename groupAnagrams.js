const groupAnagrams = (strs) => {
    let groups = {}

   for( let str of strs) {
    let key  = str.split('').sort().join('');
    if(!groups[key]){
        groups[key] = []
    }
    groups[key].push(str) // push original string into right group array


   }
   return Object.values(groups)
}

let example = ["eat", "tea", "tan", "ate", "nat", "bat"]

result = groupAnagrams(example)
// console.log(result)