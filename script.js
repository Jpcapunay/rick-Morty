const url = 'https://rickandmortyapi.com/api/character'
const container = document.querySelector(".grid-container")
//Fetch API 
fetch(url)
    .then(res => {
      return res.json()
    })
    .then((res)=>{
      console.log(res.results)
      displayImages(res.results)
    })
    .catch(err => console.log('oops something went wrong', err));

//function tab takes an array of charcaters as an input.
//Loops over each character in the array and for each charcater it creates a string of HTML including charcater images,name, status and species.
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
    
  // get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  //when the user clicks on <span> (x) , close the modal 
    span.onclick = function() {
      document.getElementById('myModal').style.display = "none";
    }
    
  //when the user clicks anywhere outside of the modal,close it
    window.onclick = function(event) {
      if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
      }
    }
    
     
    container.insertAdjacentHTML("beforeend", characterHTML)
  })
}
