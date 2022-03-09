// Array Method
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

console.log("this is origianl list:");
console.log(itemsObject);

/* 
Given the array, implement a function 
for generating a new array which doubles the
quantity and price in each object.
*/
function doubles(objectArray) {
  return objectArray.map(({ quantity, price }) => {
    return { quantity: quantity * 2, price: price * 2 };
  });
}

function doubles2(objectArray) {
  const newObjectArray = [];
  for (let i = 0; i < objectArray.length; i++) {
    newObjectArray.push({
      quantity: objectArray[i].quantity * 2,
      price: objectArray[i].price * 2,
    });
  }
  return newObjectArray;
}

console.log("this is the list with doubled quantity and price:");
console.log(doubles(itemsObject));

/*
Given the array, implement a function 
for generating a new array which contains item
quantity > 2 and price > 300 only.
*/
function larger(objectArray, qua = 0, pri = 0) {
  return objectArray.filter(({ quantity, price }) => {
    return quantity > qua && price > pri;
  });
}
function larger2(objectArray, qua = 0, pri = 0) {
  const newObjectArray = [];
  for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i].quantity > qua && objectArray[i].price > pri) {
      newObjectArray.push(objectArray[i]);
    }
  }
  return newObjectArray;
}

console.log("this is the list with quantity > 2 and price > 300 only:");
console.log(larger2(itemsObject, 2, 300));

/*
Given the array, implement a function 
to calculate the total value of the items.
*/
function total(objectArray) {
  let initialValue = 0;
  return objectArray.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, initialValue);
}

function total2(objectArray) {
  let sum = 0;
  for (let i = 0; i < objectArray.length; i++) {
    sum += objectArray[i].quantity * objectArray[i].price;
  }
  return sum;
}

console.log(total2(itemsObject));

// String Method
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
console.log("\nthis is the original string: \n'" + string + "'");

/*
Given the string, implement a function 
to remove all the non-alphabet characters 
and extra space in the string and convert 
the string to all lowercase.
*/
const newStr = string
  // .replaceAll("-", " ")
  .trim()
  .split(/[ -]+/) //remove extra space and hyphen
  // .filter((word) => word.length > 0)
  .join(" ")
  .toLowerCase();
console.log(
  "this is the new string: \n'" +
    newStr +
    // newStr[0].toUpperCase() +
    // newStr.substring(1) +
    "'"
);
