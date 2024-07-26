const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);  



const obj1 = {a: 1, b: 2, c: 3};

// obj1을 얕은 복사하는 코드로 작성해주세요
const obj2 = obj1;
/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;
/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1) // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2) // { a: 1, b: 2, c: 3, d: 4 }

// 객체는 어떤 데이터를 참조할 것인지에 대한 "주소값"을 가지는데
// 얕은 복사를 수행하게 되면 obj1의 "데이터"가 아니라 "참조하게 되는 주소"를 복사합니다.  
// => 같은 참조를 하기 때문에 d라는 속성를 추가하게 되면(혹은 다른 속성을 변경하면) 같은 주소를 참조하는 다른 모든 객체의 속성이 변경됩니다. 