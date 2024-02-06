import React from 'react';
import slideTransition from '../hooks/slide.js';
import './About.css';

function About(props) {
    return (
        <div className="container">
            <div className="title">
                <h1>Hello! I'm Connor</h1>
            </div>
            <div className='flex-container'>
                <div className="about-text">
                    <div className="paragraph-text">
                        <p>
                            .NET developer by day
                            <br />
                            legend by night
                        </p>
                        <p>
                            I love coding
                        </p>
                        <p>
                            todo: write something here!
                        </p>
                    </div>
                </div>
                <div className="image">
                    <img src="/images/me-on-a-rock.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default slideTransition(About);