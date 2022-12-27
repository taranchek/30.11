let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');
button.addEventListener ('click',function(){
    buffer = elem.value;
  elem.value = elem1.value
  elem1.value = buffer;
});