Question 1

👨‍💻 Problem: Write a JavaScript program to count character frequencies in an array and return the result sorted by frequency (ascending).

Here’s how we can solve this step-by-step:

// Input array with repeated characters

let arr = ['a', 'b', 'c', 'b', 'c', 'c'];

// Object to store frequency of each character

let result = {};

// Step 1: Loop through the array to count occurrences of each character

for (let i = 0; i < arr.length; i++) {

let char = arr[i];

// If the character already exists in the result object, increment its count

if (result[char]) {

result[char]++;

} else {

// Otherwise, initialize the count to 1

result[char] = 1;

}

// Step 2: Convert the result object into an array of [key, value] pairs

let entries = Object.entries(result);

// Step 3: Sort the entries array by frequency (ascending order)

entries.sort((a, b) => a[1] - b[1]);

// Step 4: Convert the sorted array back into an object

let sortedObj = Object.fromEntries(entries);

// Step 5: Print the sorted object

console.log(sortedObj); // Output: { 'a': 1, 'b': 2, 'c': 3 }

or

console.log(JSON.stringify(sortedObj, null, 2));

💡 Explanation:

1) We loop through the array to count the frequency of each character.

2) We store the frequencies in an object.

3) We convert the object into an array and sort the array by frequency.

4) Finally, we convert the sorted array back into an object.

🔍 Output:

{ 'a': 1, 'b': 2, 'c': 3 }










/////next

Answers which are not ok in Frontend interviews.

1. How redux manages state ? sorry I haven't worked on react ! 

2. Candidate says I worked on e-commerce application and when I ask how payments
 are handled ? sorry I haven't worked on that module. 

3. I worked on a image upload flow but I'm not aware how to upload image of
 size 100mb+. 

certainly you need not to know everything in your project. But, don't be blind that it's not what I worked, why to learn about it ? try to learn as much as possible. 

now tell me how to upload 100mb+ image to your backend?