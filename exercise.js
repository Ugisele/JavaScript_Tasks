const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
console.log(colors);
// Using the join() method,
// const joinIndex = colors.join(',');
// console.log(joinIndex);

/*Apply the splice() method to remove the second and third elements from 
the colors array and replace them with 'purple' and 'pink'.*/
const addSplice = colors.splice(1,2,"purple","pink")
// console.log(addSplice);
//Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
const copyIndex = colors.copyWithin(1,3);
// console.log(copyIndex);


//Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
// console.log(colors.toUpperCase());

//Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
// const findElement = colors.find();
// console.log(findElement);

/* Apply the slice() method to create a new array selectedColors containing the 
elements from index 1 to index 3 (inclusive) from the colors array.*/
const seleElement = colors.slice(0,3);
console.log(seleElement);

