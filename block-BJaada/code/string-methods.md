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
    - Parameter: - Uppercase(string data type). 
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
    - Parameter: - Lowercase(string data type). 
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
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
