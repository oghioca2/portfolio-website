import React from 'react';

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import courses from "../../data/courses.json";
import { getImageUrl } from '../../utils';

export const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.courses}>
                {courses.map((coursesItem, id) => {
                    return (
                        <li key={id} className={styles.coursesItem}>
                            <img src={getImageUrl(coursesItem.imageSrc)} alt={`${coursesItem.website} logo`} />
                            <div className={styles.coursesItemDetails}>
                                <h3>{`${coursesItem.course}, ${coursesItem.website}`}</h3>
                                <p>{`${coursesItem.startDate} - ${coursesItem.endDate}`}</p>
                                <p>{`${coursesItem.experiences}`}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </section>
  )
}
