/* eslint-env jquery */
/* eslint-env browser */


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const createTweetElement = function(tweet) {
  const $tweet = $(`
  <article class="tweet">
  <header class="tweetTop">
  <div class = "logo-name">
  <img class = 'profileIcon' src=${tweet.user.avatars}>
  <div>${tweet.user.name}</div> 
  </div>
  <div>${tweet.user.handle}</div> 
  </header>
  
  <p>${tweet.content.text}</p>
  
  <footer class = "tweetBottom">
  <div>${tweet.created_at}</div>
  <div class = 'icons'>
  <i id = 'flagContainer' class="fa-solid fa-flag"></i>
  <i id = 'retweetContainer' class="fa-solid fa-retweet"></i>
  <i id = 'heartContainer' class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </article>`);
  return $tweet;
};
const tweet = createTweetElement(tweetData);

document.getElementsByClassName(".tweetBody");
// Test / driver code (temporary)
console.log(tweet); // to see what it looks like
