import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Terms(): ReactNode {
  return (
    <Layout title="Terms — Cuspra" description="Cuspra terms of service.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.title}>Terms</h1>
        <p className={styles.subtitle}>
          Our full terms of service will be published here ahead of general
          availability. For questions in the meantime, contact{' '}
          <a href="mailto:legal@cuspra.com">legal@cuspra.com</a>.
        </p>
      </section>
    </Layout>
  );
}
