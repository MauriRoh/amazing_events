let currentDate = data.currentDate;
let template = "", template2 = "";

function cards (currentDate, events) {
    
    const cardsPastEvents = document.getElementById('cardsPastEvents');
    const cardsUpcomingEvents = document.getElementById('cardsUpcomingEvents');

    for (let i = 0; i < events.length; i++) {
        if(currentDate < events[i].date){
            template += `
                <div class="col mb-4">
                    <div class="card">
                        <img class="imgSize card-img-top" src="${events[ i ].image}" alt="...">
                        <div class="card-body">
                            <h3 class="card-title d-flex justify-content-center">${events[ i ].name}</h3>
                            <p class="card-text"><strong>Date: </strong>${events[ i ].date}</p>
                            <p class="card-text"><strong>Description: </strong>${events[ i ].description}</p>
                            <p class="card-text"><strong>Category: </strong>${events[ i ].category}</p>
                            <p class="card-text"><strong>Place: </strong>${events[ i ].place}</p>
                            <p class="card-text"><strong>Capacity: </strong>${events[ i ].capacity}</p>
                            <p class="card-text"><strong>Assistance: </strong>${events[ i ].assistance}</p>
                            <p class="card-text"><strong>Price: $</strong>${events[ i ].price}</p>
                        </div>
                        <div class="d-grid gap-2">
                            <a href="./details.html" id="goToEvent${i}" class="btn text-white"
                                style="background-color: #537FE7;">Go to Event</a>
                        </div>
                    </div>
                </div>
            `
            cardsUpcomingEvents.innerHTML = template;
            
        } else {
            template2 += `
                <div class="col mb-4">
                    <div class="card">
                        <img class="imgSize card-img-top" src="${events[ i ].image}" alt="...">
                        <div class="card-body">
                            <h3 class="card-title d-flex justify-content-center">${events[ i ].name}</h3>
                            <p class="card-text"><strong>Date: </strong>${events[ i ].date}</p>
                            <p class="card-text"><strong>Description: </strong>${events[ i ].description}</p>
                            <p class="card-text"><strong>Category: </strong>${events[ i ].category}</p>
                            <p class="card-text"><strong>Place: </strong>${events[ i ].place}</p>
                            <p class="card-text"><strong>Capacity: </strong>${events[ i ].capacity}</p>
                            <p class="card-text"><strong>Assistance: </strong>${events[ i ].assistance}</p>
                            <p class="card-text"><strong>Price: $</strong>${events[ i ].price}</p>
                        </div>
                        <div class="d-grid gap-2">
                            <a href="./details.html" id="goToEvent${i}" class="btn text-white"
                                style="background-color: #537FE7;">Go to Event</a>
                        </div>
                    </div>
                </div>
            `
            cardsPastEvents.innerHTML = template2;
        };
    };
    
};


cards(currentDate, data.events)

console.log('Upcoming Event')
console.log(template)
console.log('Past Event')
console.log(template2)