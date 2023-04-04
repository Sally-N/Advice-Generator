// fetch api 

// 1.promise chaininig
// const options = {
//     method: 'GET',
//     header: {
//         apikey: '',
//         apihost: ''
//     }

// }

// fetch('api', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

////create function to get a new advice.
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    console.log("Everything is loaded");

function fetchNewAdvice() {
    console.log('hi');
    fetch('https://api.adviceslip.com/advice')
        .then(function (response) { return (response) })
        .then(function (adviceObject) {
            const { slip: { ids, advice } } = adviceObject;
            updateAdvice(ids, advice);

        })
        .catch(function (err) {
            console.warn('oops', err)
        })
};

// document.addEventListener('DOMContentLoaded', () =>{


const adviceTitle = document.getElementById('number');
const adviceContent = document.getElementById('quote');
const aButton = document.querySelector('#abutton');
console.log(aButton);


// function to update advice number
function updateAdvice(ida, adv) {
    adviceTitle.innerHTML = ida;
    adviceContent.innerHTML = adv;
}

    aButton?.addEventListener('click', () => {
        fetchNewAdvice()
    });



});
// fetchNewAdvice();