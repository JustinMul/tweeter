/* eslint-env jquery */
/* eslint-env browser */

// file used for the purposes of submmiting and rendering tweets.


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


// uses jquery to fill out the tweet body in the html
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
    
    <p>${escape(tweet.content.text)}</p>
    
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

//used to make the tweets appear in the tweetBody
const renderTweets = function(tweets) {
  
  console.log('tweets', tweets);
  let allTweet;
  tweets.reverse();
  for (const objs of tweets) {
    allTweet = $(".tweetBody").append(createTweetElement(objs));
  }
  
  return allTweet;
};

//used to ensure tweet contents are valid and searialize tweets.
const submitChange = function () {
  $("#submitter").submit(function(event) {
    event.preventDefault();
    let serializeValue = $("#tweet-text").serialize();

    let val = $('#tweet-text').val();

    if (val === '' || val === null) {
      $("#no-char").slideDown("slow");
    } else if (val.length > 140) {
      $("#char-over-limit").slideDown("slow");
    } else {
      if ($("#no-char").is(":visible")) {
        $("#no-char").slideUp("slow");
      }
      if ($("#char-over-limit").is(":visible")) {
        $("#char-over-limit").slideUp("slow");
      }
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: serializeValue
      }).then(() => location.reload()).catch(() => console.log("didnt work"));
      
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

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};