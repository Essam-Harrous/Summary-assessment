// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  //split the string parameter to an array of each word.
  //then it uses map to iterate through the array...
  //and return the length of every element or word
  function wordLengths(str) {
      // TODO: your code here 
      var arr = str.split(' ');
      var result = map(arr, function(element) {
        return element.length
      })
      return result;
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  //it uses filter to iterate over the string param..
  //and it checks if the element equal the character..
  //it will push into an array.
  //then it will return the length of the array.
  function countOccurrences(string, character) {
      // your code is here
      var result = filter(string, function(element){
        return element === character;
      })
      return result.length
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  //split the str param into array of words.
  //then it uses filter to check if the length of the element or word longer than 3..
  //if it's it will push into the result array.
  //then it return the result array
  function wordsLongerThanThree(str) {
      // TODO: your code here 
      var arr = str.split(' ');
      var result = filter(arr, function(element) {
        return element.length > 3;
      })
      return result;
  }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  //I added a third param to keep track of the final result
  //first time we call the function we don't give it the third param..
  //so the var result will have a value of empty string
  //the stop condition is count when count is 0 we return our result variable
  //it it's not we will call our function again and we will subtract 1 of the count..
  //and enter the third param with result plus str;
  function repeatString(str, count, result) { 
    var result = result || ''
   // TODO: your code here 
   if(count === 0){
    return result;
   }
   return repeatString(str, count - 1, result + str);
  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredients());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here .....

  //I solve it with oop in the beginning
  // function makePizza(crust, size, numberOfSlice){
  //   return {
  //     crust = crust,
  //     size = size,
  //     numberOfSlice = numberOfSlice,
  //     ingredients: [],
  //     addIngredients: addIngredients,
  //     displayIngredients: displayIngredients,

  //   }
  // }
  // function addIngredients(ingredient){
  //   this.ingredients.push(ingredient);
  // }
  // function displayIngredients(){
  //   return this.ingredients.join(',');
  // }

  //this closures function used to keep track of the variables, 
  //and it has about 4 functions
  //1 addIngredients it uses to to ingreient to our ingredient var
  //2 displayIngredients it uses to display ingredients seperated by comma ','
  //3 bakePizza use settimeout to display pizza description after 2s
  //4 eatSlice it subtract 1 from slices and it return the number of left slices,
  //if the number of slices is 0 it will return a message "ther's no slices left"
    function makePizza(crust, size, numberOfSlice){
      var crust = crust;
      var size = size;
      var numberOfSlice = numberOfSlice;
      var ingredients = [];
    return {
      addIngredients: function(ingredient){
        ingredients.push(ingredient);
      },
      displayIngredients: function(){
        return ingredients.join(',');
      },
      bakePizza: function(){
        setTimeout(function() {console.log('your ' + crust + ' ' + size + ' ' + numberOfSlice + ' slice pizza is done')}, 2000)
      },
      eatSlice: function() {
        if(numberOfSlice){
          numberOfSlice--;
          return 'left ' + numberOfSlice + ' slice'    
        }
        return 'there\'s no slices left'

      }

    }
  }
  
  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  // I liked this. Yes I am :)
  // Write your code here .....

  //this class return an object of variables and 2 functions
  //1 it accebt a book name as param and it push it to 'toRead' array
  //then add 1 to unRead variable
  //2 it push the currentRead book to readBooks array then it add 1 to read variable
  //then put the first book in toRead array in currentRead variable
  //and finally it subtract 1 of unRead variable
  //it declare the functions out side the class to save data
  function ReadingList(){
    var readingList = {};
    readingList.read = 0;
    readingList.unRead = 0;
    readingList.toRead = [];
    readingList.currentRead = '';
    readingList.readBooks = [];
    readingList.addBook = addBook;
    readingList.finishCurrentBook = finishCurrentBook;
    return readingList;
}
  function addBook(bookName){
    this.toRead.push(bookName);
    this.unRead += 1;
  }
  function finishCurrentBook(){
    this.readBooks.push(this.currentRead);
    this.read += 1;
    this.currentRead = this.toRead[0];
    this.unRead -= 1;
  }

  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....

  //it uses closure to keep track of our storage size limit
  //it has 2 other variables
  //'items' an array to hold our items
  //'sizeVal' is an object to hold the value of our item size
  //it has 1 function 'addItem'
  //it check if the size is allowed or not if it's it abstract the item size
  //and push it into items array
  //and check if the storageLimit equal 0 it return a our array of itmes joined with space
  //finally if the item size is bigger than the storage it tell you that 'cant fit'.
  function makeSafe(initial) {
    var storageLimit = initial;
    var items = [];
    var sizeVal = {
      small: 1,
      medium: 2,
      big: 3
    }
    return {
      addItem: function(item, size){
        if(storageLimit - sizeVal[size] >= 0){
          storageLimit -= sizeVal[size];
          items.push(item);
          if(storageLimit === 0){
            return items.join(' ')
          }
        }else {
          return 'Can\'t fit'
        }
      }
    }
  }
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  when we use functions there is roles:
  1 use local variables or 2 variable from its parameter...
  but when we want to keep track of a variable we will need to break the roles
  and if we break the roles our variable will be in the risk of change from any other place
  that is why we use closure because it let us create a function holds our variables and our functions
  so we can track our variable and it will be safe
  
  // 2- In OOP, what does "this" refer to ?
  it refers to the object that it is inside it
  
  // 3- What is jQuery?
  Java Script library give you the ability to manipulate html element insteade of using DOM
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
  