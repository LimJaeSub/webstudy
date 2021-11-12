function gugudan(){
    var num = prompt("숫자를 입력하세요",'숫자입력');
    if(num>9){
        alert("9단 이하로 입력하세요");
        num = prompt("숫자를 입력하세요",'숫자입력');
    }
    for(var i=0;i<9;i++){
        document.write(num+"*"+i+"="+num*i);
    }
}