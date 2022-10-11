import React from 'react';

const Blog = () => {
    return (
        <div className='px-[15%] bg-cyan-300'>
            <h1 className='text-center text-green-500 text-3xl pt-8 pb-2'>Question & Answer</h1>
            <hr className='md:mx-[20%] bg-red-400 h-1 rounded-md mb-6' />
            <div>
                <p className='text-xl font-medium mb-2'><span className='font-bold'>Q.1. </span>What is the purpose of React Router ?</p>
                <p>
                    <span className='font-bold text-orange-300 underline ml-4'>Ans: </span>
                    React Router হল React Routing করার জন্য একটি standard library । এটি একটি React application এর বিভিন্ন উপাদানের ভিউগুলির মধ্যে
                     Navigation সক্ষম করে, Browser URL change করতে দেয় এবং UI-কে URL-এর সাথে adjusting রাখে । React Router হল declaretive এ জন্য 
                     React Router use করে user application এর কোন component সেটা নির্দিষ্ট করে application কে users friendly এবং easier করে তোলা যায় ।
                     হল । এর মানে হলো library থেকে সব কিছু read করার পরিবর্তে শুধু প্রয়োজনীয় feature গুলোকে use করা যায় । React Router হল asynchronous 
                     এজন্য applications component গুলো সব একসাথে load না হয়ে user এর চাহিদা অনুযায়ি load হয় । এতে user experience ভালো থাকে ।
                     একাধিক Root একত্রিত করে complex Root তৈরি করা যায় এতে Routing flexible হয় ।
                </p>
            </div>
        </div>
    );
};

export default Blog;