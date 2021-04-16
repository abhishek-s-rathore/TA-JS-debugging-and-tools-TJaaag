// Test Framework

function test(message, callbackfn) {
  try {
    callbackfn();
    console.log("✅", message);
  } catch (error) {
    console.error(error);
    console.warn("❌", message);
  }
}

// Assertion Library

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    toBeEqual: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`);
      }
    },
  };
}

// Add Two Numbers

function sum(numA, numB) {
  return numA + numB;
}

//Tests

test("sum of 10 , 20 should be equal to 30", () => {
  expect(sum(10, 20)).toEqual(30);
});
test("sum of 50 , (-20) should be equal to 30", () => {
  expect(sum(50, -20)).toEqual(30);
});
test("sum of 30 , 0 should be equal to 30", () => {
  expect(sum(30, 0)).toEqual(30);
});
test("sum of 10 , 20 should be equal to 30", () => {
  expect(sum(10, 20)).toEqual(50);
});
test("sum of 0 , 100 should be equal to 100", () => {
  expect(sum(0, 100)).toEqual(100);
});

test("datatype should be number", () => {
  expect(sum(0, "100")).toBeEqual("number");
});

// Multiply Two Numbers
function product(numA, numB) {
  return numA * numB;
}

//Tests

test("product of 10 , 20 should be equal to 200", () => {
  expect(product(10, 20)).toEqual(200);
});
test("product of 50 , (-2) should be equal to -100", () => {
  expect(product(50, -2)).toEqual(-100);
});
test("product of 30 , 0 should be equal to 0", () => {
  expect(product(30, 0)).toEqual(0);
});
test("product of 10 , 20 should be equal to 200", () => {
  expect(product(10, 20)).toEqual(100);
});
test("product of 0 , 100 should be equal to 0", () => {
  expect(product(0, 100)).toEqual(0);
});

test("datatype should be number", () => {
  expect(product(0, 100)).toBeEqual("number");
});
