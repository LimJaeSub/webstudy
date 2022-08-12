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
const a = 10;
if(a===10){
    console.log(`a is 10`);
}
else{
    console.log(`a is not 10`);
}

//switch/case

const username = 'hello';

switch(username){
    case 'hello':
        console.log("im hello");
        break;
    case 'bye':
        console.log("im bye");
        break;
    case 'hi':
        console.log("im hi");
        break;
    default:
        console.log("what is your name?");
}
