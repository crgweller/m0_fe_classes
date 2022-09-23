// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor(name) {
    this.name = name;
    this.say = "*~* Hello";
    this.color = "silver";
  }
  changeSay(newSay) {
    this.say = newSay;
  }
}
var unicorn1 = new Unicorn("blue");
console.log(unicorn1);

unicorn1.changeSay("*~* Bienvenidos");
console.log(unicorn1)

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor (name, pet = 'bat') {
    this.pet = pet
    this.thirsty = true
  }

changeDrink(newDrink) {
  this.thirsty = false
}
}
var vamp1 = new Vampire("Frank");
var vamp2 = new Vampire("Carol", "mouse")

console.log(vamp1)
console.log(vamp2)

vamp1.changeDrink(false);
console.log(vamp1)

console.log(vamp2)

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

  class Dragon {
    constructor (name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
    this.numberMeals = 4

      if (this.numberMeals <= 3) {
    this.ishungry = true
  } else if (this.numberMeals >=4) {
    this.ishungry = false
  }
    }
  }
  var dragon1 = new Dragon("Henry", "John", "Black");
    console.log(dragon1);

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
