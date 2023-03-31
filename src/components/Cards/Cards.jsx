import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import SideBar from '../SideBar/SideBar';

const Card = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    // console.log(blogs)

    // add to bookmark function 
    const addToBookmark = title => {
        const newBookmark = [...bookmark, title];
        setBookmark(newBookmark);
    }
    return (
        <div className='flex gap-5 my-5'>
            <div>
                {
                    blogs.map(blog => <SingleCard key={blog.id} blog={blog} addToBookmark={addToBookmark}></SingleCard>)
                }
            </div>
            <div>
                <SideBar bookmark={bookmark}></SideBar>
            </div>
        </div>
    );
};

export default Card;