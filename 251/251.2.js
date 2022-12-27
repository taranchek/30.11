const getInp = document.querySelector('.ta');

getInp.addEventListener('blur', func);

function func() {
  const arrFromValue = getInp.value.split('');
  let s = 0;
  for (let i = 0; i < arrFromValue.length; i ++) {
    s = Number(arrFromValue[i]**2);
  }
  console.log('квадрат числа = ' + s);
};