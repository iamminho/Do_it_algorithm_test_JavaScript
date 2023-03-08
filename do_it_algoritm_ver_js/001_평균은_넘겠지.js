const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './001_평균은_넘겠지.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

function solution(C, inputTestCase) {
    for (let i = 0; i < C; i++) {
        const n = inputTestCase[i].N;
        const arr = inputTestCase[i].arr;
        const sumArr = arr.reduce((acc, el) => {
            return el + acc;
        }, 0);
        const average = sumArr / n;

        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (average < arr[i]) {
                cnt++;
            }
        }   

        const result = ((cnt / n) * 100).toFixed(3);
        console.log(result + '%');
    }
}

solution(inputC, inputTestCase);