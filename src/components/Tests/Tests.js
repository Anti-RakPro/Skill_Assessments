import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState,useEffect} from "react";


// FetchTest()
let allQuestions = ''


function reformatToArr(str){
    console.log(str)


    const arr = str.split('####').slice(1).map(str =>{
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
        //     // question: question,
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
    })
    console.log(arr)
    return {

    }
    console.log(arr)

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