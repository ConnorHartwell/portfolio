import React from 'react';
import slideTransition from '../hooks/slide.js';

function Projects(props) {
    return (
        <div className="container">
            <h1 className="title">Projects</h1>
            <div className="grid">
                <p>project a</p>
                <p>project b</p>
                <p>project c</p>
                <p>project d</p>
                <p>project e</p>
            </div>
        </div>
    );
}

export default slideTransition(Projects);