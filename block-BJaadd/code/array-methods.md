Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
  

2. `join`
 - Parameter: separator (optional)
   - Return: a string with all array element when length of array is 0 it will return empty string.
   - Example:
     ```js
     let numbers = [45, 23, 39];
     numbers.join(); //"45,23,39"
     let numbers = [45, 23, 39];
     numbers.join(' + '); //"45 + 23 + 39"
     let name=["Deepak","Kushwaha"];
     name.join('-');
     ```
   - `join` It will convert all string elements into one string and use to seprate elements using some symbols. 
    - No it does not mutate the original array
3. `flat`
- Parameter: numbers(depth),infinity
   - Return: a single array.
   - Example:
     ```js
     let numbers = [45, [23, [39]]];
     numbers.flat(); //[45, 23, Array(1)]
     let numbers = [45, 23, 39];
     numbers.flat(2); // [45, 23, 39]
     let name=[[["Deepak"],"Kushwaha"],[45,[65]]];
     name.flat(Infinity);// ["Deepak", "Kushwaha", 45, 65]
     ```
   - `flat`  flat is used to convert multi dimensional array to single array it has parameter number,infinity.
  
4. `push`
- Parameter: elementN(add to end of an array N numbers of element can be added)
   - Return: a new array(length of an array).
   - Example:
     ```js
     let numbers = [45, 23, 39];
     numbers.push(96); //[45, 23, 39, 96]
     let name = ["Ram","Deepak","Abhi"];
     name.push("Gourav","Avinash"); //5
     name;//["Ram", "Deepak", "Abhi", "Gourav", "Avinash"]
     let number=[45,65,63,68];
     number.push("");//5
     number;//[45,65,63,68," "];
     ```
   - `push`  push is used to add elements in end of the array we can pass multiple values.
    - yes it  mutate the original array.
5. `indexOf`
- Parameter: elementN(add to end of an array N numbers of element can be added)
   - Return: a new array(length of an array).
   - Example:
     ```js
     let numbers = [45, 23, 39];
     numbers.push(96); //[45, 23, 39, 96]
     let name = ["Ram","Deepak","Abhi"];
     name.push("Gourav","Avinash"); //5
     name;//["Ram", "Deepak", "Abhi", "Gourav", "Avinash"]
     let number=[45,65,63,68];
     number.push("");//5
     number;//[45,65,63,68," "];
     ```
   - `push`  push is used to add elements in end of the array we can pass multiple values.
    - yes it  mutate the original array.
6. `lastIndexOf`
   - Parameter: Element which we want to search.
                fromIndex(optional).
   - Return: if match then last index of array if the element is not available then -1.
   - Example:
     ```js
     let numbers = [45, 23, 39,23];
     numbers.lastIndexOf(23); //3
     let name = ["Ram","Deepak","Abhi"];
     name.lastIndexOf("Gourav"); //-1
     
     let number=[45,65,63,68,45];
     number.lastIndexOf(45,2);//0
    
     ```
   - `lastIndexOf`  lastIndexOf  takes two Parameter search element and fromindex(optional)by the help of this we can find the element is present or not and also search from backwards  index of that element .
    - no its does not  mutate the origin array.
7. `includes`
   - Parameter: Search element
                fromIndex(optional).
   - Return: True or False.
   - Example:
     ```js
     let numbers = [45, 23, 39,23];
     numbers.includes(23); //true
     let name = ["Ram","Deepak","Abhi"];
     name.includes("Gourav"); //false
     
     let number=[45,65,63,68];
     number.includes(45,2);//false
    
     ```
   - `includes` It is usesd to search particular value or element is present on that array or not if it's present it will return true else return false.it has also a from index which is optional which help to search array from particular place. 
    - no its does not  mutate the origin array.

8. `reverse`
   - Parameter
               
   - Return: Reversed array.
   - Example:
     ```js
     let numbers = [45, 23, 39,23];
     numbers.reverse(); //[23,39,23,45]
     let name = ["Ram","Deepak","Abhi"];
     name.reverse(); //["Abhi","Deepak","Ram"]
     
     let number=[45,65,63,68,45];
     number.reverse();//[45,68,63,65,45]
    
     ```
   - `reverse` It is used to reverse array or element of the array.
    - yes its mutate the origin array.
9. `every`
- Parameter:callbackfunction
            element
            index(optional)
            array(optional) 
            thisArg(optional)    
   - Return:True or false.
   - Example:
     ```js
     let numbers = [45, 23, 39,23];
     numbers.every(function(num){
       return num>25;
     }); //
     let name = ["Ram","Deepak","Abhi"];
     name.every(function(nam){
     return name.includes( "ram");
     }); //false
     
    let arrowFunction=(num)=>num>30;
    let numbers=[45,52,65,25,89];
    numbers.every(arrowFunction);//false
    
     ```
   - `every` every check all the element of the array if callback function is true it's return true else false.
    - no its does not  mutate the origin array.
10. `shift`
   - Parameter:
                
   - Return:removed element or undefined if the array is empty.
   - Example:
     ```js
     let numbers = [45, 23, 39,23];
     numbers.shift();//45
    
     let name = ["Ram","Deepak","Abhi"];
     name.shift();//"Ram"
     console.log(name);//["Deepak","Abhi"]
 
    let numbers=[45,52,65,25,89];
    numbers.shift();//45
    
     ```
   - `shift` shift remove the 0th index and shift elements.if array is empty its gives undefined.
    - yes its mutate the origin array.
11. `splice`
   - Parameter:start
               deleteCount(optional)
               items
                
   - Return:An array with deleted elements.
           if no element is removed we get empty array. 
   - Example:
    ```js
      let numbers = [45, 23, 39,23];
          numbers.splice(2,1,65);//[39]
          console.log(numbers);// [45, 23, 65, 23]  
     
    
     let name = ["Ram","Deepak","Abhi"];
     name.splice(3,0,"Gourav");//[]
     console.log(name);//["Ram","Deepak","Abhi","Gourav"];
 
    let numbers=[45,52,65,25,89];
    numbers.splice(0,0,96);//[]
    console.log(numbers);// [96, 45, 52, 65, 25, 89]
     ```
   - `shift` shift remove the 0th index and shift elements.if array is empty its gives undefined.
    - yes its mutate the origin array.
12. `find`
- Parameter:callbackfunction
            element
            index(optional)
            array(optional) 
            thisArg(optional) 
                
   - Return:the first satisfied value.
            undefined.
   - Example:
    ```js
      let numbers = [45, 23, 39,23];
          function greaterthan(num){
          return num<12;
          }
         numbers.find(greaterthan);//undefined
          
     
    
    let name = ["Ram","Deepak","Abhi","deepak"];
     function equalName(nameOfPerson){
       return nameOfPerson==="Deepak";

     }
     name.find(equalName);//"Deepak"
     
 
    let numbers=[45,52,65,25,89];
    function greaterThan(num){
      return num>80;
    }
    numbers.find(greaterThan);//89
    
     ```
   - `find` find give first satisfied value and leave rest of   the element
    - no its does not mutate the origin array.
13. `unshift`
   - Parameter:elementN
            
                
   - Return:the length of the array.
           
   - Example:
    ```js
      let numbers = [45, 23, 39,23];
          numbers.unshift(65,29);//6
          console.log(numbers);// [65, 29, 45, 23, 39, 23]

          
     
    
    let name = ["Ram","Deepak","Abhi"];
     name.unshift("Raj");//4
     console.log(name);// ["Raj","Ram","Deepak","Abhi"]
     
     let numbers=[45,52,65,25,89];
    numbers.unshift(96);//6
    console.log(numbers);//[96,45,52,65,25,89]
    
     ```
   - `unshift` unshift add element elements in the starting of   the array.we can add multiple elements in array.
    - yes its mutate the origin array.
14. `findIndex`
- Parameter:callbackFn
      three arguments
      element
      index(optional)
      array(optional)
      thisArg(optional)      
                
   - Return:the The index of the first return element or -1.
           
   - Example:
    ```js
      let numbers = [45, 23, 39,23];
        function findIndexOfNumber(num){
         return num>45;
        }
          numbers.findIndex(findIndexOfNumber);// -1
          
      let name = ["Ram","Deepak","Abhi"];
        name.unshift("Raj");//4
        console.log(name);// ["Raj","Ram","Deepak","Abhi"]
        numbers.find(greaterThan);//89

      let numbers=[45,52,65,25,89];
       function indexFind(num){
         return num>40;
      }
      numbers.findIndex(indexFind);//0
    
     ```
   - `findIndex` findIndex gives the index of first satisfied  value if its match it will return index if it's not satisfied it will return -1. 
    - No its doesn't mutate the origin array.
15. `filter`
       - Parameter:callbackFn
      three arguments
      element
      index(optional)
      array(optional)
      thisArg(optional)      
                
   - Return:the New element which satisfied the condition or empty array.
           
   - Example:
    ```js
     let numbers = [45, 23, 39,23];
        function filterOfNumber(num){
         return num>25;
        }
          numbers.filter(filterOfNumber);// [45, 39]
          
      let name = ["Ram","Deepak","Abhi"];
        name.filter(filterLength=>filterLength.length>3);//["Deepak", "Abhi"]
       

      let numbers=[45,52,65,25,89];
      
      function numberFilter(num){
      return num<50;
      }
      numbers.filter(numberFilter);//[45, 25]
    
     ```
   - `filter` filter gives new array that pass that provided condition if condition true it store element in new array so length is less than the actual array     
    - No its doesn't mutate the origin array.
16. `flat`
     - Parameter: numbers(depth),infinity
   - Return: a single array.
   - Example:
     ```js
     let numbers = [45, [23, [39]]];
     numbers.flat(); //[45, 23, Array(1)]
     let numbers = [45, 23, 39];
     numbers.flat(2); // [45, 23, 39]
     let name=[[["Deepak"],"Kushwaha"],[45,[65]]];
     name.flat(Infinity);// ["Deepak", "Kushwaha", 45, 65]
     ```
   - `flat`  flat is used to convert multi dimensional array to single array it has parameter number,infinity.
   - No its doesn't mutate the origin array.
17. `forEach`
                - Parameter:callbackFn
      three arguments
      element
      index(optional)
      array(optional)
      thisArg(optional)      
                
   - Return:undefined
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
        function forEachNumber(num){
          num>30;
         }
          numbers.forEach(forEachNumber);//undefined
          
      let name = ["Ram","Deepak","Abhi"];
      function forEachName(details){
        console.log(details);//Ram
          }                  //Deepak
                             //Abhi
      name.forEach(forEachName);//undefined
       

      let numbers=[45,52,65,25,89];
      
      function check(num){
       num<50;
      }
      numbers.forEach(check);//undefined
      `forEach` forEach call callback function for each element of the array it returns undefined.it will call function one by one.
      - No its doesn't mutate the origin array.

18. `map`
           - Parameter:callbackFn
      three arguments
      element
      index(optional)
      array(optional)
      thisArg(optional)      
                
   - Return:new array 
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
        function number(num){
          return num>30;
         }
          numbers.map(number);// [true, false, true, false]
          
     let name = ["Ram","Deepak","Abhi"];
      function friendsName(details){
        details.length>3;
          }                 
         name.map(friendsName);//[undefined, undefined, undefined]
       

    let numbers=[45,52,65,25,89];
      
      function check(num){
      return num/2;
      }
      numbers.map(check);// [22.5, 26, 32.5, 12.5, 44.5]
      `map` map call callback function of every element of the array .it will call function one by one.
      - No its doesn't mutate the origin array.
19. `pop`
        - Parameter:
         
                
   - Return:removed element
           undefined if array is empty.
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
       numbers.pop();// 23
          
     let name = ["Ram","Deepak","Abhi"];
         name.pop();//"Abhi"
       

    let numbers=[45,52,65,25,89];
      numbers.pop();//89
      `pop` pop remove the last element of the array.if array is empty it gives   undefined.
      - yes its mutate the origin array.
20. `reduce`
         - Parameter:callbackFn
      four arguments
     accumulator
     currentValue
      index (Optional)
      array(optional)   
      initialValue(optional)   
                
   - Return:single value.
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
       function num(accumulator,currentvalue){
         return accumulator+currentvalue;// 130
       }
       numbers.reduce(num);


  let numbers = [45, 23, 39,23];
        function number(accumulator,currentvalue){
          return accumulator-currentvalue;
         }
          numbers.reduce(number);//-40
       

    let numbers=[45,52,65,25,89];
      
      function check(num){
      return num/2;
      }
      numbers.reduce(check);// 2.8125
      `reduce` In this method there are four parameters  accumulator store the value of every ittration  currentValue take the one by one every value in the array. perform task and give single output. 
      - No its doesn't mutate the origin array.
21. `slice`
  - Parameter:start(optional);
              end(optional);
       
                
   - Return:A new array containing the extracted elements. 
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
       numbers.slice(6);// []
          
  let numbers = [45, 23, 39,23];
       
       numbers.slice(1,3);// [23, 39]
       

    let numbers=[45,52,65,25,89];
      numbers.slice(-2);// [25, 89]
      `slice` slice used to remove elements from an array we assign value from which index of the element start and upto which we want to delete.if we choose (1,5) so from first index to 4 index value will be delete.if we choose (-2) negative value so from end of the element delete.
      - No its doesn't mutate the origin array.
22. `some`
     - Parameter:callbackFn
      four arguments
     accumulator
     currentValue
      index (Optional)
      array(optional)   
      initialValue(optional)   
                
   - Return:true or false
           
   - Example:
    ```js
    let numbers = [45, 23, 39,23];
       function num(number){
         return number>50
       }
       numbers.some(num);//false


  let name = ["Ram","Deepak","Abhi"];
      function friendsName(details){
       return details.length>4;
          }                 
         name.some(friendsName);//true
       

    let numbers=[45,52,65,25,89];
      
      function check(num){
      return num/2===0;
      }
      numbers.some(check);// false
      `reduce` reduce method check one of the element satisfied the condition if satisfied it return true for entire array if not satisfied then return false.
      - No its doesn't mutate the origin array.
