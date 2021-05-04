import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div>
        <h1 className="services__title">Services</h1>
      </div>
      <div className="services__list">
      <article>
         <h2>Website Review</h2>
         <p>I'll check if your business website (if it has one) is performing as it should be by making the respective tests and I'll look at any potential issues it has.</p>
       </article>
       <article>
         <h2>Business Meeting</h2>
         <p>We schedule a meeting and talk about the approach we'll have to take for your future website. This includes a roadmap and a proposal where we'll reach an agreement.</p>
       </article>
       <article>
         <h2>Prototyping and Design</h2>
         <p>With the results of the meeting I'll begin the design process and keep you updated with the progress. The objective of this process is to provide the proper user experience, helping your business gain clients.</p>
       </article>
       <article>
         <h2>Progressive Development</h2>
         <p>With the previous step completed I'll begin the development process tailored to your business. I'll make sure that the site is easy to work with and with the best practices in mind.</p>
       </article>
       <article>
         <h2>Thorough Testing</h2>
         <p>Before completing the delivery I'll make sure the website is in optimal condition. Affirming its compatability to multiple devices screens and various internet speeds.</p>
       </article>
       <article>
         <h2>Constant Support</h2>
         <p>The websites organic growth is guaranteed. If you want to keep adding more content I'll make sure to help you with it. I'll make sure the be vailable to any inquiry you have.</p>
       </article>
      </div>
    </div>
  );
};

export default Services;
