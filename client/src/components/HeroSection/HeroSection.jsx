import React from 'react';

import styles from './HeroSection.module.sass';
import heroSectionData from './heroData.json';

const TABS = ['Top Categories', 'Top Industries', 'Top Ideas'];

export default function HeroSection () {
  return (
    <div className={styles.section}>
      <h2 className={styles.titleContainer}>
        Largest Collection of Brandable Names
      </h2>
      <p className={styles.subtitle}>
        Explore themed brand name collections created by our experienced team of
        branding experts
      </p>
      <div className={styles.buttonContainer}>
        {TABS.map((b, index) => (
          <button key={index} className={styles.tabButton}>
            {b}
          </button>
        ))}
      </div>
      <ul className={styles.wrapper}>
        {heroSectionData.map(h => (
          <li
            key={h.id}
            className={styles.cards}
            style={{ backgroundColor: h.bgColor }}
          >
            <div className={styles.icon}>
              {h.iconClass ? <i className={h.iconClass} /> : h.badgeText}
            </div>
            <span className={styles.titleCard}>{h.title}</span>
          </li>
        ))}
      </ul>
      <div className={styles.viewAllWrapper}>
        <button className={styles.viewAllBtn}>View all Categories</button>
      </div>
    </div>
  );
}
