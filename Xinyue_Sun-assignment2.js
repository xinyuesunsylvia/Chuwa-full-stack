/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// 1(a)
const doubleItems = (items) => {
  return items.map((item) => ({
    quantity: item.quantity * 2,
    price: item.price * 2,
  }));
};

const doubledItems = doubleItems(itemsObject);
console.log(doubledItems);

// 1(b)
const filterItems = (items) => {
  return items.filter((item) => item.quantity > 2 && item.price > 300);
};

const filteredItems = filterItems(itemsObject);
console.log(filteredItems);

// 1(c)
const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

const totalValue = calculateTotal(itemsObject);
console.log(totalValue);

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// \s: A global search for whitespace characters
// replace(/\s+/g, " "): replaces one or more consecutive spaces (\s+) with a single space " ".
// /g flag tells the regex engine to find all occurrences of the pattern in the input string, instead of just the first one.
const cleanString = (string) => {
  return string
    .replace(/[^a-zA-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
};

const cleanStrings = cleanString(string);
console.log(cleanStrings);

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const mergeArrays = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  const result = merged.reduce((acc, cur) => {
    const index = acc.findIndex((obj) => obj.uuid === cur.uuid);
    if (index === -1) {
      acc.push({
        uuid: cur.uuid,
        role: cur.role || null,
        name: cur.name || null,
      });
    } else {
      acc[index] = {
        ...acc[index],
        role: acc[index].role || null,
        name: acc[index].name || null,
        ...cur,
      };
    }
    return acc;
  }, []);
  return result.sort((a, b) => a.uuid - b.uuid);
};

const merged = mergeArrays(first, second);
console.log(merged);
