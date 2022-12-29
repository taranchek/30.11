const getUl = document.querySelector('.task');

getUl.addEventListener('click', function func(event) {
  event.target.innerHTML = Number(event.target.innerHTML) +1;
  if (event.target.innerHTML > 9) {
    getUl.removeEventListener('click', func);
  };
});