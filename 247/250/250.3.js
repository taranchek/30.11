let elem = document.querySelector('#elem');
let p = document.querySelector('#p');
let button = document.querySelector('#button');
button.addEventListener ('click',function(){
p.innerHTML ='Вывод: ' + elem.value * elem.value;
});