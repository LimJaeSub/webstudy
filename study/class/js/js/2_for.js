function forBreak(){
    for(var i=1 ; i<=10; i++){
        break;
        document.write(i+'<br>');
    }
    document.write('result i ='+i+'<br>');
}

// *case 8.
function runBreak(){
    for(var i =0; true;i++){
        alert(i);
        if(!confirm('go?')){
            break;
        }
    }
}


// !다중for문
function halfPyramid(){
    var star='';
    for(var i=1;i<10;i++){
        for(var j=0;j<i;j++){
            star +='*';
        }
        star+='<br>';
    }

    document.write(star);
}
function reverseHalfPyramid(){
    var star='';
    for(var i=10;i>=1;i--){
        for(var j=0;j<i;j++){
            star +='*';
        }
        star+='<br>';
    }

    document.write(star);
}



function pyramid(){
    for(var i=0;i<10;i++){
        for(var j=10;j>i;j--){
            document.write('&nbsp');
        }
        for(var j=0;j<i;j++){
            if(j==0){
                document.write('*');
            }
            else if(j>=1){
                document.write('**');
            } 
        }
        document.write('<br>');
    }
}


function pyramid2(){
    var star='*';
    for(var i=0;i<10;i++){
        for(var j=10;j>i;j--){
            document.write('&nbsp');
        }
        document.write(star);
        star+='**';
        document.write('<br>');
    }
}
