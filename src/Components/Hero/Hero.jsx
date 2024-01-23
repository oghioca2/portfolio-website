import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ovidiu</h1>
            <p className={styles.description}>
                I'm a Junior Front-end web developer seeking to use my technical 
                skills and expertise to provide value to the employer.
            </p>
            <a className={styles.contactBtn} href="mailto:ovidiughioca97@gmail.com">Contact Me</a>
        </div>
        <img 
            className={styles.heroImg} 
            src={getImageUrl("hero/hero.png")} 
            alt="Hero image of me" 
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}
