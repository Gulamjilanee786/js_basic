//! class 
// A class is a blueprint for creating objects with shared properties and methods. It allows you to define a structure for your objects and encapsulate related functionality within that structure.


//  let u = {
//     name: "",
//     email: "",
//     password: "",
// };

// let u1 = {
//     name: "",
//     email: "",
//     password: "",
// };

// let u2 = {
//     name: "",
//     email: "",
//     password: "",
// };

//! class
// constructor
// A constructor is a special method in a class that is called when an instance of the class is created. It is used to initialize the properties of the object. 

class User {
    name;
    email;
    #password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    } 
    
    // * methods
    getPassword() {
        return this.#password;
        
    }
    introduce() {
        console.log("this is a student class");
    }
}

const u = new User("John", "john@gmail.com", "1234567894");
const u1 = new User("John", "john@gmail.com", "1234567894");

console.log(u); // Output: User { name: 'John', email: '
console.log(u1); // Output: User { name: 'John', email: '
console.log(u.email);// Output: john@gmail.com

console.log(u.getPassword()); 

//* Student (name, email, password, faculty, roll, year)

// Inheritance
// Inheritance is a mechanism in object-oriented programming that allows a class (child class) to inherit properties and methods from another class (parent class). The child class can access and use the properties and methods of the parent class, and it can also have its own additional properties and methods. Inheritance promotes code reusability and establishes a hierarchical relationship between classes.

class Student extends User {
  
    constructor(name, email, password, faculty, roll, year) {
        super(name, email, password);
        this.faculty = faculty;
        this.roll = roll;
        this.year = year;
    } 
    introduce() {
        console.log("this is a student class");
}  
}

const student = new Student(
    "John", 
    "john@gmail.com", 
    "1234567894",
    "BCT",
     23,
    2022
);

console.log(student); 
console.log(student.getPassword());
student.introduce();

// todo: static methods, getter, setter

// calculator

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
}
// const cal = new Calculator(10, 2);
// const cal1 = new Calculator(10, 3);
console.log(Calculator.add(10, 3));
console.log(Calculator.add(10, 4));
console.log(Calculator.sub(10, 4));

class Circle {
  constructor(r) {
    this.rad = r;
  }

  get area() {
    return (Math.PI * this.rad * this.rad).toFixed(3);
  }

  set radius(r) {
    this.rad = r;
  }
}

const c1 = new Circle(10);
console.log("area", c1.area);
c1.radius = 12;
console.log("area", c1.area);


// todo: this keyword



