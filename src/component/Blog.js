import React from 'react';

const Blog = () => {
    return (
        <div className='px-[15%] bg-cyan-300 py-16'>
            <h1 className='text-center text-green-500 text-3xl pb-4'>Question & Answer</h1>
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
                <p className='text-xl font-medium mb-2 mt-6'><span className='font-bold'>Q.1. </span>How does Context API works ?</p>
                <p>
                    <span className='font-bold text-orange-300 underline ml-4'>Ans: </span>
                    React Context API হল একটি React application এর জন্য কার্যকরভাবে global variable তৈরি করার একটি system যা চারপাশে pass করা 
                    যেতে পারে। Context API একটি consumer এবং provider reutrn করে । Provider হল এমন একটি উপাদান যা এর নাম অনুসারে state তার child কে প্রদান করে । 
                     এটি "props drillings" বা দাদা-দাদি থেকে শিশু থেকে পিতা-মাতার কাছে props sending বিকল্প। Redux ব্যবহার করে state management  
                    এর জন্য props drillings কে একটি সহজ, হালকা পদ্ধতি হিসাবে তৈরি করা হয় ।
                </p>
                <p className='text-xl font-medium mb-2 mt-6'><span className='font-bold'>Q.1. </span>What is useRef hook in React ?</p>
                <p>
                    <span className='font-bold text-orange-300 underline ml-4'>Ans: </span>
                    UseRef Hook আপনাকে রেন্ডারের মধ্যে মান বজায় রাখতে দেয়। এটি একটি পরিবর্তনযোগ্য মান সংরক্ষণ করতে ব্যবহার করা যেতে পারে যা আপডেট করার সময়
                     পুনরায় রেন্ডারের করা হয় না। এটি সরাসরি একটি DOM Element access করতে ব্যবহার করা যেতে পারে । যদি আমরা useState hook ব্যবহার করে কতবার
                      আমাদের application render হয় তা গণনা করার চেষ্টা করি, আমরা একটি অসীম লুপে দেখতে পাই । কারণ এই hook নিজেই একটি পুনরায় রেন্ডার ঘটায় ৷ এটি
                       এড়াতে, আমরা useRef hook ব্যবহার করতে পারি ৷ useRef hook পূর্ববর্তী states মানগুলির ট্র্যাক রাখতেও ব্যবহার করা যেতে পারে। hook গুলি React 16.8-এ 
                       একটি নতুন সংযোজন ৷ এটি developer use করে একটি class না লিখে React এবং অন্যান্য React feature ব্যবহার করতে দেয়।
                </p> 
            </div>
        </div>
    );
};

export default Blog;