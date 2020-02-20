import $ from 'jquery'
var fetch = require('node-fetch')
const { URLSearchParams } = require('url');
const WORD_URL = "https://wordwatch-api.herokuapp.com/api/v1/top_word"

$(document).ready(() => {
  fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
      .then(res => { return res.json() })

  console.log("??????? FAVORITE WORD ???????");
  var favWord = fetch(WORD_URL);
  console.log(favWord);
})
