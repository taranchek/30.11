let t1 = document.querySelector('#t1');
let t2 = document.querySelector('#t2');
let t3 = document.querySelector('#t3');
t1.addEventListener('blur', func);
t2.addEventListener('blur', func);
t3.addEventListener('blur', func);

function func() {
	this.value = this.value**2; // выведет true
}