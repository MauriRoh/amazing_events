let name_surname = document.getElementById('fullNameContactForm');
let mail = document.getElementById('emailContactForm');
let messages = document.getElementById('messageContactForm');
const formContact = document.forms[0];


// ******************************************
//                   EVENTS
// ******************************************
formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    dataSend ();
});

name_surname.addEventListener('click', () => {
    messageContactForm.innerHTML = ` `
});

// ******************************************
//                   FUNCTIONS
// ******************************************
function dataSend () {
    console.log('Datos enviados correctamente');
    alert('Datos enviados correctamente')
};