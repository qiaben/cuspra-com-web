import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Company(): ReactNode {
  return (
    <Layout title="Company — Cuspra" description="About Cuspra.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Company</p>
        <h1 className={styles.title}>Built by people who think dentistry deserves better software.</h1>
        <p className={styles.subtitle}>
          Cuspra is a privately held software company building the next
          generation of dental practice management. We&apos;re currently in
          active development and partnering with select practices for the
          private preview.
        </p>
        <Link className={styles.cta} to="/contact">Get in touch</Link>
      </section>
    </Layout>
  );
}
