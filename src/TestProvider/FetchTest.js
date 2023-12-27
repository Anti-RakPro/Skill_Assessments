import jsAll from '../questions/js/javascript-quiz-final';

function reformatToArr(str) {
  console.log(str);

  const arr = str
    .replace(/[\r\n]/gm, '')
    .split('####')
    .slice(1)
    .map((str) => {
      const result = {};
      const answers = [];
      const references = [];
      const indexQuestion = str.search(/- . .|- .x./gm);
      const questionPart = str.slice(0, indexQuestion);

      const answersPart = str.slice(indexQuestion);

      const isCodeInQuestion = questionPart.search(/```js|```javascript/g);
      if (isCodeInQuestion === -1) {
        result.question = questionPart;
        result.codeAfterQuestion = null;
      } else {
        result.question = questionPart.slice(0, isCodeInQuestion);
        result.codeAfterQuestion = questionPart.slice(isCodeInQuestion);
      }

      let splitingAnswersStr = answersPart;
      // console.log('all questions',splitingAnswersStr )
      for (let i = 0; i < 6; i++) {
        let nextSearch = splitingAnswersStr.slice(5).search(/- . .|- .x./gm);

        if (nextSearch !== -1) {
          const potentialAnswer = splitingAnswersStr.slice(0, nextSearch + 5);
          const isCodeInAnswer = potentialAnswer.search('```js');
          if (isCodeInAnswer !== -1) {
            answers.push({
              answer: potentialAnswer.slice(0, isCodeInAnswer),
              codeAfterAnswer: potentialAnswer.slice(isCodeInAnswer),
            });
          } else {
            answers.push({
              answer: potentialAnswer,
              codeAfterAnswer: null,
            });
          }
          splitingAnswersStr = splitingAnswersStr.slice(nextSearch + 5);
        } else {
          // TODO erors is last answer. when reference present code works fine, when on present its cuts of last question
          let isReferenceInAnswer = splitingAnswersStr.search(['Reference']);
          let potentialAnswer = splitingAnswersStr;
          const isCodeInAnswer = potentialAnswer.search('```js');
          if (isReferenceInAnswer !== -1) {
            references.push(splitingAnswersStr.slice(isReferenceInAnswer - 1));
            potentialAnswer = splitingAnswersStr.slice(
              0,
              isReferenceInAnswer - 1,
            );
          }

          if (isCodeInAnswer !== -1) {
            answers.push({
              answer: potentialAnswer.slice(0, isCodeInAnswer),
              codeAfterAnswer: potentialAnswer.slice(isCodeInAnswer),
            });
          } else {
            answers.push({
              answer: potentialAnswer,
              codeAfterAnswer: null,
            });
          }
          break;
        }
        // console.log(i,nextSearch,answers)
      }

      // console.log(answers)

      result.answers = answers.map((obj) => {
        const search = obj.answer.search(/- .x. /gm);
        if (search === 0) {
          return { ...obj, isCorrectAnswer: true, answer: obj.answer.slice(6) };
        }
        if (search === -1) {
          return {
            ...obj,
            isCorrectAnswer: false,
            answer: obj.answer.slice(6),
          };
        }
        console.log('somthing went wrong, search index not -1 or 0');
        return obj;
      });

      if (result.codeAfterQuestion !== null) {
        // console.log(result.codeAfterQuestion.search(/```js/g), result.codeAfterQuestion.search(/```javascript/g))
        if (result.codeAfterQuestion.search(/```js/g) === 0) {
          result.codeAfterQuestion = result.codeAfterQuestion.slice(5, -3);
        }
        if (result.codeAfterQuestion.search(/```javascript/g) === 0) {
          result.codeAfterQuestion = result.codeAfterQuestion.slice(13, -3);
        }
      }

      result.reference = references;

      // console.log(result)
      return result;
    });

  return arr;
}

function FetchTest() {
  let fifteenQuestions = 'no no no';

  function getRandomElementsFromArray(arr, numElements) {
    // Shuffle the original array
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    // Return the first numElements elements
    // //TODO

    // console.log(arr[139].question)
    // return shuffled.slice(0, numElements);
    return shuffled.slice(0, numElements);
    // .unshift(arr[140],arr[141],arr[142])
  }

  async function chooseQuestions(arr) {
    // console.log(JSON.stringify(arr))
    // console.log(arr)

    // const fifteenQuestions = arr.slice(0, 15)
    fifteenQuestions = await getRandomElementsFromArray(arr, 15);

    // console.log('fifteenQuestions',fifteenQuestions)/

    return fifteenQuestions;
  }

  // this fun was used fetching data from git file
  // const fetchTests = async () => {
  //     const response = await fetch(
  //         `https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript-quiz.md`
  //     )
  //     const responseData = await response.json()

  //     const blob = await fetch(`https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/git/blobs/${responseData.sha}`)
  //         .then(d  =>  d.json())
  //         .then(d =>  atob(d.content))
  //         .then(d =>  reformatToArr(d))
  //         .then(arr => chooseQuestions(arr))
  //         .catch(error => new Error(`something went wrong(${error})`))
  //     return blob
  // }

  function fetchTestsLocal() {
    // console.log(jsAll)
    return getRandomElementsFromArray(jsAll);
  }

  return fetchTestsLocal();
  // return fetchTests()
}

export default FetchTest;
