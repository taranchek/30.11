function func1() {
	console.log('1');
}
function func2() {
	console.log('2');
}
function func3() {
	console.log('3');
}
let elem1 = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);