import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Platform(): ReactNode {
  return (
    <Layout title="Platform — Cuspra" description="The Cuspra dental practice management platform.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Platform</p>
        <h1 className={styles.title}>One platform for the entire practice.</h1>
        <p className={styles.subtitle}>
          Cuspra unifies clinical, scheduling, imaging, billing, and patient
          experience — without third-party bridges. Detailed product pages
          arrive alongside the private preview.
        </p>
        <Link className={styles.cta} to="/contact">Request access</Link>
      </section>
    </Layout>
  );
}
