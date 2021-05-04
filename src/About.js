import React from 'react';
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
      <div className="about__title">
        <h1>About Me</h1>
      </div>
      <div className="about__description">
        <p>My name is Oscar and I am a software developer specialized in Front-End web applications. I began software development
          in 2015 because I wanted to create a "To-Do List" application that catered to my lifestyle. To broaden my knowledge on the keyboard, 
          I attended <a href="https://wyncode.co/">Wyncode Academy</a> in 2020, a Full-Stack Web Development bootcamp which helped refine my skills.
          I attended Florida International University for Economics, but took a few programming courses which helped spark my interest in coding.
          <br/>
          <br/>
          I enjoy reading, so a goal of mine is to finish 3 books per month which comes out to 36 books a year(Bill Gates reads 50!).<br/>
          I am a huge sports fanatic and deep diving into player statistics is one of my favorite hobbies.<br/>
          I travel often, mostly because its important. Traveling helps developers with creativity and innovation.
          <br/>
          <br/>
          Ready to collaborate? 
        </p>
        <div className="contact">
          <Link to="/contact">
          <button className="contact__btn">Let's Talk</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default About
