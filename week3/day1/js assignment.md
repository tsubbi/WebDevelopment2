1. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a
   string of those numbers formatted as a phone number (e.g. (555) 555-5555).

   Examples
   	formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ &quot;(123) 456-7890&quot;

   ​	formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ &quot;(519) 555-4468&quot;

   ​	formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ &quot;(345) 501-2527&quot;

   Notes

   - Don&#39;t forget the space after the closing parenthesis.

   ```js
   function formatPhoneNumber(arr) {
     if (arr.length !== 10) {
       return "the numbers are exceed the length of phone number";
     } else if (arr.every((number) => number < 0 && number > 10)) {
       return "the number is between 0-9"
     }
     
     let phoneArray = [[], [], []];
     
     arr.forEach ((num, index) => {
       switch (index) {
         case 0:
         case 1:
         case 2:
           phoneArray[0].push(num);
           break;
         case 3:
         case 4:
         case 5:
           phoneArray[1].push(num);
           break;
         default:
           phoneArray[2].push(num);
       }
     });
   
     return `(${phoneArray[0].join('')}) ${phoneArray[1].join('')}-${phoneArray[2].join('')}`;
   }
   
   console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ➞ "(123) 456-7890"
   console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // ➞ "(519) 555-4468"
   console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // ➞ "(345) 501-2527"
   ```

   

2. Create a function that takes two arrays and insert the second array in the middle
   of the first array.

   Examples
   	tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

   ​	tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

   ​	uckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

   Notes

   - The first array always has two elements.
   - Use the spread syntax to solve this challenge.

   ```js
   function tuckIn(firstArr, secArr) {
     secArr.forEach ((item, index) => {
       firstArr.splice(index+1, 0, item);
     });
     
     return firstArr;
   }
   
   function tuckIn2(firstArr, secArr) {
    const lastItem = firstArr.pop();
    let returnedArray = Object.values(firstArr.concat(secArr))
   
    returnedArray.push(lastItem);
    return returnedArray;
   }
   
   console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   console.log(tuckIn([15,150], [45, 75, 35])); // ➞ [15, 45, 75, 35, 150]
   console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); // ➞ [[1, 2], [3, 4], [5, 6]]
   ```

   

3. Given an array of numbers, return an array which contains all the even numbers
   in the orginal array, which also have even indices.

   Examples

   ​	getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

   ​	getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

   ```js
   function getOnlyEvens(arr) {
     return arr.filter( (item, index) => item%2 === 0 && index%2 == 0);
   }
   
   console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); // ➞ [2, 4]
   console.log(getOnlyEvens([0, 1, 2, 3, 4])); // ➞ [0, 2, 4]
   ```

   