import React from 'react';
import './Blog.css';
import slideTransition from '../hooks/slide.js';


function Blog(props) {
    return (
        <div className="container">
            <h1>Blog</h1>
        </div>
    );
}

export default slideTransition(Blog);