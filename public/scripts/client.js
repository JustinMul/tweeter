/* eslint-env jquery */
/* eslint-env browser */


const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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
    <div>${timeago.format(tweet.created_at)}</div>
    <div class = 'icons'>
    <i id = 'flagContainer' class="fa-solid fa-flag"></i>
    <i id = 'retweetContainer' class="fa-solid fa-retweet"></i>
    <i id = 'heartContainer' class="fa-solid fa-heart"></i>
    </div>
    </footer>
  </article>`);
  
  
  return $tweet;

};

const renderTweets = function(tweets) {
  
  console.log('tweets', tweets);
  let allTweet;
  for (const objs of tweets) {
    // console.log('the object',objs);
    allTweet = $(".tweetBody").append(createTweetElement(objs));

  }
  // console.log('alltweet', allTweet);
  return allTweet;
};
const $tweet = renderTweets(tweetData);

$("#submitter").submit(function(event) {
  // console.log('event;',event)
  event.preventDefault();
});


