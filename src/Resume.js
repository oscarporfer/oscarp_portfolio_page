import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
          <h2>Oscar Portes</h2>
          <h3>Full-Stack Software Developer</h3>
          <h4>oscarfportes@gmail.com | github.com/oscarporfer | San Francisco, CA</h4>
      </div>
      <div className="resume__experience">
          <h2>SOFTWARE DEVELOPER EXPERIENCE</h2>
          <h3>Junior Full-Stack Web Developer Graduate | Wyncode Academy | September 2020-December 2020</h3>
          <ul>
            <li>Build web application projects using React</li>
            <li>Collaborate with other developers to create web applications</li>
            <li>Collaborate with UX/UI engineers for determining best we application practices</li>
            <li>Learned & implented several  development libraries </li>
            <li>Write reusable unit test documents to ensure quality control and identifying bugs</li>
            <li>Created a passing MERN stack final project that was critiqued by senior developers</li>
          </ul>
          <h3><a href='/project'>FeLiNa Project</a> | Wyncode Academy | September 2020- Decemeber 2020</h3>
          <ul>
            <li>Collaborate with team members in designing a MERN stack application</li>
            <li>Created exceptional UX design; designed styling colors; optimized website navigation</li>
            <li>Designed and edited templates in React Framework</li>
            <li>Created an API to further elevate the user experience</li>
            <li>Used MongoDB, Express.js, and yarn packages  to create dynamic webpages </li>
            <li>Used Heroku to deploy web application project</li>
          </ul>
          <h2>TECHNICAL SKILLS</h2>
          <h4><strong>Languages:</strong> Fluent in CSS, HTML, and JavaScript; Familiar with Python</h4>
          <h4><strong>Frameworks:</strong> Experience in React and Django</h4>
          <h4><strong>Databases:</strong> Experience with MongoDb, MySQL, Google Firebase</h4>
          <h2>EDUCATION & CERTIFICATIONS</h2>
          <h4><strong>Economics | Florida International University | December 2010 - June 2016</strong></h4>
          <h4>Certified Full Stack Web Developer | Wyncode Academy | September 2020- Decemeber 2020</h4>
      </div>
    </div>
  )
}

export default Resume
