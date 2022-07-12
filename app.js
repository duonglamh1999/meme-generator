let form = document.querySelector('#form');
let memeSection=document.querySelector('#meme-section-container')
let linkInput = document.querySelector('#linkInput');
let topInput = document.querySelector('#topInput');
let bottomInput = document.querySelector('#bottomInput');
form.addEventListener('submit', e=> {
    e.preventDefault();
    createMeme(linkInput.value,topInput.value,bottomInput.value);
    linkInput.value= "";
    topInput.value= "";
    bottomInput.value = "";
  })

memeSection.addEventListener('click', deleteMeme);


function createMeme (link,top,bottom)
{ 
let memeContainer = document.createElement('div');
memeContainer.setAttribute('class','meme-container');
let memeImage = document.createElement('img');
memeImage.setAttribute('alt',"It is a meme, laugh!!!");
memeImage.setAttribute('src',link);
let wordContainer = document.createElement('div');
wordContainer.setAttribute('class','word-container');
let topText = document.createElement('p');
topText.innerText= top;
let bottomText = document.createElement('p');
bottomText.innerText= bottom;
let overlay =`<div class="overlay">
<div class="overlay-text">Click to delete</div>
</div>`;
wordContainer.append(topText,bottomText);
memeContainer.append(memeImage,wordContainer);
memeSection.append(memeContainer);
memeContainer.innerHTML+=overlay;
}
function deleteMeme (e)
{
  let selector = e.target;
  if(selector.className=='overlay-text')
  {
    selector.parentElement.parentElement.remove();
  }
}