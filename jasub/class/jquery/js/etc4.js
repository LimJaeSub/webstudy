$(document).ready(function(){
    // case1
    imgAlignHori();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
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
    var img=$(".imgContainer2 img");
    var xpos=0;
    var ypox=0;
    $(".alignMix").click(function(){
        var imgLength=img.length;
        var imgWidth=img.width();
        for(var i=0;i<img)
    })
}


