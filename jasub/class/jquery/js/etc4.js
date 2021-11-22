$(document).ready(function(){
    // case1
    imgAlignHori();
    imgMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        console.log(imgLength);
        var imgWidth = img.width();
        for(var i=0;i<imgLength;i++){
            var image = img.eq(i); //eq(i) : i번째 target
            xpos = i*imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    })
}


function imgMix(){
    var img= $(".imgContainer2 img");
    var btn= $(".imgContainer2 button");
    var xpos=0;
    var ypos=0;
    
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        for(var i =0; i<imgLength;i++){
            var image = img.eq(i);
            // if(i%3==0){
            //     ypos=parseInt(i/3)*imgHeight;
            //     xpos=0;
            //     image.css("left",xpos);
            //     image.css("top",ypos);
                
            //     console.log("if on i:"+i+" xpos:"+xpos);
            //     console.log("if on i:"+i+" ypos:"+ypos);  
            // }
            // else{
            //     xpos = (i%3)*imgWidth;
            //     image.css("left",xpos);
            //     image.css("top",ypos);
            //     console.log("i:"+i+" Xpos:"+xpos);
            //     console.log("i:"+i+" ypos:"+ypos);
            // }

            xpos = (i%3)*imgHeight;
            ypos = parseInt(i/3)*imgHeight;
            image.css({
                "left":xpos,
                "top":ypos
            });
        }
        
    });
    $(".reset").click(function(){
        img.css("left",0);
        img.css("top",0);
    })
}


