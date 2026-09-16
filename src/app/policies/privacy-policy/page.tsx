"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information", label: "Information We Collect" },
  {
    id: "sensitive",
    label: "Sensitive Personal & Financial Information",
  },
  {
    id: "payment",
    label: "Payment Information",
  },
  {
    id: "purposes",
    label: "Purposes for Which Information Is Used",
  },
  {
    id: "tenant",
    label: "Tenant Responsibility for Customer Data",
  },
  {
    id: "payment-sharing",
    label: "Sharing with Payment Service Providers",
  },
  {
    id: "service-sharing",
    label: "Sharing with Other Service Providers",
  },
  {
    id: "law",
    label: "Disclosure Required by Law",
  },
  {
    id: "consent",
    label: "Consent",
  },
  {
    id: "access",
    label: "Access and Correction",
  },
  {
    id: "retention",
    label: "Retention of Information",
  },
  {
    id: "security",
    label: "Data Security",
  },
  {
    id: "third-party",
    label: "Transfer and Processing by Third Parties",
  },
  {
    id: "children",
    label: "Children and Persons Below 18 Years",
  },
  {
    id: "grievance",
    label: "Grievances and Privacy Contact",
  },
  {
    id: "changes",
    label: "Changes to this Privacy Policy",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] =
    useState("introduction");

  /*
   * Detect the section currently visible
   * in the normal browser page scroll.
   */
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 160;

      let currentSection = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= triggerPoint) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
   * Scroll the complete page to the selected section.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      110;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#071B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3F8FF]">

        <div className="absolute -left-20 top-24 h-52 w-52 rounded-full bg-[#DCEBFF]" />

        <div className="absolute -right-24 top-20 h-56 w-56 rounded-full bg-[#F4E9D9]" />

        <div className="absolute right-[28%] top-0 h-40 w-40 rounded-full bg-[#E2EEFF] blur-2xl" />

        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 pb-20 pt-16 lg:px-12">

          <div className="relative z-10 max-w-[680px]">

            <Link
              href="/policies"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#536581] transition hover:text-[#1264F5]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Policies
            </Link>

            <span className="mb-4 block text-sm font-bold tracking-[0.18em] text-[#A76D32]">
              LEGAL
            </span>

            <h1 className="text-[48px] font-extrabold leading-[1] tracking-[-2px] sm:text-[60px] lg:text-[68px]">
              Privacy{" "}
              <span className="text-[#1264F5]">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              Your trust matters. This Policy explains how
              KarobarOne collects, uses, stores, processes and
              shares your information.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[#627390]">
              <span>
                Effective Date: 10 September 2026
              </span>

              <span className="text-[#1264F5]">
                |
              </span>

              <span>
                Last Updated: 10 September 2026
              </span>
            </div>

          </div>

          {/* Hero Illustration */}

          <div className="relative hidden h-[300px] w-[420px] lg:block">

            <div className="absolute left-8 top-12 h-36 w-52 rounded-[28px] bg-[#CFE2FF]" />

            <div className="absolute right-14 top-2 h-48 w-40 rounded-[24px] bg-[#E2EEFF]" />

            <div className="absolute left-24 top-8 z-10 h-52 w-40 rounded-[18px] border border-white bg-white p-7 shadow-[0_25px_60px_rgba(30,90,180,0.12)]">

              <div className="mx-auto flex h-16 w-14 items-center justify-center bg-[#1264F5] text-2xl font-bold text-white [clip-path:polygon(50%_0,92%_18%,88%_68%,50%_100%,12%_68%,8%_18%)]">
                ✓
              </div>

              <div className="mt-8 h-2 rounded-full bg-[#D9E8FF]" />

              <div className="mt-3 h-2 w-4/5 rounded-full bg-[#D9E8FF]" />

              <div className="mt-3 h-2 w-3/5 rounded-full bg-[#D9E8FF]" />

            </div>

            <div className="absolute -bottom-2 right-0 z-20 w-52 rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(30,90,180,0.12)]">

              <p className="text-sm font-bold leading-5">
                Your data.
              </p>

              <p className="text-sm leading-5 text-[#5E6F8E]">
                Our responsibility.
              </p>

              <span className="absolute right-4 top-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E9D9] text-lg">
                ✓
              </span>

            </div>

            <div className="absolute right-0 top-0 rotate-[-4deg] text-sm font-bold italic leading-5">
              Built for
              <br />
              Indian Businesses

              <div className="mt-2 h-[2px] w-20 rotate-[-5deg] bg-[#1264F5]" />
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          POLICY AREA
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[210px_minmax(0,1fr)_36px]">

          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-8">

              <div className="rounded-xl bg-[#F7FAFE] p-4">

                <h4 className="mb-3 px-2 text-sm font-bold text-[#071B49]">
                  On this page
                </h4>

                <nav className="space-y-1">

                  {sections.map((section) => {
                    const isActive =
                      activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          scrollToSection(section.id)
                        }
                        className={`relative flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[12px] leading-4 transition-all ${
                          isActive
                            ? "bg-[#E8F2FF] font-bold text-[#1264F5] shadow-sm"
                            : "text-[#536581] hover:bg-white hover:text-[#1264F5]"
                        }`}
                      >

                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#1264F5]" />
                        )}

                        <span
                          className={
                            isActive
                              ? "pl-1"
                              : ""
                          }
                        >
                          {section.label}
                        </span>

                      </button>
                    );
                  })}

                </nav>

                <div className="mt-5 rounded-xl bg-white p-4">

                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F2FF] text-[#1264F5]">
                    ✓
                  </div>

                  <p className="text-sm font-bold text-[#071B49]">
                    Your privacy is important to us.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    We are committed to transparent and
                    responsible data practices.
                  </p>

                </div>

              </div>

            </div>

          </aside>

          {/* =================================================
              POLICY CONTENT
              
              IMPORTANT:
              No fixed height.
              No overflow-y-auto.
              Browser/page itself scrolls.
          ================================================= */}

          <article className="min-w-0 pr-4">

            {/* 00 INTRODUCTION */}

            <PolicySection
              id="introduction"
              number="00"
              title="Introduction"
              label="INTRODUCTION"
              active={activeSection === "introduction"}
            >

              <p>
                This Privacy Policy explains how KarobarOne,
                owned and operated by Krishna Waterproof, a
                proprietorship, collects, uses, stores,
                processes and shares personal information in
                connection with the KarobarOne platform and
                related services.
              </p>

              <div className="rounded-xl bg-[#F7FAFE] p-4">

                <p>
                  <strong>Business Address:</strong>{" "}
                  South Kumrakhali, Kolkata – 700103,
                  West Bengal, India
                </p>

                <p>
                  <strong>GSTIN:</strong>{" "}
                  19BBPPG1029N2Z9
                </p>

              </div>

              <p>
                This Privacy Policy should be read together
                with the KarobarOne Terms & Conditions.
              </p>

            </PolicySection>

            {/* 01 INFORMATION */}

            <PolicySection
              id="information"
              number="01"
              title="Information We Collect"
              label="INFORMATION WE COLLECT"
              active={activeSection === "information"}
            >

              <p>
                KarobarOne may collect only such personal and
                business information as is reasonably required
                to provide, secure and administer the Platform.
              </p>

              <p>
                Depending upon how the Platform is used, this
                may include:
              </p>

              <InfoCard
                letter="A"
                title="Tenant and Account Information"
              >

                <BulletList
                  items={[
                    "name;",
                    "email address;",
                    "mobile number;",
                    "business name and address;",
                    "PAN;",
                    "GSTIN where applicable;",
                    "account/login information;",
                    "identity, KYC or business-verification information where required;",
                    "subscription and billing information; and",
                    "communications with KarobarOne.",
                  ]}
                />

              </InfoCard>

              <InfoCard
                letter="B"
                title="Tenant Customer Information"
              >

                <p>
                  Where a Customer interacts with a Store
                  operated through KarobarOne, the Platform may
                  process information such as:
                </p>

                <BulletList
                  items={[
                    "Customer name;",
                    "email address;",
                    "mobile number;",
                    "billing or shipping address;",
                    "order information;",
                    "booking information;",
                    "product or service transaction information;",
                    "payment status or transaction reference;",
                    "delivery/fulfilment information; and",
                    "Customer communications or requests submitted through the Store.",
                  ]}
                />

                <p>
                  The Tenant remains responsible for ensuring
                  that Customer information submitted through
                  its Store is collected lawfully.
                </p>

              </InfoCard>

              <InfoCard
                letter="C"
                title="Technical Information"
              >

                <p>
                  KarobarOne may automatically collect limited
                  technical information required for security,
                  Platform operation or functionality, including:
                </p>

                <BulletList
                  items={[
                    "IP address;",
                    "browser/device information;",
                    "login/session information;",
                    "security logs;",
                    "timestamps; and",
                    "cookie or similar technical information.",
                  ]}
                />

                <p>
                  Further information concerning cookies will
                  be provided in the KarobarOne Cookie Policy.
                </p>

              </InfoCard>

            </PolicySection>

            {/* 02 */}

            <PolicySection
              id="sensitive"
              number="02"
              title="Sensitive Personal and Financial Information"
              active={activeSection === "sensitive"}
            >

              <p>
                KarobarOne may process certain information that
                may be treated as sensitive personal data or
                information under applicable Indian law,
                including account credentials or financial
                information where necessary for providing the
                service.
              </p>

              <p>
                KarobarOne limits collection of such information
                to information reasonably necessary for a
                lawful purpose connected with the Platform.
              </p>

              <p>
                Where consent is legally required, consent may
                be obtained electronically through the relevant
                registration, checkout, account, integration or
                other Platform interface.
              </p>

            </PolicySection>

            {/* 03 */}

            <PolicySection
              id="payment"
              number="03"
              title="Payment Information"
              active={activeSection === "payment"}
            >

              <p>
                Payments may be processed through independent
                Payment Service Providers supported by KarobarOne
                from time to time.
              </p>

              <p>
                When a Customer makes a payment through a Tenant
                Store, payment processing is performed through
                the applicable Payment Service Provider connected
                by the Tenant.
              </p>

              <p>
                KarobarOne does{" "}
                <strong>
                  not intentionally store raw card numbers,
                  CVV/CVC values or other complete
                  payment-instrument credentials
                </strong>{" "}
                on its own systems.
              </p>

              <p>
                Such sensitive payment credentials are intended
                to be collected and processed through the
                applicable authorised Payment Service Provider.
              </p>

              <p>
                KarobarOne may receive and retain limited
                transaction information necessary for Platform
                operation, such as:
              </p>

              <BulletList
                items={[
                  "transaction reference/ID;",
                  "payment status;",
                  "transaction amount;",
                  "payment method category;",
                  "refund status; and",
                  "other non-sensitive transaction information required for reconciliation, Commission calculation, fraud prevention, support or record keeping.",
                ]}
              />

            </PolicySection>

            {/* 04 */}

            <PolicySection
              id="purposes"
              number="04"
              title="Purposes for Which Information Is Used"
              active={activeSection === "purposes"}
            >

              <p>
                KarobarOne may use personal information only
                for lawful purposes reasonably connected with
                providing and administering the Platform,
                including:
              </p>

              <BulletList
                items={[
                  "registering and managing accounts;",
                  "verifying Tenant or business information;",
                  "creating and operating Stores;",
                  "processing subscriptions and billing;",
                  "enabling orders and bookings;",
                  "facilitating payment integrations;",
                  "facilitating shipping and fulfilment integrations;",
                  "maintaining transaction records;",
                  "calculating and reconciling applicable Commission;",
                  "providing customer and technical support;",
                  "preventing fraud, abuse and unauthorised access;",
                  "maintaining Platform security;",
                  "complying with tax, accounting, regulatory and legal obligations;",
                  "responding to grievances or legal requests; and",
                  "improving the security and functioning of the Platform.",
                ]}
              />

              <p>
                Identifiable Tenant Customer information will
                not be used for unrelated direct marketing by
                KarobarOne without an appropriate lawful basis
                or consent.
              </p>

            </PolicySection>

            {/* 05 */}

            <PolicySection
              id="tenant"
              number="05"
              title="Tenant Responsibility for Customer Data"
              active={activeSection === "tenant"}
            >

              <p>
                The Tenant is responsible for the business
                purpose for which it collects information from
                Customers through its Store.
              </p>

              <p>
                The Tenant must:
              </p>

              <BulletList
                items={[
                  "collect Customer information lawfully;",
                  "provide Customers with required notices;",
                  "obtain consent where legally required;",
                  "collect only information reasonably necessary for its lawful business purposes;",
                  "keep Customer information accurate where required; and",
                  "comply with applicable privacy and data-protection requirements.",
                ]}
              />

              <p>
                Where KarobarOne processes Customer information
                in order to provide Platform functionality to
                the Tenant, KarobarOne will process such
                information for the purposes necessary to
                provide, maintain, secure or legally administer
                those services.
              </p>

            </PolicySection>

            {/* 06 */}

            <PolicySection
              id="payment-sharing"
              number="06"
              title="Sharing with Payment Service Providers"
              active={
                activeSection === "payment-sharing"
              }
            >

              <p>
                Where a Tenant or Customer uses an integrated
                Payment Service Provider, information reasonably
                required for payment processing, verification,
                fraud prevention, transaction tracking, refunds
                or compliance may be transmitted to that Payment
                Service Provider.
              </p>

              <p>
                The Tenant is responsible for obtaining any
                Customer consent required for transmitting
                Customer information to its selected Payment
                Service Provider.
              </p>

              <p>
                Payment Service Providers process information
                according to their own privacy policies,
                contractual terms and legal obligations.
              </p>

              <p>
                KarobarOne is not responsible for independently
                controlled processing performed by a Payment
                Service Provider outside KarobarOne&apos;s own
                systems.
              </p>

            </PolicySection>

            {/* 07 */}

            <PolicySection
              id="service-sharing"
              number="07"
              title="Sharing with Other Service Providers"
              active={
                activeSection === "service-sharing"
              }
            >

              <p>
                KarobarOne may share information, only to the
                extent reasonably necessary, with third parties
                that assist in providing the Platform, including:
              </p>

              <BulletList
                items={[
                  "Payment Service Providers;",
                  "Logistics Service Providers;",
                  "hosting or cloud infrastructure providers;",
                  "email/SMS or communication providers;",
                  "analytics or security service providers;",
                  "professional advisers or compliance providers; and",
                  "other technology providers required to operate the Platform.",
                ]}
              />

              <p>
                Such disclosure will be limited to purposes
                connected with the relevant service and subject
                to applicable legal requirements.
              </p>

              <p>
                KarobarOne does not sell Customer personal
                information as a standalone commercial product.
              </p>

            </PolicySection>

            {/* 08 */}

            <PolicySection
              id="law"
              number="08"
              title="Disclosure Required by Law"
              active={activeSection === "law"}
            >

              <p>
                KarobarOne may disclose information where
                reasonably required:
              </p>

              <BulletList
                items={[
                  "by applicable law;",
                  "pursuant to a valid court order;",
                  "pursuant to a lawful request from a government, regulatory, tax, law-enforcement or other competent authority;",
                  "for investigation of fraud or unlawful activity;",
                  "for protection of legal rights; or",
                  "for compliance with applicable statutory obligations.",
                ]}
              />

              <p>
                Only information reasonably required for the
                relevant lawful purpose will be disclosed where
                practicable.
              </p>

            </PolicySection>

            {/* 09 */}

            <PolicySection
              id="consent"
              number="09"
              title="Consent"
              active={activeSection === "consent"}
            >

              <p>
                Where applicable law requires consent for
                collection, use, processing or sharing of
                personal or sensitive information, KarobarOne
                will obtain such consent through an appropriate
                electronic or other legally permitted mechanism.
              </p>

              <p>
                A person should provide only information that
                they are authorised to provide.
              </p>

              <p>
                Consent may be withdrawn where applicable by
                contacting:
              </p>

              <div className="rounded-xl bg-[#F5F9FF] p-4 text-sm">
                <p>assistance@karobarone.com</p>
                <p>karobaroneofficial@gmail.com</p>
              </div>

              <p>
                Withdrawal of consent may affect KarobarOne&apos;s
                ability to continue providing services that
                necessarily depend upon the relevant information.
              </p>

              <p>
                Withdrawal does not invalidate lawful processing
                carried out before the withdrawal and does not
                require deletion of information that must legally
                be retained.
              </p>

            </PolicySection>

            {/* 10 */}

            <PolicySection
              id="access"
              number="10"
              title="Access and Correction"
              active={activeSection === "access"}
            >

              <p>
                A person may request access to or correction of
                personal information held by KarobarOne where
                such right is available under applicable law.
              </p>

              <p>
                Requests may be submitted to:
              </p>

              <div className="rounded-xl bg-[#F5F9FF] p-4 text-sm">
                <p>assistance@karobarone.com</p>
                <p>karobaroneofficial@gmail.com</p>
              </div>

              <p>
                KarobarOne may require reasonable identity
                verification before acting on such a request.
              </p>

              <p>
                KarobarOne may retain information that cannot
                legally be altered or deleted, including certain
                transaction, invoice, tax, accounting,
                fraud-prevention or statutory records.
              </p>

            </PolicySection>

            {/* 11 */}

            <PolicySection
              id="retention"
              number="11"
              title="Retention of Information"
              active={activeSection === "retention"}
            >

              <p>
                KarobarOne will not retain personal information
                longer than reasonably necessary for the purpose
                for which it was collected, except where
                continued retention is required or permitted
                for purposes including:
              </p>

              <BulletList
                items={[
                  "taxation;",
                  "GST compliance;",
                  "accounting;",
                  "invoicing;",
                  "transaction records;",
                  "Commission reconciliation;",
                  "contractual claims;",
                  "fraud prevention;",
                  "security;",
                  "dispute resolution; or",
                  "compliance with applicable law.",
                ]}
              />

              <p>
                When information is no longer reasonably or
                legally required, it may be deleted, anonymised
                or otherwise securely disposed of in accordance
                with applicable requirements.
              </p>

            </PolicySection>

            {/* 12 */}

            <PolicySection
              id="security"
              number="12"
              title="Data Security"
              active={activeSection === "security"}
            >

              <p>
                KarobarOne implements reasonable security
                practices and procedures appropriate to the
                nature of the information processed.
              </p>

              <p>
                These may include measures such as:
              </p>

              <BulletList
                items={[
                  "access controls;",
                  "authentication controls;",
                  "encryption of data in transit where appropriate;",
                  "restricted administrative access;",
                  "secure credential handling;",
                  "database and Tenant-access controls;",
                  "security logging;",
                  "backup procedures;",
                  "infrastructure security controls; and",
                  "monitoring for unauthorised access or misuse.",
                ]}
              />

              <p>
                KarobarOne restricts access to personal
                information to persons or service providers
                that reasonably require access for authorised
                purposes.
              </p>

              <p>
                No internet-based system can provide an absolute
                guarantee of security. KarobarOne will
                nevertheless maintain reasonable safeguards
                required under applicable law.
              </p>

            </PolicySection>

            {/* 13 */}

            <PolicySection
              id="third-party"
              number="13"
              title="Transfer and Processing by Third Parties"
              active={
                activeSection === "third-party"
              }
            >

              <p>
                Information may be processed through third-party
                technology or infrastructure providers in India
                or, where legally permitted, in another
                jurisdiction.
              </p>

              <p>
                Where personal or sensitive information is
                transferred to another person or service
                provider, KarobarOne will take reasonable steps
                to ensure that the transfer is permitted under
                applicable law and that appropriate protection
                applies to the information.
              </p>

            </PolicySection>

            {/* 14 */}

            <PolicySection
              id="children"
              number="14"
              title="Children and Persons Below 18 Years"
              active={
                activeSection === "children"
              }
            >

              <p>
                A person below 18 years may be associated with
                a KarobarOne Tenant account only in accordance
                with the KarobarOne Terms & Conditions and where
                legally permissible.
              </p>

              <p>
                Where parental or lawful guardian consent is
                required for processing information relating to
                such person, KarobarOne may require appropriate
                consent or verification before permitting the
                relevant account or processing activity.
              </p>

            </PolicySection>

            {/* 15 */}

            <PolicySection
              id="grievance"
              number="15"
              title="Grievances and Privacy Contact"
              active={
                activeSection === "grievance"
              }
            >

              <p>
                Questions, complaints or requests concerning
                personal information or this Privacy Policy may
                be submitted to:
              </p>

              <ContactCard />

              <p>
                KarobarOne will address privacy grievances within
                the period prescribed under applicable Indian law.
              </p>

              <p>
                Where more than one legally applicable grievance
                timeline applies, KarobarOne will follow the
                applicable statutory requirement.
              </p>

            </PolicySection>

            {/* 16 */}

            <PolicySection
              id="changes"
              number="16"
              title="Changes to this Privacy Policy"
              active={activeSection === "changes"}
            >

              <p>
                KarobarOne may update this Privacy Policy where
                required because of changes in:
              </p>

              <BulletList
                items={[
                  "applicable law;",
                  "Platform operation;",
                  "data-processing practices; or",
                  "Third-Party Services.",
                ]}
              />

              <p>
                The updated version will be published with a
                revised “Last Updated” date.
              </p>

              <p>
                Where legally required, appropriate notice or
                consent will be obtained before materially
                different processing is undertaken.
              </p>

            </PolicySection>

            {/* 17 */}

            <PolicySection
              id="contact"
              number="17"
              title="Contact"
              active={activeSection === "contact"}
            >

              <ContactCard />

            </PolicySection>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#EAF3FF] px-4 py-2.5 text-xs font-bold text-[#1264F5] transition hover:bg-[#DDEBFF]"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </button>

          </article>

          {/* =================================================
              RIGHT PROGRESS
          ================================================= */}

          <div className="relative hidden lg:block">

            <div className="sticky top-10 flex max-h-[calc(100vh-120px)] flex-col items-center">

              <div className="absolute top-2 bottom-2 w-px bg-[#DCE9F8]" />

              <div className="relative flex max-h-[calc(100vh-140px)] flex-col justify-between gap-5">

                {sections.map((section) => {
                  const isActive =
                    activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() =>
                        scrollToSection(section.id)
                      }
                      aria-label={section.label}
                      className="group relative z-10 flex items-center justify-center"
                    >

                      <span
                        className={`h-2.5 w-2.5 rounded-full border-2 transition-all ${
                          isActive
                            ? "border-[#1264F5] bg-[#1264F5] shadow-[0_0_0_5px_#E8F2FF]"
                            : "border-[#AFC6E6] bg-white"
                        }`}
                      />

                    </button>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   POLICY SECTION
========================================================= */

function PolicySection({
  id,
  number,
  title,
  label,
  active = false,
  children,
}: {
  id: string;
  number: string;
  title: string;
  label?: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t py-12 transition-all first:border-t-0 first:pt-0 ${
        active
          ? "border-[#CFE2FF]"
          : "border-[#E8EFF8]"
      }`}
    >

      <div className="flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-all ${
            active
              ? "bg-[#1264F5] text-white shadow-[0_6px_18px_rgba(18,100,245,0.22)]"
              : "bg-[#E8F2FF] text-[#1264F5]"
          }`}
        >
          {number}
        </div>

        <div className="min-w-0">

          {label && (
            <span
              className={`text-[10px] font-bold tracking-[0.18em] ${
                active
                  ? "text-[#1264F5]"
                  : "text-[#A76D32]"
              }`}
            >
              {label}
            </span>
          )}

          <h2
            className={`mt-1 text-2xl font-bold leading-tight tracking-tight transition-all sm:text-[26px] ${
              active
                ? "text-[#1264F5]"
                : "text-[#071B49]"
            }`}
          >
            {title}
          </h2>

        </div>

      </div>

      <div className="mt-5 space-y-4 text-[14px] leading-7 text-[#506486]">
        {children}
      </div>

    </section>
  );
}

/* =========================================================
   INFORMATION CARD
========================================================= */

function InfoCard({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 rounded-xl border border-[#DDE9F8] bg-white p-5">

      <div className="flex items-center gap-3">

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold ${
            letter === "B"
              ? "bg-[#F4E9D9] text-[#9A642F]"
              : "bg-[#E8F2FF] text-[#1264F5]"
          }`}
        >
          {letter}
        </span>

        <h3 className="text-sm font-bold text-[#142B55]">
          {title}
        </h3>

      </div>

      <div className="mt-4 text-sm leading-6 text-[#526584]">
        {children}
      </div>

    </div>
  );
}

/* =========================================================
   BULLET LIST
========================================================= */

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard() {
  return (
    <div className="mt-5 rounded-2xl bg-[#F3F8FF] p-6">

      <p className="font-bold text-[#071B49]">
        KarobarOne
      </p>

      <p className="mt-2 text-sm leading-6 text-[#526584]">
        Owned and operated by Krishna Waterproof,
        a proprietorship.
        <br />
        <strong>GSTIN:</strong> 19BBPPG1029N2Z9
        <br />
        South Kumrakhali, Kolkata – 700103,
        West Bengal, India.
      </p>

      <div className="mt-5 space-y-3 text-sm text-[#526584]">

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-[#1264F5]" />
          <span>assistance@karobarone.com</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-[#1264F5]" />
          <span>
            karobaroneofficial@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0 text-[#1264F5]" />
          <span>+91 96746 65053</span>
        </div>

        <div className="pt-1 text-sm">
          <strong>Chief Grievance Officer:</strong>{" "}
          Mr. Ghosh
        </div>

      </div>

    </div>
  );
}