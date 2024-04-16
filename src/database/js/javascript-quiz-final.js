/* eslint-disable no-useless-escape */
const obj = [
  {
    question:
      ' Q1. Which operator returns true if the two compared values are not equal?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`<>`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`~`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`==!`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`!==`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)",
    ],
  },
  {
    question: ' Q2. How is a forEach statement different from a for statement?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Only a for statement uses a callback function.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "A for statement is generic, but a forEach statement can be used only with an array.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Only a forEach statement lets you specify your own iterator.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "A forEach statement is generic, but a for statement can be used only with an array.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
    ],
  },
  {
    question:
      " Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument?",
    codeAfterQuestion: "function addTax(total) { return total * 1.05;}",
    answers: [
      {
        answer: "`addTax = 50;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`return addTax 50;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`addTax(50);`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`addTax 50;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
    ],
  },
  {
    question:
      ' Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`let rate = 100;`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`let 100 = rate;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`100 = let rate;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`rate = 100;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Javascript Assignment operators](https://www.w3schools.com/js/js_operators.asp)",
    ],
  },
  {
    question:
      ' Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`var student = new Person();`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`var student = construct Person;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`var student = Person();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`var student = construct Person();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
    ],
  },
  {
    question:
      " Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",
    codeAfterQuestion:
      "let modal = document.querySelector('#result');setTimeout(function () { modal.classList.remove('hidden');}, 10000);console.log('Results shown');",
    answers: [
      {
        answer: "after 10 second",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "after results are received from the HTTP request",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "after 10000 seconds",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "immediately",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Javascript is synchronous and single threaded](https://stackoverflow.com/a/2035662/15067394)",
    ],
  },
  {
    question:
      ' Q7. Which snippet could you add to this code to print "food" to the console?',
    codeAfterQuestion:
      "class Animal { static belly = []; eat() { Animal.belly.push('food'); }}let a = new Animal();a.eat();console.log(/* Snippet Here */); //Prints food",
    answers: [
      {
        answer: "`a.prototype.belly[0]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Object.getPrototype0f (a).belly[0]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Animal.belly[0]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`a.belly[0]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Javascript Class static Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
    ],
  },
  {
    question:
      ' Q8. You\'ve written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`A`",
        codeAfterAnswer:
          "```jsfor (var i = 1; i <= 4; i++) { setTimeout(function () { console.log(i); }, i * 10000);}```",
        isCorrectAnswer: false,
      },
      {
        answer: "`B`",
        codeAfterAnswer:
          "```jsfor (var i = 1; i <= 4; i++) { (function (i) { setTimeout(function () { console.log(j); }, j * 1000); })(j);}```",
        isCorrectAnswer: false,
      },
      {
        answer: "`C`",
        codeAfterAnswer:
          "```jsfor (var i = 1; i <= 4; i++) { setTimeout(function () { console.log(i); }, i * 1000);}```",
        isCorrectAnswer: false,
      },
      {
        answer: "`D`",
        codeAfterAnswer:
          "```jsfor (var i = 1; i <= 4; i++) { (function (j) { setTimeout(function () { console.log(j); }, j * 1000); })(i);}```",
        isCorrectAnswer: true,
      },
      {
        answer: "`E`",
        codeAfterAnswer:
          "```jsfor (var j = 1; j <= 4; j++) { setTimeout(function () { console.log(j); }, j * 1000);}```1. ",
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)2. [Reference immediately invoked anonymous functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)",
    ],
  },
  {
    question: ' Q9. How does a function create a closure?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "It reloads the document whenever the value changes.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It returns a reference to a variable in its parent scope.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "It completes execution without returning.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It copies a local variable to the global scope.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
    ],
  },
  {
    question:
      ' Q10. Which statement creates a new function called discountPrice?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`A`",
        codeAfterAnswer:
          "```jslet discountPrice = function (price) { return price * 0.85;};```",
        isCorrectAnswer: true,
      },
      {
        answer: "`B`",
        codeAfterAnswer:
          "```jslet discountPrice(price) { return price * 0.85;};```",
        isCorrectAnswer: false,
      },
      {
        answer: "`C`",
        codeAfterAnswer:
          "```jslet function = discountPrice(price) { return price * 0.85;};```",
        isCorrectAnswer: false,
      },
      {
        answer: "`D`",
        codeAfterAnswer:
          "```jsdiscountPrice = function (price) { return price * 0.85;};```",
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference defining javascript functions](https://www.w3schools.com/js/js_functions.asp)",
    ],
  },
  {
    question:
      ' Q11. What is the result in the console of running the code shown?',
    codeAfterQuestion:
      "var Storm = function () {};Storm.prototype.precip = 'rain';var WinterStorm = function () {};WinterStorm.prototype = new Storm();WinterStorm.prototype.precip = 'snow';var bob = new WinterStorm();console.log(bob.precip);",
    answers: [
      {
        answer: "Storm()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "'rain'",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "'snow'",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
    ],
  },
  {
    question:
      " Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`/dd:dd:dd/`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`/[0-9]+:[0-9]+:[0-9]+/`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "`/ : : /`**NOTE**: The first three are all partially correct and will match digits, but the **second option is the most correct** because it will **only** match **2 digit** time values (12:00:32). The first option would have worked if the repetitions range looked like `[0-9]{2}`, however because of the **comma** `[0-9]{2,}` it will select 2 **or more** digits (120:000:321). The third option will any range of time digits, single _and_ multiple (meaning `1:2:3` will also match).**More resources:**1. [Repeating characters](https://regexone.com/lesson/repeating_characters)2. [Kleene operators](https://regexone.com/lesson/kleene_operators)",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q13. What is the result in the console of running this code?',
    codeAfterQuestion:
      "'use strict';function logThis() { this.desc = 'logger'; console.log(this);}new logThis();",
    answers: [
      {
        answer: "`undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`window`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`{desc: "logger"}`',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`function`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
    ],
  },
  {
    question:
      ' Q14. How would you reference the text \'avenue\' in the code shown?',
    codeAfterQuestion:
      "let roadTypes = ['street', 'road', 'avenue', 'circle'];",
    answers: [
      {
        answer: "roadTypes.2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "roadTypes[3]",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "roadTypes.3",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "roadTypes[2]",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference accessing javascript arrays](https://www.w3schools.com/js/js_arrays.asp)",
    ],
  },
  {
    question: ' Q15. What is the result of running this statement?',
    codeAfterQuestion: "console.log(typeof 42);",
    answers: [
      {
        answer: "`'float'`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`'value'`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`'number'`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`'integer'`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)",
    ],
  },
  {
    question:
      ' Q16. Which property references the DOM object that dispatched an event?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`self`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`object`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`target`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`source`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)",
    ],
  },
  {
    question:
      ' Q17. You\'re adding error handling to the code shown. Which code would you include within the if statement to specify an error message?',
    codeAfterQuestion:
      "function addNumbers(x, y) { if (isNaN(x) || isNaN(y)) { }}",
    answers: [
      {
        answer: "`exception('One or both parameters are not numbers')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`catch('One or both parameters are not numbers')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`error('One or both parameters are not numbers')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`throw('One or both parameters are not numbers')`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference javascript throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)",
    ],
  },
  {
    question: ' Q18. Which method converts JSON data to a JavaScript object?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`JSON.fromString();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`JSON.parse()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`JSON.toObject()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`JSON.stringify()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference convert json to javascript object](https://www.w3schools.com/js/js_json_parse.asp)",
    ],
  },
  {
    question: ' Q19. When would you use a conditional statement?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "When you want to reuse a set of statements multiple times.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "When you want your code to choose between multiple options.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "When you want to group data together.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "When you want to loop through a group of statement.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)",
    ],
  },
  {
    question:
      ' Q20. What would be the result in the console of running this code?',
    codeAfterQuestion: "for (var i = 0; i < 5; i++) { console.log(i);}",
    answers: [
      {
        answer: "1 2 3 4 5",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "1 2 3 4",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "0 1 2 3 4",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "0 1 2 3 4 5",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript for loops](https://www.w3schools.com/js/js_loop_for.asp)",
    ],
  },
  {
    question:
      ' Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`Object.get()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Object.loop()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Object.each()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Object.keys()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference javascript object static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)",
    ],
  },
  {
    question: ' Q22. What will be logged to the console?',
    codeAfterQuestion:
      "var a = ['dog', 'cat', 'hen'];a[100] = 'fox';console.log(a.length);",
    answers: [
      {
        answer: "101",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "3",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "4",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "100",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q23. What is one difference between collections created with Map and collections created with Object?',
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "You can iterate over values in a Map in their insertion order.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "You can count the records in a Map with a single method call.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Keys in Maps can be strings.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "You can access values in a Map without iterating over the whole collection.**Explanation:** `Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference map methods javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)",
    ],
  },
  {
    question:
      ' Q24. What is the value of dessert.type after executing this code?',
    codeAfterQuestion:
      "const dessert = { type: 'pie' };dessert.type = 'pudding';",
    answers: [
      {
        answer: "pie",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "The code will throw an error.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "pudding",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference working with js objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
    ],
  },
  {
    question: ' Q25. 0 && hi',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "ReferenceError",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "true",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "0",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "false",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference boolean logic](https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)",
    ],
  },
  {
    question:
      ' Q26. Which of the following operators can be used to do a short-circuit evaluation?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`++`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`--`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`==`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`||`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference short circuit javascript](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)",
    ],
  },
  {
    question:
      ' Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`Student.parent = Person;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Student.prototype = new Person();`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`Student.prototype = Person;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Student.prototype = Person();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference prototype object js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
    ],
  },
  {
    question:
      ' Q28. Why would you include a "use strict" statement in a JavaScript file?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "to tell parsers to interpret your JavaScript syntax loosely",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "to tell parsers to enforce all JavaScript syntax rules when processing your code",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "to instruct the browser to automatically fix any errors it finds in the code",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "to enable ES6 features in your code",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference what is use strict in js](https://www.w3schools.com/js/js_strict.asp)",
    ],
  },
  {
    question:
      " Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "all of them",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`const`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`var`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`let`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference var vs let vs const in js](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)",
    ],
  },
  {
    question: ' Q30. Which of the following values is not a Boolean false?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`Boolean(0)`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`Boolean("")`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Boolean(NaN)`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`Boolean("false")`',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference boolean of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)",
    ],
  },
  {
    question: ' Q31. Which of the following is not a keyword in JavaScript?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`this`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`catch`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`function`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`array`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference js reserved words](https://www.w3schools.com/js/js_reserved.asp)",
    ],
  },
  {
    question:
      ' Q32. Which variable is an implicit parameter for every function in JavaScript?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Arguments",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "args",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "argsArray",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "argumentsList",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference implicit js parameters for functions](https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)",
    ],
  },
  {
    question:
      ' Q33. For the following class, how do you get the value of 42 from an instance of X?',
    codeAfterQuestion: "class X { get Y() { return 42; }}var x = new X();",
    answers: [
      {
        answer: "`x.get('Y')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`x.Y`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`x.Y()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`x.get().Y`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)",
    ],
  },
  {
    question: ' Q34. What is the result of running this code?',
    codeAfterQuestion:
      "sum(10, 20);diff(10, 20);function sum(x, y) { return x + y;}let diff = function (x, y) { return x - y;};",
    answers: [
      {
        answer: "30, ReferenceError, 30, -10",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "30, ReferenceError",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "30, -10",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      " ReferenceError, -10[Reference accessing before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)",
    ],
  },
  {
    question:
      ' Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Objects are more efficient in terms of storage.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "Adding a record to an object is significantly faster than pushing a record into an array.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "Most operations involve looking up a record, and objects can do that better than arrays.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Working with objects makes the code more readable.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference efficiency of lookups](https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript)**Explanation:** Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.",
    ],
  },
  {
    question:
      ' Q36. Which statement is true about the "async" attribute for the HTML script tag?',
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "It can be used for both internal and external JavaScript code.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It can be used only for internal JavaScript code.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "It can be used only for internal or external JavaScript code that exports a promise.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It can be used only for external JavaScript code.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference async attribute for html](https://www.w3schools.com/tags/att_script_async.asp)",
    ],
  },
  {
    question:
      ' Q37. How do you import the lodash library making it top-level Api available as the  variable?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`import _ from 'lodash';`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`import 'lodash' as _;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`import '_' from 'lodash;`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`import lodash as _ from 'lodash';`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference how to import library in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
    ],
  },
  {
    question: ' Q38. What does the following expression evaluate to?',
    codeAfterQuestion: "[] == [];",
    answers: [
      {
        answer: "true",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "[]",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "false",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference arrays in js are objects](https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays)",
    ],
  },
  {
    question:
      ' Q39. What type of function can have its execution suspended and then resumed at a later point?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Generator function",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Arrow function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Async/ Await function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Promise function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference what are generators in nodejs](https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)",
    ],
  },
  {
    question: ' Q40. What will this code print?',
    codeAfterQuestion:
      "var v = 1;var f1 = function () { console.log(v);};var f2 = function () { var v = 2; f1();};f2();",
    answers: [
      {
        answer: "2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "1",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Nothing - this code will throw an error.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference closures in js / nested functions](https://javascript.info/closure)",
    ],
  },
  {
    question: ' Q41. Which statement is true about Functional Programming?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Every object in the program has to be a function.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Code is grouped with the state it modifies.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Date fields and methods are kept in units.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Side effects are not allowed.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)",
    ],
  },
  {
    question:
      " Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "You are calling a method named reduce on an object that's declared but has no value.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "You are calling a method named reduce on an object that does not exist.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "You are calling a method named reduce on an empty array.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "You are calling a method named reduce on an object that's has a null value.**Explanation**: `You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      " Q43. How many prototype objects are in the chain for the following array?`let arr = [];`",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "3",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "2",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "0",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "1",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference array prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)",
    ],
  },
  {
    question: ' Q44. Which choice is _not_ a unary operator?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`typeof`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`delete`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`instanceof`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`void`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference js unary operators](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)",
    ],
  },
  {
    question:
      " Q45. What type of scope does the end variable have in the code shown?",
    codeAfterQuestion: "var start = 1;if (start === 1) { let end = 2;}",
    answers: [
      {
        answer: "conditional",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "block",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "global",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference block vs function scope](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)",
    ],
  },
  {
    question: ' Q46. What will the value of y be in this code:',
    codeAfterQuestion: "const x = 6 % 2;const y = x ? 'One' : 'Two';",
    answers: [
      {
        answer: "One",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "TRUE",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Two",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
    ],
  },
  {
    question: ' Q47. Which keyword is used to create an error?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`throw`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`exception`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`catch`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`error`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference throwing errors in js](<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)",
    ],
  },
  {
    question:
      ' Q48. What\'s one difference between the async and defer attributes of the HTML script tag?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "The defer attribute can work synchronously.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "The defer attribute works only with generators.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "The defer attribute works only with promises.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "The defer attribute will asynchronously load the scripts in order.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference async vs defer](https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)",
    ],
  },
  {
    question: ' Q49. The following program has a problem. What is it?',
    codeAfterQuestion: "var a;var b = (a = 3) ? true : false;",
    answers: [
      {
        answer:
          "The condition in the ternary is using the assignment operator.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "You can't define a variable without initializing it.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "You can't use a ternary in the right-hand side of an assignment operator.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "The code is using the deprecated var keyword.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
    ],
  },
  {
    question:
      'Q50. Which statement references the DOM node created by the code shown? ```html <p class="pull">lorem ipsum</p>```',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`Document.querySelector('class.pull')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`document.querySelector('.pull');`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`Document.querySelector('pull')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Document.querySelector('#pull')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
    ],
  },
  {
    question: ' Q51. What value does this code return?',
    codeAfterQuestion:
      "let answer = true;if (answer === false) { return 0;} else { return 10;}",
    answers: [
      {
        answer: "10",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "true",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "false",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "0",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)",
    ],
  },
  {
    question:
      ' Q52. What is the result in the console of running the code shown?',
    codeAfterQuestion:
      "var start = 1;function setEnd() { var end = 10;}setEnd();console.log(end);",
    answers: [
      {
        answer: "10",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "0",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "ReferenceError",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
    ],
  },
  {
    question: ' Q53. What will this code log in the console?',
    codeAfterQuestion:
      "function sayHello() { console.log('hello');}console.log(sayHello.prototype);",
    answers: [
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '"hello"',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "an object with a constructor property",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "an error message",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
    ],
  },
  {
    question:
      " Q54. Which collection object allows unique value to be inserted only once?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Object",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Set",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Array",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Map",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
    ],
  },
  {
    question: ' Q55. What two values will this code print?',
    codeAfterQuestion:
      "function printA() { console.log(answer); var answer = 1;}printA();printA();",
    answers: [
      {
        answer: "`1` then `1`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`1` then `undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`undefined` then `undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`undefined` then `1`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
    ],
  },
  {
    question:
      ' Q56. How does the `forEach()` method differ from a `for` statement?',
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "forEach allows you to specify your own iterator, whereas for does not.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "forEach can be used only with strings, whereas for can be used with additional data types.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "forEach can be used only with an array, whereas for can be used with additional data types.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "for loops can be nested; whereas forEach loops cannot.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
    ],
  },
  {
    question:
      ' Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "=> `({})`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "=> `{}`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "=> `{ return {};}`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "=> `(({}))`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
    ],
  },
  {
    question: ' Q58. Why might you choose to make your code asynchronous?',
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "to start tasks that might take some time without blocking subsequent tasks from executing immediately",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "to ensure that tasks further down in your code are not initiated until earlier tasks have completed",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "to make your code faster",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          'to ensure that the call stack maintains a LIFO (Last in, First Out) structure**EXPLANATION:** `"to ensure that tasks further down in your code are not initiated until earlier tasks have completed" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q59. Which expression evaluates to true?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`[3] == [3]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`3 == '3'`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`3 != '3'`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`3 === '3'`1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)2. [Reference 2 - booleans](https://www.scaler.com/topics/boolean-in-javascript/)",
    ],
  },
  {
    question: ' Q60. Which of these is a valid variable name?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "5thItem",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "firstName",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "grand total",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference coding conventions](https://www.w3schools.com/js/js_conventions.asp)",
    ],
  },
  {
    question: ' Q61. Which method cancels event default behavior?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`cancel()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`stop()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`preventDefault()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`prevent()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
    ],
  },
  {
    question:
      ' Q62. Which method do you use to attach one DOM node to another?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`attachNode()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`getNode()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`querySelector()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`appendChild()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)",
    ],
  },
  {
    question:
      ' Q63. What statement can be used to skip an iteration in a loop?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`break`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`pass`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`skip`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`continue`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference break vs continue](https://www.w3schools.com/js/js_break.asp)",
    ],
  },
  {
    question: ' Q64. Which choice is a valid example for an arrow function?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`(a,b) => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`a, b => {return c;}`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`a, b => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`{ a, b } => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
    ],
  },
  {
    question:
      ' Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "class",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "generator function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "map",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "proxy",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
    ],
  },
  {
    question: " Q66. How do you add a comment to JavaScript code?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`! This is a comment`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`# This is a comment`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`\\ This is a comment`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`// This is a comment`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference comments in javascript](https://www.w3schools.com/js/js_comments.asp)",
    ],
  },
  {
    question:
      ' Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "TypeError",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "SystemError",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "SyntaxError",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "LogicError",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript errors](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)",
    ],
  },
  {
    question:
      ' Q68. Which method is called automatically when an object is initialized?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "create()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "new()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "constructor()",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "init()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)",
    ],
  },
  {
    question: ' Q69. What is the result of running the statement shown?',
    codeAfterQuestion: "let a = 5;console.log(++a);",
    answers: [
      {
        answer: "4",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "10",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "6",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "5",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference ++x vs x++](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)",
    ],
  },
  {
    question:
      " Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?",
    codeAfterQuestion:
      "button.addEventListener( 'click', function (e) { button.className = 'clicked'; }, false,);",
    answers: [
      {
        answer: "`e.blockReload();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`button.preventDefault();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`button.blockReload();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`e.preventDefault();`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference events in javascript](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)",
    ],
  },
  {
    question:
      ' Q71. Which statement represents the starting code converted to an IIFE?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`function() { console.log('lorem ipsum'); }()();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`function() { console.log('lorem ipsum'); }();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`(function() { console.log('lorem ipsum'); })();`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference what is an Immediately Invoked Function Expression](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)",
    ],
  },
  {
    question: ' Q72. Which statement selects all img elements in the DOM tree?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`Document.querySelector('img')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Document.querySelectorAll('<img>')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Document.querySelectorAll('img')`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`Document.querySelector('<img>')`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)",
    ],
  },
  {
    question:
      ' Q73. Why would you choose an asynchronous structure for your code?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "To use ES6 syntax",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "To start tasks that might take some time without blocking subsequent tasks from executing immediately",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "To ensure that parsers enforce all JavaScript syntax rules when processing your code",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)",
    ],
  },
  {
    question:
      ' Q74. What is the HTTP verb to request the contents of an existing resource?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "DELETE",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "GET",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "PATCH",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "POST",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)",
    ],
  },
  {
    question:
      ' Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "focus",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "blur",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "hover",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "enter",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/Events)",
    ],
  },
  {
    question: ' Q76. What is the result in the console of running this code?',
    codeAfterQuestion: "function logThis() { console.log(this);}logThis();",
    answers: [
      {
        answer: "function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Function.prototype",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "window",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference what is the javascript window](https://www.w3schools.com/js/js_window.asp)",
    ],
  },
  {
    question:
      " Q77. Which class-based component is equivalent to this function component?",
    codeAfterQuestion: "const Greeting = ({ name }) => <h1>Hello {name}!</h1>;",
    answers: [
      {
        answer:
          "`class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "`class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "`class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "`class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q78. Which class-based lifecycle method would be called at the same time as this effect Hook?',
    codeAfterQuestion: "useEffect(() => { // do things}, []);",
    answers: [
      {
        answer: "componentWillUnmount",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "componentDidUpdate",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "render",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "componentDidMount",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: ["[Reference](https://reactjs.org/docs/react-component.html)"],
  },
  {
    question: ' Q79. What is the output of this code?',
    codeAfterQuestion: "var obj;console.log(obj);",
    answers: [
      {
        answer: "`ReferenceError: obj is not defined`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`{}`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`null`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
    ],
  },
  {
    question:
      ' Q80. How would you use the TaxCalculator to determine the amount of tax on $50?',
    codeAfterQuestion:
      "class TaxCalculator { static calculate(total) { return total * 0.05; }}",
    answers: [
      {
        answer: "calculate(50);",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "new TaxCalculator().calculate($50);",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "TaxCalculator.calculate(50);",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "new TaxCalculator().calculate(50);",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
    ],
  },
  {
    question: ' Q81. What is wrong with this code?',
    codeAfterQuestion:
      "const foo = { bar() { console.log('Hello, world!'); }, name: 'Albert', age: 26,};",
    answers: [
      {
        answer: "The function bar needs to be defined as a key/value pair.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Trailing commas are not allowed in JavaScript.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Functions cannot be declared as properties of objects.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Nothing, there are no errors.1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)2. [Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
    ],
  },
  {
    question: " Q82. What will be logged to the console?",
    codeAfterQuestion:
      "console.log('I');setTimeout(() => { console.log('love');}, 0);console.log('Javascript!');",
    answers: [
      {
        answer: ".```plaintextIJavascript!love```",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: ".```plaintextloveIJavascript!```",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "The output may change with each execution of code and cannot be determined.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: ".```plaintextIloveJavascript!```*",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "*Reference**https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified especially see the 'late timeouts' section.",
    ],
  },
  {
    question: " Q83. What will this code log to the console?",
    codeAfterQuestion: "const foo = [1, 2, 3];const [n] = foo;console.log(n);",
    answers: [
      {
        answer: "1",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "NaN",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "Nothing--this is not proper JavaScript syntax and will throw an error.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference array deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
    ],
  },
  {
    question: ' Q84. How do you remove the property name from this object?',
    codeAfterQuestion: "const foo = { name: 'Albert',};",
    answers: [
      {
        answer: "delete name from foo;",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "delete foo.name;",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "del foo.name;",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "remove foo.name;",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
    ],
  },
  {
    question:
      ' Q85. What is the difference between the `map()` and the `forEach()` methods on the Array prototype?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "There is no difference.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "The `forEach()` method returns a single output value, whereas the `map()` method performs operation on each value in the array.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "The map() methods returns a new array with a transformation applied on each item in the original array, whereas the `forEach()` method iterates through an array with no return value.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "The `forEach()` methods returns a new array with a transformation applied on each item in the original array, whereas the `map()` method iterates through an array with no return value.1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)2. [Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)",
    ],
  },
  {
    question: " Q86. Which concept does this code illustrate?",
    codeAfterQuestion:
      "function makeAdder(x) { return function (y) { return x + y; };}var addFive = makeAdder(5);console.log(addFive(3));",
    answers: [
      {
        answer: "overloading",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "closure",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "currying",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "overriding",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference currying](https://javascript.info/currying-partials)",
    ],
  },
  {
    question: ' Q87. Which tag pair is used in HTML to embed JavaScript?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`<script></script>`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`<js></js>`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`<javascript></javascript>`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`<code></code>`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference add js to html file](https://www.w3schools.com/tags/tag_script.asp)",
    ],
  },
  {
    question:
      ' Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Security-Mode",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Access-Control-Allow-Origin",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Different-Origin",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Same-Origin",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)",
    ],
  },
  {
    question: ' Q90. What is the output of this code?',
    codeAfterQuestion:
      "let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];rainForests.splice(0, 2);console.log(rainForests);",
    answers: [
      {
        answer: '`["Amazon","Borneo","Cerrado","Congo"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`["Cerrado", "Congo"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: '`["Congo"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`["Amazon","Borneo"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)",
    ],
  },
  {
    question:
      ' Q91. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?',
    codeAfterQuestion: "const numbers = [1, 2, 3, 4, 5];//MISSING LINE",
    answers: [
      {
        answer: "`const [one,two,three,four,five]=numbers`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`const {one,two,three,four,five}=numbers`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`const [one,two,three,four,five]=[numbers]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`const {one,two,three,four,five}={numbers}`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)",
    ],
  },
  {
    question: " Q92. What will this code print?",
    codeAfterQuestion:
      "const obj = { a: 1, b: 2, c: 3,};const obj2 = { ...obj, a: 0,};console.log(obj2.a, obj2.b);",
    answers: [
      {
        answer: "Nothing, it will throw an error",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "0 2",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "undefined 2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined 2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference spread syntax es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
    ],
  },
  {
    question:
      ' Q93. Which line could you add to this code to print "jaguar" to the console?',
    codeAfterQuestion:
      "let animals = ['jaguar', 'eagle'];//Missing Lineconsole.log(animals.pop()); //Prints jaguar",
    answers: [
      {
        answer: '`animals.filter(e => e === "jaguar");`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`animals.reverse();`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`animals.shift();`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "`animals.pop();`**Note:** `this question has two correct answers.`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Javascript Array Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)",
    ],
  },
  {
    question: ' Q94. What line is missing from this code?',
    codeAfterQuestion:
      "//Missing Linefor (var i = 0; i < vowels.length; i++) { console.log(vowels[i]); //Each letter printed on a separate line as follows; //a //e //i //o //u}",
    answers: [
      {
        answer: '`let vowels = "aeiou".toArray();`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`let vowels = Array.of("aeiou");`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`let vowels = {"a", "e", "i", "o", "u"};`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`let vowels = "aeiou";`',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
    ],
  },
  {
    question: ' Q95. What will be logged to the console?',
    codeAfterQuestion:
      "const x = 6 % 2;const y = x ? 'One' : 'Two';console.log(y);",
    answers: [
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "One",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "true",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Two**Note:** `this question is same with Q46.`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)",
    ],
  },
  {
    question:
      ' Q96. How would you access the word It from this multidimensional array?`let matrix = [["You","Can"],["Do","It"],["!","!","!"]];`',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`matrix[1[2]]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`matrix[1][1]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`matrix[1,2]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`matrix[1][2]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: " Q97. What does this code do?",
    codeAfterQuestion:
      "const animals = ['Rabbit', 'Dog', 'Cat'];animals.unshift('Lizard');",
    answers: [
      {
        answer: 'It adds "Lizard" to the start of the animals array.',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: 'It adds "Lizard" to the end of the animals array.',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'It replaces "Rabbit" with "Lizard" in the animals array.',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'It replaces "Cat" with "Lizard" in the animals array.',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
    ],
  },
  {
    question: ' Q98. What is the output of this code?',
    codeAfterQuestion: "let x = 6 + 3 + '3';console.log(x);",
    answers: [
      {
        answer: "93",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "12",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "66",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "633",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)",
    ],
  },
  {
    question:
      ' Q99. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "else",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "when",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "if",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "switch",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)",
    ],
  },
  {
    question: ' Q100. Which statement prints "roar" to the console?',
    codeAfterQuestion:
      "var sound = 'grunt';var bear = { sound: 'roar' };function roar() { console.log(this.sound);}",
    answers: [
      {
        answer: "`bear.bind(roar);`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`roar.bind(bear);`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`roar.apply(bear);`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`bear[roar]();`1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)2. [Reference this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)3. [Reference bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)",
    ],
  },
  {
    question:
      ' Q101. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`a, b => { return c; }`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`a, b => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`{ a, b } => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`(a,b) => c`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)",
    ],
  },
  {
    question:
      ' Q102. Which statement correctly imports this code from some-file.js?',
    codeAfterQuestion:
      "//some-file.jsexport const printMe = (str) => console.log(str);",
    answers: [
      {
        answer: "`import printMe from './some-file';`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`import { printMe } from './some-file';`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`import default as printMe from './some-file';`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`const printMe = import './some-file';`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference importing libraries in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)",
    ],
  },
  {
    question: ' Q103. What will be the output of this code?',
    codeAfterQuestion:
      "const arr1 = [2, 4, 6];const arr2 = [3, 5, 7];console.log([...arr1, ...arr2]);",
    answers: [
      {
        answer: "`[2, 3, 4, 5, 6, 7]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[3,5,7,2,4,6]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[3, 5, 7, 2, 4, 6]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[[2, 4, 6], [3, 5, 7]]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[2, 4, 6, 3, 5, 7]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
    ],
  },
  {
    question:
      ' Q104. Which method call is chained to handle a successful response returned by `fetch()`?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`done()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`then()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`finally()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`catch()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)",
    ],
  },
  {
    question: ' Q105. Which choice is not an array method?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`array.slice()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`array.shift()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`array.push()`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`array.replace()`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)",
    ],
  },
  {
    question:
      ' Q106. Which JavaScript loop ensures that at least a singular iteration will happen?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "doâ�¦while",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "forEach",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "while",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "for",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference loops in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)",
    ],
  },
  {
    question: ' Q107. What will be logged to the console?',
    codeAfterQuestion: "console.log(typeof 'blueberry');",
    answers: [
      {
        answer: "`string`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`array`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`Boolean`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`object`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference what is typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)",
    ],
  },
  {
    question:
      ' Q108. What is the output that is printed when the div containing the text "Click Here" is clicked?```html//HTML Markup<div id="A"> <div id="B"> <div id="C">Click Here</div> </div></div>```',
    codeAfterQuestion:
      "//JavaScriptdocument.querySelectorAll('div').forEach((e) => { e.onclick = (e) => console.log(e.currentTarget.id);});",
    answers: [
      {
        answer: "C B A",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "A",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "C",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "A B C1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)2. [Reference events](https://developer.mozilla.org/en-US/docs/Web/Events)",
    ],
  },
  {
    question: ' Q109. What will this code log to the console?',
    codeAfterQuestion:
      "const myNumbers = [1, 2, 3, 4, 5, 6, 7];const myFunction = (arr) => { return arr.map((x) => x + 3).filter((x) => x < 7);};console.log(myFunction(myNumbers));",
    answers: [
      {
        answer: "`[4,5,6,7,8,9,10]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[4,5,6,7]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[1,2,3,4,5,6]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[4,5,6]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)",
    ],
  },
  {
    question: " Q110. What does this code print to the console?",
    codeAfterQuestion:
      "let rainForestAcres = 10;let animals = 0;while (rainForestAcres < 13 || animals <= 2) { rainForestAcres++; animals += 2;}console.log(animals);",
    answers: [
      {
        answer: "2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "4",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "6",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "8",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference MDN JavaScript Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)",
    ],
  },
  {
    question:
      ' Q111. Which snippet could you add to this code to print "YOU GOT THIS" to the console?',
    codeAfterQuestion:
      "let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];let plainText = '';/* Missing Snippet */console.log(plainText); //Prints YOU GOT THIS",
    answers: [
      {
        answer: "A",
        codeAfterAnswer:
          "```jsfor (let key of cipherText.keys()) { plainText += key % 2 === 0 ? key : ' ';}```",
        isCorrectAnswer: false,
      },
      {
        answer: "B",
        codeAfterAnswer:
          "```jsfor (let [index, value] of cipherText.entries()) { plainText += index % 2 !== 0 ? value : '';}```",
        isCorrectAnswer: false,
      },
      {
        answer: "C",
        codeAfterAnswer:
          "```jsfor (let [index, value] of cipherText.entries()) { plainText += index % 2 === 0 ? value : '';}```",
        isCorrectAnswer: true,
      },
      {
        answer: "D",
        codeAfterAnswer:
          "```jsfor (let value of cipherText) { plainText += value;}```1. ",
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference MDN JavaScript Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)2. [Reference MDN JavaScript Array entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)3. [Reference MDN JavaScript Remainder/Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)",
    ],
  },
  {
    question: ' Q112. Which Pokemon will be logged to the console?',
    codeAfterQuestion:
      "var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];pokedex.pop();console.log(pokedex.pop());",
    answers: [
      {
        answer: "Charmander",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Jigglypuff",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Snorlax",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "Squirtle**Explanation**: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)",
    ],
  },
  {
    question:
      ' Q113. Which statement can be used to select the element from the DOM containing the text "The LinkedIn Learning library has great JavaScript courses" from this markup?```html<h1 class="content">LinkedIn Learning</h1><div class="content"> <span class="content">The LinkedIn Learning library has great JavaScript courses!</span></div>```',
    codeAfterQuestion: null,
    answers: [
      {
        answer: 'document.querySelector("div.content")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'document.querySelector("span.content")',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: 'document.querySelector(".content")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'document.querySelector("div.span")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q114. Which value is not falsey?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "`[]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`0`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`null`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)",
    ],
  },
  {
    question:
      ' Q115. What line of code causes this code segment to throw an error?',
    codeAfterQuestion:
      "const lion = 1;let tiger = 2;var bear;++lion;bear += lion + tiger;tiger++;",
    answers: [
      {
        answer: "`line 5, because lion cannot be reassigned a value`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "`line 6, because the += operator cannot be used with the undefined variable bear`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "`line 5, because the prefix (++) operator does not exist in JavaScript`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`line 3, because the variable bear is left undefined`1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      '[Reference const in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)2. [Reference TypeError: invalid assignment to const "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)',
    ],
  },
  {
    question:
      ' Q116. What will be the value of `result` after running this code?',
    codeAfterQuestion:
      "const person = { name: 'Dave', age: 40, hairColor: 'blue' };const result = Object.keys(person).map((x) => x.toUpperCase());",
    answers: [
      {
        answer: "It will throw a TypeError.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`["Name", "Age", "HairColor"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`["DAVE", 40, "BLUE"]`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`["NAME", "AGE", "HAIRCOLOR"]`1. ',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)2. [Reference Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)3. [Reference String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)",
    ],
  },
  {
    question:
      ' Q117. Which snippet could you insert to this code to print "swim" to the console?',
    codeAfterQuestion:
      'let animals = ["eagle", "osprey", "salmon"];let key = animal => animal === "salmon";if(/* Insert Snippet Here */){ console.log("swim");}',
    answers: [
      {
        answer: "`animals.every(key)`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`animals.some(key).length === 1`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`animals.filter(key) === true`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`animals.some(key)`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)",
    ],
  },
  {
    question: " Q118. What is the output of this code?",
    codeAfterQuestion:
      "class RainForest { static minimumRainFall = 60;}let congo = new RainForest();RainForest.minimumRainFall = 80;console.log(congo.minimumRainFall);",
    answers: [
      {
        answer: "`undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "`None of these answers, as static is not a feature in Javascript.`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`60`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`80`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Classes static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)",
    ],
  },
  {
    question:
      ' Q119. How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?',
    codeAfterQuestion: "let obj = {};",
    answers: [
      {
        answer: "`obj?.a.b`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`obj.a?.b`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`obj[a][b]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`obj.?a.?b`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)",
    ],
  },
  {
    question: " Q120. What happens when you run this code?",
    codeAfterQuestion:
      "if (true) { var x = 5; const y = 6; let z = 7;}console.log(x + y + z);",
    answers: [
      {
        answer: "It will throw a `ReferenceError` about `x`.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It will print `18`.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It will print `undefined`.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It will throw a ",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "`ReferenceError` about `y`.[Reference let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)",
    ],
  },
  {
    question: ' Q121. What does this code print to the console?',
    codeAfterQuestion:
      "const x = [1, 2];const y = [5, 7];const z = [...x, ...y];console.log(z);",
    answers: [
      {
        answer: "`[1,2,5,7]`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`[[1, 2], [5, 7]]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[2,7]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`[2,1,7,5]`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)",
    ],
  },
  {
    question: ' Q122. Given this code, which statement will evaluate to false?',
    codeAfterQuestion: "const a = { x: 1 };const b = { x: 1 };",
    answers: [
      {
        answer: "`a['x'] === b['x']`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`a != b`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`a === b`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`a.x === b.x`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)",
    ],
  },
  {
    question: " Q123. What will this code log to the console?",
    codeAfterQuestion: "console.log(typeof 41.1);",
    answers: [
      {
        answer: "`Nothing. It resuults in a ReferenceError.`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`decimal`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`float`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`number`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)",
    ],
  },
  {
    question: " Q124. What is the output of this code?",
    codeAfterQuestion:
      "let scores = [];scores.push(1, 2);scores.pop();scores.push(3, 4);scores.pop();score = scores.reduce((a, b) => a + b);console.log(score);",
    answers: [
      {
        answer: "`3`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`4`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`6`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`7`1. ",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)2. [Reference Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)3. [Reference Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)",
    ],
  },
  {
    question: ' Q125. What does this code print to the console?',
    codeAfterQuestion:
      "let bear = { sound: 'roar', roar() { console.log(this.sound); },};bear.sound = 'grunt';let bearSound = bear.roar;bearSound();",
    answers: [
      {
        answer: "`Nothing is printed to the console.`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`grunt`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`undefined`",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`roar`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)",
    ],
  },
  {
    question: ' Q126. What is the output of this code?',
    codeAfterQuestion:
      "var cat = { name: 'Athena' };function swap(feline) { feline.name = 'Wild'; feline = { name: 'Tabby' };}swap(cat);console.log(cat.name);",
    answers: [
      {
        answer: "undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Wild",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Tabby",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Athena",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q127. What will this code output to the log?',
    codeAfterQuestion:
      "var thing;let func = (str = 'no arg') => { console.log(str);};func(thing);func(null);",
    answers: [
      {
        answer: "null no arg",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "no arg no arg",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "null null",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "no arg null",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: {},
  },
  {
    question: " Q128. What will this code print to the console?",
    codeAfterQuestion:
      "const myFunc = () => { const a = 2; return () => console.log('a is ' + a);};const a = 1;const test = myFunc();test();",
    answers: [
      {
        answer: "a is 1",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "a is undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "It won't print anything.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "a is 2",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: {},
  },
  {
    question: ' Q129. What will this code print to the console?',
    codeAfterQuestion:
      "const myFunc = (num1, num2 = 2, num3 = 2) => { return num1 + num2 + num3;};let values = [1, 5];const test = myFunc(2, ...values);console.log(test);",
    answers: [
      {
        answer: "8",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "6",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "2",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "12",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q130. Which code would you use to access the Irish flag?',
    codeAfterQuestion:
      'var flagsJSON = \'{ "countries" : [\' + \'{ "country":"Ireland" , "flag":"ð��®ð��ª" },\' + \'{ "country":"Serbia" , "flag":"U+1F1F7 U+1F1F8" },\' + \'{ "country":"Peru" , "flag":"ð��µð��ª" } ]}\';var flagDatabase = JSON.parse(flagsJSON);',
    answers: [
      {
        answer: "flagDatabase.countries[1].flag",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "flagDatabase.countries[0].flag",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "flagDatabase[1].flag",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "flagsJSON.countries[0].flag",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q131. Which snippet allows the acresOfRainForest variable to increase?',
    codeAfterQuestion:
      "let conservation = true;let deforestation = false;let acresOfRainForest = 100;if (/* Snipped goes here */){ ++acresOfRainForest;}",
    answers: [
      {
        answer: "conservation && !deforestation",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "!deforestation && !conservation",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "!conservation || deforestation",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "deforestation && conservation || deforestation",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q132. Which of these evaluate to true?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: 'Boolean("false")',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: 'Boolean("")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Boolean(0)",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Boolean(NaN)",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q133. Which method converts a JSON string to a Javascript object?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "JSON.parse()",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "JSON.fromString();",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "JSON.stringify()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "JSON.toObject()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q134. Which method do you use to attach one DOM mode to another?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "attachNode()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "appendChild()",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "querySelector()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "getNode()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q135. How would you add a data item named animal with a value of sloth to local storage for the current domain?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: 'LocalStorage.setItem("animal","sloth");',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'document.localStorage.setItem("animal","sloth");',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: 'localStorage.setItem({animal:"sloth"});',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'localStorage.setItem("animal","sloth");',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)",
    ],
  },
  {
    question:
      ' Q136. What value is printed to the console after this code execute?',
    codeAfterQuestion:
      "let cat = Object.create({ type: 'lion' });cat.size = 'large';let copyCat = { ...cat };cat.type = 'tiger';console.log(copyCat.type, copyCat.size);",
    answers: [
      {
        answer: "tiger large",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "lion undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "undefined large",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "lion large",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)",
    ],
  },
  {
    question: ' Q137. What does this code print to the console?',
    codeAfterQuestion:
      "let animals = [{ type: 'lion' }, 'tiger'];let clones = animals.slice();clones[0].type = 'bear';clones[1] = 'sheep';console.log(animals[0].type, clones[0].type);console.log(animals[1], clones[1]);",
    answers: [
      {
        answer: "bear bear tiger sheep",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "lion bear sheep sheep",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "bear bear tiger tiger",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "lion bear tiger sheep",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem)",
    ],
  },
  {
    question: ' Q138. What will be the output of the following code.',
    codeAfterQuestion: "a=5;b=4;alert(a++(+(+(+b))));",
    answers: [
      {
        answer: "18",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "10",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "9",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "20",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q139. Which snippet could you add to this code to print "{"type": "tiger"}" to the console?',
    codeAfterQuestion:
      'let cat = { type: "tiger", size: "large" };let json = /* Snippet here */;console.log(json); // print {"type":"tiger"}',
    answers: [
      {
        answer: '`cat.toJSON("type");`',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '`JSON.stringify(cat, ["type"]);`',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "`JSON.stringify(cat);`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "`JSON.stringify(cat, /type/);`",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://www.w3schools.com/jsref/jsref_stringify.asp)",
    ],
  },
  {
    question:
      ' Q140. Which document method is not used to get a reference to a DOM node?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "document.getNode();",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "document.getElementsByClassName();",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "document.querySelectorAll();",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "document.querySelector();",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](<https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#:~:text=querySelector()%20and%20Document.,element%20objects%20in%20the%20DOM.>)",
    ],
  },
  {
    question:
      ' Q141. In JavaScript, all objects inherit a built-in property from a **\\*\\*\\*\\***\\_\\_\\_**\\*\\*\\*\\***.',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "node",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "instance variable",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "prototype",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "accessor",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference](https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/)",
    ],
  },
  {
    question:
      ' Q142. Which of the following are not server-side Javascript objects?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Date",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "FileUpload",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Function",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "All of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: {},
  },
  {
    question: ' Q143. What will be the output of the following code snippet?',
    codeAfterQuestion:
      "const obj1 = { first: 20, second: 30, first: 50 };console.log(obj1);",
    answers: [
      {
        answer: "first: 30 , second: 50",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "first: 50 , second: 30",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "first: 30 , second: 20",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q144. Which object in Javascript doesnâ��t have a prototype?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Base Object",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "All objects have prototype",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the objects have prototype",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: " Q145. What does â�¦ operator do in JS?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Used to spread iterables to individual elements",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Describe datatype of undefined",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "No such operator exists",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q146. How to stop an interval timer in Javascript?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "clearInterval",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "clearTimer",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "intervalOver",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: ["[Reference](https://www.interviewbit.com/javascript-mcq/)"],
  },
  {
    question: " Q147. What will be the output of the following code snippet?",
    codeAfterQuestion: "print(typeof NaN);",
    answers: [
      {
        answer: "Object",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Number",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "String",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "None of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: {},
  },
  {
    question: ' Q148. What will be the output of the following code snippet?',
    codeAfterQuestion:
      '<script type="text/javascript">a = 5 + "9"; document.write(a);</script>',
    answers: [
      {
        answer: "Compilation Error",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "14",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Runtime Error",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "59",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: {},
  },
  {
    question:
      ' Q149. Which of the following methods can be used to display data in some form using Javascript?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "document.write()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "console.log()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "window.alert()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "all of the above",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: {},
  },
  {
    question:
      " Q150. What value is assigned to total after this code executes?",
    codeAfterQuestion:
      "function sum(num1, num2 = 2, num3 = 3) { return num1 + num2 + num3;}let values = [1, 5];let total = sum(4, ...values);",
    answers: [
      {
        answer: "10",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "6",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "7",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "8",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)",
    ],
  },
  {
    question:
      " Q151. Which statement is applicable to the defer attribute of the HTML <script> tag?",
    codeAfterQuestion: null,
    answers: [
      {
        answer:
          "defer allows the browser to continue processing the page while the script loads in the background.",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer:
          "defer causes the script to be loaded from the backup content delivery network (CDN).",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "defer blocks the browser from processing HTML below the tag until the script is completely loaded.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer:
          "defer lazy loads the script, causing it to download only when it is called by another script on the page.",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference: defer html script attribute](https://www.w3schools.com/tags/att_script_defer.asp)",
    ],
  },
  {
    question:
      " Q152. Which method of a class is called to initialize an object of that class?",
    codeAfterQuestion: null,
    answers: [
      {
        answer: "init()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "create()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "new()",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "constructor()",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
    ],
    reference: [
      "[Reference: constructor method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)",
    ],
  },
  {
    question: ' Q153. Which expression evaluates to true?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Boolean(NaN)",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Boolean(0)",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: 'Boolean("false")',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: 'Boolean("")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference: Boolean object](https://www.w3schools.com/js/js_booleans.asp)",
    ],
  },
  {
    question:
      ' Q154. How would you check if the word "pot" is in the word "potato"?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: '"pot".indexOf("potato") !== -1',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '"potato".includes("Pot")',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: '"potato".includes("pot")',
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: '"potato".contains("pot");',
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)",
    ],
  },
  {
    question:
      ' Q155. Which collection object allows a unique value to be inserted only once?',
    codeAfterQuestion: null,
    answers: [
      {
        answer: "Map",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Array",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
      {
        answer: "Set",
        codeAfterAnswer: null,
        isCorrectAnswer: true,
      },
      {
        answer: "Object",
        codeAfterAnswer: null,
        isCorrectAnswer: false,
      },
    ],
    reference: [
      "[Reference: developer.mozilla Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)",
    ],
  },
];

export default obj;
