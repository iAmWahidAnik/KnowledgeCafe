import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import SideBar from '../SideBar/SideBar';

const Card = () => {
    // blogs(card) data state 
    const [blogs, setBlogs] = useState([]);

    // add to bookmark state 
    const [bookmark, setBookmark] = useState([]);

    // bookmark counting state 
    const [countBookmark, setCountBookmark] = useState(0);

    // data load effect/hook 
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // add to bookmark function 
    const addToBookmark = title => {
        const newBookmark = [...bookmark, title];
        setBookmark(newBookmark);
        setCountBookmark(countBookmark + 1)
    }
    return (
        <div className='flex gap-5 my-5'>
            <div>
                {
                    blogs.map(blog => <SingleCard key={blog.id} blog={blog} addToBookmark={addToBookmark}></SingleCard>)
                }
            </div>
            <div>
                <SideBar bookmark={bookmark} countBookmark={countBookmark}></SideBar>
            </div>
        </div>
    );
};

export default Card;