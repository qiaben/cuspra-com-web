import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroVisual(): ReactNode {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <div className={styles.mockApp}>
        <aside className={styles.mockSidebar}>
          <div className={styles.mockBrand}>Cuspra</div>
          <ul className={styles.mockNav}>
            <li className={styles.active}>Today</li>
            <li>Schedule</li>
            <li>Patients</li>
            <li>Charting</li>
            <li>Imaging</li>
            <li>Billing</li>
            <li>Reports</li>
          </ul>
        </aside>
        <div className={styles.mockMain}>
          <div className={styles.mockHeader}>
            <div className={styles.mockHeaderTitle}>Today at Bayside Dental</div>
            <div className={styles.mockHeaderDate}>Tuesday · 18 appointments</div>
          </div>
          <div className={styles.mockKpis}>
            <div className={styles.mockKpi}>
              <div className={styles.mockKpiLabel}>Production</div>
              <div className={styles.mockKpiValue}>$8,420</div>
              <div className={styles.mockKpiDelta}>▲ 12% vs avg</div>
            </div>
            <div className={styles.mockKpi}>
              <div className={styles.mockKpiLabel}>Collections</div>
              <div className={styles.mockKpiValue}>$6,910</div>
              <div className={styles.mockKpiDelta}>▲ 6%</div>
            </div>
            <div className={styles.mockKpi}>
              <div className={styles.mockKpiLabel}>Recall due</div>
              <div className={styles.mockKpiValue}>34</div>
              <div className={styles.mockKpiDelta}>4 confirmed</div>
            </div>
            <div className={styles.mockKpi}>
              <div className={styles.mockKpiLabel}>Open claims</div>
              <div className={styles.mockKpiValue}>11</div>
              <div className={styles.mockKpiDelta}>2 to resubmit</div>
            </div>
          </div>
          <div className={styles.mockSchedule}>
            <div className={styles.mockScheduleHead}>
              <span>Op 1 · Dr. Patel</span>
              <span>9:00 — 12:00</span>
            </div>
            <div className={styles.mockSlot}>
              <span>9:00</span>
              <span>Maria L. · Crown seat #14</span>
              <span className={`${styles.mockSlotPill} ${styles.mockSlotPillSuccess}`}>Arrived</span>
            </div>
            <div className={styles.mockSlot}>
              <span>10:00</span>
              <span>Jordan T. · Hygiene + bitewings</span>
              <span className={styles.mockSlotPill}>Confirmed</span>
            </div>
            <div className={styles.mockSlot}>
              <span>11:00</span>
              <span>Avery K. · New patient exam</span>
              <span className={`${styles.mockSlotPill} ${styles.mockSlotPillWarn}`}>Intake pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <span className={styles.heroBadge}>In development · Private preview 2026</span>
      <h1 className={styles.heroTitle}>
        Dentistry, finally <span className={styles.gradientText}>modern</span>.
      </h1>
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
      <HeroVisual />
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
      <h2 className={styles.sectionTitle}>
        One system.{' '}
        <span className={styles.gradientText}>Every part of the practice.</span>
      </h2>
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
      <h2 className={styles.closingTitle}>
        Be early.{' '}
        <span className={styles.gradientText}>Shape the platform.</span>
      </h2>
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
