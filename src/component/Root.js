import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from './Navbar';

export const QuizContext = createContext([])
const Root = () => {
    const containerQuiz = useLoaderData();

    return (
        <QuizContext.Provider value={containerQuiz.data}>
            <Navbar />
            <Outlet />
        </QuizContext.Provider>
    );
};

export default Root;