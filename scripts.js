
const baseEndPoint = './topics.json';
const listOfTopics = document.querySelector('.topics');
const addTopics = document.querySelector(".form-topic");
const list = document.querySelector(".list");


//fetch data from the url
async function fetchListOfTopics() {
    let res = await fetch(`${baseEndPoint}?q=`);
    const topics = await res.json();
    //add it in html and sort them from the highest to lower number
   const html = topics.map(topic => {
    const date = new Date(topic.discussedOn);
    console.log(date);
    return `
        <div class="past-topics">
                <ul class="discuss"> 
                  <li class="title">${topic.title}</li>
                  <li class="date">date.getFullYear()</li>
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
        id: Date.now(),
        complete: false
    };
    //Push the item to our state
    items.push(item);
    // Clear the form
    e.currentTarget.reset();

    //fire off a custom event that will tell anyone who cares that the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


function displayItems() {
    console.log(items);
  const html = items.map(item => `<li class="list-item">
    <span class="itemName">${item.name}</span>
  </li>`
  )
  .join("");
  list.innerHTML = html;
  console.log(html);
}

function mirrorToLocalStorage () {
    console.info('Saving it to local storage');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info('Restoring from LS');
    //pull the items from ls
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems.length) {
        // items = lsItems;
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    } 
}


list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);
addTopics.addEventListener("submit", handleSubmit);