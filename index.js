let arr = ['banana', 'apple', 'mango', 'water-melon', 'Kiwi']
let split = arr.join('*');
console.log(split);

console.log(arr.includes('Kiwi'));

let result = arr.reduce((acc, val) => acc + "_-_" + val);

let longestString = arr.reduce((acc, val) =>
    val.length > acc.length ? val : acc
)

console.log(result)

console.log(longestString)