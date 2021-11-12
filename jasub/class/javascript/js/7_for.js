function namePrint500(){
    var userName="hello";
    for(var i = 1;i<=1000;i++){
        if(i%2==1){
            document.write(i+'<br>');
        } 
    }
}


function answer1(){
    for(var i = 0;i<10;i++){ // i는 0부터 10미만까지 1번의 for을 반복할때마다 1씩 증가
        document.write((i+1)+'<br>');//
    }
}

function answer2(){
    for(var i = 1;i<=10;i++){
        document.write((i+1)+'<br>');
    }
}

function answer3(){
    for(var i = 100;i<110;i++){
        document.write((i-99)+'<br>');
    }
}

function answer4(){
    for(var i = 1;i<=10;i+=2){
        document.write(i+'<br>');
        document.write((i+1)+'<br>');
    }
}