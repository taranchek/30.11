const getUl = document.querySelector('.task');

getUl.addEventListener('click', func);

function func(event) {
  event.target.innerHTML = Number(event.target.innerHTML) +1;
};