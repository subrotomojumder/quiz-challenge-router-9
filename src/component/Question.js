import React from 'react';

const Question = ({ questionCon, indx }) => {
    const number = ++indx;
    // console.log(questionCon)
    const { options, question, correctAnswer, id } = questionCon;
    // console.log(question)
    return (
        <div className='bg-blue-300 shadow-lg shadow-neutral-200 border rounded-md p-4 w-1/2 mx-auto my-5'>
            <h3 className='text-center'><span className='font-bold'>Quiz {number}: </span> <br /> <span className='text-lg font-semibold'>{question}</span></h3>
            <div className='grid grid-cols-2'>
                {
                    options.map(option => <div className='border-2 m-4 p-4 rounded-md'>
                         <p className='text-semibold'>{option}</p>
                         </div>)
                }
            </div>
        </div>
    );
};

export default Question;