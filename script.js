const url = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector(".grid-container")

fetch(url)
    .then(res => {
      return res.json()
    })
    .then((res)=>{
      console.log(res.results)
      displayImages(res.results)
    })
    .catch(err => console.log('oops something went wrong', err));


function displayImages(characters){
  characters.forEach(character=>{
    let characterHTML = `
  <div class="grid-item">
    <img src="${character.image}" alt="${character.name}"/>
    <button class="info-btn" data-name="${character.name}" data-status="${character.status}" data-species="${character.species}">More Info</button>
  </div>
`

    document.querySelectorAll('.info-btn').forEach(btn => {
      btn.addEventListener('click', displayModal);
    });
    function displayModal(e){
      const btn = e.currentTarget;
      const name = btn.getAttribute('data-name');
      const status = btn.getAttribute('data-status');
      const species = btn.getAttribute('data-species');
      
      document.getElementById('modal-text').innerText = `${name}\nStatus: ${status}\nSpecies: ${species}`;
      document.getElementById('myModal').style.display = "block";
    }
    
  
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
      document.getElementById('myModal').style.display = "none";
    }
    
  
    window.onclick = function(event) {
      if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
      }
    }
    
     
    container.insertAdjacentHTML("beforeend", characterHTML)
  })
}
