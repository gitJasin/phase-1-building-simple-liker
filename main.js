/*
[X] - Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
[X] - When a user clicks on an empty heart: 
        - Invoke mimicServerCall to simulate making a server request
[] - When the "server" returns a failure status:
        - Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
        - Display the error modal by removing the .hidden class
        - Display the server error message in the modal
        - Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
[] - When the "server" returns a success status:
        [X] - Change the heart to a full heart
        [] - Add the .activated-heart class to make the heart appear red
[X] - When a user clicks on a full heart:
        - Change the heart back to an empty heart
        - Remove the .activated-heart class
*/

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")
const error = document.querySelector("#modal")
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    const like = heart.textContent

    if (like === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART
        heart.classList.add("activated-heart")
      })
      .catch(() => {
        error.classList.remove("hidden")
      })
      setTimeout(() => {
        error.classList.add("hidden") 
      }, 3000);
    } else if (like === FULL_HEART) {
      heart.textContent = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
