import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import { Navigation } from './components.jsx';
import { Preview } from './components.jsx';
import images from './images/headshot.jpg';
import arduino from './images/arduino.png';
import github from './images/github.png';









export default function Home() {


  return (
    <div>

      <Navigation />

      
      <div className={styles.landing}>
        <div className={styles.view}>
          <div className={styles.topBar}>
            <button className={styles.button1}><span className={styles.windows}>_</span></button>
            <button className={styles.button2}><span className={styles.windows}>O</span></button>
            <button className={styles.button3}><span className={styles.windows}>X</span></button>
          </div>

          <div className={styles.content}>
            
            <Preview />
          </div>

        </div>
      </div>

      <footer className={styles.footer}>
        <a className={styles.fancyFont}>Judah Christman 2025</a>
        <div className={styles.social}>
          <a className={styles.socialLinks}>
            <Image
              src={arduino}
              width={30}
              height={30}
              alt="arduino"
              
            />
          </a>
          <a className={styles.socialLinks}>
            <Image
              src={github}
              width={30}
              height={30}
              alt="github"
            />
          </a>
        </div>
      </footer>





    </div>
  );
}
