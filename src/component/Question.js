import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';

const Question = ({ questionCon, indx }) => {
    const [isOpen, setIsOpen] = useState(false);
    const number = ++indx;
    const { options, question, correctAnswer, id } = questionCon;
    // console.log(question)
    const handleAnsShow = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
    return (
        <div className='bg-blue-300 shadow-lg shadow-neutral-200 border rounded-md p-4 w-1/2 mx-auto my-5'>
            <div onClick={handleAnsShow} className='w-6 ml-auto'>
                {
                    isOpen ? <EyeIcon></EyeIcon> :<EyeSlashIcon></EyeSlashIcon>
                }
            </div>
            <h3 className='text-center mb-4'><span className='font-bold'>Quiz {number}: </span> <br /> <span className='text-lg font-semibold'>{question}</span></h3>
            <div className='grid grid-cols-2'>
                {
                    options.map((option, inx) => <div className='m-4 p-4 rounded-md bg-orange-100 hover:bg-orange-300 border-2 border-white' key={inx}>
                        <p className='text-semibold'>{option}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Question;