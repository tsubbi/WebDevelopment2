1. What is ES6?

   A: ECMA6 which is released in 2015.e

2. Name 3 examples of ES6 feature.

   1. Template Strings

      ```js
      let today = "Wednesday";
      console.log(`Today is ${today}`);
      ```

   2. Relase of Promise

      - a library for asynchronous programming.

   3. Number Comparison 

      ```js
      console.log(0.1 + 0.2 === 0.3) // false
      console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true
      ```

3. What is the difference between let and const?

   - let is mutable
   - const is immutable

4. Name at lease 5 data types of javascript.

   1. string
   2. boolean
   3. object
   4. number
   5. array

5. How do you descstucture arrays and object.

   Array

   ```js
   let a, b, rest;
   [a, b, ...rest] = [10, 20, 30, 40, 50];
   console.log(a); // 10
   console.log(b); // 20
   console.log(rest); // [30, 40, 50]
   ```

   Object

   ```js
   var { foo, bar } = { foo: "lorem", bar: "ipsum" };
   console.log(foo); // "lorem"
   console.log(bar); // "ipsum"
   ```

6. Name 3 ways to access an object value in ES6.

   ```js
   let me = {
     name: 'samantha',
   };
   ```

   1. Dot Notation

      ```js
      me.name; // samantha
      ```

   2. Bracket Notation

      ```js
      me['name']; // samantha
      ```

   3. Property Names

      ```js
      let key = 'name';
      me[key]; // samantha
      ```

7. Convert if else statement to conditional operator.

   ```js
   var age = 26;
   var beverage = (age >= 21) ? "Beer" : "Juice";
   console.log(beverage); // "Beer"
   ```

   