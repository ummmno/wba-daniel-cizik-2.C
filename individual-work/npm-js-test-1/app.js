var name = ""
var age = 17

function writeData(){
  console.log("Name: " + name + " Age: " + age)
}

function addNUmbers(x, y){
  return x + y
}

writeData()

var a = addNUmbers(5, 6)

if ( a > 10){
  console.log("a is greater than 10")
}
else {
  console.log("a is less or equal to than 10")
}