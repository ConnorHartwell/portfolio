import './Home.css';
import slideTransition from '../hooks/slide.js';

function Home(props) {
    return (
        <div className="container">
          <div className="page-layout">
            <div className="title-section">
              <h1>
                Connor Hartwell
              </h1>
              <h2>
                Developer @ Sage
              </h2>
              </div>
            <div className="photo-container">
            <img src='/images/face.JPG' className="photo" alt="logo" />
            </div>
            <div className="external-links">
            <p>
            <a className="link" href="/projects"
            >
              PROJECTS &gt;&gt;
            </a>
            </p>
            <p>
            <a className="link" href="/about"
            >
              ABOUT ME &gt;&gt;
            </a>
            </p>
            <p> 
            <a className="link" href="blog"
            >
              BLOG &gt;&gt;
            </a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default slideTransition(Home);