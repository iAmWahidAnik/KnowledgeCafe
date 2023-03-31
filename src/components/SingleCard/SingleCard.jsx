import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ blog }) => {
    const { cover, authorImage, author, published, readTime, title } = blog;
    return (
        <div className='mb-10 border-b-2'>
            <img className='cover-image rounded-lg' src={cover} alt="" />
            <div className='detail-container'>
                <div className='flex justify-between mt-8'>
                    <div className='flex items-center justify-center m-0'>
                        <img className='author-image' src={authorImage} alt="" />
                        <div className='ms-4'>
                            <h4>{author}</h4>
                            <p>{published}</p>
                        </div>
                    </div>
                    <div className='flex items-center m-0'>
                        <p>{readTime} Min Read</p>
                        <button className='ms-3'>
                            <FontAwesomeIcon icon={faBookmark} style={{ color: "#595f69", }} />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-medium my-4'>{title}</h1>
                </div>
                <div className='mb-5'>
                    <a className='text-indigo-700 font-semibold underline' href="#">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;