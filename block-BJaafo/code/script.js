function fullName(firstName = "", lastName = "") {
  return `${firstName} ${lastName}`;
}

// let expected = "AryaStark";

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

//---------✋ If first test fails then next test does not execute.----------//
let result = fullName("Arya", "Stark");

let expected = "Arya Stark";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

//--------------------------------------------------------------------------//

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}

let result1 = totalAmount(100, 0.5);

// let expected1 = 140;

// if (result1 !== expected1) {
//   throw new Error(`${result1} is not equal to ${expected1}`);
// }

let expected1 = 150;

if (result1 !== expected1) {
  throw new Error(`${result1} is not equal to ${expected1}`);
}
