1. A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society.

   Examples
   
   societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
   societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
   societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
   NOTE:
   
   - The secret society's name should be entirely uppercased.
```js
function societyName(arr) {
  return arr.map((name) => name.charAt())
            .sort()
            .join("")
            .toUpperCase();
}

console.log(societyName(["Adam", "Sarah", "Malcolm"])); // ➞ "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); // ➞ "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])); // ➞ "CJMPRR"
```

2. Create a function which returns the number of true values there are in an array.
   	countTrue([true, false, false, true, false]) ➞ 2
   	countTrue([false, false, false, false]) ➞ 0
   	countTrue([]) ➞ 0
    Notes:
   - Return 0 if given an empty array.
   - All array items are of the type bool (true or false).
```js
function countTrue(arr) {
  return arr.length > 0 ? arr.filter((item) => item).length : 0;
}

console.log(countTrue([true, false, false, true, false]));  // ➞ 2
console.log(countTrue([false, false, false, false]));       // ➞ 0
console.log(countTrue([]));                                 // ➞ 0
```

3. Write a function that converts an object into an array of keys and values.
	objectToArray({
		D: 1,
		B: 2,
		C: 3
	}) ➞ [["D", 1], ["B", 2], ["C", 3]]
	objectToArray({
		likes: 2,
		dislikes: 3,
		followers: 10
	}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
```js
function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(objectToArray({
	D: 1,
	B: 2,
	C: 3
})); // ➞ [["D", 1], ["B", 2], ["C", 3]]
console.log(objectToArray({
	likes: 2,
	dislikes: 3,
	followers: 10
})); // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
```

4. The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
	Examples
		clone([1, 1]) ➞ [1, 1, [1, 1]]
		clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
		clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
```js
function clone(arr) {
  return Object.values({...arr, arr});
}

console.log(clone([1, 1]));     // ➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3]));  // ➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"])); // ➞ ["x", "y", ["x", "y"]]
```

5. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
   	removeDups([1, 0, 1, 0]) ➞ [1, 0]
   	removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
   	removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

   Notes:
    - Tests contain arrays with both strings and numbers.
    - Tests are case sensitive.
    - Each array item is unique.
```js
function removeDups(arr) {
  return [...new Set(arr)];
}

console.log(removeDups([1, 0, 1, 0]));               // ➞ [1, 0]
console.log(removeDups(["The", "big", "cat"]));      // ➞ ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // ➞ ["John", "Taylor"]
```