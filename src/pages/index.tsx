import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <span className={styles.heroBadge}>In development · Private preview 2026</span>
      <h1 className={styles.heroTitle}>Dentistry, finally modern.</h1>
      <p className={styles.heroSubtitle}>
        Cuspra is a cloud-native practice management system built for the way
        dental teams actually work — fast, intuitive, and quietly powerful.
      </p>
      <div className={styles.heroCtas}>
        <Link className={styles.primaryCta} to="/contact">
          Request access
        </Link>
        <Link className={styles.linkCta} to="/platform">
          Explore the platform ›
        </Link>
      </div>
      <div className={styles.heroVisual} aria-hidden="true" />
    </section>
  );
}

function ProductTiles(): ReactNode {
  return (
    <section className={styles.tileSection}>
      <div className={styles.tileGrid}>
        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Clinical</span>
          <h2 className={styles.tileTitle}>Charting that keeps up.</h2>
          <p className={styles.tileSubtitle}>
            Tooth, perio, and restorative charting designed around the
            chairside workflow — not the database.
          </p>
          <Link className={styles.tileLink} to="/clinical">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">⌬</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Practice</span>
          <h2 className={styles.tileTitle}>One schedule. Every operatory.</h2>
          <p className={styles.tileSubtitle}>
            Multi-provider, multi-location scheduling with recall and
            reactivation built in.
          </p>
          <Link className={styles.tileLink} to="/practice">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">▦</div>
        </article>

        <article className={`${styles.tile} ${styles.tileFull}`}>
          <span className={styles.tileEyebrow}>Patients</span>
          <h2 className={styles.tileTitle}>
            A patient experience your team can actually be proud of.
          </h2>
          <p className={styles.tileSubtitle}>
            Online booking, paperless intake, two-way messaging, and a portal
            that patients don&apos;t hate.
          </p>
          <Link className={styles.tileLink} to="/patients">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">◐</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Imaging</span>
          <h2 className={styles.tileTitle}>Images, where the chart lives.</h2>
          <p className={styles.tileSubtitle}>
            DICOM-native imaging integrated directly with the clinical record.
            No second monitor required.
          </p>
          <Link className={styles.tileLink} to="/clinical">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">◯</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Billing</span>
          <h2 className={styles.tileTitle}>Claims that just go out.</h2>
          <p className={styles.tileSubtitle}>
            Insurance verification, claims, ERA posting, and patient billing —
            in one place, in real time.
          </p>
          <Link className={styles.tileLink} to="/practice">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">⊞</div>
        </article>
      </div>
    </section>
  );
}

function Modules(): ReactNode {
  const items = [
    { icon: '🦷', title: 'Clinical charting', desc: 'Tooth, perio, restorative, and treatment plans on a unified canvas.' },
    { icon: '📅', title: 'Scheduling', desc: 'Multi-operatory, multi-provider, multi-location — with recall.' },
    { icon: '🩻', title: 'Imaging', desc: 'DICOM-native intraoral, panoramic, and 3D image management.' },
    { icon: '💳', title: 'Billing & claims', desc: 'Insurance verification, claims, ERA posting, patient billing.' },
    { icon: '💬', title: 'Patient comms', desc: 'Two-way SMS, email, reminders, recalls, and confirmations.' },
    { icon: '🪪', title: 'Patient portal', desc: 'Online booking, paperless intake, and self-service payments.' },
    { icon: '📊', title: 'Reporting', desc: 'Production, collections, recall, and provider performance — live.' },
    { icon: '🔐', title: 'HIPAA-grade', desc: 'Built for compliance from day one. Audit logs and access controls.' },
    { icon: '🌐', title: 'Cloud-native', desc: 'No servers in the closet. Works on any device with a browser.' },
  ];

  return (
    <section className={styles.modulesSection}>
      <p className={styles.sectionEyebrow}>The Cuspra platform</p>
      <h2 className={styles.sectionTitle}>One system. Every part of the practice.</h2>
      <p className={styles.sectionSubtitle}>
        Cuspra unifies the modules a modern dental practice depends on. No
        bridges, no third-party glue, no duct tape.
      </p>
      <div className={styles.moduleGrid}>
        {items.map((m) => (
          <div key={m.title} className={styles.module}>
            <div className={styles.moduleIcon}>{m.icon}</div>
            <h3 className={styles.moduleTitle}>{m.title}</h3>
            <p className={styles.moduleDesc}>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing(): ReactNode {
  return (
    <section className={styles.closingSection}>
      <h2 className={styles.closingTitle}>Be early. Shape the platform.</h2>
      <p className={styles.closingSubtitle}>
        Cuspra is in active development. Join the private preview to give
        feedback that shapes the product before launch.
      </p>
      <div className={styles.closingCtas}>
        <Link className={styles.primaryCta} to="/contact">
          Request access
        </Link>
        <Link className={styles.linkCta} to="/company">
          About Cuspra ›
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Cuspra — The dental practice management system, reimagined."
      description="Cuspra is a modern, cloud-native dental practice management system covering scheduling, charting, imaging, billing, and patient communications.">
      <div className={styles.page}>
        <Hero />
        <ProductTiles />
        <Modules />
        <Closing />
      </div>
    </Layout>
  );
}
