import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Terms(): ReactNode {
  return (
    <Layout
      title="Terms of Service — Cuspra"
      description="Cuspra Terms of Service. The terms governing use of the Cuspra dental practice management platform, a Qiaben LLC product.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Terms of Service</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 8, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 8, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access
            to and use of the Cuspra dental practice management platform,
            the website at <a href="https://cuspra.com">cuspra.com</a>, and
            any related services (collectively, the &ldquo;Services&rdquo;)
            provided by Qiaben LLC (&ldquo;Qiaben,&rdquo;
            &ldquo;Cuspra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), a limited liability company organized under
            the laws of Wyoming. By accessing or using the Services, you
            agree to these Terms.
          </p>

          <Heading as="h2">1. Eligibility and Accounts</Heading>
          <p>
            You must be at least 18 years old (or the age of majority in
            your jurisdiction) to use the Services. If you use the Services
            on behalf of an organization, you represent that you have
            authority to bind that organization to these Terms. You are
            responsible for the confidentiality of your credentials and for
            all activity under your account.
          </p>

          <Heading as="h2">2. The Services</Heading>
          <p>
            Cuspra is a cloud-native practice management system for dental
            practices. The Services may include scheduling, clinical
            charting, imaging, billing and claims, patient communications,
            reporting, and related functionality. Cuspra is currently in
            active development; specific features, availability, and
            performance may change as the product evolves.
          </p>

          <Heading as="h2">3. Subscription, Fees, and Trials</Heading>
          <p>
            Paid plans, fees, and trial terms are set out in your
            order form or subscription agreement with Qiaben. Unless stated
            otherwise, fees are non-refundable. We may change fees with
            advance notice as provided in your order form or these Terms.
          </p>

          <Heading as="h2">4. Acceptable Use</Heading>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any unlawful purpose or in violation of any applicable regulation, including HIPAA.</li>
            <li>Attempt to gain unauthorized access to the Services or any related systems or networks.</li>
            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            <li>Reverse-engineer, decompile, or disassemble the Services except as expressly permitted by law.</li>
            <li>Upload or transmit malware, or content that is unlawful, infringing, or harmful.</li>
            <li>Use the Services to store or process PHI without a valid Business Associate Agreement (BAA) with Qiaben.</li>
            <li>Resell, sublicense, or provide the Services to third parties except as expressly authorized.</li>
          </ul>

          <Heading as="h2">5. Customer Data and Ownership</Heading>
          <p>
            As between you and Qiaben, you and your patients retain
            ownership of all data you submit to the Services
            (&ldquo;Customer Data&rdquo;), including PHI. You grant Qiaben a
            limited, non-exclusive license to host, process, and transmit
            Customer Data solely as needed to provide the Services and as
            permitted by these Terms, your order form, and any applicable
            BAA.
          </p>

          <Heading as="h2">6. HIPAA and PHI</Heading>
          <p>
            Cuspra is designed to support HIPAA-regulated workflows.
            Customers that process PHI through Cuspra must enter into a BAA
            with Qiaben. The BAA, together with these Terms and the
            applicable order form, governs the parties&apos; obligations
            with respect to PHI. In the event of a conflict between the BAA
            and these Terms regarding PHI, the BAA controls.
          </p>

          <Heading as="h2">7. Healthcare Disclaimer</Heading>
          <p>
            Cuspra is a software tool intended to assist dental
            professionals. It is <strong>not</strong> a substitute for
            professional clinical judgment, diagnosis, or treatment. You are
            solely responsible for clinical decisions and for compliance
            with applicable healthcare laws and standards of care.
          </p>

          <Heading as="h2">8. Privacy</Heading>
          <p>
            Our handling of personal information is described in the{' '}
            <a href="/privacy">Privacy Policy</a>, which is incorporated
            into these Terms.
          </p>

          <Heading as="h2">9. Intellectual Property</Heading>
          <p>
            Qiaben, Cuspra, and our logos are trademarks of Qiaben LLC. The
            Services, including all software, content, and design, are the
            property of Qiaben or its licensors and are protected by
            intellectual-property laws. Subject to these Terms, we grant you
            a limited, non-exclusive, non-transferable right to use the
            Services for your internal business purposes during the
            subscription term.
          </p>

          <Heading as="h2">10. Beta and Preview Features</Heading>
          <p>
            From time to time we may make pre-release, alpha, beta, or
            preview features available. These are provided
            &ldquo;as-is&rdquo; without warranty of any kind, may change
            materially before general availability, and may be discontinued
            at any time.
          </p>

          <Heading as="h2">11. Disclaimer of Warranties</Heading>
          <p>
            THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
            EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
            SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
          </p>

          <Heading as="h2">12. Limitation of Liability</Heading>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR
            GOODWILL, ARISING FROM OR RELATING TO THESE TERMS OR THE
            SERVICES. QIABEN&apos;S TOTAL CUMULATIVE LIABILITY ARISING FROM
            OR RELATING TO THESE TERMS WILL NOT EXCEED THE FEES PAID OR
            PAYABLE BY YOU TO QIABEN FOR THE SERVICES IN THE TWELVE (12)
            MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          </p>

          <Heading as="h2">13. Indemnification</Heading>
          <p>
            You agree to indemnify, defend, and hold harmless Qiaben and
            its officers, directors, employees, and contractors from and
            against any claims, damages, losses, liabilities, and expenses
            (including reasonable attorneys&apos; fees) arising out of or
            relating to your use of the Services, your Customer Data, or
            your breach of these Terms.
          </p>

          <Heading as="h2">14. Term and Termination</Heading>
          <p>
            These Terms apply for as long as you use the Services. We may
            suspend or terminate access for material breach (including
            non-payment) or to comply with law. On termination, your right
            to use the Services ceases. Sections that by their nature should
            survive termination will survive.
          </p>

          <Heading as="h2">15. Governing Law and Disputes</Heading>
          <p>
            These Terms are governed by the laws of the State of Wyoming,
            without regard to its conflict-of-law principles. The parties
            consent to the exclusive jurisdiction of the state and federal
            courts located in Sheridan County, Wyoming, for any dispute
            arising under these Terms, except either party may seek
            injunctive relief in any court of competent jurisdiction.
          </p>

          <Heading as="h2">16. Changes to These Terms</Heading>
          <p>
            We may update these Terms from time to time. If we make material
            changes, we will provide notice through the Services or by
            email. Your continued use of the Services after the effective
            date of the updated Terms constitutes acceptance of the
            updates.
          </p>

          <Heading as="h2">17. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Qiaben LLC</strong></li>
            <li>1309 Coffeen Avenue, STE 1200</li>
            <li>Sheridan, WY 82801</li>
            <li>
              Legal: <a href="mailto:legal@qiaben.com">legal@qiaben.com</a>
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
