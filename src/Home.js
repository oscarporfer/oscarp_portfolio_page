import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

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
        <Link to="/projects">
        <button className="home__work__btn">See my Work</button>
        </Link>
        <button className="home__contact__btn">Contact Me</button>
      </div>
      <div className="home__skills">
        <p> Tools and Frameworks</p>
      </div>
      <div className="home__skills__list">
       <article>
         <h2>JavaScript/JS</h2>
         <p>High-level, just-in-time compiled, object-oriented programming language.</p>
       </article>
       <article>
         <h2>React.Js</h2>
         <p>A JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers.</p>
       </article>
       <article>
         <h2>HTML/HTML5</h2>
         <p>The standard markup language for documents designed to be displayed in a web browser.</p>
       </article>
       <article>
         <h2>Sass/CSS</h2>
         <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
       </article>
       <article>
         <h2>Express.js</h2>
         <p>A web application framework for Node.js designed for building web applications and APIs.</p>
       </article>
       <article>
         <h2>jQuery</h2>
         <p>Js library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.</p>
       </article>
       <article>
         <h2>API Development</h2>
         <p>A set of instructions, standards or requirements that enables a software or app employ features/services of another app.</p>
       </article>
       <article>
         <h2>Git</h2>
         <p>A distributed version-control system for tracking changes in source code during software development.</p>
       </article>
       <article>
         <h2>Heroku</h2>
         <p>A cloud platform as a service supporting several programming languages.</p>
       </article>
       <article>
         <h2>VS Code</h2>
         <p>A shareware cross-platform source code editor with a JavaScript application programming interface.</p>
       </article>
       <article>
         <h2>Google Firebase</h2>
         <p>Google's mobile platform that helps you quickly develop high-quality apps and grow your business.</p>
       </article>
       <article>
         <h2>Material UI</h2>
         <p>Open source design system for styling with smootth cooperation between design and development.</p>
       </article>
       <article>
         <h2>Yarn</h2>
         <p>Fast, reliable, and secure dependency management.</p>
       </article>
       <article>
         <h2>Mongo DB</h2>
         <p>A document-oriented NoSQL database used for high volume data storage.</p>
       </article>
       <article>
         <h2>SendGrid</h2>
         <p>Customer communication platform for transactional and marketing email.</p>
       </article>
       <article>
         <h2>Passport</h2>
         <p>An authentication middleware library that simplifies the process of assigning and verifying JWT tokens.</p>
       </article>
      </div>
    </div>
  );
};

export default Home;
