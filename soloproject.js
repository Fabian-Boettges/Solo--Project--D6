/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = ("First Strive solo project")

console.log(test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = (10+20)

console.log(sum)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20)

console.log(random)

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Fabian",
    surname: "Boettges",
    age: 28,
}

console.log(me)

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age

console.log(me)

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/


me.skills = ["CSS", "HTML", "JS"]

console.log(me)

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

me.skills.pop();

console.log(me)


// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min
    
}

let value = dice(1, 6)
console.log(value)


/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function (n1, n2) {
    if (n1 > n2) {
        return (n1) } else {
            return (n2)
        }
    }

    
console.log(whoIsBigger(10, 25))

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
    return [str]
}

console.log(splitMe("functions can be tough sometimes"))


/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

let onlyLetters = ("I have tried this 10 times already")
onlyLetters = onlyLetters.replace(/[0-9]/g, '')

console.log(onlyLetters)

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const whatDayIsIt = new Date()
let day = weekDay[whatDayIsIt.getDay()]

console.log(day)

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

const howManyDays = function (selectedDate) {
    let today = new Date();
    let difference = today - selectedDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24))
}

console.log(howManyDays(new Date("2018-11-20")))

/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = (someDate) => {
    const today = new Date()
    return someDate.getDate() === today.getDate() && someDate.getMonth === today.getMonth() && someDate.getFullYear() === today.getFullYear()

console.log(isTodayMyBirthday("1993-11-27"))
}


// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/