/**
 * 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 
 * 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요. 
 * (가능하다면 메소드 체이닝으로 풀어주세요)
 */

const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] },
];

const greatStudents = [];

// 여기에 코드를 작성해주세요
for (const stu of students) {
    const sum = stu.scores.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / stu.scores.length;

    if(avg >= 80){
        greatStudents.push(stu.name);
    }
}

console.log(greatStudents);

// 예상 출력: ["이재상", "김준현"]


// 2.
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
const numbers = [5, 10, 15, 20, 25];
const newArr = [];

numbers.forEach(cur => {
    cur *= 2;
    if (cur <= 30) {
        newArr.push(cur);
    }
})

// 출력값 : [10, 20, 30]
console.log(newArr);
