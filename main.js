// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error_msg_div = document.querySelector('#modal')
const heart_icon = document.querySelector('.like-glyph')
const error_msg = document.querySelector('#modal-message')

error_msg_div.setAttribute("class", "hidden")

function hideErrorMsg() {
  error_msg_div.setAttribute("class", "hidden")
}

document.addEventListener('DOMContentLoaded', function() {   
  hideErrorMsg()

  heart_icon.addEventListener("click", function(event) {
    let heart = event.target
    // debugger
    if (heart.classList[1] == undefined) {
      mimicServerCall()
      .then(function(response) {
        heart.innerHTML = FULL_HEART
        heart.classList.add("activated-heart")        
      })
      .catch(function(error) {
        error_msg_div.setAttribute("class", "")
        error_msg.innerText = error
        setTimeout(hideErrorMsg, 5000)
      })
    } else {
      mimicServerCall()
      .then(function(response) {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart")        
      })
      .catch(function(error) {
        error_msg_div.setAttribute("class", "")
        error_msg.innerText = error
        setTimeout(hideErrorMsg, 5000)
      })
    }
  })
})




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
