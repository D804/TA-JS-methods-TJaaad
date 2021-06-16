Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - Parameter: -  
    - Return:  string in uppercase (string data type).
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    quotes.toUpperCase();
    let statement="The true sign of intelligence is not knowledge but imagination";
    statement.toUpperCase();
    "Collect moment not things".toUpperCase();
   
    ```
     - `toUpperCase` accepts a string (string data type) and convert it into uppercase.
3. `toLowerCase`
    - Parameter: -  
    - Return:  string in lowercase (string data type).
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    quotes.toLowerCase();
    let statement="The true sign of intelligence is not knowledge but imagination";
    statement.toLowerCase();
    "Collect moment not things".toLowerCase();
   
    ```
     - `toLowerCase` accepts a string (string data type) and convert it into Lowercase(string).
4. `trim`
   - Parameter: - Remove whitespace from both of the end (string data type). 
    - Return:  string with no whitespace (string data type).
    - Example:
    ```js
    let quotes="    Stay Hungry Stay Foolish"
    quotes.trim();
    let statement="The true sign of intelligence is not knowledge but imagination      ";
    statement.trim();
    "    Collect moment not things   ".trim();
   
    ```
     - `trim()` accepts a string with whitespace (string data type) and remove whitespace(string)
5. `trimEnd`
 - Parameter: - Remove whitespace from end of the string (string data type). 
    - Return:  string with no whitespace in the end side (string data type) if no whitespace present in the end side it will return copy of that string.
    - Example:
    ```js
    let quotes="    Stay Hungry Stay Foolish    "
    quotes.trimEnd();//"    Stay Hungry Stay Foolish"
    let statement="The true sign of intelligence is not knowledge but imagination      ";
    statement.trimEnd();//"The true sign of intelligence is not knowledge but imagination"
    "Collect moment not things".trimEnd();// "Collect moment not things"
   
    ```
     - `trimEnd()` string with no whitespace in the end side (string data type) if no            whitespace  present in the end side it will return copy of that string.(string).
6. `trimStart()`
    -Parameter: - Remove whitespace from beginning of the string (string data type). 
    - Return:  string with no whitespace in the beginning side (string data type) if no whitespace present in the beginning side it will return copy of that string.
    - Example:
    ```js
    let quotes="    Stay Hungry Stay Foolish    "
    quotes.trimStart();//"Stay Hungry Stay Foolish  "
    let statement="    The true sign of intelligence is not knowledge but imagination";
    statement.trimStart();//"The true sign of intelligence is not knowledge but imagination"
    "Collect moment not things".trimStart();// "Collect moment not things"
   
    ```
     - `trimStart()` string with no whitespace in the beginning side (string data type) if no   whitespace present in the beginning side it will return copy of that string.(string)
7. `concat`
    -Parameter: - string data type (concatinate one or more than one string). 
    - Return:  - concatinated string.
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    let person="Steve jobes"
    quotes.concat(" :",person);//"Stay Hungry Stay Foolish : Steve jobes" 
    let statement="The true sign of intelligence is not knowledge but imagination";
    let person="Elbert Einstein"
    statement.concat(" :",person);//"The true sign of intelligence is not knowledge but imagination:Elbert Einstein"
      "Collect moment not things".concat(": ","Tashmin");// "Collect moment not things:Tashmin"
   "25".concat(45);//2545
    ```
     - `concat()` two string get concatinated with the help of concate.parameters are one or more than one if any one of the value is not string implicit conversion take place .   
8. `endsWith`
    -Parameter: -  search character that  string ends with that character or not (string data   type )
    optional(length we can search by length of the string);
    - Return:  - true or false
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.endsWith("Foolish");//true
    let statement="The true sign of intelligence is not knowledge but imagination";
   
    statement.endsWith("Imagination");//false
      "Collect moment not things".endsWith("thing",12);// false
  
    ```
     - `endsWith()` endsWith check either ends with that character or not.there is one optional parameters  is length we can search using length property it will return true or false .It is a case sensitive.
9. `includes`
    -Parameter: - searchString and position.
    optional(length we can search by length of the string);
    - Return:  - true or false
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.includes("Foolish");//true
    let statement="The true sign of intelligence is not knowledge but imagination";
   
    statement.includes("knowledge");//false
      "Collect moment not things".concat("thing",30);// false
  
    ```
     - `includes()` includes search character in a string if the character is present it will return true else return false but there is a one optional property is position which search the character lies on that position or not .
10. `indexOf`
  -Parameter: -  searchValue, fromIndex(optional)
    
    - Return:  -searchValue or -1 
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.indexOf("Foolish");//17
    let statement="The true sign of intelligence is not knowledge but imagination";
   
    statement.indexOf("work");//-1
      "Collect moment not things".concat("thing",30);// -1
      "work hard".indexOf("",3);//3
  
    ```
     - `indexOf()` indexOf return the index of particular string it has two parameter searchValue  and fromIndex  if search value is not present it will return -1 and in searchValue if we give empty string it will return 0  and  we provide empty string with fromIndex  if it will under the string it wll return the fromIndex value or the last index value.
    
11. `lastIndexOf`
    -Parameter: -  searchValue, fromIndex(optional)
    
    - Return:  -searchValue or -1 
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.lastIndexOf("Foolish");//17
    let statement="The true sign of intelligence is not knowledge but imagination true";
   
    statement.lastIndexOf("true",20);//4
      "Collect moment not things".concat("thing",30);// -1
      
  
    ```
     - `lastIndexOf()` 

12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
