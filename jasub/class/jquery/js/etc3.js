$(document).ready(function(){
    // *case 1
    toggleMenu();

    // *case 2
    togglecheck();

    // *case 3
    tabUI();
});

function toggleMenu(){
    var $menuTarget = $(".material-icons.menu");
    var menuStatus = false;

    $menuTarget.click(function(){
        menuStatus = !menuStatus;

        if(menuStatus == true){
            $menuTarget.text("menu_open");
        }
        else if(menuStatus == false){
            $menuTarget.text("menu");
        }
    });
}


function togglecheck(){
    var $checkTarget = $(".ico.check");
    $(".label").click(function(){
        $checkTarget.toggleClass("ico check fas fa-check")
    });
}

function tabUI(){
    var $tabMenu = $(".tabMenu li");
    $tabMenu.click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        //console.log(activeTab);
        $tabMenu.removeClass("activated");
        $(this).addClass("activated");

        // TODO
        var $alltab = $(".tabPage");
        var $selecttab = $("#"+activeTab);
        console.log($selecttab);
        $alltab.removeClass("activated");
        $selecttab.addClass("activated");        
    })
    
}


