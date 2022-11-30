let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
console.log(elem.textContent);
button.addEventListener('click', function() {
    console.log(elem.textContent = 'УРА!');
});