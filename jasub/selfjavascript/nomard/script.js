//single element 선택
// const form=document.querySelector("#todoform");
// console.log(form);






//multiple element 선택


// const allform = document.querySelectorAll(".item");

// for(var i=0;i<allform.length;i++)
// {
//     console.log(allform[i]);
// }


// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));

// querySelector가 편하다.



// var num = prompt("inputnum","gogo");
// if(num==10)
// {
//     todos.lastElementChild.style.background = "green";
// }
// else if(num==15){
//     todos.firstElementChild.textContent="hello";
// }

const todos = document.querySelector("#todolist");
const button = document.querySelector('.submit');
const todoinput = document.querySelector("#todoinput");
const noticemessage = document.querySelector("#notice");
// button.addEventListener(어떤이벤트,어떤기능)

button.addEventListener('click',buttonclicked);

function buttonclicked(e){
    e.preventDefault();
    if(todoinput.value==='')
    {
        noticemessage.style.display="block";
        setTimeout(()=>noticemessage.style.display='none',2000)
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoinput.value));
    li.classList.add('item');
    todos.appendChild(li);
    todoinput.value='';
    console.log(li);
}