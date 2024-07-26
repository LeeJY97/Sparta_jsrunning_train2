function deepCopy(o) {
    var result = {};
    if (typeof o === "object" && o !== null)
        for (i in o) result[i] = deepCopy(o[i]);
    else result = o;
    return result;
}

var arr1 = [{ a: 1 }, { b: 2 }]

/* 여기에 깊은 복사 코드를 작성해주세요 */
const arr2 = deepCopy(arr1);

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */
arr2[0].c = 3

/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
console.log(arr1);
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/
console.log(arr2);

/**
 * 깊은 복사는 원본 객체의 참조 주소를 갖고 오는게 아니라
 * 원본 객체의 "데이터만" 으로 "새로운 객체"를 복사하는 개념
 * 
 * 깊은 복사를 수행하게 되면 원본 객체를 순회하며 데이터만을 복사하게 되는데
 * 데이터 자체에는 원본 객체에 대한 정보(주소값)가 없기 때문에 참조하는 주소가 새로이 할당되게 됩니다.
 * 따라서 독자적인 주소를 갖습니다. (복사본 수정해도 원본 수정X)
 */