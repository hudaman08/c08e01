var children = [1,2,3,4,5];

var partner = ["Chris", "Sam"];

var city = ["New York", "San Francisco","Boston"];

var job = ["Product Manager","Technology Director","Resident Badass"]

var fortune = "You will be a "+job[2]+" in "+city[1]+", and married to "+partner[0]+" with "+children[1]+" kids.";

console.log(fortune);

function subNums(){
  var birthYear = document.getElementById('birthYear').value;
  var futureYear = document.getElementById('futureYear').value;
  document.getElementById('result1').innerHTML = (parseInt(futureYear) - parseInt(birthYear));
  document.getElementById('result2').innerHTML = (parseInt(futureYear) - parseInt(birthYear)-1);
}

var recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon","cumin","cocoa"]
};

console.log(recipe.title);
console.log("Serves: "+recipe.servings);
console.log("Ingredients:")
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
