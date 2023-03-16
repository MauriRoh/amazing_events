let queryLocationSearch = window.location.search;
console.log(window.location.search)
let url_params = new URLSearchParams(queryLocationSearch);
let id = url_params.get('_id');
let info = data.events.find(i => i._id == id)
console.log(info)
let detailEvent = document.getElementById('detailEvent');

detailEvent.innerHTML = `
    <h3 class="text-center fw-bold text-uppercase"></h3>  
    <img src="${info.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title text-center fw-bold text-uppercase fs-4">${info.name}</h5>
        <p class="card-text"><strong>Date: </strong>${info.date}</p>
        <p class="card-text"><strong>Description: </strong>${info.description}</p>
        <p class="card-text"><strong>Category: </strong>${info.category}</p>
        <p class="card-text"><strong>Place: </strong>${info.place}</p>
        <p class="card-text"><strong>Capacity: </strong>${info.capacity}</p>
        <p class="card-text"><strong>Assistance: </strong>${info.assistance}</p>
        <p class="card-text"><strong>Price: $</strong>${info.price}</p>
        <a href="./index.html" id="backEvent1" class="btn text-white d-flex justify-content-center" style="background-color: #537FE7;">Back</a>
    </div>
`

