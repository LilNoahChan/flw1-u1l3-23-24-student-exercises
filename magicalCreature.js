// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Canelo"


// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "punch"

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = false;


// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAge = Math.floor(Math.random() * 60) + 1


// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit = visitorAge > 15;


// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary = "The creature's name is " + creatureName + ". It can " + creatureDescription + " you. It is " + isFriendly + " that it is friendly to humans. You are " + visitorAge + " years old. Is it ok to visit? " + canVisit;

// 7. Print the summary using console.log()
console.log(zooSummary)


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
let creatureName2 = "Ben"
let creatureName3 = "Saul"
let creatureName4 = "Karla"
let creatureDescription2 = "kick"
let creatureDescription3 = "slap"
let creatureDescription4 = "elbow"
let isFriendly2 = true;
let isFriendly3 = false;
let isFriendly4 = false;
let allZooSummaries = "The first creature's name is " + creatureName + ". It can " + creatureDescription + " you. It is " + isFriendly + " that it is friendly to humans. You are " + visitorAge + " years old." +
"The second creature's name is " + creatureName2 + ". It can " + creatureDescription2 + " you. It is " + isFriendly2 + " that it is friendly to humans. " +
"The third creature's name is " + creatureName3 + ". It can " + creatureDescription3 + " you. It is " + isFriendly3 + " that it is friendly to humans. " +
  "The fourth creature's name is " + creatureName4 + ". It can " + creatureDescription4 + " you. It is " + isFriendly4 + " that it is friendly to humans." + 
  " Is it ok to visit? " + canVisit
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
console.log(allZooSummaries)
