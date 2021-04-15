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

function totalAmpunt(amount = 0, taxrate = 0) {
  return amount + amount * taxRate;
}
