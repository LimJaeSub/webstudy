var plusBtn = null;
var deleteBtn = null;
var inputValue = null;
var $section = null;

$(document).ready(function(){
    init();
    clickPlusBtn();
    console.log(deleteBtn);
    clickDeleteBtn();
})

function init(){
    plusBtn = $("#plus");
    deleteBtn = $("#delete");
    $section = $("section");
}
function clickPlusBtn(){
    plusBtn.click(function(){
        inputValue = $("#inputproduct").val();
        alert(inputValue);
        HTMLinner(inputValue);
        inputformReset();
    });
}
function HTMLinner(result){
    $section.append(`
    <div class="slide">
        <span>${result}</span>
        <i class="fas fa-trash"></i>
    </div>
    `);
}
function inputformReset(){
    $("#search-form").each(function(){
        this.reset();
    });
}



function clickDeleteBtn(){
    deleteBtn.click(function(){
        deleteSlide();
    });
}
function deleteSlide(){
    //?
}

