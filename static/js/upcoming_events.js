let currentDate = data.currentDate;
let events = data.events;
let inputSearchCards = document.querySelector('.searchCards');
let checkBoxCategories = document.getElementById('cBCategories');
const cardsAllEvents = document.getElementById('cardsAllEvents');
let newEvents = [], orderEvents = [];


// ******************************************
//                   FUNCTIONS
// ******************************************
// CREATE CARDS
function cards (events) {  

    let template = "";
    
    if(events.length == 0){
        cardsAllEvents.innerHTML = `
        <div class="container mt-3">
            <div class="alert alert-warning fs-5 text-center" role="alert">
                No se han encontrado datos para mostrar!
            </div>
        </div>
        `
    } else {

        events.forEach (i => {
            if(currentDate < i.date){
                template += `
                <div class="col mb-4" id="${i._id}">
                    <div class="card">
                        <img class="imgSize card-img-top" src="${i.image}" alt="...">
                        <div class="card-body">
                            <h3 class="card-title d-flex justify-content-center">${i.name}</h3>
                            <p class="card-text"><strong>Description: </strong>${i.description}</p>
                            <p class="card-text"><strong>Price: $</strong>${i.price}</p>
                        </div>
                        <div class="d-grid gap-2">
                            <a href="./details.html?_id=${i._id}" class="btn text-white"
                                style="background-color: #537FE7;">Go to Event</a>
                        </div>
                    </div>
                </div>
                `
            }            
        });
        cardsAllEvents.innerHTML = template;
    };
};

// CREATE CARDS
function checkBox(events) {

    // for (let i = 0; i < events.length; i++) {
    //     newEvents.push(events[i].category)
    // }
    
    // let removeDuplicate = nameEvenmtsRepeat.filter((i, index) => {
    //     return newEvents.indexOf(i) === index;
    // });
    
    let nameEvenmtsRepeat = events.map(i => i.name)
    // console.log(nameEvenmtsRepeat)

    orderEvents = nameEvenmtsRepeat.sort(function (a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        }
        if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        }
        return 0;
    });
    // console.log(orderEvents)
    
    orderEvents.forEach(i => {
        checkBoxCategories.innerHTML += 
        `
            <div>
                <input class="form-check-input" type="checkbox" value="${i}" id="${i}" for="${i}">
                <label class="form-check-label" for="${i}">${i}</label>
            </div>
        `
    });

};

// SEARCH CARDS
function serchText (arrayEvents, text){
    let arrayEnd = arrayEvents.filter(i => 
        i.name.toLowerCase().includes(text.toLowerCase())
    );
    return arrayEnd;
};

// FILTER CHECKBOXES
function searchCheckBoxCategories(arrayEvents) {
    
    let checkBoxes= document.querySelectorAll("input[type='checkbox']");
    // console.log(checkBoxes)
    let arrayListCheckBoxes = Array.from(checkBoxes);
    // console.log(arrayListCheckBoxes)
    let chechedCheckBoxes = arrayListCheckBoxes.filter(i => i.checked);
    // console.log(chechedCheckBoxes)

    if (chechedCheckBoxes.length == 0) {
        return arrayEvents;
    }

    let valueCheckBoxes = chechedCheckBoxes.map(i => i.value)
    // console.log(valueCheckBoxes)
    let arrayFilter = arrayEvents.filter(i => valueCheckBoxes.includes(i.name))
    console.log(arrayFilter);

    return arrayFilter;
};

// ******************************************
//                   EVENTS
// ******************************************
// BUTTON CLEAR ALL
// btnCleanOffInput.addEventListener('click', () => {
//     inputSearchCards.value = '';
//     inputSearchCards.focus();
//     checkBoxCategory.checked = false;
// });

// SEARCH CARDS
inputSearchCards.addEventListener('input', e => {
    let cardsResult = serchText (events, e.target.value.toLowerCase());
    cards (cardsResult);
});


checkBoxCategories.addEventListener('change', () => {
    let filterCheckBox = searchCheckBoxCategories(events);
    cards (filterCheckBox);
});



// CALL FUNCTIONS
cards(data.events);
checkBox(data.events);
