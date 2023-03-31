import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import SideBar from '../SideBar/SideBar';

const Card = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs)
    return (
        <div className='flex gap-5 my-5'>
            <div>
                {
                    blogs.map(blog => <SingleCard key={blog.id} blog={blog}></SingleCard>)
                }
            </div>
            <div>
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default Card;