for (let index = 0; index < 10; index++) { }
for (let index = 0; index <= 11; index++) { }
for (var i = 0; i <= 4; i++) { }
for (let index = 0; index < 100; index++) { }
for (let index = 0; index > -3; index--) { }
var array3 = [1, 2, 3, 4]
var length = array3.length
var flag = false
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
for (let index = 0; index < pets.length; index++) { }
for (let index = 0; index < 10; index++) {
	if (index === 1) {
		alert(index)
		break
	}
}
var userNames = ["junaid", "ali", "ahmed", "arsalan"]
var firstName = prompt("Enter first name")
for (let index = 0; index < userNames.length; index++) {
	if (firstName === userNames[index]) {
		flag = true
		break
	}
}
if (flag) {
	alert("Enter")
}
else {
	alert("Please	write correct user name")
}
var list = ["1", "2", "3", "4"]
var matchFound = false;
var userInput = prompt("Provide Input")
for (var i = 0; i < list.length; i++) {
	if (userInput === list[i]) {
		alert("Match found");
		matchFound = true;
		break;
	}
};
if (!flag) {
	alert("Match not found");
}
var firstArr = ["a", "b", "c", "d", "e", "f"]
var secondArr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < firstArr.length; i++) {
	for (let j = 0; j < secondArr.length; j++) {
		console.log(firstArr[i]+secondArr[j])
	}
}