import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState,useEffect} from "react";


// FetchTest()
let allQuestions = ''


function reformatToArr(str){
    console.log(str)


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
        for(let i = 0; i < 6; i++){

            let nextSearch = splitingAnswersStr.slice(5).search(/- . .|- .x./gm)
            console.log(nextSearch,splitingAnswersStr,splitingAnswersStr.slice(5))
            if (nextSearch !== -1){

                // let referenceIndex = splitingAnswersStr.search(['Reference'])
                // if(referenceIndex !== -1){
                    answers.push({
                        answer: splitingAnswersStr.slice(0, nextSearch +5)
                    })
                // } else {
                //     answers.push({
                //         answer: splitingAnswersStr.slice(0, referenceIndex)
                //     })
                //     references.push(splitingAnswersStr.slice(referenceIndex,nextSearch +5))
                // }

                splitingAnswersStr = splitingAnswersStr.slice(nextSearch +5)
                console.log('after cut',splitingAnswersStr)
            } else{
                let referenceIndex = splitingAnswersStr.search(['Reference'])
                if(referenceIndex !== -1){
                    answers.push({
                        answer: splitingAnswersStr.slice(0,referenceIndex -1)

                    })
                    references.push(splitingAnswersStr.slice(referenceIndex -1))
                } else{
                    answers.push({
                        answer: splitingAnswersStr
                    })
                }
                break
            }
            console.log(i,nextSearch,answers)
        }
        result.answers = answers
        result.reference = references
        
        // console.log(indexQuestion, str, questionPart, isCodeInQuestion)
        // console.log(isCodeInQuestion,questionPart, codeAfterQuestion)

        // let correntQuestionSection = str.split('?')
        // const numOfAnswers = str.match(/- . .|- .x./gm).length
        // console.log(numOfAnswers)
        // if (numOfAnswers !== 4){
        //     console.log(str)
        // }
        

        // const question =  `${correntQuestionSection[0]} ?`
        // console.log('question', question)
        // const ather = correntQuestionSection[1]
        // console.log('ather', ather)
        // const answers = ather.split(/- . .|- .x./gm)
        // console.log('answers', answers)
        // // may contain some code
        // const q0 = answers[0]


        // return{
        //     question: question,
        //     codeAfterQuestion: null,
        //     answers:{
        //         one:'',
        //         oneCode:null,
        //         oneIsRight: false,
        //         two:'',
        //         twoCode: null,
        //         twoIsRight: false,
        //         three: '',
        //         threeCode: null,
        //         threeIsRight: false,
        //         four: '',
        //         fourCode: null,
        //         fourIsRight: false,
        //     },
        //     ather: ather
        // }
        console.log(result)
        return result
    })
    
    return arr
    

}



function Tests(){

    const [tests, setTests] = useState('')

    useEffect(()=>{
        console.log('start request')

        const fetchTests = async () =>{
            const response = await fetch (
                `https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript-quiz.md`
            )
            const responseData = await response.json()

            const blob = fetch(`https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/git/blobs/${responseData.sha}`)
                .then(d=> d.json())
                .then (d => atob(d.content))
                .then (d => reformatToArr(d))

            console.log(blob)
            const jsonToObj = async ()=>{
                console.log(allQuestions)
            }
        }
        fetchTests()

    },[])



    return(<div className={styles.main} >
            some tests

        </div>
    )
}

export default Tests