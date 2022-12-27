let p = document.querySelector('#p');
let elem = Number(document.querySelector('#elem').value);
let elem1 = Number(document.querySelector('#elem1').value);
let elem2 = Number(document.querySelector('#elem2').value);
let elem3 = Number(document.querySelector('#elem3').value);
let elem4 = Number(document.querySelector('#elem4').value);
let button = document.querySelector('#button');

button.addEventListener ('click',function(){
p.innerHTML = 'Cреднее арифметическое: ' + (elem + elem1 + elem2 + elem3 + elem4)/5;  
});