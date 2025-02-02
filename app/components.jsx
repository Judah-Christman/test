'use client'


import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import Bulb from './images/light-bulb.png';


// Create Navigation bar
const Navigation = () => {

  const [isHover, setIsHover] = useState(false);


  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };


  return (
      <nav 
        className={styles.navigation}  
        style={{
          background: isHover ? '#161616' : '#333333',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className={styles.navList}>
          <li className={styles.link}><a href="" className={styles.linkStyle}>JKC</a></li>
          <li className={styles.link}><a href="" className={styles.linkStyle}>About Me</a></li>
          <li className={styles.link}><a href="" className={styles.linkStyle}>Projects</a></li>
          <li className={styles.link}><a href="" className={styles.linkStyle}>Hobbies</a></li>
          <li className={styles.link}><a href="" className={styles.linkStyle}>Interests</a></li>
        </ul>
      </nav> 
    );
};

// Create Preview Window Options
const Preview = () => {
  const Jkc = () => {
    return(
      <>
        
        <div className={styles.headshot1}></div>


        <h2 className={styles.title}>JKC</h2>

        <p className={styles.jkcIntro}>Hello! I am Judah Christman, an ameteur in many tech fields, from robotics to web development. I have hope to bring my skills and talents into the professional world. On this site you can view a number of my projects and hobbies.</p>
        
      </>
    );
  };


  return (
    <Jkc />
  );


};


export {
  Preview,
  Navigation
};
