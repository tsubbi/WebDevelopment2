Assignment
===

1. What are the 3 types of for loop

   1. do...while loop
   2. for..in loop
   3. forEach

2. Convert a standard javascript function to an arrow function

   ```js
   function printName_Age(name, age) => `Hi, ${name}, your age is ${age}`;
   ```

3. Use a **switch statement** to answer this https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

   ```js
   function basicOp(operation, value1, value2)
   {
     switch (operation) {
         case "+":
           return value1 + value2;
         case "-":
           return value1 - value2;
         case "*":
           return value1 * value2;
         case "/": 
           return value1 / value2;
         default:
           break;
     }
   }
   ```

4. Use any **looping** to answer this https://www.codewars.com/kata/reversed-sequence/train/javascript

   ```js
   const reverseSeq = n => {
     return n > 1 ? [n].concat(reverseSeq(n-1)) : 1;
   };
   ```

5. Just a comparison but good for understanding English https://www.codewars.com/kata/transportation-on-vacation/train/javascript

   ```js
   function rentalCarCost(d) {
     switch (true) {
         case (d >= 7):
           return (d * 40) - 50;
         case (d >= 3):
           return (d * 40) - 20;
         default: 
           return d * 40;
     }
   }
   ```

6. Use conditions to answer this (a little harder?) https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

   ```js
   function feast(beast, dish) {
     return beast.charAt(0) === dish.charAt(0) && 
       			beast.charAt(beast.length-1) === dish.charAt(dish.length-1); 
   }
   ```
