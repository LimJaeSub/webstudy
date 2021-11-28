/*
    DateClass
    -날짜와 시간에 관련된 것들

    시,분,초,m/s
    1. Date.getHours()
    -리턴값 : 0~23까지 정수.

    2. Date.getMinutes()
    -리턴값 : 0~59까지 정수

    3. Date.getSeconds()
    -리턴값 : 0~59까지 정수

    4. Date.getMilliseconds()
    -리턴값 : 0~ 999까지 정수
*/

function nowTime(){
    var nowTime = new Date();
    var hour = nowTime.getHours();
    var minutes = nowTime.getMinutes();
    var seconds = nowTime.getSeconds();
    var mSeconds = nowTime.getMilliseconds();
    var whatTime = hour+":"+minutes+":"+seconds+":"+mSeconds;

    console.log(whatTime);
}

/*
    1. getFullYear = 년도
    2. getMonth = 0(1월)~11(12월)
    3. getDate = 1~31
    4. getDay = 0(일요일)~6(토요일)
*/