let input = document.querySelector('#inp');
input.addEventListener('blur', func);

function func() {
	this.value = Number(this.value) **2;
}