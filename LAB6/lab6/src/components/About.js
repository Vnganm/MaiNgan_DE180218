import React from 'react';

// Trong About.js
export const Contact = () => <div>Contact Page</div>;
export const News = () => <div>News Page</div>;


const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About</h1>
        <p>This is a JavaScript quiz application built with React and Redux Toolkit.</p>
        <p>It demonstrates the use of modern React patterns and state management.</p>
      </div>
    </div>
  );
};

export default About;