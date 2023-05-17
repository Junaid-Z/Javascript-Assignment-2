var password = prompt("Enter your password")
if (password.length > 5) {
    alert("OK")
}
else {
    alert("Password must be greater than 5")
}
var a = 1
var c = "Max"
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}
if ((a === 1) && (c === "Max")) {
    alert("OK");
}
var number1 = 7, number2 = 7
if ((number1 === number2) && (number1 <= number2)) {
    alert("number1 is equal to number2")
}