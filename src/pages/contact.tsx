import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Cuspra"
      description="Contact Cuspra, a Qiaben product. Request access to the private preview or get in touch.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1 className={styles.title}>Talk to the team behind Cuspra.</h1>
        <p className={styles.subtitle}>
          Cuspra is built by Qiaben. We&apos;re partnering with select practices
          for the private preview — tell us about yours and we&apos;ll reach out.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Email</div>
            <a className={styles.contactValue} href="mailto:info@qiaben.com">
              info@qiaben.com
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Book a call</div>
            <a
              className={styles.contactValue}
              href="https://calendly.com/qiaben/cuspra"
              target="_blank"
              rel="noopener noreferrer">
              calendly.com/qiaben/cuspra
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Web</div>
            <a
              className={styles.contactValue}
              href="https://qiaben.com"
              target="_blank"
              rel="noopener noreferrer">
              qiaben.com
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Mailing address</div>
            <div className={styles.contactValue}>
              Qiaben LLC
              <br />
              1309 Coffeen Avenue, STE 1200
              <br />
              Sheridan, WY 82801
            </div>
          </div>
        </div>

        <a className={styles.cta} href="mailto:info@qiaben.com?subject=Cuspra%20private%20preview">
          Request access
        </a>
      </section>
    </Layout>
  );
}
