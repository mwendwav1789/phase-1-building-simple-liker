// Defining text characters for the empty and full hearts
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// JavaScript code to add "like" functionality
document.addEventListener("DOMContentLoaded", () => {
  // Find all elements with the class 'like-glyph' (assume heart icons have this class)
  const heartIcons = document.querySelectorAll(".like-glyph");

  heartIcons.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart"); // Optional: add CSS styling
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          alert(error);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
