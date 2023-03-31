import React from 'react';

const SideBar = ({bookmark}) => {
    return (
        <div>
            <div className='mb-4'>
            <h1 className='text-2xl p-4 bg-violet-200 rounded-lg text-indigo-700 border border-indigo-700 font-semibold'>Spent time on read : 0 min</h1>
            </div>
            <div className='bg-slate-200 rounded-lg p-4'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : 0</h1>
                <div>
                    {
                        bookmark.map(bm => <h1 className='p-4 text-xl font-semibold bg-white rounded-lg my-3'>{bm}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SideBar;