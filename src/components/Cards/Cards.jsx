import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    console.log(blogs)
    return (
        <div>
            {
                blogs.map(blog => <SingleCard key={blog.id} blog={blog}></SingleCard> )
            }
        </div>
    );
};

export default Card;