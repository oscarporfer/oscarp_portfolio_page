import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__info">
        <p>
          Hello, I'm Oscar
          <br />A Front-End Developer ready to create
          <br /> attractive & functional websites{" "}
        </p>
      </div>
      <div className="home__btn">
        <button className="home__work__btn">See my Work</button>
        <button className="home__contact__btn">Contact Me</button>
      </div>
      <div className="home__skills">
        <p>Tools & Frameworks</p>
      </div>
      <div className="name">
        <h4>React
          <p>Frame Work for</p>
        </h4>
        <h4>React
          <p>Frame Work for</p>
        </h4>
        <h4>React
          <p>Frame Work for</p>
        </h4>
        <h4>React
          <p>Frame Work for</p>
        </h4>
      </div>
    </div>
  );
};

export default Home;
