const galleryContainer=document.querySelector('.gallerycontainer')
const url = 'https://api.unsplash.com/search/photos?query=sun&per_page=24&orientation=landscape&client_id=bo0GOg9KOJ4vumm40NpCsEbV53aYNOP-assnkzFd8Uk';
let someurl='https://api.unsplash.com/search/photos?query=sun&per_page=24&orientation=landscape&client_id=bo0GOg9KOJ4vumm40NpCsEbV53aYNOP-assnkzFd8Uk';
async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);  
}
getData(someurl);
function showData(data){
  galleryContainer.innerHTML='';
  data.results.map(a=>{
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = `${a.urls.regular}`;
    img.alt = `image`;
    galleryContainer.append(img);
  })  
}
const form=document.querySelector('.form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  let data = new FormData(this),
  result = data.get('input');
  const Newurl = `https://api.unsplash.com/search/photos?query=${result}&per_page=24&orientation=landscape&client_id=bo0GOg9KOJ4vumm40NpCsEbV53aYNOP-assnkzFd8Uk`;
  getData(Newurl);
})