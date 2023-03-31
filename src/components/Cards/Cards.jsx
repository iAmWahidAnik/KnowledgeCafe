import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import SideBar from '../SideBar/SideBar';
import swal from 'sweetalert';

const Card = () => {
    // blogs(card) data state 
    const [blogs, setBlogs] = useState([]);

    // add to bookmark state 
    const [bookmark, setBookmark] = useState([]);

    // bookmark counting state 
    const [countBookmark, setCountBookmark] = useState(0);

    //mark as read state 
    const [readTime, setReadTime] = useState(0);

    // data load effect/hook 
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // add to bookmark function 
    const addToBookmark = title => {
        const alreadyExist = bookmark.find(el => el === title);
        if (alreadyExist){
            return swal('You Have Already Bookmarked This Blog')
        }
        const newBookmark = [...bookmark, title];
        setBookmark(newBookmark);
        setCountBookmark(countBookmark + 1)
    }

    // mark as read function 
    const markedAsRead = (time) => {
        setReadTime(readTime + time)
    }
    return (
        <div className='flex flex-col md:flex-row gap-5 my-5'>
            <div>
                {
                    blogs.map(blog => <SingleCard key={blog.id} blog={blog} addToBookmark={addToBookmark} markedAsRead={markedAsRead}></SingleCard>)
                }
            </div>
            <div>
                <SideBar bookmark={bookmark} countBookmark={countBookmark} readTime={readTime}></SideBar>
            </div>
        </div>
    );
};

export default Card;