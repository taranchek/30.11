let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
	console.log(1);
});
elem.addEventListener('blur', function() {
	console.log(2);
});