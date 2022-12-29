let button = document.querySelector('#button');
let func = function () {
  this.value = Number(this.value) + 1;
  if (this.value > 9) {
    button.removeEventListener('click', func);
  };
};
button.addEventListener('click', func);