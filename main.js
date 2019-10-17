// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal');
errorModal.setAttribute('class','hidden');
const likes = document.querySelectorAll('.like-glyph');

likes.forEach((heart)=>{
  heart.addEventListener('click',function(event){
    mimicServerCall()
    .then(function(resolve){
      heart.innerHTML = FULL_HEART;
    })
    .catch(function(reject){
      errorModal.removeAttribute('class','hidden');
    });

  })
});


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
