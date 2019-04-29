document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-animal-form');
  form.addEventListener('submit',formSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAllClick);

})

  const formSubmit = function (event) {
    console.log('TEST');
    event.preventDefault();
    const name = event.target.name.value
    const species = event.target.species.value
    const selectedContinent = event.target.continent.value
    const container = document.createElement('p')
    console.log(container);
    container.textContent = `${name}, ${species}, ${selectedContinent}`
    const div = document.querySelector('#list-of-animals')
    console.log(div);
    div.appendChild(container);
    form.reset()
  }

  const deleteAllClick = function (event) {
    const animalList = document.querySelector('#list-of-animals');
    animalList.innerHTML = '';
  }
