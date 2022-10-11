import React from 'react';
import './Home.css';
import { Header } from './Header';
import { useLoaderData } from 'react-router-dom';
import QuizBundle from './QuizBundle';


const Home = () => {
    const allQuiz = useLoaderData();
    return (
        <div>
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-10 lg:mx-20 my-8'>
                {allQuiz.data.map(bundle => <QuizBundle bundle={bundle} key={bundle.id}/>) }
            </div>
        </div>
    );
};

export default Home;