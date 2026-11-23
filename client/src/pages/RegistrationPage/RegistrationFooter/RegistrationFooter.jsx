import React from 'react';
import registrationFaq from './registrationFaq.json';
import styles from './RegistrationFooter.module.sass';
import CONSTANTS from '../../../constants';

const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

export default function RegistrationFooter () {
  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        {registrationFaq.map(r => (
          <div key={r.id}>
            <span className={styles.headerArticle}> {r.question}</span>
            <p className={styles.article}>{r.answer}</p>
          </div>
        ))}

        <div className={styles.headerArticle}>
          I have other questions! How can I get in touch with Squadhelp?
        </div>
        <div className={styles.article}>
          Check out our <span className={styles.orangeSpan}> FAQs</span> or send
          us a <span className={styles.orangeSpan}> message</span>. For
          assistance with launching a contest, you can also call us at
          {TEL_NUMBER} or schedule a
          <span className={styles.orangeSpan}> Branding Consultation</span>
        </div>
      </div>
    </div>
  );
}
