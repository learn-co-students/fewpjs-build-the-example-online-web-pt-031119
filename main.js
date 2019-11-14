// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartShapes = {
  "♡": "♥",
  "♥": "♡"
};

let heartColors = {
  "red": "",
  "": "red"
};

let pageHearts = document.querySelectorAll(".like");

function likes(e) {
  let heart = e.target;
  mimicServerCall("blahBlahBlah")
    .then(function (serverMessage) {
      heart.innerText = heartShapes[heart.innerText];
      heart.style.color = heartColors[heart.style.color];
    })
    .catch(function (error) {
      document.getElementById("modal").className = "";
    });
}

for (let shape of pageHearts) {
  shape.addEventListener("click", likes);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
