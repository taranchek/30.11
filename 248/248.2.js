let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {
    elem.innerHTML = '<b>спасибо деду за победу!!!</b>';
    console.log(elem.innerHTML);
});