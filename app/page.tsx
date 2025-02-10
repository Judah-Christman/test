import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import React from 'react';
import { LandingPage } from './components.jsx';
import { Jkc } from './components.jsx';
import { Projects } from './components.jsx';
import { Hobbies } from './components.jsx';
import { motion } from 'framer-motion';
import images from './images/headshot.jpg';
import arduino from './images/arduino.png';
import github from './images/github.png';
import down from './images/down.png';









export default function Home() {


  return (
    <div>

      <main>
        <div className={styles.backgroundColor}>
          <div className={styles.landing}>
            <LandingPage />

            <section className={styles.mainSection}>
              <div id="Jkc" className={styles.spacing} ><Jkc /></div>
              <div id="Projects" className={styles.spacing}><Projects /></div>
              <div id="Hobbies" className={styles.spacing}><Hobbies /></div>

            </section>

          </div>
        </div>
      </main>

      
      

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
