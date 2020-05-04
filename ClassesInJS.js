"use strict";

// function Fruit(type) {
//   this.type = type;
//   this.color = "unknown";
//   this.getInformation = getFruitInformation;
// }

// function getFruitInformation() {
//   return "This " + this.type + " is " + this.color + ".";
// }

// let lime = new Fruit("Mexican lime");
// console.log(lime.getInformation());

// lime.color = "green";
// console.log(lime.getInformation());

// function Fruit (type) {
//     this.type = type;
//     this.color = 'unknown';
//     this.getInformation = function(){
//         return 'This' + this.type + ' is ' + + this.color + '.';
//     }
// }

// let lime = new Fruit('Mexican lime');
// console.log(lime.getInformation());

// lime.color = 'green';
// console.log(lime.getInformation());

// function Fruit(type) {
//   this.type = type;
//   this.color = "unknown";
// }

// Fruit.prototype.getInformation = function () {
//   return "This " + this.type + " is " + this.color + ".";
// };

// let lime = new Fruit("Mexican Lime");
// console.log(lime.getInformation());

// lime.color = "green";
// console.log(lime.getInformation());

// let lime = {
//   type: "Mexican lime",
//   color: "green",
//   getInformation: function () {
//     return "This " + this.type + " is " + this.color + ".";
//   },
// };

// console.log(lime.getInformation());

// lime.color = "yellow";
// console.log(lime.getInformation());

// let lime = new (function () {
//   this.type = "Mexican lime";
//   this.color = "green";
//   this.getInformation = function () {
//     return "This " + this.type + " is " + this.color + ".";
//   };
// })();

// console.log(lime.getInformation());

// lime.color = "yellow";
// console.log(lime.getInformation());

// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculate() {
//     return 2 * (this.width + this.height);
//   }
// }

// let p = new Polygon(1, 2);
// console.log("Polygon p:", p, " perimeter:", p.calculate());

// try {
//   let p = new Polygon(1, 2);
//   console.log("Polygon p:", p);
// } catch (exception) {
//   console.log(exception.name + ": " + exception.message);
// }
// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// let p = new Polygon(1, 2);
// console.log("Polygon p:", p);

// let Polygon = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log("Polygon:", Polygon);
// let p = new Polygon(1, 12);
// console.log("p:", p);

// let Polygon = class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// console.log("Polygon:", Polygon);
// let p = new Polygon(1, 2);
// console.log("p:", p);

// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   getArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Polygon(10, 10);

// console.log(square.getArea());

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }
// const p1 = new Point(3, 7);
// const p2 = new Point(6, 11);

// console.log(Point.distance(p1, p2));

// try {
//   console.log(p1.distance(p1, p2));
// } catch (exception) {
//   console.log(exception.name + ": " + exception.message);
// }

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name, "speaks.");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(this.name, "barks.");
//   }
// }
// let spot = new Dog("Spot");
// spot.speak();

// spot = new Animal("Spot");
// spot.speak();

class Animal {
  constructor(name) {
    this.animalType = "Animal";
    this.name = name;
  }
  type() {
    console.log(this.name, "is type", this.animalType);
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  constructor(name, collarColor) {
    super(name);
    this.animalType = "Dog";
    this.collarColor = collarColor;
  }
  speak() {
    console.log(this.name, "barks.");
  }
  collar() {
    console.log(this.name, "has a", this.collarColor, "collar.");
  }
}

let spot = new Dog("Spot", "red");
spot.type();
spot.type();
spot.collar();

//Because the Animal constructor only expects one argument,
//only the first value passed to it is used
spot = new Animal("Spot", "white");
spot.type();
spot.speak();
try {
  spot.collar();
} catch (exception) {
  console.log(
    exception.name +
      ": " +
      exception.message +
      "(collar is a method of Dog, not Animal)."
  );
}
