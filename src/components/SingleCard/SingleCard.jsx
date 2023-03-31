import React from 'react';
import './SingleCard.css'

const SingleCard = ({ blog }) => {
    const { cover, authorImage, author, published, readTime, title } = blog;
    return (
        <div>
            <img className='cover-image' src={cover} alt="" />
            <div className='flex'>
                <div className='flex'>
                <img className='author-image' src={authorImage} alt="" />
                <div>
                    <h4>{author}</h4>
                    <p>{published}</p>
                </div>
                </div>
                <div>
                    <p>{readTime} Min Read</p>
                    <button></button>
                </div>
            </div>
            <h1>{title}</h1>
        </div>
    );
};

export default SingleCard;