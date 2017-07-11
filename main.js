/*

var coffeeFlavour = "espresso";
var coffeeTemperature = "piping hot";
var coffeeOunces = 100;
var coffeeMilk = true;

var myCoffee = {
  flavour : "espresso",
  Temperature : "piping hot",
  ounces : 100,
  milk : true,

  reheat : function() {
    if(this.Temperature === "cold"){
        this.Temperature = "piping hot";
        console.log("your coffee has been reheated");
    }
  }
};

console.log(myCoffee.flavour);

myCoffee.Temperature = "cold";
myCoffee["ounces"] = 120;

myCoffee.reheat();

console.log(myCoffee.ounces);


//------------------

var mark = {
  name: "Mark",
  tshirtColour: "navy blue"
};

var lisa = {
  name:"Lisa",
  tshirtColour: "red"
};

function Friend(name, tshirtColour){
  this.name = name;
  this.tshirtColour = tshirtColour;
}

var denny = new Friend("Denny", "green");

console.log(denny.name);



//----------------------


console.log(this);

function sayHello(){
  console.log("hello");
}
window.sayHello();
sayHello();

//-----------------------

*/

var example = "value";

function alertNumber(){
  var example = "1";
  console.log(example);
}

alertNumber();

console.log(example);

//------------------------