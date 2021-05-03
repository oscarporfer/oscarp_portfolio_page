import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__info">
        <p>Hello, I'm Oscar<br/>Front-End Developer ready to create<br/> a functional & good  looking website. </p>
      </div>
      <div className="home__btn">
        <button className="home__work__btn">See my Work</button>
        <button className="home__contact__btn">Contact Me</button>
      </div>
    </div>
  )
}

export default Home
