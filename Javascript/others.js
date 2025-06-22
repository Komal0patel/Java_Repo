//1.ARROW FUNCTION

// Normal function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greet = (name) => `Hello ${name}`;

console.log(greet("Komal")); // Hello Komal
//------------------------------------------------------------------------------


//2.  Destructuring
const user = { name: "Komal", age: 22 };
const { name, age } = user;

console.log(name); // Komal
console.log(age);  // 22
//------------------------------------------------------------------------------


//3.Template Literals
const product = "Phone";
const price = 999;
console.log(`The ${product} costs ₹${price}`);
// Output: The Phone costs ₹999

//--------------------------------------------------------------------------------

