1. When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:
   			RT = R1 + R2 + R3 …

   Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

```js
function sumOfTotalResistance(resistorCurrents) {
  return resistorCurrents.reduce((total, eachChurrent) => total + eachChurrent);
}

console.log(sumOfTotalResistance([2, 4, 3, 6, 10, 9]));
```



2. Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
   	
   ​			numberSplit(4) ➞ [2, 2]
   
   ​			numberSplit(10) ➞ [5, 5]
   
   ​			numberSplit(11) ➞ [5, 6]
   
​			numberSplit(-9) ➞ [-5, -4]
   	Note: 
   	
   	- All arguments must be type Number.
   	- You can expect negative numbers too.
```js
function numberSplit(number) {
  const reminder = number % 2;
  const splitArray = [number - reminder, number + reminder].map((item) => item / 2);

  return reminder === 1 ? splitArray : splitArray.reverse();
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
```



3. Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
   filterArray([1, 2, &quot;a&quot;, &quot;b&quot;]) ➞ [1, 2]
   filterArray([1, &quot;a&quot;, &quot;b&quot;, 0, 15]) ➞ [1, 0, 15]
   filterArray([1, 2, &quot;aasf&quot;, &quot;1&quot;, &quot;123&quot;, 123]) ➞ [1, 2, 123]

   Notes:

   - Zero is a non-negative integer.
   - The given array only has integers and strings.
   - Numbers in the array should not repeat.
   - The original order must be maintained.

```js
function filterArray(arr) {
  return [...new Set(arr)]
    .filter(item => item >= 0 && (typeof item === "number"));
}
console.log(filterArray([1, 5, 5, "99", "77"]));	 					// ➞ [1, 5]
console.log(filterArray([1, 2, "a", "b"])); 								// ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); 						// ➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));  // ➞ [1, 2, 123]
```



4. Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
    
    getAbsSum([2, -1, 4, 8, 10]) ➞ 25
    getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
    getAbsSum([2, 4, 6, 8, 10]) ➞ 30
    getAbsSum([-1]) ➞ 1

```js
function getAbsSum(arr) {
  return arr
    .map((item) => Math.abs(item))
    .reduce((total, item) => total + item);
}

console.log(getAbsSum([2, -1, 4, 8, 10])); 			// ➞ 25
console.log(getAbsSum([-3, -4, -10, -2, -3]));  // ➞ 22
console.log(getAbsSum([2, 4, 6, 8, 10])); 			// ➞ 30
console.log(getAbsSum([-1])); 									// ➞ 1
```



5. A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
      	// original array
      	[1, 3, 3, 5, 5, 5]
      	// original array transformed into a set
      	[1, 3, 5]
      
      Create a function that sorts an array and removes all duplicate items from it.
          set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
          set([4, 4, 4, 4]) ➞ [4]
          set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
          set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
      
      Notes:
      
      - For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).

```js
function set(arr) {
  return [...new Set(arr)].sort((a, b) => a-b);
}

console.log(set([3, 3, 3, 2, 1]));        // ➞ [1, 2, 3]
console.log(set([1, 3, 3, 5, 5]));        // ➞ [1, 3, 5]
console.log(set([4, 4, 4, 4]));           // ➞ [4]
console.log(set([5, 7, 8, 9, 10, 15]));   // ➞ [5, 7, 8, 9, 10, 15]
```

