var menu = $("#menu-bars");
var navbar = $(".navbar");
var search_icon = $("#search-icon");

$(document).ready(function(){
    menuchange(); // header menuicon click->show navbars
    searchOpen();
    searchClose();
});

function menuchange(){
    menu.click(function(){
        menu.toggleClass('fa-times');
        navbar.toggleClass('active');
    });
}
function searchOpen(){
    search_icon.click(function(){
        $('#search-form').toggleClass('active');
    });
}
function searchClose(){
    $("#search-form #close").click(function(){
        $('#search-form').removeClass('active');
    })
}

