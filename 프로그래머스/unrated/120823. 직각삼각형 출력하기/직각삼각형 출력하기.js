const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; // 왜 3이 들어가지..? 
let newArray = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // n
    const n = Number(input[0]);
    
    for(let i=0; i<n; i++){
        newArray += '*'.repeat(i+1)+'\n'
    }
    
    console.log(newArray);
});