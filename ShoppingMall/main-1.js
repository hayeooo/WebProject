function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=>json.items);
}
function displayItems(items){
    const container=document.querySelector('.items');
    container.innerHTML=items.map(item=>createHTMLString(item)).join('');
}
function createHTMLString(items){
    return `
    <li class="item">
            <img src="${items.image}" alt="${items.type}" class="item__thumnail"> 
            <span>${items.size}, ${items.gender}</span>
    </li>
    `;
}
function setEventListener(items){
    // where?? (logo, buttons)
    const logo=document.querySelector('.Logo');
    const button=document.querySelector('nav');

    logo.addEventListener('click',()=>displayItems(items));
    button.addEventListener('click',event=>onButtonClick(event,items));
}
function onButtonClick(event,items){
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;

    if (key==null||value==null){
        return;
    }
    const filtered=items.filter(item=>item[key]===value);
    displayItems(filtered);
}
//main
loadItems()
.then(items=>{
    displayItems(items);
    setEventListener(items);
})

