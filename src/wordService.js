var fetch = require('node-fetch')
const { URLSearchParams } = require('url');

const WORD_URL = "https://wordwatch-api.herokuapp.com/api/v1/top_word"

async function getWord(title, artist) {
  const url = new URL(`${WORD_URL}`)
  return await fetch(url.href)
    .then(async (data) => { return data.json(); })
    .catch(reason => { console.log(reason.message) });
}

module.exports = { getWord };
