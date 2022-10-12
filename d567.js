// document.querySelector("button").addEventListener("click",()=>{
//   let head = document.querySelector("h1");
//   head.innerHTML = "MERN Stack";
// })

function hl(){
    let head = document.querySelector("h1");
    head.innerHTML = "MERN Stack";
   }
   
   
   document.getElementsByTagName("h1")[0];
     document.querySelectorAll("h1")[0];
     document.querySelector("h1");
     console.log()
   
   
     function getTime (){
       let dateTime = new Date();
       let hrs = dateTime.getHours();
       let min = dateTime.getMinutes();
       let sec = dateTime.getSeconds();
       let session = document.getElementById('session');
   
       if(hrs >= 12){
           session.innerHTML='PM';
       }
       else{
           session.innerHTML='AM';
       }
       
       if(hrs > 12){
         hrs = hrs -12;
     }
   
     if (hrs < 10){
         hrs = '0' + hrs;
     }
   
   
     if (min < 10){
         min = '0' + min ;
     }
   
   
     if (sec < 10){
         sec = '0' + sec ;
     }
     
   
   
   
     document.getElementById('hours').innerHTML = hrs;
     document.getElementById('minutes').innerHTML = min;
     document.getElementById('seconds').innerHTML = sec;
   }
   setInterval(getTime , 10);
   
   
   
   
   
   document.getElementById("btn").addEventListener("click", () => {
     document.querySelector("h2").innerText = "Welcome to Elevation academy";
   });
   
   
   
   
   
   
   document.getElementById("btn2").addEventListener("click", () => {
     document.querySelector("h3").innerText = "";
   });
   
   
   
   
   
   // Q=> Given an array of 0's and 1's find out number of 0's ?
   
   let array = [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0];
     
     let count = 0;
     for (let i = 0; i < array.length; i++) {
       if (array[i] == 0) {
         count++;
       }
     }
     console.log(count);
   
   
   // Q=> Given an array find out total no. of odd and even nos ?
   
   
     let arr = [12, 13, 5, 7, 11, 1, 4, 17, 20, 34, 45, 51];
     let arr2 = arr.filter((x) => x % 2 === 0);
     console.log("even number in Array : ", arr2.length);
     console.log("odd number in Array : ", arr.length - arr2.length);
   
   
   // Q=> Given a string find out number of vowels ?
   
   
     let str = "jhsdgwjhdbfcaeriuoatroeakbndqwbdnmndkjqwadasdasdfgsafgsefglumudehcnuhvjkrhgnjeghrbmchbncjhxfhvndcfghj";
     function vowelCount(str) {
       let count = 0;
       let vowel = ["a", "e", "i", "o", "u"];
       for (let i = 0; i < str.length; i++) {
         if (vowel.includes(str[i])) {
           count++;
         }
       }
       console.log(count);
     }
     vowelCount(str);
     
   
   // Q=> Write a code to create two objects with 2 properties each, one will be string and other will be an array. 
    //Create a function to check if all the elements of the arrays in both the objects are same ?
   
   
     let obj1 = {
       fName: "Akash",
       hobbies: ["Tabla", "Art", "football"],
       };
     let obj2 = {
       lName: "Biswas",
       hobbies: ["cricket", "Art", "Singing"],
       };
     function checkObj(obj1, obj2) {
       let count = 0;
       for (let i = 0; i < obj1.hobbies.length; i++) {
         if (obj1.hobbies.includes(obj2.hobbies[i])) {
           count++;
         } else {
           console.log("hobbies are not same");
         }
       }
       if (count == obj1.hobbies.length) {
         console.log("All the elements are same");
       }
     }
     checkObj(obj1, obj2);
     
     let obj11 = {};
     let obj22 = {};
     console.log(obj11 == obj22);
     
      
   //---------day 05---------//
   
   
   // Q=> What is the for-in loop in JavaScript? Give its syntax ?
   
   //The for-in loop is a basic control statement that allows you to loop through the properties of an object. 
   //The statements of code found within the loop body will be executed once for each property of the object.
   
   for (key in object) {
       // code to execute
     }
   
   
   // Q=> Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript	?
   
   // Local Scope, variables declared inside the functions are considered to be of the local scope and it is futher divided into function scoped and block scoped.
   
   // Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
   
   // Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.
   
   // Q=> What is difference between null and undefined and where to use what ?
   
   // Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
   
   // Undefined: It means the value does not exist in the compiler. It is the global object.
   
   // Q=> what is Symbol ?
   
   // The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.
   
   
   // Q=> Write code to explain map and filter in arrays ?
   
   // Map 
   
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map(item => item * 2);
   console.log(doubled);
   
   // Filter
   
   const number = [1, 2, 3, 4];
   const evens = number.filter(item => item % 2 === 0);
   console.log(evens);
   
   // Q=> Explain passed by value and passed by reference ?
   
   // Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument.
   // So any changes made inside the function does not affect the original value.
   
   // Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. 
   // So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
   
   
   // Q=> Please explain Self Invoking Function and its code ?
   
   
   //  (IIFE)  Immediately Invoked Function Expressions is a JavaScript function that executes immediately after it has been defined so there is no need to manually invoke IIFE.
   
   (function(){
       console.log("Look, this is example of self-invoking functions");
       })();
   
   
   
   