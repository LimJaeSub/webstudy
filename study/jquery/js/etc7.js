$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
});

function tabMenu(tabNumb){
    var $selectMenu=null; // Click 한 tabmenut를 저장하는 변수.
    $(tabNumb).click(function(){
        //클로저함수
        if($selectMenu !=null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu=$(this);
        $selectMenu.addClass("activated");
    });
}