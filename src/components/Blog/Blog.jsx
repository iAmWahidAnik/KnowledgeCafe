import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-2xl font-semibold border-s-8 border-indigo-700 ps-3'>Props vs state</h1>
                <h3 className='text-slate-500'><b>state:</b> State is the local state of the component which cannot be accessed and modified outside of the component.</h3>
                <h3 className='text-slate-500'><b>props:</b>  make components reusable by giving components the ability to receive data from their parent component using props.</h3>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-semibold border-s-8 border-indigo-700 ps-3'>How does useState work?</h1>
                <h3 className='text-slate-500'>useState is React Hook that allows you to add state to a functional component. 
It returns an array with two values: the current state and a function to update it. 
The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</h3>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-semibold border-s-8 border-indigo-700 ps-3'>Purpose of useEffect other than fetching data.</h1>
                <h3 className='text-slate-500'>We can also use 'useEffect' to collect data from localStorage</h3>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl font-semibold border-s-8 border-indigo-700 ps-3'>How Does React work?</h1>
                <h3 className='text-slate-500'>React divides the UI into reusable pieces of code known as components. 
React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
</h3>
            </div>
        </div>
    );
};

export default Blog;