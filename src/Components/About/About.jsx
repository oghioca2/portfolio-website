import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                className={styles.aboutImage}
                src={getImageUrl("about/about.png")} 
                alt="Developer working on a laptop" 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building
                            responsive and optimized websites using the latest technologies.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I can develop fast and optimized systems using NodeJs, ExpressJs. 
                            I can integrate APIs and work with PostgreSQL and MongoDB.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI / UX Designer</h3>
                        <p>
                            I have a keen eye for design, I specialize in crafting 
                            intuitive and visually appealing user interfaces.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
