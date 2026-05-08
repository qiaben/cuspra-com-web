import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Patients(): ReactNode {
  return (
    <Layout title="Patients — Cuspra" description="Cuspra patient experience: portal, intake, messaging.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Patients</p>
        <h1 className={styles.title}>An experience patients won&apos;t complain about.</h1>
        <p className={styles.subtitle}>
          Online booking, paperless intake, two-way messaging, reminders, and
          a portal that respects the patient&apos;s time. Detailed product
          pages arrive with the private preview.
        </p>
        <Link className={styles.cta} to="/contact">Request access</Link>
      </section>
    </Layout>
  );
}
