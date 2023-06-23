import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useState,useEffect} from "react";


// FetchTest()

function Tests(){

    const [tests, setTests] = useState('')
    let allQuestions = ''
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
                .then (d => allQuestions = d)

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