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
   "25".concat(45);//"2545"
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
      "Collect moment not things".includes("thing",30);// false
  
    ```
     - `includes()` includes search character in a string if the character is present it will return true else return false but there is a one optional property is position which search the character lies on that position or not .
10. `indexOf`
  -Parameter: -  searchValue, fromIndex(optional)
    
    - Return:  -searchindex or -1 
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.indexOf("Foolish");//17
    let statement="The true sign of intelligence is not knowledge but imagination";
   
    statement.indexOf("work");//-1
      "Collect moment not things".indexOf("thing",30);// -1
      "work hard".indexOf("",3);//3
  
    ```
     - `indexOf()` indexOf return the index of particular string it has two parameter searchValue  and fromIndex  if search value is not present it will return -1 and in searchValue if we give empty string it will return 0  and  we provide empty string with fromIndex  if it will under the string it wll return the fromIndex value or the last index value.
    
11. `lastIndexOf`
    -Parameter: -  searchValue, fromIndex(optional)
    
    - Return:  -searchindex or -1 
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.lastIndexOf("Foolish");//17
    let statement="The true sign of intelligence is not knowledge but imagination true";
   
    statement.lastIndexOf("true",20);//4
      "Collect moment not things".lastIndexOf("thing",30);// -1
      
  
    ```
     - `lastIndexOf()` 
     it gives the last index of given value  if its find the value it will return last index of that value else return -1.
     if search value is empty then from index will return.
     default value is infinity so if we provide from index which is greater than the length of that string it will search entire string.
```
12. `padEnd`
-Parameter: -  targetLength, padString
    
    - Return:  -string with paddingstring
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.padEnd(30,".");//"Stay Hungry Stay Foolish......"
    let statement="The true sign of intelligence is not knowledge but imagination"
   
    statement.padEnd(15,"..");//"The true sign of intelligence is not knowledge but imagination"
      "Collect moment not things".padEnd(40,"s");// "Collect moment not thingssssssssssssssss"
      
  
    ```
     - `padEnd()` 
    it will give the padding to the string it will take first value which is length if provided string is less than the value it will add padding to that string if value is less than the string the it will result as it is.

     ```
13. `padStart`
-Parameter: -  targetLength, padString
    
    - Return:  -string with padding in start of the string
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.padStart(30,".");//"......Stay Hungry Stay Foolish"
    let statement="The true sign of intelligence is not knowledge but imagination"
   
    statement.padStart(15,"..");//"The true sign of intelligence is not knowledge but imagination"
      "Collect moment not things".padStart(40,"$");// "$$$$$$$$$$$$$$$Collect moment not things"
      
  
    ```
     - `padStart()` 
    it will give  padding to the starting of the string if value is less than the length of the string it will return string as it is.
14. `repeat`
-Parameter: - count(0 to infinity)
    
    - Return:  -string with given no of copies.
    - Example:
    ```js
    let quotes="Stay Hungry Stay Foolish"
    
    quotes.repeat(5);//"Stay Hungry Stay FoolishStay Hungry Stay FoolishStay Hungry Stay FoolishStay Hungry Stay FoolishStay Hungry Stay Foolish"
    let statement="The true sign of intelligence is not knowledge but imagination"
   
    statement.repeat(0);//"The true sign of intelligence is not knowledge but imagination"
      "Collect moment not things".repeat(1);// "Collect moment not things"
      
  
    ```
     - `repeat`
    it will give repeatation of the string .if we provide negative value it will return error and .so acceptable value is 0 to infinity.
15. `replace`
-Parameter: -regexp (pattern)
             substr
             newSubstr (replacement)
             replacerFunction (replacement)
    
    - Return:  - neew string with first or all replaced value. 
    - Example:
    ```js
    let quotes="Stay Hungry Stay idot"
    
    quotes.replace("idot","foolish");//"Stay Hungry Stay Foolish"
    let statement="The true sign of intelligence is not idea but imagination"
   
    statement.replace("idea","knowledge");//"The true sign of intelligence is not knowledge but imagination"
      "Collect money not things".replace("money""moment);// "Collect moment not things"
      
  
    ```
     - `replace`
    it will replace string words with assign words.it will return new string.
16. `slice`
-Parameter: -beginIndex
             endIndex Optional
           
    
    - Return:  - new string with extracted  string
    - Example:
    ```js
    let quotes="Stay Hungry Stay idot"
    
    quotes.slice(5,10);//"Hungr"
    let statement="The true sign of intelligence is not idea but imagination"
   
    statement.slice(-2);// "on"
      "Collect money not things".slice(40,5);// ""
      
  
    ```
     - `slice`
    it will return new string with with extracted string.
17. `split`
-Parameter: separator (Optional)
             limit (Optional)
           
    
    - Return:  - array of string splited.
    - Example:
    ```js
    let quotes="Stay Hungry Stay idot"
    
    quotes.split();//["Stay Hungry Stay idot"]
    let statement="The true sign of intelligence is not idea but imagination"
   
    statement.split(' ');// ["The", "true", "sign", "of", "intelligence", "is", "not", "idea", "but", "imagination"]
      "Collect moment not things".split(" ");["Collect", "moment", "not", "things"]
      
  
    ```
     - `split`
    it will divide string into list of array.
18. `substring`
-Parameter: indexStart
             indexEnd (Optional)
           
    
    - Return:  - new string with specific part of string.
    - Example:
    ```js
    let quotes="Stay Hungry Stay idot"
    
    quotes.substring(5,5);//""
    let statement="The true sign of intelligence is not idea but imagination"
   
    statement.substring(2,5);// "e t"
      "Collect moment not things".substring(NaN);"Collect moment not things"
  
    ```
     - `substring`
    it will return a part of string from string.if we provide greater value in indexStart and less value in indexEnd it will swap the value.
    if indexStart and indexEnd is equal it will return empty string. 

