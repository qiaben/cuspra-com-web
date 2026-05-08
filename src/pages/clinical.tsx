import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Clinical(): ReactNode {
  return (
    <Layout title="Clinical — Cuspra" description="Cuspra clinical charting, imaging, and treatment planning.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Clinical</p>
        <h1 className={styles.title}>Charting and imaging, on one canvas.</h1>
        <p className={styles.subtitle}>
          Tooth, perio, and restorative charting with DICOM-native imaging
          integrated directly into the clinical record. Detailed walkthroughs
          coming soon.
        </p>
        <Link className={styles.cta} to="/contact">Request access</Link>
      </section>
    </Layout>
  );
}
