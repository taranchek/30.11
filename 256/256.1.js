let elems = document.querySelectorAll('.www');
let button = document.querySelector('#button');
button.addEventListener('click', () => {
  for (const elem of elems) {
    elem.textContent = 'text';
  }
});