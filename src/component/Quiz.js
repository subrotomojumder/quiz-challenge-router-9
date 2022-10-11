import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const {name, questions} = quiz.data;
    return (
        <div className='bg-slate-100'>
            <h2 className='text-center font-serif font-bold pt-6 text-amber-500 text-2xl'>Quiz of {name}</h2>
            <div>
                {questions.map((question, indx) => <Question questionCon={question} indx={indx} key={question.id} />)}
            </div>
        </div>
    );
};

export default Quiz;