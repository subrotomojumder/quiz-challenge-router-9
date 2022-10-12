import { CheckIcon, EyeIcon, EyeSlashIcon, QuestionMarkCircleIcon, XMarkIcon, } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Question = ({ questionCon, indx }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCorrect, setIsCorrect] = useState('initial')
    const { options, question, correctAnswer } = questionCon;

    const handleAnsShow = () => {
        !isOpen && toast.warning(`${correctAnswer}`, { autoClose: 1500 })
        setIsOpen(!isOpen)
    }
    setTimeout(() => setIsOpen(false), 2500);

    const handleMcqAnswer = (ans) => {
        if (ans === correctAnswer) {
            toast.success('wow! Your answer correct...')
            setIsCorrect(true)
        }
        else {
            toast.error('wrong! your answer wrong...')
            setIsCorrect(false)
        }
    }

    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div data-aos='zoom-in' className='relative bg-blue-300 shadow-lg shadow-neutral-200 border rounded-md p-4 w-5/6 lg:w-2/3 mx-auto my-5'>
            <div onClick={handleAnsShow} className='w-8 ml-auto bg-stone-100 rounded-full p-1'>
                {
                    isOpen ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>
                }
            </div>
            <h3 className='text-center mb-4'><span className='font-bold'>Quiz {++indx}: </span> <br /> <span className='text-lg font-semibold'>{question}</span></h3>
            <div className='absolute top-4 left-8 font-extrabold'>{isCorrect === 'initial' ? <p></p> : isCorrect ? <p className='text-blue-700'><CheckIcon className='w-6 ml-4' />Correct </p> : <p className='text-red-500'><XMarkIcon className='w-6 ml-4' />Wrong </p>}</div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    options.map((option, i) => <div className='m-4 rounded-md bg-orange-100 hover:bg-orange-300 hover:cursor-pointer border-2 border-white' key={i}>
                        <div onClick={() => handleMcqAnswer(option)} className='flex items-center font-semibold'>
                            <QuestionMarkCircleIcon className='w-6 text-gray-300 ml-4' />
                            <p className='ml-3 py-4'> {option}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Question;