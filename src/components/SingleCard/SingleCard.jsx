import React from 'react';
import './SingleCard.css'

const SingleCard = ({blog}) => {
    const {cover, authorImage, author, published, readTime, title} = blog;
    return (
        <div>
            <img className='image' src={cover} alt="" />
        </div>
    );
};

export default SingleCard;