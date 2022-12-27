let input = document.querySelector(`#elem`);
input.addEventListener(`focus`, function () {
  this.value = 1;
});
input.addEventListener(`blur`, function () {
  this.value = 2;
});