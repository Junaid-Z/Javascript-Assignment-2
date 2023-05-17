var i = 10
var j = 9
if (i !== j) {
    alert("Not match")
}
else {
    alert("Match")
}
var grade = prompt("Enter marks obtained out of 20")
var percent = Num(grade) * 100 / 20
if (percent >= 90) {
    alert("A+")
}
else if (percent >= 80) {
    alert("A")
}
else if (percent >= 70) {
    alert("B")
}
else if (percent >= 60) {
    alert("C")
}
else {
    alert("Fail")
}
let a = 10
if (a === 10) {
    alert("a is 10");
}
else {
    alert("The correct value of a is " + a);
}
var city = prompt("Enter your city")
if (city.toLowerCase() === "karachi") {
    alert("Entered city is karachi")
}
else if (city.toLowerCase() === "lahore") {
    alert("Entered city is lahore")
}
else {
    alert("No special alert for this city")
}