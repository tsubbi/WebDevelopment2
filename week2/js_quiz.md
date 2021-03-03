1. What is ES6?

   ES6 is a version of JS that is released in 2015.

2. Name 3 examples of ES6 feature.

   - Arrow function
   - promise
   - template string

3. What is the difference between let and const?

   let is mutable where as const is immutable. Normally use const but only use let when want to mutate the function.

4. How do you access object values? Give 3 examples

   1. {name of object}.variable_name
   2. {name of object}["variable_name"]
   3. let key = "name"
      {name of object}[key]

5. What does setInterval and setTimeout do?

   setInterval is to repeatedly run a function in certain amount of interval of time, where setTimeout is activate a function ~~within a time frame.~~ after a time frame. (I checked with yesterday's slide)

6. What are promises?

   promise is a functional programming that will does async tasks.

7. Convert this async function to async/await

   example

   ```js
   getQuote().then((quote) => {
     console.log(quote);
   }).catch(function (error){
     console.log(error);
   })
   ```

   Conversion

   ```js
   await getQuote().then((quote) => console.log(quote))
   								.catch((error) => console.log(error));
   ```

8. Convert this code to arrow function.

   example

   ```js
   function greeting(firstName, lastName) {
     return `Hi ${firstName}, ${lastName}`
   }
   ```

   conversion

   ```js
   greeting = (firstName, lastName) => `Hi ${firstName}, ${lastName}`;
   ```

9. Explain what a callback function is.

   callback function is a nameless function that does certain tasks when an action has completed

10. What does the functions pop and push do to an array?

    pop for an array is to take out the last item of that array. push is at add an item into an array's last list

11. What is the expected answer to this code?

    ```js
    var string1 = "";
    var object1 = {a: 1, b: 2, c:3};
    
    for (var property1 in object1) {
      string1 += object1[property1];
    }
    
    console.log(string1);
    ```

    ~~I think it will be crusing because string1 is ofType string where the object's property of value is a number~~

    it will print out 123 after I check it with compiler. I overlooked the js' type unsaftiness

12. What data type would Array.map() and Array.filter() return?

    Array.map() will return a specific type that what's to be converted where Array.filter() will return the items that fit the requirements

13. What data type would Array.includes() and Array.some() return?

    boolean

14. Write down the 4 main methods of rest api

    - GET 
    - POST
    - DELETE
    - ~~UPDATE~~, it's not update it's PUT **(google)**

15. What is the difference between JSON and javascsript object?

    JSON consists ONLY 6 types of value type: Array, Boolean, Null, Number and ObjectString. Yet, js object can contain undefined and symbol. Array are considered as an object in js object.**(google)**

16. Explain what API is

    API is a way for programmer to access preset methods so that they don't have to rewrite a complex function to do the same action.

17. What is an api key?

     api key is a credential that for backend service to identify who access the data. it's for protection of a company's data and services. **(google)**

18. Let&#39;s say we have query params that we want to include in an api call.example: { a: 1, b: 2 } How do we convert this into query-string?

    GET method: a=1&b=2

    POST method: can attach the object inside body(data)

19. What do we send in the body(data) of rest api?

    sending the required parameters so that the server can query out the data we need for us