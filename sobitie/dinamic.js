//DOMContentLoaded
addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mainForm');
    const firstName = document.getElementById('firstName');


    form.addEventListener('submit', event => {
        event.preventDefault();
    });


    firstName.addEventListener('change', event => {
        console.log(event.target.value);
    });

    firstName.removeEventListener('change', event => {
        console.log(event.target.value);
    });




    /*firstName.dispatchEvent(new Event('change', {bubbles:true 
    cancelable: false}*/

});

addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById('form');
    input.checkValidity();

})

