// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList.add("hidden");

const likeHeartsArray = document.querySelectorAll(".like-glyph");
likeHeartsArray.forEach(
  likeHeart => likeHeart.addEventListener("click", handleHeartClick) //or if you need to pass event and something else event => handleHeartClick(event);
);

const handleHeartClick = event => {
  const likeHeart = event.currentTarget;
  mimicServerCall()
    .then(() => {
      likeHeart.innerHTML === FULL_HEART
        ? (likeHeart.innerHTML = EMPTY_HEART)
        : (likeHeart.innerHTML = FULL_HEART);
      likeHeart.className === "activated-heart"
        ? likeHeart.classList.remove("activated-heart")
        : (likeHeart.className = "activated-heart");
    })
    .catch(error => {
      const modal = document.querySelector("#modal");
      modal.classList.remove("hidden");
      modal.querySelector("p").innerText = error;
      setTimeout(() => (modal.className = "hidden"), 5000);
    });
};

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
