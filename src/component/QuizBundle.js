import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const QuizBundle = ({ bundle }) => {
    const { logo, name, total, id } = bundle;

    const navigate = useNavigate();
    const handleQuizStart = (id) => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='bg-lime-200 shadow-xl border-2 p-2 rounded-lg lg:max-h-[80vh] lg:flex items-end'>
            <img src={logo} className='lg:max-h-72' alt="" />
            <div className='ml-8 mt-4'>
                <h3 className='text-xl text-gray-400'>Total-Question {total}</h3>
                <h2 className='text-3xl font-serif font-bold mb-12'>Topic:- {name} </h2>
                <button
                    onClick={()=> handleQuizStart(id)}
                    className=' bg-blue-500 text-white py-2 rounded-lg px-4 hover:bg-red-300 flex items-center font-bold mx-auto'
                >
                    <p>Quick Start</p>
                    <ArrowRightIcon className='h-5' />
                </button>
            </div>
        </div>
    );
};

export default QuizBundle;