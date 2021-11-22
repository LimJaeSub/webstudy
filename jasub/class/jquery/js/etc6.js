$(document).ready(function(){
    imgAlignCustom();
});

function imgAlignCustom(){
    var img = $("#imgContainer img");
    var xpos=0;
    var ypos=0;
    for(var i=1;i<=10;i++){
        var test = $("."+i+"way");
        console.log(test);
        $("."+i+"way").click(function(){
            var imgLength = img.length;
            var imgWidth = img.width();
            var imgHeight = img.height();
            console.log(imgLength);
            console.log(imgWidth);
            console.log(imgHeight);
            for(var j =0;j<imgLength;j++){
                console.log(j);
                var image = img.eq(j);
                xpos=(j%i)*imgWidth;
                ypos=parseInt(j/i)*imgHeight;
                image.css({
                    "left":xpos,
                    "top":ypos
                });
            }
        });
    }
    
}