let p = document.querySelector('#p');
let href = document.querySelector('#href');
let button = document.querySelector('#button');
button.addEventListener ('click',function(){
console.log(p.innerHTML = p.textContent +'(' +href.href +')');
});