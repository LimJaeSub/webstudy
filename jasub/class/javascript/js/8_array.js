function favorFluit(){
    var array=['포도','사과','바나나','망고'];

    for(var i=0;i<array.length;i++){
        alert(array[i]);
    }
}

function arrayFor(){
    var data=['hello','hi','how','are','you'];
    for(var i =0;i<data.length;i++){
        document.write(data[i]+'<br>');
    }
}

function reverseFavorFluit(){
    var array=['포도','사과','바나나','망고'];

    for(var i=array.length;i>0;i--){
        document.write(array[i-1]);
    }
}