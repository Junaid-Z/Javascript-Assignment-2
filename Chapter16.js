var anArray = ["The String"]
anArray.push("String 2")
alert(anArray[1])
var Alphabet = ["h", "i", "j", "k"]
Alphabet.pop()
var Alphabet = ["h", "i", "j", "k"]
Alphabet.push(99)
//Part 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift(0, 1, 2)
var array2 = [1]
array2.unshift(0)
alert(array2[0])
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2, 0, "L")
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes = sizes.slice(0, 3)
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1, 3, "pigeon", "parrot")
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1, 2)
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets = pets.slice(3, 5)