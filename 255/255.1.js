let elems = document.querySelectorAll('.www');
elems.addEventListener('click', func);
function func () {
    for (let elem of elems) {
        elem.textContent = elem.textContent + '!';
        };
};

