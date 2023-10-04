//forEach is primarily used for iterating through an array to perform some action on each element, but doesn't inherently create a new array with transformed values.  It usually requires more lines of code.

/*Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]*/

function doubleValues(arr){
    //Create a new array to store the double values
    const doubledArray = [];
    //Use forEach to iterate through the input array
    arr.forEach(function(val){
        doubledArray.push(val * 2);
    });
    //Return the new array with doubled values
    return doubledArray;
}

/*Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]*/

function onlyEvenValues(arr){
    //Create a new array to store the even values
    const evenArray = [];
    //Use forEach to iterate through the input array
    arr.forEach(function(val){
        if (val % 2 === 0) {
            //If it's even, add it to the new array
            evenArray.push(val);
        }
    });
    //Return the new array with even balues
    return evenArray;
}

/*Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']*/

function showFirstAndLast(arr){
    //Create a new array to store the first and last characters
    const resultArray = [];
    //Use forEach to iterate through the input array
    arr.forEach(function(str){
        if (str.length >= 2) {
            //Extract the first and last characters and add them to the result array.
            const firstChar = str.charAt(0);
            const lastChar = str.charAt(str.length - 1);
            resultArray.push(firstChar + lastChar); 
        }
    });
    //Return the new array with first and last characters
    return resultArray;
}

/*Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]*/

function addKeyAndValue(arr,key,value){
    //Use forEach to iterate through the input array of objects
    arr.forEach(function(obj){
        //Add the new key and value to each object
        obj[key] = value;
    });
    //Return the modified array of objects
    return arr;
}

/*Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};*/

function vowelCount(str){
   //Create an object to store the vowel counts
   const counts = {};
   //Convert the string to lowercase to make it case-insensitive
   const lowercaseStr = str.toLowerCase();
   //Define an array of vowels
   const vowels = ['a','e','i','o','u'];
   //Use forEach to iterate through the characters if the string
   lowercaseStr.split('').forEach(function(char){
    //Check if the charcter is a vowel
    if (vowels.includes(char)) {
        //If the vowel is already a key in the counts object, increment its count
        if (counts[char]) {
            counts[char]++;
        } else {
            //If the vowel is not a key in the counts object, initialize its count to 1
            counts[char] = 1;
        }
    }
   });
   //Return the object with vowel counts
   return counts;
}

//The map function is specifically designed to create a new array by applying a function to each element of the original array.

/*Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]*/

function doubleValuesWithMap(arr) {
    //Use the map function to create a new array with doubled values
    const doubledArray = arr.map(function(val){
        return val * 2;
    });
    //Return the new array with doubled values
    return doubledArray;
}

/*Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]*/

function valTimesIndex(arr){
    //Use the map function to create a new array with values multiplied by their index.
    const resultArray = arr.map(function(val, i) {
        return val * i;
    });
    //Return the new array
    return resultArray;
}

/*Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']*/

function extractKey(arr, key){
    //Use the map function to create a new array with the values of the specified key
    const resultArray = arr.map(function(obj){
        return obj[key];
    });
    //Return the new array
    return resultArray;
}

/* Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele' */

function extractFullName(arr){
    //Use the map function to create a new array with concatentated full names
    const resultArray = arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
    //Return the new array
    return resultArray;
}

/*Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]*/

function filterByValue(arr, key) {
    //Use the filter function to create a new array with objects containing the specified key
    const filteredArray = arr.filter(function(obj) {
        return obj.hasOwnProperty(key);
    });
    //return the new array
    return filteredArray;
}

/*Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined*/

function find(arr, searchValue) {
    //Use the filter function to create an array of elements that match the specified value
    const matchingElements = arr.filter(function(elem){
        return elem === searchValue;
    });
    //Return the first element in the filtered array (or undefined if no match is found)
    return matchingElements[0];
}

/*Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}*/

function findInObj(arr, key, searchValue) {
    //Use the filter function to find objects with the specified key and value
    return arr.filter(function(obj){
        return obj[key] === searchValue;
    })[0];
}

/*Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')*/

function removeVowels(str) {
    //Convert the input string to lowercase
    const lowercaseString = str.toLowerCase();
    //Use the filter function to create an array of characters that are not vowels
    const filteredArray = lowercaseString.split('').filter(function(char) {
        //Check if the character is not a vowel (a,e,i,o,u)
        return !['a','e','i','o','u'].includes(char);
    });
    //Join the filtered characters to form the new string
    const resultString  = filteredArray.join('');

    //Return the new string
    return resultString ;
}

/*Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []*/

function doubleOddNumbers(arr) {
    //Use map to double all values and filter to select the odd values
    const doubledOddNumbers = arr.filter(function(val){
        return val % 2 !== 0;}).map(function(val){
        return val * 2;
    });
    //Return the new array with doubled off numbers
    return doubledOddNumbers;
}
