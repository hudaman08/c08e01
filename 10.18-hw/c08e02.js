// Number 1
var num1 = 3;
var num2 = 5;
console.log(num1 + num2);

// Number 2
var string1 = "hi ";
var string2 = "shirmung";
console.log(string1+string2);

//Number 3
function smallOnly(value) {
  if (value < 100) {
    alert("Your number is less than 100")
  } else {
    alert ("Your number is "+ value + ", which is greater than or equal to 100")
  }
}

smallOnly(102);

// Number 4
function name(firstName) {
  return firstName
}

var problem4A = name("Shawn");
console.log(problem4A);

var problem4B = name("Jack");
console.log(problem4B);

var problem4C = name("Jill");
console.log(problem4C);

// Number 5 -- didnt use alerts because they are obnoxious...
function gameShow(door) {
  if (door === 1) {
    return "You have won a puppy... doll"
  } else if (door === 2) {
    return "You have won a bag of diapers"
  } else if (door === 3) {
    return "You have won a car"
  } else {
    return "Not a valid input"
  }
}

var problem5 = gameShow(1);
console.log(problem5);

var problem5 = gameShow(2);
console.log(problem5);

var problem5 = gameShow("billy");
console.log(problem5);
