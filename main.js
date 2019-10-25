// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartButtons = document.getElementsByClassName('like-glyph')
// Your JavaScript code goes here!


Array.prototype.forEach.call(heartButtons, function(elem) {
elem.addEventListener('click', function(){
  mimicServerCall()
  .then(function(){
    // debugger
   if (elem.innerHTML == FULL_HEART){
     elem.innerHTML = EMPTY_HEART
      elem.classList.remove("activated-heart")} else {
        elem.innerHTML = FULL_HEART
        elem.className = "activated-heart"
      }
  // debugger
  })
  .catch(function(error) {
    // console.log(error.message);
    let redBox = document.getElementById("modal")
    let message = document.getElementById("modal-message")
    redBox.classList.remove("hidden")
    // debugger
    message.innerHTML = error
    setTimeout(function() {
      redBox.className = "hidden"
    }, 5000)
    
  })
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
