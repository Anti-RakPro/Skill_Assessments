import styles from './Tests.module.css'
import FetchTest from "../../TestProvider/FetchTest";
import {useEffect} from "react";


// FetchTest()

function Tests(){

    useEffect(()=>{
        console.log('response')

        const fetchTests = async () =>{
            let data = await fetch (
                `https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript-quiz.md`
            )
            if(!data.ok){
                throw new Error('Something went wrong');
            }
            console.log('data', data)



            const response = await fetch('https://api.github.com/repos/mrshahzeb7/linkedin-skill-assessments-quizzes/contents/javascript/javascript/javascript-quiz.md')

            if(!response.ok){
                throw new Error('Something went wrong');
            }
            console.log('response', response)

        }
        fetchTests()
    },[])



    return(<div className={styles.main} >
            some tests
        </div>
    )
}

export default Tests