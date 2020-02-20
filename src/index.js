import $ from 'jquery'
const wordService = require('wordService')

$(document).ready(() => {
  // have fun!
})

let favWord = await wordService.getWord;
console.log(favWord);
