import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState, useEffect, useReducer} from "react";
import Checkbox from "../../UI/Checkbox";
import TestFooter from "./TestFooter";
import React from "react";


function reformatToArr(str) {
    console.log(str)


    const arr = str.replace(/[\r\n]/gm, '').split('####').slice(1).map(str => {
        const result = {}
        const answers = []
        const references = []
        const indexQuestion = str.search(/- . .|- .x./gm)
        const questionPart = str.slice(0, indexQuestion)

        const answersPart = str.slice(indexQuestion)


        const isCodeInQuestion = questionPart.search(/```js|```javascript/g)
        if (isCodeInQuestion === -1) {
            result.question = questionPart
            result.codeAfterQuestion = null
        } else {
            result.question = questionPart.slice(0, isCodeInQuestion)
            result.codeAfterQuestion = questionPart.slice(isCodeInQuestion)
        }


        let splitingAnswersStr = answersPart
        // console.log('all questions',splitingAnswersStr )
        for (let i = 0; i < 6; i++) {

            let nextSearch = splitingAnswersStr.slice(5).search(/- . .|- .x./gm)

            if (nextSearch !== -1) {
                const potentialAnswer = splitingAnswersStr.slice(0, nextSearch + 5)
                const isCodeInAnswer = potentialAnswer.search('```js')
                if (isCodeInAnswer !== -1) {
                    answers.push({
                        answer: potentialAnswer.slice(0, isCodeInAnswer),
                        codeAfterAnswer: potentialAnswer.slice(isCodeInAnswer)
                    })
                } else {
                    answers.push({
                        answer: potentialAnswer,
                        codeAfterAnswer: null
                    })
                }
                splitingAnswersStr = splitingAnswersStr.slice(nextSearch + 5)
            } else {
                // TODO erors is last answer. when reference present code works fine, when on present its cuts of last question
                let isReferenceInAnswer = splitingAnswersStr.search(['Reference'])
                let potentialAnswer = splitingAnswersStr
                const isCodeInAnswer = potentialAnswer.search('```js')
                if (isReferenceInAnswer !== -1) {
                    references.push(splitingAnswersStr.slice(isReferenceInAnswer - 1))
                    potentialAnswer = splitingAnswersStr.slice(0, isReferenceInAnswer - 1)
                }

                if (isCodeInAnswer !== -1) {
                    answers.push({
                        answer: potentialAnswer.slice(0, isCodeInAnswer),
                        codeAfterAnswer: potentialAnswer.slice(isCodeInAnswer)
                    })
                } else {
                    answers.push({
                        answer: potentialAnswer,
                        codeAfterAnswer: null
                    })
                }
                break
            }
            // console.log(i,nextSearch,answers)
        }


        // console.log(answers)

        result.answers = answers.map(obj => {
            const search = obj.answer.search(/- .x. /gm)
            if (search === 0) {
                return {...obj, isCorrectAnswer: true, answer: obj.answer.slice(6)}
            }
            if (search === -1) {
                return {...obj, isCorrectAnswer: false, answer: obj.answer.slice(6)}
            }
            console.log('somthing went wrong, search index not -1 or 0')
            return obj
        })

        if (result.codeAfterQuestion !== null) {
            // console.log(result.codeAfterQuestion.search(/```js/g), result.codeAfterQuestion.search(/```javascript/g))
            if (result.codeAfterQuestion.search(/```js/g) === 0) {
                result.codeAfterQuestion = result.codeAfterQuestion.slice(5, -3)
            }
            if (result.codeAfterQuestion.search(/```javascript/g) === 0) {
                result.codeAfterQuestion = result.codeAfterQuestion.slice(13, -3)
            }

        }

        result.reference = references

        // console.log(result)
        return result
    })

    return arr
}


const initialArg = [{
    answers: [{answer: 'some answer1', isCorrectAnswer: false},
        {answer: 'some answer2', isCorrectAnswer: false},
        {answer: 'some answer3', isCorrectAnswer: false},
        {answer: 'some answer4', isCorrectAnswer: false}],
    codeAfterQuestion: null,
    question: " Q1. some question some question some question some question some question ?",
    reference: "[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)"
}]

const defaultAnswerObj =
    // TODO
    {chosen: false, showGray: false, showGreen: false, showRed: false}


let whichQuestion = 0
const answerHistory = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
let fifteenQuestions
let answerHasBeenGiven = false



function Tests() {

    // const [allTests, setAllTests] = useState('')
    const [isSubmitLightsUp, setSubmitLightsUp] = useState(false)
    const [isNextLightsUp, setNextLightsUp] = useState(false)
    // const [currentAnswerNumber, setCurrentAnswerNumber] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useReducer(postCurrentAnswer,
        [defaultAnswerObj, defaultAnswerObj, defaultAnswerObj, defaultAnswerObj])
    const [test, setTest] = useReducer(postTest, initialArg)

    // let currentAnswerInitializerArg = test.map(()=>{
    //     return  defaultAnswerObj
    // })

    useEffect(() => {
        // console.log('start request')

        function chooseQuestions(arr) {

            function getRandomElementsFromArray(arr, numElements) {
                // Shuffle the original array
                const shuffled = arr.slice().sort(() => 0.5 - Math.random());
                // Return the first numElements elements
                return shuffled.slice(0, numElements);
            }

            // const fifteenQuestions = arr.slice(0, 15)
            fifteenQuestions = getRandomElementsFromArray(arr, 15)

            setTest({type: 'START'})
            // console.log('fifteenQuestions',fifteenQuestions)/

            return fifteenQuestions
        }

        const fetchTests = async () => {
            const response = await fetch(
                `https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript-quiz.md`
            )
            const responseData = await response.json()

            const blob = fetch(`https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/git/blobs/${responseData.sha}`)
                .then(d => d.json())
                .then(d => atob(d.content))
                .then(d => reformatToArr(d))
                .then(arr => chooseQuestions(arr))
                .catch(error => new Error(`something went wrong(${error})`))
        }
        fetchTests()

    }, [])

    function postCurrentAnswer(state, action) {

        if (action.type === 'SET AMOUNT') {
            setSubmitLightsUp(false)
            return  test.answers.map(()=>{
                return defaultAnswerObj
            })
        }

        if (action.type === 'check0') {
            if (answerHasBeenGiven === false){
                const result = [{
                    ...defaultAnswerObj,
                    chosen: true,
                    showGray: true
                }, defaultAnswerObj, defaultAnswerObj, defaultAnswerObj]
                setSubmitLightsUp(true)
                // console.log('check0',result)
                return result
            }
            return state
        }
        if (action.type === 'check1') {
            if (answerHasBeenGiven === false){
                const result = [defaultAnswerObj, {
                    ...defaultAnswerObj,
                    chosen: true,
                    showGray: true
                }, defaultAnswerObj, defaultAnswerObj]
                setSubmitLightsUp(true)
                // console.log('check1',result)
                return result
            }
            return state
        }
        if (action.type === 'check2') {
            if (answerHasBeenGiven === false){
                const result = [defaultAnswerObj, defaultAnswerObj, {
                    ...defaultAnswerObj,
                    chosen: true,
                    showGray: true
                }, defaultAnswerObj]
                setSubmitLightsUp(true)
                // console.log('check2',result)
                return result
            }
            return state
        }
        if (action.type === 'check3') {
            if (answerHasBeenGiven === false){
                const result = [defaultAnswerObj, defaultAnswerObj, defaultAnswerObj, {
                    ...defaultAnswerObj,
                    chosen: true,
                    showGray: true
                }]
                setSubmitLightsUp(true)
                // console.log('check3',result)
                return result
            }
            return state
        }
        if (action.type === 'DEFAULT') {
            const result = [defaultAnswerObj, defaultAnswerObj, defaultAnswerObj, defaultAnswerObj]
            setSubmitLightsUp(false)
            // console.log('check3',result)
            return result
        }
        return [defaultAnswerObj, defaultAnswerObj, defaultAnswerObj, defaultAnswerObj]
    }


    function postTest(state, action) {
        if (action.type === 'START') {
            whichQuestion = 0
            return fifteenQuestions[whichQuestion]
        }
        if (action.type === 'NEXT') {
            setCurrentAnswer({type: 'DEFAULT'})
            whichQuestion += 1
            return fifteenQuestions[whichQuestion]
        }

    }

    // console.log(allTests)

    const SeparateLine = () => (
        <hr className={styles['separate-line']}/>
    );

    function checkIfCorrect(){

    }

    function onSubmit() {
        if (isSubmitLightsUp === true) {
            answerHasBeenGiven = true
            console.log('Submit', currentAnswer)
            checkIfCorrect()
            setSubmitLightsUp(false)
        }
    }
    function onNext() {
        if(answerHasBeenGiven === true){
            answerHasBeenGiven = false
            console.log('Next',)
            setTest({type: 'NEXT'})
        }

    }



    const AnswerList = () => {
        return <div className={styles['test-answers']}>
            { test.answers !== undefined && test.answers.map((currentObj, index, value) => {

                return <div key={Math.random() * 1000}>
                    <div className={styles['test-answer']}>
                        <Checkbox obj={currentAnswer[index]} onChange={() => {
                            setCurrentAnswer({type: `check${index}`})
                        }}/>
                        {currentObj.answer !== undefined && currentObj.answer}
                    </div>
                    <SeparateLine/>
                </div>
            })}

        </div>
    }

    console.log(test)

    return (
        <div className={styles.main}>
            <p className={styles['test-title']}>JS Skill Assessment</p>
            <div className={styles['test-question']}>
                {test.question}
                <div>{test.codeAfterQuestion}</div>
            </div>
            <AnswerList/>
            <TestFooter onNext={onNext} onSubmit={onSubmit} isSubmitLightsUp={isSubmitLightsUp} isNextLightsUp={answerHasBeenGiven}/>

        </div>
    )
}

export default Tests