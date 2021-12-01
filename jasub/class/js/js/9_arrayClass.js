/*
    ? array Class
    * 각종 목록(list) - 게시판,imageGallery...etc)
    * admin에서 관리할 수 있는 목록
    * 생성(정렬),추가,삭제,찾기
*/
/*
    ? 선언
    * 1.리터럴 < var arr=["1","2","3"]; >
    * 2.arrayClass 방식 < var arr = new Array("1","2","3"); >
*/

//case 1 배열 요소 개수 알아내기

function arrCount(){
    var users = ['user1','user2','user3','user4'];
    console.log(users.length);
    for(var i =0;i<users.length;i++){
        console.log(users[i]);
    }
}

//case 2 특정 위치의 배열 요소 접근하기
function targetArr(){
    var menuItem = ["menu1","menu2","menu3","menu4"];
    for(var i =0;i<menuItem.length;i++){
        var element=menuItem[i];
        console.log(element);
    }
}
//case 3 배열을 문자열로 만들기
/*
    ! 배열.join("separator")
    ! 매개변수 = separator (선택사항,배열 요소 구분 용도의 문자열.)
    ! 매개변수 생략시 ,가 default
    ? 리턴값 : 지정된 구분자로 배열 요소들을 이어 붙혀 만들어진 문자열
*/
function joinArr(){
    var items = ["items1","items2","items3","items4"];
    console.log(items.join("!"));
}

//case 4 문자열을 배열로 만들기
/*
    ! 배열.split(separator)
    ! 매개변수 = separator,구분자로 사용할 문자열.
    ? 리턴값 = 구분자로 나눠 만들어진 배열.
*/
var $menu = null;
$(document).ready(function(){
    init();
    stringArr();
})
function init(){
    $menu = $("nav ul");
}
function stringArr(){
    var menuData = "menu1,menu2,menu3,menu4"
    var menuItems = menuData.split(",");

    for(var i=0;i<menuItems.length;i++){
        var result = menuItems[i];
        var addMenuItem="<li>"+result+"</li>";
        $menu.append(addMenuItem);
    }
}

//case 5 특정 위치에 배열 요소 추가하기
/*
    ! 배열.push(element[])
    ! 매개변수 = element : 배열 마지막에 추가할 요소.
    ? 리턴값 = 신규 배열 요소를 추가한 배열.

    ! 배열.unshift(element[,element])
    ! 매개변수 = element : 배열 첫번째(0)에 추가할 요소.
    ? 리턴값 = 신규 배열 요소를 추가한 배열

    ! 배열.splice(start,deleteCount [,element]);
    ! 매개변수=
    *start : 추가 또는 삭제할 배열 요소 시작 위치
    *deleteCount : start부터 시작하여 삭제할 배열 요소의 개수
    *element : 배열 추가 요소.
    ?리턴값 : 삭제한 요소들 외 배열.
*/

// *case5-1 배열뒤에 요소 추가
function addAfterArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("before push:"+menuItems);
    menuItems.push("newMenu");
    console.log("after push:"+menuItems);
}

// *case5-2 배열 앞에 요소 추가.
function addBeforeArr(){
    var menuItems=["menu1","menu2","menu3","menu4"];
    console.log("before unshift:"+menuItems);
    menuItems.unshift("newMenu");
    console.log("after unshift:"+menuItems);
}

//* case5-3 배열중 n번째 요소 추가.
function nAddArr(){
    var menuItems=["menu1","menu2","menu3","menu4"];
    console.log("before splice:"+menuItems);
    //menuItems.splice(2,0,"newMenu");
    menuItems.splice(0,2,["hello"]);
    console.log("after splice:"+menuItems);
}
// ! splice-add(nth),remove(nth) / 삭제전용: shift() , pop();

//* case6 특정 위치에 배열 요소 삭제하기
/*
    ! 배열.shitf();
    ! 매개변수 = 없음.
    ? 리턴 값 = 삭제된 배열 요소(첫번째) 외 배열.

    ! 배열.pop();
    ! 매개변수=없음.
    ? 리턴 값 = 삭제된 배열 요소(마지막) 외 배열.
*/
// *case. 6-1 첫번째 요소 삭제
function firstValDel(){
    var menuItems =["menu1","menu2","menu3","menu4"];
    console.log("before shift:"+menuItems.join("/"));
    menuItems.shift();
    console.log("after shitf:"+menuItems.join("/"));
}

function lastValDel(){
    var menuItems =["menu1","menu2","menu3","menu4"];
    console.log("before pop:"+menuItems.join("/"));
    menuItems.pop();
    console.log("after pop:"+menuItems.join("/"));
}

//todo. menuItems 요소중 "menu3"만 삭제하기
function nthValDel(){
    var menuItems =["menu1","menu2","menu3","menu4"];
    console.log("before del menu3:"+menuItems.join("/"));
    menuItems.splice(2,1);
    console.log("after del menu3:"+menuItems.join("/"));
}

// *case7 정렬
/*
    ! 배열.sort([compareFunction]);-문자열 변환 후-> 유니코드값의 크기에 따라 정렬
    ! 매개변수 = compareFunction() (선택사항) 정렬순서 정의 함수. defalut 오름차순 정렬
    ? 기본 문자열 변환 > 유니코드 비교.
    ? 리턴값 : 정렬이 완료된 배열
    * 리턴값 < 0 :: a가 b보다 앞에 위치
    * 리턴값 = 0 :: a와 b순서 바꾸지 않음.
    * 리턴값 > 0 :: b가 a보다 앞에
*/

//*case 7-1 ㄱ,ㄴ,ㄷ,ㄹ 순으로 정렬
function sortKor(){
    var userNames=['철수','진수','고수','미자','나영','영희'];
    console.log("before sort:"+userNames);
    userNames.sort();
    console.log("after sort:"+userNames);
}
//* case.7-2 역순정렬
function reverseSortKor(){
    var userNames=['철수','진수','고수','미자','나영','영희','희영'];
    console.log("before reversesort:"+userNames);
    userNames.sort(function(a,b){
       var a=a.toString().toLowerCase(); // 대소문자 무시
       var b=b.toString().toLowerCase();
       return (b<a)?-1:(b==a)?0:1;
    });
    console.log("after reversesort:"+userNames);
}

//* case7-3 숫자 순 정렬
function numbSort(){
    var numbData=[1,2,4,6,5,7,3,5,47,3,65,7,3,9];
    console.log("numbData : "+numbData);
    numbData.sort(function(a,b){
        return a-b;
    });
    console.log("numbData after:"+numbData);
}

//* case7-4 숫자 역순 정렬
function reversenumbSort(){
    var numbData=[1,2,4,6,5,7,3,5,47,3,65,7,3,9];
    console.log("numbData : "+numbData);
    numbData.sort(function(a,b){
        return (b<a)?-1:(b==a)?0:1;
    });
    console.log("numbData after:"+numbData);
}