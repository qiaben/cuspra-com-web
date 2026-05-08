import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy — Cuspra"
      description="Cuspra Privacy Policy. How Qiaben LLC collects, uses, and protects information for the Cuspra dental practice management platform.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Privacy Policy</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 8, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 8, 2026
          </p>

          <p>
            Cuspra is a product of Qiaben LLC (&ldquo;Qiaben,&rdquo;
            &ldquo;Cuspra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). This Privacy Policy explains how we collect,
            use, disclose, and safeguard information when you visit{' '}
            <a href="https://cuspra.com">cuspra.com</a> or use the Cuspra
            dental practice management platform and related services
            (collectively, the &ldquo;Services&rdquo;).
          </p>

          <Heading as="h2">1. Scope</Heading>
          <p>
            This policy covers our marketing website, the Cuspra application,
            and any APIs, integrations, and support channels we operate. It
            does not cover third-party websites or services that link to or
            from Cuspra.
          </p>

          <Heading as="h2">2. Information We Collect</Heading>
          <Heading as="h3">Information you provide</Heading>
          <ul>
            <li>
              <strong>Account information:</strong> name, email, phone,
              practice name, role, and credentials when you sign up or are
              invited.
            </li>
            <li>
              <strong>Practice configuration:</strong> operatories, providers,
              fee schedules, schedule rules, and other settings you configure.
            </li>
            <li>
              <strong>Communications:</strong> messages, attachments, and
              support tickets you send to us.
            </li>
            <li>
              <strong>Billing information:</strong> payment details processed
              by our payment processors. We do not store full card numbers.
            </li>
          </ul>
          <Heading as="h3">Information collected automatically</Heading>
          <ul>
            <li>
              <strong>Usage data:</strong> pages and features accessed, IP
              address, device, browser, and timestamps.
            </li>
            <li>
              <strong>Cookies:</strong> we use cookies and similar
              technologies for authentication, preferences, and product
              analytics. We do not sell your information for advertising.
            </li>
            <li>
              <strong>Logs and telemetry:</strong> application logs and error
              reports for reliability and security.
            </li>
          </ul>
          <Heading as="h3">Patient health information (PHI)</Heading>
          <p>
            Cuspra is designed to handle Protected Health Information for
            dental practices. PHI is processed under your direction as a
            covered entity or business associate. We process PHI strictly to
            provide the Services and as governed by a Business Associate
            Agreement (BAA) with your organization.
          </p>

          <Heading as="h2">3. How We Use Information</Heading>
          <ul>
            <li>To provide, operate, secure, and improve the Services.</li>
            <li>To authenticate users and prevent fraud or abuse.</li>
            <li>To provide customer support and respond to inquiries.</li>
            <li>
              To send service updates, billing notices, and security alerts.
            </li>
            <li>
              For product analytics in aggregated, de-identified form to
              improve usability and reliability.
            </li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell personal information, and we do
            not use PHI for marketing.
          </p>

          <Heading as="h2">4. HIPAA and Patient Data Protection</Heading>
          <p>
            Cuspra is built to support HIPAA-regulated workflows. Practices
            that process PHI through Cuspra must enter into a BAA with
            Qiaben. We implement administrative, physical, and technical
            safeguards including encryption in transit and at rest,
            role-based access control, audit logging, and least-privilege
            production access.
          </p>

          <Heading as="h2">5. Sharing and Disclosure</Heading>
          <p>We share information only as needed to operate the Services:</p>
          <ul>
            <li>
              <strong>Subprocessors:</strong> cloud hosting, email and SMS
              providers, payment processors, and analytics tools that operate
              under contractual data-protection obligations.
            </li>
            <li>
              <strong>At your direction:</strong> integrations and exports
              you initiate (for example, claims clearinghouses or imaging
              systems).
            </li>
            <li>
              <strong>Legal requirements:</strong> when required by law,
              subpoena, or valid legal process.
            </li>
            <li>
              <strong>Business transfers:</strong> in connection with a
              merger, acquisition, or sale of assets, subject to
              confidentiality protections.
            </li>
          </ul>
          <p>
            A current list of subprocessors is available on request from{' '}
            <a href="mailto:privacy@qiaben.com">privacy@qiaben.com</a>.
          </p>

          <Heading as="h2">6. Data Retention</Heading>
          <p>
            We retain personal information for as long as your account is
            active or as needed to provide the Services and to comply with
            legal obligations, resolve disputes, and enforce agreements. PHI
            retention follows the terms of the applicable BAA and the
            customer&apos;s record-retention requirements.
          </p>

          <Heading as="h2">7. Security</Heading>
          <p>
            We use industry-standard safeguards including TLS encryption in
            transit, encryption at rest, MFA for administrative access,
            audit logging, vulnerability scanning, and regular access
            reviews. No system is perfectly secure; we maintain an incident
            response process and notify affected customers consistent with
            applicable law and our BAA.
          </p>

          <Heading as="h2">8. Your Rights</Heading>
          <p>
            Depending on where you live, you may have rights to access,
            correct, delete, or port your personal information, or to object
            to or restrict certain processing. To exercise these rights,
            contact <a href="mailto:privacy@qiaben.com">privacy@qiaben.com</a>.
            For PHI, contact your practice — we act on PHI only at the
            direction of the covered entity.
          </p>

          <Heading as="h2">9. International Users</Heading>
          <p>
            Cuspra is operated from the United States. If you access the
            Services from outside the U.S., you understand that your
            information may be transferred to and processed in the U.S.
          </p>

          <Heading as="h2">10. Children&apos;s Privacy</Heading>
          <p>
            Cuspra is intended for use by dental practices and is not
            directed to children under 13. We do not knowingly collect
            personal information directly from children. PHI about minor
            patients is processed under the direction of the practice.
          </p>

          <Heading as="h2">11. Changes to This Policy</Heading>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be communicated via the Services or by email. The
            &ldquo;Last Updated&rdquo; date at the top reflects the most
            recent revision.
          </p>

          <Heading as="h2">12. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Qiaben LLC</strong></li>
            <li>1309 Coffeen Avenue, STE 1200</li>
            <li>Sheridan, WY 82801</li>
            <li>
              Privacy:{' '}
              <a href="mailto:privacy@qiaben.com">privacy@qiaben.com</a>
            </li>
            <li>
              General: <a href="mailto:info@qiaben.com">info@qiaben.com</a>
            </li>
            <li>
              Web: <a href="https://qiaben.com">qiaben.com</a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
