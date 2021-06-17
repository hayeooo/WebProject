
//main(use Promise) Promise를 통해 data 받아오기
loadItems()
.then(items=>{
    displayItems(items);
    setEventListener(items)
})
.catch(console.log);
// Update the list with the given items
function displayItems(items){
    const container=document.querySelector('.items');
    // callback(->items class:Insert <li> tag with item data)
    container.innerHTML=items.map(item=>createHTMLString(item)).join('');
}
// Create HTML list item from the given data item
function createHTMLString(items){
    return `
    <li class="item">
            <img src="${items.image}" alt="${items.type}" class="item__thumnail"> 
            <span>${items.size}, ${items.gender}</span>
    </li>
    `;
}
//Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=>json.items);
}

function setEventListener(items){
    const logo=document.querySelector('.Logo');
    const button=document.querySelector('nav');
    logo.addEventListener('click',()=>displayItems(items));
    button.addEventListener('click',event=>onButtonClick(items,event));
}
function onButtonClick(items,event){
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;
    console.log(`${key}, ${value}`);
    if (key==null||value==null){
        return;
    }

    const filtered=items.filter(item=>item[key]==value);
    displayItems(filtered);

}