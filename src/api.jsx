// fetch api 

// 1.promise chaininig
// if required
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
    const adviceNumber = document.getElementById('number');
    const adviceContent = document.getElementById('quote');
    const aButton = document.querySelector('#abutton');

    function fetchNewAdvice() {
      return fetch('https://api.adviceslip.com/advice')
      .then(response => response.json(),
      )
      .then (
      response => {
        const id = response.slip.id;
        const advice = response.slip.advice; 
        adviceNumber.innerHTML = (` # ${id}`)
        adviceContent.innerHTML = advice;      
      })
      .catch(err =>console.warn('oops', err) )          
    };

    aButton?.addEventListener('click', () => {
        fetchNewAdvice()
    });
 });
