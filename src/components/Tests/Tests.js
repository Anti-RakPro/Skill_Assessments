import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState, useEffect, useReducer} from "react";
import Checkbox from "../../UI/Checkbox";
import TestFooter from "./TestFooter";
import React from "react";





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
let fifteenQuestions = []
let answerHasBeenSubmited = false


function Tests() {


    const [isSubmitLightsUp, setSubmitLightsUp] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useReducer(postCurrentAnswer,
        [defaultAnswerObj, defaultAnswerObj, defaultAnswerObj, defaultAnswerObj])
    const [test, setTest] = useReducer(postTest, initialArg)

    // let currentAnswerInitializerArg = test.map(()=>{
    //     return  defaultAnswerObj
    // })

    useEffect(  () => {
        // console.log('start request')
        fifteenQuestions =  FetchTest()
        // console.log(fifteenQuestions)

        setTest({type: 'START'})
        return ()=>{}
    }, [])

    function postCurrentAnswer(state, action) {


        if (action.type === 'DEFAULT') {
            let result
                 result = fifteenQuestions[whichQuestion].answers.map(()=>{
                    return defaultAnswerObj
                })


            setSubmitLightsUp(false)
            // console.log('result',result)
            return result
        }


        for (let i = 0; i <= 6; i++) {
            // console.log(action.type)
            if (action.type === `check${i}`) {
                let result
                if (answerHasBeenSubmited === false) {
                    result = fifteenQuestions[whichQuestion].answers.map((elm, index)=>{
                        // console.log(action.type[5] === i,action.type[5], i)
                        if (action.type[5] == index){
                            return {
                                ...defaultAnswerObj,
                                chosen: true,
                                showGray: true
                            }
                        }
                            return defaultAnswerObj
                    })

                    setSubmitLightsUp(true)
                    return result
                }
                return state
            }
            if (action.type === `RED${i}`) {
                return state.map((elm, index, arr)=>{
                    if(index === i){
                        return {...elm, showRed: true}
                    }
                    return elm
                })
            }
            if (action.type === `GREEN${i}`) {
                return state.map((elm, index)=>{
                    if(index === i){
                        return {...elm, showGreen: true}
                    }
                    return elm
                })
            }
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

    function checkIfCorrect() {
        // console.log(test.answers, 'test.answers')
        let indexIsChozen = ''
        let indexIsCorrect = ''
        for (let index in currentAnswer) {
            // console.log(currentAnswer[index])
            if (currentAnswer[index].chosen === true) {
                indexIsChozen = index
            }

        }

        for (let index in test.answers) {
            // console.log(test.answers[index])
            if (test.answers[index].isCorrectAnswer === true) {
                indexIsCorrect = index
            }
        }

        // console.log(indexIsChozen === indexIsCorrect, indexIsChozen, indexIsCorrect)
        if (indexIsChozen === indexIsCorrect) {
            answerHistory[whichQuestion] = true
            setCurrentAnswer(
                {type: `GREEN${indexIsCorrect}`})


        } else {
            answerHistory[whichQuestion] = false
            setCurrentAnswer({type: `RED${indexIsChozen}`})
            setCurrentAnswer({type: `GREEN${indexIsCorrect}`})

        }
        // console.log(answerHistory)
    }

    function onSubmit() {
        if (isSubmitLightsUp === true) {
            answerHasBeenSubmited = true
            // console.log('Submit', currentAnswer)
            checkIfCorrect()
            setSubmitLightsUp(false)
        }
    }

    function onNext() {
        if (answerHasBeenSubmited === true) {
            answerHasBeenSubmited = false
            // console.log('Next',)
            setTest({type: 'NEXT'})
        }

    }


    const AnswerList = () => {
        return <div className={styles['test-answers']}>
            {test.answers !== undefined && test.answers.map((currentObj, index, value) => {

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



    return (
        <div className={styles.main}>
            <p className={styles['test-title']}>JS Skill Assessment</p>
            <div className={styles['test-question']}>
                {test.question}
                <div>{test.codeAfterQuestion}</div>
            </div>
            <AnswerList/>
            <TestFooter onNext={onNext} onSubmit={onSubmit} isSubmitLightsUp={isSubmitLightsUp}
                        isNextLightsUp={answerHasBeenSubmited}/>

        </div>
    )
}

export default Tests