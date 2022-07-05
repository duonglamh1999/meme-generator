let form = document.querySelector('#form');
let memeSection=document.querySelector('#meme-section-container')
let linkInput = document.querySelector('#link');
let topInput = document.querySelector('#top');
let bottomInput = document.querySelector('#bottom');
form.addEventListener('submit', e=> {
    e.preventDefault();
    createMeme(linkInput.value,topInput.value,bottomInput.value);
    linkInput.value= "";
    topInput.value= "";
    bottomInput.value = "";
  })

memeSection.addEventListener('click', e => {
  console.log(e.target);
})

function createMeme (link,top,bottom){ 
let memeContainer = document.createElement('div');
memeContainer.setAttribute('class','meme-container');
let memeImage = document.createElement('img');
memeImage.setAttribute('alt',"It is a meme, laugh");
memeImage.setAttribute('src',link);
let wordContainer = document.createElement('div');
wordContainer.setAttribute('class','word-container');
let topText = document.createElement('h1');
topText.setAttribute('class','top');
topText.innerText= top;
let bottomText = document.createElement('h1');
bottomText.setAttribute('class','bottom');
bottomText.innerText= bottom;
wordContainer.append(topText,bottomText);
memeContainer.append(wordContainer,memeImage);
memeSection.append(memeContainer)}