var num1 = 10,num2 = 20;
function sumParam(a,b){
    var result = a+b;
    console.log(result);
}



// *arguments
function sumAll(){
    var willReturn = 0;
    for(var i in arguments){
        willReturn+=arguments[i];
    }
    return willReturn;
}
// *argument는 배열 형태로 반환한다.



//* case. argument check
function showInfo(){
    for(var i in arguments){
        console.log("index["+i+"] ="+arguments[i]);
    }
}