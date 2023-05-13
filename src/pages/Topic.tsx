// @flow strict
import { useParams } from 'react-router-dom';
import QnA from "../assets/data/sickness-answer.json"
import { DetailType } from '../types/types';

function Topic() {
    const {slug}=useParams()
    let details:DetailType={
        question: '',
        answer: '',
        url: '',
        tags: []
    }
    QnA.map((i,n)=>{
        if(slug===`${n}`){
            details=i
        }
    })
    return (
        <div className='flex flex-col justify-center items-center px-[5vw] my-[5vh] lg:my-[10vh]' key={slug}>
           <div className='flex text-sm my-4' title="Patience's question">
                <span className='text-xl font-bold mr-4'><i className='ri-user-line ri-2x'></i>:</span>  
                <p><span className='font-bold text-xl'>{details.question.slice(0,1).toUpperCase()}</span>{details.question.slice(1)}</p>
           </div>
           <div className='flex text-sm my-4' title="Doctor's response">
                <span className='text-xl font-bold mr-4'><i className='ri-hospital-line ri-2x'></i>:</span>  
                <p><span className='font-bold text-xl'>{details.answer.slice(0,1).toUpperCase()}</span>{details.answer.slice(1)}</p>
           </div>
        </div>
    );
};

export default Topic;