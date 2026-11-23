import React from 'react';
import firstNamingPlatformCards from '../firstNamingPlatform.json';
import { FaStar, FaAward, FaLightbulb, FaUsers } from 'react-icons/fa';
import styles from '../FirstNamingPlatform/FirstNamingPlatform.module.sass';

const iconsMap = {
  FaStar: <FaStar />,
  FaAward: <FaAward />,
  FaLightbulb: <FaLightbulb />,
  FaUsers: <FaUsers />,
};

export default function FirstNamingPlatformList () {
  return (
    <>
      <h2>World's #1 Naming Platform</h2>
      <ul className={styles.cointainerList}>
        {firstNamingPlatformCards.map((c, i) => (
          <li key={i} className={styles.cointainerArticle}>
            <div className='icon'>{iconsMap[c.iconSrc]}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
