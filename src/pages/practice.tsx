import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Practice(): ReactNode {
  return (
    <Layout title="Practice — Cuspra" description="Cuspra scheduling, billing, claims, and operations.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Practice</p>
        <h1 className={styles.title}>The business side of dentistry, simplified.</h1>
        <p className={styles.subtitle}>
          Multi-operatory scheduling, insurance verification, claims, ERA
          posting, recall, and reporting — all in one system. Detailed product
          pages arrive with the private preview.
        </p>
        <Link className={styles.cta} to="/contact">Request access</Link>
      </section>
    </Layout>
  );
}
