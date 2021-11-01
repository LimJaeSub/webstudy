//Fetch the items from the json
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}



function displayItems(items){
    // json의 내용을 html로 변환해서 만들어줌
    const container = document.querySelector('.items');
    const html = items.map(item=>createHTMLString(item)).join('');
    //console.log(html);
    container.innerHTML = items.map(item=>createHTMLString(item)).join('');
}
function createHTMLString(item){
    return `
    <li class="item">
          <img src="${item.image}" alt="${item.type}" class="item_thumnail">
          <span class="item_description">${item.gender},${item.size}</span>
    </li>
    `;
}
//main
loadItems()
.then(items => {
    //console.log(items);
    displayItems(items);
    // setEventListeners(items)
})
.catch(console.log);