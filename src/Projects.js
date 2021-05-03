import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project__page">
      <div className="project__page__title">Here are some of my projects</div>
      <div className="project__list">
        <div className="project__card">
          <img className="photo" src="Felina.png" />
          <h1>Felina</h1>
          <p>
            This web application is designed to be an entertaining, interactive
            resource for anyone who considers themselves to be a fan of the AMC
            Network TV show - Breaking Bad. This application provides users with
            statistics, context, and entertainment at the same time.{" "}
          </p>
          <a href="https://felina.herokuapp.com/">
            <button className="project__btn">Website</button>
          </a>
        </div>
        <div className="project__card">
          <h1>Project One</h1>
        </div>
        <div className="project__card">
          <h1>Project One</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
