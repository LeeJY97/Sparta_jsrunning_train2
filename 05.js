// 1.
//해당 문제를 forEach로 변경하여 풀어주세요

// 1.
// 결과 값: [100, 200, 300] 출력해주세요 
var arr = [10, 20, 30] 
var newArr = [];

arr.forEach((cur) => newArr.push(cur*10));
console.log(newArr);

// 2.
var arr = [10, 22, 33]
var newArr = [];
// 5의 배수를 찾아 반환하세요
// 결과값 [10]

arr.forEach(cur => {
    if(cur % 5 == 0){
        newArr.push(cur);
    }
})
console.log(newArr);