const getDiv = document.querySelector('.div');
const getBtn = document.querySelector('.btn');

getBtn.addEventListener('click', func);

function func() {
    const getAllP = getDiv.querySelectorAll('p');
    getAllP.forEach((elem, num) => elem.innerHTML = elem.innerHTML + ' ' + (num+1));
};