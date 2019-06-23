const basket = ['apple', 'orange', 'graps'];
const detailedBasket = {
	apple: 5,
	orange: 10,
	graps: 1000
}
//1
for ( let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

// for of
// Iterating - arrays, strings
for (item of basket) {
	console.log(item);
}

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
	console.log(item);
}

//if or ?
function JavaScriptName() {
	let officalName = prompt("What is the offical name of JavaScript", "");
	if (officalName == "ECMAScript") {
		alert("Right!");	
	} else {
		alert("Didn’t know?, ECMAScript!");
	}
}
		
function javaScripNewName() {
	let officalName = prompt("What is the offical name of JavaScript", "");
	(officalName == "ECMAScript") ? 
	alert('right!') : alert('Wrong!');
}
