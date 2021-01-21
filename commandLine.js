for(const item in process.argv){
    console.log(item, process.argv[item]);
}

const iterations = parseInt(process.argv[2]);
const number = parseInt(process.argv[3]);
let sum = 0;

for(let i = 0; i < iterations; i++){
    sum += number;
}

console.log(sum);

const test = 'node commandLine.js 100 3';
const testArray = test.split(' ');

for(const item in testArray){
    console.log(item, testArray[item]);
}