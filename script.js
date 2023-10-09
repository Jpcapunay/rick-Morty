const url = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector(".grid-container")

fetch(url)
    .then(res => {
      return res.json()
    })
    .then((res)=>{
      displayImages(res.results)
    })
    .catch(err => console.log('oops something went wrong', err));


function displayImages(characters){
  characters.forEach(character=>{
    let characterHTML = `
      <div class="grid-item">
        <img src="${character.image}" alt="${character.name}"/>
      </div>
    `

    container.insertAdjacentHTML("beforeend", characterHTML)
  })
}