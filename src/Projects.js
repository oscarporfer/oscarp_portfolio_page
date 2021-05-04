import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project__page">
      <div className="project__page__title">Here are some of my projects</div>
      <div className="project__list">
        <div className="project__card">
          <img className="photo" src="Felina.png" />
          <h1>FeLiNa</h1>
          <p>
            This web application is designed to be an entertaining, interactive
            resource for anyone who considers themselves to be a fan of the AMC
            Network TV show - Breaking Bad. This application provides users with
            statistics, context, and entertainment at the same time.{" "}
          </p>
          <div className="btn__movement__one">
            <a href="https://felina.herokuapp.com/">
              <button className="project__btn">Website</button>
            </a>
          </div>
        </div>
        <div className="project__card">
          <img className="photo" src="Mind-Link.png" />
          <h1>Mind-Link</h1>
          <p>
            Website to showcases MERN stack development. This web application
            provides individuals in the music and art industry to come together
            and collaborate.{" "}
          </p>
          <div className="btn__movement__two">
            <a href="https://mindlink-api.herokuapp.com/">
              <button className="project__btn">Website</button>
            </a>
          </div>
        </div>
        <div className="project__card">
          <img className="photo" src="ComingSoon.png" />
          <h1>Vinoh e paz</h1>
          <p>
            Connecting Brazilian Wine connoisseurs with fresh wines that Brazil
            does not have access to.{" "}
          </p>
        </div>
      </div>
      <div className="repo__btn">
        <h1>What to check out my Github repo? Click here!</h1><a href="https://github.com/oscarporfer">
          <button className="project__btn">Github</button>
        </a>
        
      </div>
    </div>
  );
};

export default Projects;
