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
  tweets.reverse();
  for (const objs of tweets) {
    // console.log('the object',objs);
    allTweet = $(".tweetBody").append(createTweetElement(objs));
  }
  
  return allTweet;
};

const submitChange = function () {
  $("#submitter").submit(function(event) {
    event.preventDefault();
    let serializeValue = $('#tweet-text').serialize();
    let val = $('#tweet-text').val();
    console.log(val.length)
    if (val === '' || val === null) {
      alert('Must add text to submit to form');
    } else if (val.length > 140) {
      alert('Too many characters, please shorten!')
    } else {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: serializeValue
      }).then(() => location.reload());
      
    }
  });
};

submitChange();

const loadTweets =  function() {
  $.ajax('/tweets', { method: 'GET' })
    .then(function(tweets) {
      return renderTweets(tweets);
    });
};

loadTweets();