// const book1 = {
//   title: "Book One",
//   author: "John Doe",
//   year: 2009,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };
// const book2 = {
//   title: "Book Two",
//   author: "John Doe",
//   year: 2001,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// //if we wanto create multiple books like these,so this is where the constructors come in.
// //so we are going to move on constructors

// //Constructor
// function Book() {
//   console.log("Book Initialized...");
// }

// //Instantiate an Object
// const book1 = new Book();
// const book2 = new Book();

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }

// const book1 = new Book("Book One", "John Doe", "2090");
// const book2 = new Book("Book Two", "John Doe", "2000");

// console.log(book1, " ", book2);
// console.log(book2.getSummary());

// //Prototype
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book1 = new Book("Book One", "John Doe", "1292");

// console.log(book1.getSummary());
// console.log(book1);

// book1.revise(1271);
// console.log(book1.title, " ", book1.author, " ", book1.year);
// console.log(book1.getAge());

// //Inheritance
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.yeaer = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine("Mag One", "Jonhn Doe", "2019", "Jan");

// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

//Objects
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// //Create Object;
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

// const book1 = Object.create(bookProtos, {
//   title: { value: "Book One" },
//   author: { value: "John Doe" },
//   year: { value: "2013" },
// });

// console.log(book1.getSummary());
// console.log(book1.getAge());

// //class
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
// }

// // //Instantiate Object
// // const book1 = new Book("animal farm", "george orwell", "1956");
// // console.log(book1.getSummary());
// // console.log(book1.getAge());
// // book1.revise(1949);
// // console.log(book1.getSummary());
// // console.log(book1.getAge());

//Subclass
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//Instantiate Magazine
const mag1 = new Magazine("Press", "Presser", "1780", "Sept");

console.log(mag1.getSummary());
