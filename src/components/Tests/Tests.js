import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState,useEffect,useReducer} from "react";


// FetchTest()
let allQuestions = ''

// this fun takes 15 random questions from all list
function chooseRandom(arr) {
    return arr.slice(0,15)
}


// this fun transforms huge json str go obj, for later use
function reformatToArr(str){
    // console.log(str)


    const arr = str.replace(/[\r\n]/gm, '').split('####').slice(1).map(str =>{
        const result  = {}
        const answers = []
        const references = []
        const indexQuestion = str.search(/- . .|- .x./gm)
        const questionPart = str.slice(0,indexQuestion)
       
        const answersPart = str.slice(indexQuestion)
       

        const isCodeInQuestion = questionPart.search('```js')
        if(isCodeInQuestion === -1){
            result.question = questionPart
            result.codeAfterQuestion = null
        } else {
            result.question = questionPart.slice(0,isCodeInQuestion)
            result.codeAfterQuestion = questionPart.slice(isCodeInQuestion)
        }


        let splitingAnswersStr = answersPart
        // console.log('all questions',splitingAnswersStr )
        for(let i = 0; i < 6; i++){

            let nextSearch = splitingAnswersStr.slice(5).search(/- . .|- .x./gm)
            // console.log(nextSearch,splitingAnswersStr)


            if (nextSearch !== -1){
                const potentialAnswer = splitingAnswersStr.slice(0, nextSearch +5)
                const isCodeInAnswer = potentialAnswer.search('```js')
                if(isCodeInAnswer !== -1){
                    answers.push({
                        answer: potentialAnswer.slice(0, isCodeInAnswer),
                        codeAfterAnswer: potentialAnswer.slice( isCodeInAnswer)
                    })
                } else{
                    answers.push({
                        answer: potentialAnswer,
                        codeAfterAnswer: null
                    })
                }
                splitingAnswersStr = splitingAnswersStr.slice(nextSearch +5)
                // console.log('after cut',splitingAnswersStr)
            } else{

                // TODO erors is last answer
                let isReferenceInAnswer = splitingAnswersStr.search(['Reference'])
                let potentialAnswer = splitingAnswersStr.slice(0, nextSearch +5)
                const isCodeInAnswer = potentialAnswer.search('```js')

                if(isReferenceInAnswer !== -1) {
                    references.push(splitingAnswersStr.slice(isReferenceInAnswer - 1))
                    potentialAnswer = splitingAnswersStr.slice(0,isReferenceInAnswer - 1)

                }


                if(isCodeInAnswer !== -1){
                    answers.push({
                        answer: potentialAnswer.slice(0, isCodeInAnswer),
                        codeAfterAnswer: potentialAnswer.slice( isCodeInAnswer)
                    })
                } else{
                    answers.push({
                        answer: potentialAnswer,
                        codeAfterAnswer: null
                    })
                }
                break
            }

            // console.log(i,nextSearch,answers)
        }
        result.answers = answers
        result.reference = references
        

        // console.log(result)
        return result
    })
    
    return arr
    

}

function setTest(){

}
const initialArg = {}

function postReducer(state, action){

}


function Tests(){

    const [tests, setTests] = useState('')
    const [test, setTest] = useReducer(postReducer,initialArg)

    useEffect(()=>{
        // console.log('start request')

        const fetchTests = async () =>{
            const response = await fetch (
                `https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript-quiz.md`
            )
            const responseData = await response.json()

            const blob = fetch(`https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/git/blobs/${responseData.sha}`)
                .then(d=> d.json())
                .then(d => atob(d.content))
                .then(d => reformatToArr(d))
                .then(arr => chooseRandom(arr))
                .then(arr => setTests(arr))
                .then(arr => console.log(arr))


        }
        fetchTests()


    },[])


    console.log(tests)

    return(
        <div className={styles.main} >
            <p className={styles['test-title']}>JS Skill Assessment</p>
            <div className={styles['test-question']}>{tests !== '' && tests[0].question}</div>

        </div>
    )
}

export default Tests