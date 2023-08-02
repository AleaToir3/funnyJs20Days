const containerDisplayCards = document.querySelector(".containerDisplayCards")
const searchIndex = document.getElementById('searchIndex');
const nbSearchIndex = document.getElementById('nbSearchIndex');
const form = document.getElementById("form")
const load = document.querySelector(".loader")




async function callApi(valueSearch,nbsearchValue){  
  try{
    load.classList.add('loaderactive')
    if(nbsearchValue == 0) nbsearchValue = 15
    res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=${nbsearchValue}&srsearch=${valueSearch}`)
    if(!res.ok){
      throw new Error(res.status)
    }
    let data = await res.json()
    data  = data.query.search
    if(!data.length) containerDisplayCards.innerHTML = "Aucune données"
    console.log("callapi",data)
    displayCard(data)

  }catch(err){
    containerDisplayCards.textContent = err;
  }
}

async function displayCard(data){
let url = `https://en.wikipedia.org/?curid=`;
 data.forEach(e => {
   containerDisplayCards.innerHTML += `
    <div>
      <a href="${url + e.pageid}"><h1>${e.title}</h1></a>   
      <p class="link">${url + e.pageid}</p>
      <p>${e.snippet}</p>
    </div>`
 });
 load.classList.remove('loaderactive')
}


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  callApi(searchIndex.value,nbSearchIndex.value)
  containerDisplayCards.innerHTML = ""
})
