let elems = document.querySelectorAll('p');
  let p = document.querySelectorAll('.elem');
  for (let elem of p) {
    elem.addEventListener('click', func);
  };
function func() {
    this.textContent += '!';
    this.removeEventListener('click', func);
  };Ы
  
