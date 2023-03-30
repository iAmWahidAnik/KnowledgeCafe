import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 border-b-2'>
            <div>
                <h3 className='text-4xl font-bold'>Knowledge Cafe</h3>
            </div>
            <div>
                <img className='display-image' src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="" />
            </div>
            
        </div>
    );
};

export default Header;