import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout title="Request access — Cuspra" description="Request access to the Cuspra private preview.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Request access</p>
        <h1 className={styles.title}>Join the Cuspra private preview.</h1>
        <p className={styles.subtitle}>
          Tell us about your practice and we&apos;ll be in touch. Email us at{' '}
          <a href="mailto:hello@cuspra.com">hello@cuspra.com</a>.
        </p>
        <a className={styles.cta} href="mailto:hello@cuspra.com">Email hello@cuspra.com</a>
      </section>
    </Layout>
  );
}
