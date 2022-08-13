// // 1.변수
// // var 보다는 let과 const 사용

// // var는 변수명이 중복되어서 선언되면 재할당,재선언이 가능하기때문에 위험하다.
// var hello = "hello";
// var hell = "hi";
// // let은 에러가 발생한다.
// let hi = "hi";
// let hi = "bye";
// // const는 상수이므로 값 변경이 불가
// const bye = "bye";
// bye = "hello"; // return error





// // function scope vs block scope
// var global = "전역";
// if(global ==="전역"){
//     var global = "지역";
//     console.log(global); //지역
// }
// console.log(global); // 지역

// //if문은 block scope(대괄호로 엮여있음)고 var는 function scope다.

// let global = "전역";
// if(global ==="전역"){
//     let global = "지역";
//     console.log(global); //지역
// }
// console.log(global); // 전역

// //let은 block scope를 따른다.






// // const 활용법
// const object = {
//     student:"hello",
//     score:15,
// }

// object.score = 30;
// object.student = "newstudent";

// console.log(object);

// // 변수에 값을 재할당하는 것은 안되지만, 객체 내부의 값은 조정 가능.
// // 객체, 배열 등 레퍼런스 객체 내부의 값을 조정하는 것은 모두 가능.



// // primitive type vs reference type

// // primitive type
// // 변수에 할당이 될 때 메모리 상에 고정된 크기로 저장이 되고 해당 변수가 원시 데이터 값을 보관
// // 변수 선언,초기화 할당을 할때 값이 저장된 메모리 영역에 직접 접근

// // reference type
// // 값이 저장되어 있는 곳의 주소값을 저장하는 공간으로 힙 메모리에 저장된다.


// // undefined & null
// // undefined : 변수는 선언했지만 값은 할당되지 않은 상태
// let a;
// console.log(a);//undefined
// console.log(!a);//true
// console.log(!!a);//false


// // null 은 수학적으로 접근하면 0으로 취급한다.
// console.log(null+123);//123



// // ==(eqeq) 줄이기
// console.log('100'==100);
// // ==는 자동으로 type casting이 발생함.
// // 위와 같은 상황에선 ===(eqeqeq)사용하기.

// console.log('100'==100);//true
// console.log('100'===100);//false



// // 삼항 연산자
// // 조건 ? 참 : 거짓
// // 삼항연산자를 남발하지 않기



// // 조건문 간결하게
// // mdn에 참 같은 값/거짓 같은 값 검색
// let player;
// if(player === undefined || player===null){
//     console.log("error");
// }

// let player2;
// if(!player2){
//     console.log("error");
// }

// // else 줄이기
// function elseTest(param){
//     if(param){
//         return param;
//     }else{
//         return "값 없음"
//     }
// }
// console.log(elseTest("hello"));

// // 이 case는 두 값(if,return)을 동일한 선상에서 두는 병렬적으로 둔 것
// //====>

// function elseTest(param){
//     if(param){
//         return param;
//     }
//     return "값 없음"
// }

// console.log(elseTest("hello"));

// // 이것은 if문 자체가 특이한 case로 설정한 것.




// // 부정 조건문 지양하기
// function earlyReturn(isLogin){
//     if(!isLogin){
//         // 긴 코드
//     }
//     return ;
// }

// //===>

// function earlyReturn(isLogin){
//     if(isLogin){

//     }
//     return ;//긴 코드
// }

// // 부정 조건문을 지양하면서 짧은 코드를 먼저 쓰는것


// // arrow function
// function basicfunction(param){

// }

// const arrowfunction =(param)=>{

// }

// // template literal
// const username ="name";
// const message = `hello ${username}`;


// // array

// // 빈 배열 판별
// const arr = [];
// if(arr){
//     console.log("빈 배열 아님");
// }
// // 빈 배열은 true값이다. 
// // 따라서 배열이 진짜 비었는지 확인하려면 조건에 arr.length>0을 작성한다


// *구조 분해 할당*

function arrTest(input){
    const [firstInput,secondInput]=input;
    console.log(firstInput);
    console.log(secondInput);
}
arrTest([1,2]);

// map,filter

//객체 구조 분해할당

const obj = {
    name:"hello",
    email:"test@naver.com",
}
function objTest(param){
    const {name,email} = param;

    console.log(name);
    console.log(email);
}
objTest(obj);

// 1주차 미흡한 부분 보완,html css js를 모두 사용하여 서비스 하나 클론코딩(에어비엔비)