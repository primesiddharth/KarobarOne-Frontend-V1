"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Mail, Phone } from "lucide-react";

const sections = [
  {
    id: "introduction",
    label: "Introduction",
    number: "00",
  },
  {
    id: "scope",
    label: "Scope",
    number: "01",
  },
  {
    id: "minimum-commitment",
    label: "Initial Minimum Subscription Commitment",
    number: "02",
  },
  {
    id: "before-third-month",
    label: "Cancellation Before the Third Month",
    number: "03",
  },
  {
    id: "continuation",
    label: "Continuation After the Third Month",
    number: "04",
  },
  {
    id: "after-commitment",
    label: "Cancellation After the Initial Commitment",
    number: "05",
  },
  {
    id: "how-to-cancel",
    label: "How to Request Cancellation",
    number: "06",
  },
  {
    id: "general-refund",
    label: "General Refund Rule",
    number: "07",
  },
  {
    id: "credits",
    label: "Billing Credits and Reimbursements",
    number: "08",
  },
  {
    id: "exceptional-refunds",
    label: "Exceptional Monetary Refunds",
    number: "09",
  },
  {
    id: "refund-process",
    label: "Refund Request and Processing Timeline",
    number: "10",
  },
  {
    id: "failed-payments",
    label: "Failed or Duplicate Payments",
    number: "11",
  },
  {
    id: "payment-failure",
    label: "Payment Failure and Non-Renewal",
    number: "12",
  },
  {
    id: "commission",
    label: "Commission and Other Commercial Adjustments",
    number: "13",
  },
  {
    id: "third-party",
    label: "Third-Party Charges",
    number: "14",
  },
  {
    id: "statutory-rights",
    label: "Statutory Rights",
    number: "15",
  },
  {
    id: "contact",
    label: "Contact",
    number: "16",
  },
];

export default function RefundCancellationPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 160;
      let currentSection = "introduction";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= triggerPoint) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.scrollY - 110;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
              Refund & Cancellation{" "}
              <span className="text-[#1264F5]">Policy</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              This Policy explains how KarobarOne handles subscription
              cancellations, refunds, billing credits and payment adjustments.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[#627390]">
              <span>
                Effective Date: 10 September 2026
              </span>

              <span className="text-[#1264F5]">|</span>

              <span>
                Last Updated: 10 September 2026
              </span>
            </div>
          </div>

          {/* =================================================
              HERO ILLUSTRATION
          ================================================= */}
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
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E9D9] text-[#A76D32]">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-[#071B49]">
                    Fair billing matters.
                  </p>

                  <p className="mt-1 text-xs text-[#667896]">
                    Built for Indian Businesses
                  </p>
                </div>
              </div>
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
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`relative flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[12px] leading-4 transition-all ${
                          isActive
                            ? "bg-[#E8F2FF] font-bold text-[#1264F5] shadow-sm"
                            : "text-[#536581] hover:bg-white hover:text-[#1264F5]"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#1264F5]" />
                        )}

                        <span className={isActive ? "pl-1" : ""}>
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
                    Clear billing matters to us.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    We aim to keep cancellations, refunds and billing
                    adjustments transparent.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================
              POLICY CONTENT
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
                This Refund & Cancellation Policy applies to subscription
                fees and other amounts paid directly by a Tenant to
                <strong> KarobarOne</strong>, owned and operated by{" "}
                <strong>Krishna Waterproof, a proprietorship</strong>.
              </p>

              <p>
                This Policy explains how KarobarOne handles subscription
                cancellations, refunds, billing credits, payment adjustments
                and related payment issues.
              </p>

              <p>
                This Policy should be read together with the KarobarOne Terms
                & Conditions and other applicable policies.
              </p>
            </PolicySection>

            {/* 01 */}
            <PolicySection
              id="scope"
              number="01"
              title="Scope"
              active={activeSection === "scope"}
            >
              <p>
                This Policy applies to payments made by a Tenant directly to
                KarobarOne for subscriptions and other KarobarOne services.
              </p>

              <p>
                This Policy does <strong>not</strong> govern refunds,
                cancellations, returns or disputes relating to products or
                services sold by a Tenant to its End Customers.
              </p>

              <p>
                The Tenant remains responsible for maintaining and applying
                its own Customer-facing return, refund and cancellation
                policies in accordance with applicable law.
              </p>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="minimum-commitment"
              number="02"
              title="Initial Minimum Subscription Commitment"
              active={activeSection === "minimum-commitment"}
            >
              <p>
                Unless otherwise expressly agreed in writing, a new Paid
                Subscription carries a{" "}
                <strong>minimum initial commitment of three months</strong>.
              </p>

              <p>
                At initial activation, the Tenant is ordinarily charged:
              </p>

              <BulletList
                items={[
                  "the first month’s applicable Subscription Fee; and",
                  "an Advance Subscription Deposit equal to one month’s applicable Subscription Fee.",
                ]}
              />

              <p>
                The Advance Subscription Deposit forms part of the initial
                three-month commitment.
              </p>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="before-third-month"
              number="03"
              title="Cancellation Before the Third Month"
              active={activeSection === "before-third-month"}
            >
              <p>
                A Tenant intending to discontinue the Paid Subscription after
                completing the initial three-month commitment must provide
                cancellation notice{" "}
                <strong>
                  before the commencement of the third subscription month
                </strong>
                .
              </p>

              <p>
                Where the required notice is provided:
              </p>

              <BulletList
                items={[
                  "the Advance Subscription Deposit will ordinarily be adjusted against the third month’s Subscription Fee;",
                  "no separate normal Subscription Fee will ordinarily be charged for the third month; and",
                  "the subscription may end after completion of the initial three-month commitment.",
                ]}
              />

              <p>
                If the Tenant terminates or abandons the subscription before
                completing the minimum commitment, the Advance Subscription
                Deposit will ordinarily be{" "}
                <strong>non-refundable</strong> and may be retained or
                adjusted against the minimum commitment.
              </p>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="continuation"
              number="04"
              title="Continuation After the Third Month"
              active={activeSection === "continuation"}
            >
              <p>
                If the Tenant does not provide cancellation notice before
                commencement of the third subscription month, the subscription
                will be treated as continuing.
              </p>

              <p>In that case:</p>

              <BulletList
                items={[
                  "50% of the otherwise applicable monthly Subscription Fee will ordinarily be charged in the third month;",
                  "50% of the otherwise applicable monthly Subscription Fee will ordinarily be charged in the fourth month; and",
                  "normal recurring subscription billing will ordinarily resume thereafter.",
                ]}
              />

              <p>
                This adjustment accounts for the Advance Subscription Deposit
                collected at the start of the subscription.
              </p>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="after-commitment"
              number="05"
              title="Cancellation After the Initial Commitment"
              active={activeSection === "after-commitment"}
            >
              <p>
                After completing the minimum initial commitment, the Tenant
                may cancel the Paid Subscription at any time.
              </p>

              <h3 className="pt-2 font-bold text-[#071B49]">
                Immediate Cancellation
              </h3>

              <p>
                The Paid Subscription may be discontinued after processing of
                the cancellation request.
              </p>

              <p>
                Any unused portion of an already-paid billing period will
                ordinarily <strong>not be refunded or prorated</strong>.
              </p>

              <h3 className="pt-2 font-bold text-[#071B49]">
                End-of-Billing-Cycle Cancellation
              </h3>

              <p>
                The Tenant may continue using the Paid Subscription until the
                end of the current prepaid billing cycle.
              </p>

              <p>
                The subscription will then not renew for the following billing
                period.
              </p>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              id="how-to-cancel"
              number="06"
              title="How to Request Cancellation"
              active={activeSection === "how-to-cancel"}
            >
              <p>
                A cancellation request may be submitted:
              </p>

              <BulletList
                items={[
                  "through the applicable KarobarOne account or billing interface, where such functionality is available; or",
                  "by contacting KarobarOne at assistance@karobarone.com or karobaroneofficial@gmail.com.",
                ]}
              />

              <p>
                The Tenant should provide sufficient account information to
                enable KarobarOne to verify and process the request.
              </p>

              <p>
                Cancellation will be effective according to the cancellation
                option selected by the Tenant and the applicable subscription
                terms.
              </p>
            </PolicySection>

            {/* 07 */}
            <PolicySection
              id="general-refund"
              number="07"
              title="General Refund Rule"
              active={activeSection === "general-refund"}
            >
              <p>
                Subscription Fees already billed and relating to an activated
                or delivered subscription period are ordinarily{" "}
                <strong>non-refundable</strong>.
              </p>

              <p>
                KarobarOne does not ordinarily provide:
              </p>

              <BulletList
                items={[
                  "prorated cash refunds for unused subscription days;",
                  "refunds merely because a Tenant has stopped using the Platform;",
                  "refunds for voluntary immediate cancellation; or",
                  "refunds for the Advance Subscription Deposit where the Tenant fails to complete the minimum initial commitment.",
                ]}
              />

              <p>
                Nothing in this Policy limits any refund or remedy that must be
                provided under applicable law.
              </p>
            </PolicySection>

            {/* 08 */}
            <PolicySection
              id="credits"
              number="08"
              title="Billing Credits and Reimbursements"
              active={activeSection === "credits"}
            >
              <p>
                Where an adjustment is approved but a monetary refund is not
                required, KarobarOne may ordinarily provide the amount as a{" "}
                <strong>billing credit or reimbursement</strong> against
                future KarobarOne charges.
              </p>

              <p>Unless otherwise expressly stated, such credits:</p>

              <BulletList
                items={[
                  "are non-transferable;",
                  "cannot ordinarily be redeemed for cash;",
                  "may be used against eligible future KarobarOne charges;",
                  "remain valid for up to 12 months from issuance; and",
                  "expire upon permanent closure of the Tenant’s KarobarOne account.",
                ]}
              />

              <p>
                A billing credit will not be used instead of a monetary refund
                where applicable law requires the amount to be returned.
              </p>
            </PolicySection>

            {/* 09 */}
            <PolicySection
              id="exceptional-refunds"
              number="09"
              title="Exceptional Monetary Refunds"
              active={activeSection === "exceptional-refunds"}
            >
              <p>
                A monetary refund may be approved where appropriate, including
                in cases of:
              </p>

              <BulletList
                items={[
                  "duplicate payment;",
                  "verified billing error;",
                  "payment collected for a service that KarobarOne is unable to provide;",
                  "payment collected where the service cannot legally continue;",
                  "verified unauthorised payment;",
                  "incorrect charge caused by KarobarOne; or",
                  "another circumstance where refund is required under applicable law.",
                ]}
              />

              <p>
                KarobarOne may request reasonable information or evidence to
                verify the refund request.
              </p>
            </PolicySection>

            {/* 10 */}
            <PolicySection
              id="refund-process"
              number="10"
              title="Refund Request and Processing Timeline"
              active={activeSection === "refund-process"}
            >
              <p>A refund request should be submitted to:</p>

              <InfoCard
                letter="A"
                title="Refund & Billing Support"
              >
                <div className="space-y-2">
                  <a
                    href="mailto:assistance@karobarone.com"
                    className="flex items-center gap-2 text-[#1264F5] hover:underline"
                  >
                    <Mail size={15} />
                    assistance@karobarone.com
                  </a>

                  <a
                    href="mailto:karobaroneofficial@gmail.com"
                    className="flex items-center gap-2 text-[#1264F5] hover:underline"
                  >
                    <Mail size={15} />
                    karobaroneofficial@gmail.com
                  </a>
                </div>
              </InfoCard>

              <p>The request should include, where applicable:</p>

              <BulletList
                items={[
                  "Tenant/account details;",
                  "payment date;",
                  "payment amount;",
                  "invoice or transaction reference; and",
                  "reason for requesting the refund.",
                ]}
              />

              <p>
                KarobarOne will ordinarily review a complete refund request
                within <strong>7 business days</strong>.
              </p>

              <p>
                Where a monetary refund is approved, KarobarOne will ordinarily
                initiate the refund within{" "}
                <strong>7 business days after approval</strong>, subject to
                the applicable Payment Service Provider, bank and
                payment-network processing requirements.
              </p>

              <p>
                The actual time taken for the refunded amount to appear in the
                payer’s account may depend on the Payment Service Provider,
                issuing bank or payment method and is outside KarobarOne’s
                direct control.
              </p>

              <p>
                Where technically possible and applicable, monetary refunds
                will ordinarily be returned through the{" "}
                <strong>same payment method</strong> used for the original
                transaction.
              </p>
            </PolicySection>

            {/* 11 */}
            <PolicySection
              id="failed-payments"
              number="11"
              title="Failed or Duplicate Payments"
              active={activeSection === "failed-payments"}
            >
              <p>
                If an amount is debited but the relevant payment is shown as
                failed, pending or duplicated, the Tenant should contact
                KarobarOne with the applicable transaction information.
              </p>

              <p>
                Where the payment has not been successfully received by
                KarobarOne, reversal may be handled automatically by the
                relevant Payment Service Provider or bank.
              </p>

              <p>
                Where KarobarOne has received a duplicate or incorrect
                payment, the amount may be refunded or otherwise appropriately
                adjusted after verification.
              </p>
            </PolicySection>

            {/* 12 */}
            <PolicySection
              id="payment-failure"
              number="12"
              title="Payment Failure and Non-Renewal"
              active={activeSection === "payment-failure"}
            >
              <p>
                Failure of a recurring or renewal payment does not
                automatically constitute a cancellation request.
              </p>

              <p>
                Where a subscription renewal remains unpaid, the applicable
                payment-grace, service-restriction and downgrade provisions
                contained in the KarobarOne Terms & Conditions may apply.
              </p>

              <p>
                The Tenant should submit an express cancellation request if the
                Tenant wishes to discontinue the subscription.
              </p>
            </PolicySection>

            {/* 13 */}
            <PolicySection
              id="commission"
              number="13"
              title="Commission and Other Commercial Adjustments"
              active={activeSection === "commission"}
            >
              <p>
                Commission invoices and other commercial charges payable by a
                Tenant are subject to the KarobarOne Terms & Conditions and
                the applicable commercial arrangement.
              </p>

              <p>
                Where a verified billing or Commission adjustment is due,
                KarobarOne may apply an appropriate billing credit or
                adjustment against future amounts payable.
              </p>

              <p>
                Where applicable law requires a monetary refund instead, the
                amount will be handled accordingly.
              </p>
            </PolicySection>

            {/* 14 */}
            <PolicySection
              id="third-party"
              number="14"
              title="Third-Party Charges"
              active={activeSection === "third-party"}
            >
              <p>
                Fees independently charged by Payment Service Providers,
                banks, Logistics Service Providers, domain registrars or other
                Third-Party Services are subject to the respective third
                party’s terms and refund rules.
              </p>

              <p>
                KarobarOne cannot guarantee reimbursement of a charge imposed
                and retained independently by a third party.
              </p>
            </PolicySection>

            {/* 15 */}
            <PolicySection
              id="statutory-rights"
              number="15"
              title="Statutory Rights"
              active={activeSection === "statutory-rights"}
            >
              <p>
                Nothing in this Policy is intended to exclude, restrict or
                waive any refund, cancellation or other right that cannot
                lawfully be excluded under applicable Indian law.
              </p>

              <p>
                Where this Policy conflicts with a mandatory statutory
                requirement, the applicable statutory requirement will
                prevail.
              </p>
            </PolicySection>

            {/* 16 */}
            <PolicySection
              id="contact"
              number="16"
              title="Contact"
              active={activeSection === "contact"}
            >
              <p>
                For cancellation, billing adjustment or refund requests,
                contact KarobarOne using the details below.
              </p>

              <ContactCard />
            </PolicySection>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#EAF3FF] px-4 py-3 text-sm font-bold text-[#1264F5] transition hover:bg-[#DDEBFF]"
            >
              <ArrowUp size={16} />
              Back to top
            </button>
          </article>

          {/* =================================================
              RIGHT PROGRESS
          ================================================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 flex justify-center">
              <div className="relative flex flex-col items-center gap-4">
                <div className="absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-[#DDE9F8]" />

                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      aria-label={`Go to ${section.label}`}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative z-10 h-3 w-3 rounded-full border-2 transition ${
                        isActive
                          ? "border-[#1264F5] bg-[#1264F5] shadow-[0_0_0_4px_rgba(18,100,245,0.12)]"
                          : "border-[#C8D8EA] bg-white hover:border-[#1264F5]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   POLICY SECTION
===================================================== */

function PolicySection({
  id,
  number,
  label,
  title,
  active,
  children,
}: {
  id: string;
  number: string;
  label?: string;
  title: string;
  active: boolean;
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
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
            active
              ? "bg-[#1264F5] text-white shadow-[0_8px_20px_rgba(18,100,245,0.18)]"
              : "bg-[#EAF3FF] text-[#1264F5]"
          }`}
        >
          {number}
        </div>

        <div className="min-w-0">
          {label && (
            <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#A76D32]">
              {label}
            </div>
          )}

          <h2
            className={`text-2xl font-extrabold tracking-[-0.02em] ${
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

/* =====================================================
   INFO CARD
===================================================== */

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
    <div className="rounded-xl border border-[#DDE9F8] bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF] text-sm font-bold text-[#1264F5]">
          {letter}
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-[#071B49]">
            {title}
          </h3>

          <div className="mt-3 text-sm leading-7 text-[#506486]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   BULLET LIST
===================================================== */

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

/* =====================================================
   CONTACT CARD
===================================================== */

function ContactCard() {
  return (
    <div className="rounded-2xl bg-[#F3F8FF] p-6">
      <h3 className="text-xl font-extrabold text-[#071B49]">
        KarobarOne
      </h3>

      <p className="mt-2 text-sm leading-7 text-[#506486]">
        Owned and operated by{" "}
        <strong>Krishna Waterproof, a proprietorship</strong>
        <br />
        South Kumrakhali
        <br />
        Kolkata – 700103
        <br />
        West Bengal, India
        <br />
        <strong>GSTIN:</strong> 19BBPPG1029N2Z9
      </p>

      <div className="mt-5 space-y-3">
        <a
          href="mailto:assistance@karobarone.com"
          className="flex items-center gap-3 text-sm font-medium text-[#1264F5] hover:underline"
        >
          <Mail size={17} />
          assistance@karobarone.com
        </a>

        <a
          href="mailto:karobaroneofficial@gmail.com"
          className="flex items-center gap-3 text-sm font-medium text-[#1264F5] hover:underline"
        >
          <Mail size={17} />
          karobaroneofficial@gmail.com
        </a>

        <a
          href="tel:+919674665053"
          className="flex items-center gap-3 text-sm font-medium text-[#1264F5] hover:underline"
        >
          <Phone size={17} />
          +91 96746 65053
        </a>
      </div>
    </div>
  );
}