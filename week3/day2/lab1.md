1. What are promises?

   Promise is a async function which can resolve from callback hell, or call apis, which runs on global thread, and will "promise" to give results

2. What are the 2 parameters inside the callback functions that the promise returns?

  resolve and reject

3. How do you use promises?

   use either `.then()` or `async/await`

4. What is the difference between asynchronous and synchronous?

   syncronous is fired a() followed by b() and followed by c(), where in asynchronous, it fires a(), b() and c() at the same time

5. How do we catch errors for promises?

   use try catch block or inside reject method

6. How do you write a try-catch block?

   try {

   ​	doSomething()

   } catch (error) {

     errorHandling()

   }

7. Try to convert from .then() =&gt; async await

   Async function a() {

   ​	try {

   ​		// do something...

   ​	} catch (error) {

   ​		// error handling 

   ​	}

   }

8. Give me 2 examples in a project when you want to use promises

   1. api fetching is the one would use promise wildly
   2. I would also use promise for saving file on device