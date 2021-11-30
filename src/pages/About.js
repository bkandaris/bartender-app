import React from 'react';

const About = () => {
  return (
    <div className='about-wrapper'>
      <h3>About</h3>
      <p>
        Sometimes it is fun to try something new. With this application you are
        able to search through multiple drinks until you find something you
        might like!
      </p>
      <br />
      <p>
        This application was very fun and easy to build using the API located at{' '}
        <a href='https://www.thecocktaildb.com'>
          https://www.thecocktaildb.com
        </a>
        .
      </p>
      <img
        src='https://images.unsplash.com/photo-1529502669403-c073b74fcefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='bar'
      />
    </div>
  );
};

export default About;
