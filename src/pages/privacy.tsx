import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout title="Privacy — Cuspra" description="Cuspra privacy policy.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.title}>Privacy</h1>
        <p className={styles.subtitle}>
          Our full privacy policy will be published here ahead of general
          availability. For questions in the meantime, contact{' '}
          <a href="mailto:privacy@cuspra.com">privacy@cuspra.com</a>.
        </p>
      </section>
    </Layout>
  );
}
