// 1. 변수
// 변수와 상수는 특정 이름에 특정 값을 담을 때 사용함
// 변수는 변할 수 있는값, 상수는 한번 선언하고 바뀌지 않는 값
// 변수 : let / var(되도록 사용x) 상수 : const

// let a =10;
// const b=20;
// a=20;
// //b=30; //error
// console.log(`a is ${a} b is ${b}`);


// --------------------------------------------------------------------------
// 2. 연산자
// 프로그래밍 언어에서 특정 연산을 하도록 하는 문자
// 또는 boolean type을 정의해주는 연산자

// let a = 10;
// let b = 20;
// const c = a+b;
// console.log(`c is ${c}`);


// // 후위 연산자는 값을 출력 하고 그 뒤에 산술을 해준다.
// let d = 30;
// console.log(d++);//30
// console.log(++d);//32
// console.log(d--);//32
// console.log(--d);//30

// let e = true;
// console.log(!e);
// console.log(e&&false);
// console.log(e||false);

// -----------------------------------------------------------------------------
// 3. 조건문
// 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있다.

//if
// const a = 10;
// if(a===10){
//     console.log(`a is 10`);
// }
// else{
//     console.log(`a is not 10`);
// }

// //switch/case

// const username = 'hello';

// switch(username){
//     case 'hello':
//         console.log("im hello");
//         break;
//     case 'bye':
//         console.log("im bye");
//         break;
//     case 'hi':
//         console.log("im hi");
//         break;
//     default:
//         console.log("what is your name?");
// }

// 4.function
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
// function add(a,b){
//     return a+b;
//     console.log("호출 x"); //리턴 사용시 밑에 코드는 호출 x
// }
// const sum = add(1,2);
// console.log(sum);

//

// 5. 배열
// 변수의 값이 연속적으로 나열된 형식

//선언
const arr1 = new Array();
const arr2 = [];

//값 삽입
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;

arr2.push(1);
arr2.push(2);
arr2.push(3);

//length
console.log(arr1.length); // 배열의 길이 출력

//join
const arr3 = ["no1","no2","no3"];
console.log(arr3.join("!!"));
//join 안의 값을 중간에 넣어줘서 하나의 문자열로 만들어준다.


//reserve
const arr4 = [1,2,3];
console.log(arr4.reverse());
//배열을 반대로 뒤집는다


//sort
const arr5 = [10,8,20];
console.log(arr5.sort());
//sort는 문자열 기준으로 정렬해준다. 정렬조건을 넣고싶으면 sort에 함수를 전달하면 된다.



