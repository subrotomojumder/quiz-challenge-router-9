import React from 'react';
import './Home.css';
import { Header } from './Header';
import QuizBundle from './QuizBundle';
import { useContext } from 'react';
import { QuizContext } from './Root';


const Home = () => {
    const allQuiz = useContext(QuizContext)
    return (
        <div>
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mx-10 lg:mx-20 my-8'>
                {allQuiz.map(bundle => <QuizBundle bundle={bundle} key={bundle.id}/>) }
            </div>
        </div>
    );
};

export default Home;