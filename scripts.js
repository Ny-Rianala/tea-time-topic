const baseEndPoint = './topics.json';
const listOfTopics = document.querySelector('.topics');
const addTopics = document.querySelector(".form-topic");
const list = document.querySelector(".list");



//fetch data from the url
async function fetchListOfTopics() {
    let res = await fetch(`${baseEndPoint}?q=`);
    const topics = await res.json();
    //add it in html and sort them from the highest to lower number
   const html = topics
   .map(topic => { 
    return `
        <div class="past-topics">
                <ul class="discuss"> 
                  <li class="title">${topic.title}</li>
                  <li class="date">${topic.discussedOn}</li>
                  <li><button class="delete">delete</button></li>
                </ul>                  
        </div>
    `;
   }).join("");
   listOfTopics.innerHTML = html;
}

fetchListOfTopics();


let items = [] ;

function handleSubmit(e) {
    e.preventDefault();
//this show all of input
    const name = e.currentTarget.item.value;

//if it is empty dont submit it
    if (!name) {
        return;
    }
    console.log(name);
    const item = {
        name,
    };
    //Push the item to our state
    items.push(item);
    // Clear the form
    e.currentTarget.reset();

    // a custom event that will tell anyone who cares that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


function displayItems() {
    console.log(items);
  const html = items.map(item => `
    <li class="list-item">
        <span class="itemName">${item.name}</span>
        <button class="delete" value="${item.id}"aria-label="remove ${item.name}">delete</delete>
  </li>`
  )
  .join("");
  list.innerHTML = html;
}


//delete an item
function deleteItem(id) {
    //update our items array 
    items = items.filter(item => item.id !== id);
    console.log(items);
list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


//local storage
function mirrorToLocalStorage () {
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info('Restoring from LS');
    //pull the items from ls
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    } 
}

//Listeners
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);
addTopics.addEventListener("submit", handleSubmit);
list.addEventListener('click', function(e) { 
    const id = parseInt(e.target.value)
    if (e.target.matches('.delete')) {
        deleteItem(id);
    }
});

restoreFromLocalStorage();
