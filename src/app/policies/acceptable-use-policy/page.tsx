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
  { id: "general", label: "General Requirement" },
  { id: "prohibited-products", label: "Prohibited Products and Services" },
  { id: "regulated", label: "Regulated Products and Services" },
  { id: "prohibited-content", label: "Prohibited Content" },
  { id: "intellectual-property", label: "Intellectual Property" },
  {
    id: "misleading-practices",
    label: "Misleading and Unfair Business Practices",
  },
  { id: "fraud-payment", label: "Fraud and Payment Abuse" },
  { id: "security", label: "Platform and Security Abuse" },
  {
    id: "payment-rules",
    label: "Compliance with Payment Service Provider Rules",
  },
  { id: "review-removal", label: "KarobarOne Review and Removal" },
  { id: "suspension", label: "Suspension or Termination" },
  { id: "third-party", label: "Third-Party Action" },
  { id: "reporting", label: "Reporting Prohibited or Unlawful Activity" },
  { id: "changes", label: "Changes to this Policy" },
  { id: "contact", label: "Contact" },
];

export default function AcceptableUsePolicyPage() {
  const [activeSection, setActiveSection] =
    useState("introduction");

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
              Acceptable Use{" "}
              <span className="text-[#1264F5]">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              This Policy explains the activities, content,
              products and services that may and may not be
              used through KarobarOne.
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
                Use responsibly.
              </p>

              <p className="text-sm leading-5 text-[#5E6F8E]">
                Keep your business compliant.
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
                            isActive ? "pl-1" : ""
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
                    Use KarobarOne responsibly.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    We expect every Tenant to comply with
                    applicable laws and platform requirements.
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
                This Acceptable Use Policy (“AUP”) governs the
                use of KarobarOne, owned and operated by
                Krishna Waterproof, a proprietorship.
              </p>

              <p>
                This AUP forms part of the KarobarOne Terms &
                Conditions and applies to every Tenant, Store,
                user, product, service and item of content made
                available through KarobarOne.
              </p>

              <div className="rounded-xl bg-[#F7FAFE] p-4">

                <p>
                  <strong>Effective Date:</strong>{" "}
                  10 September 2026
                </p>

                <p>
                  <strong>Last Updated:</strong>{" "}
                  10 September 2026
                </p>

              </div>

            </PolicySection>

            {/* 01 GENERAL REQUIREMENT */}

            <PolicySection
              id="general"
              number="01"
              title="General Requirement"
              label="GENERAL REQUIREMENT"
              active={activeSection === "general"}
            >

              <p>
                KarobarOne may be used only for lawful business
                activities.
              </p>

              <p>
                A Tenant must not use KarobarOne to:
              </p>

              <BulletList
                items={[
                  "violate any applicable Indian law;",
                  "facilitate fraud or unlawful financial activity;",
                  "sell prohibited goods or services;",
                  "publish unlawful content;",
                  "infringe third-party rights;",
                  "mislead or deceive Customers;",
                  "interfere with the security or operation of the Platform; or",
                  "conduct activities prohibited by an applicable Payment Service Provider or Logistics Service Provider.",
                ]}
              />

              <p>
                Where Indian law, KarobarOne policy and an
                applicable third-party provider impose different
                restrictions, the stricter applicable restriction
                may be enforced for use of the relevant KarobarOne
                functionality.
              </p>

            </PolicySection>

            {/* 02 PROHIBITED PRODUCTS */}

            <PolicySection
              id="prohibited-products"
              number="02"
              title="Prohibited Products and Services"
              active={
                activeSection === "prohibited-products"
              }
            >

              <p>
                A Tenant must not use KarobarOne to offer,
                promote, sell, facilitate or otherwise deal in
                products or services that are illegal or
                prohibited under applicable law or the rules of
                an applicable Payment Service Provider.
              </p>

              <p>
                Prohibited categories may include, where
                applicable:
              </p>

              <BulletList
                items={[
                  "illegal drugs, narcotics or prohibited controlled substances;",
                  "unlawful medicines or pharmaceutical products;",
                  "weapons, firearms, ammunition or prohibited weapon components;",
                  "pornography, prostitution, escort services or unlawful sexually explicit services;",
                  "child sexual abuse material or any sexual content involving minors;",
                  "illegal gambling, betting, lotteries, games of chance or prohibited gaming activities;",
                  "counterfeit, fake or pirated goods;",
                  "stolen goods;",
                  "unauthorised copyrighted media or software;",
                  "products or services designed to circumvent copyright or technological protection measures;",
                  "money-laundering services;",
                  "unlicensed money-transfer, currency-exchange or financial services;",
                  "prohibited cryptocurrency, virtual-asset or related activities where restricted by applicable law or the relevant Payment Service Provider;",
                  "pyramid schemes, deceptive multi-level marketing schemes or get-rich-quick schemes;",
                  "sale or trafficking of human organs or body parts;",
                  "prohibited wildlife, animal products or other protected goods;",
                  "goods or services prohibited by telecommunications or other sector-specific regulations; and",
                  "any other product or service prohibited under applicable Indian law or the applicable Payment Service Provider’s then-current rules.",
                ]}
              />

              <p>
                The prohibited and restricted categories of
                Payment Service Providers may change from time
                to time.
              </p>

              <p>
                A product or service being technically capable
                of being listed on KarobarOne does{" "}
                <strong>
                  not mean that it is legally permitted or
                  approved by a Payment Service Provider.
                </strong>
              </p>

            </PolicySection>

            {/* 03 REGULATED PRODUCTS */}

            <PolicySection
              id="regulated"
              number="03"
              title="Regulated Products and Services"
              active={activeSection === "regulated"}
            >

              <p>
                Products or services that are lawful only with
                a licence, registration, prescription, approval
                or professional authorisation may be offered
                only where the Tenant possesses all legally
                required approvals.
              </p>

              <p>
                KarobarOne may request documentary evidence
                before allowing or continuing such activity.
              </p>

              <p>
                KarobarOne may restrict a regulated category
                where:
              </p>

              <BulletList
                items={[
                  "required documentation is unavailable;",
                  "applicable law is unclear;",
                  "the applicable Payment Service Provider does not permit the activity; or",
                  "continuation would create material legal or regulatory risk.",
                ]}
              />

              <p>
                Approval by KarobarOne does not constitute
                government, regulatory or professional approval.
              </p>

            </PolicySection>

            {/* 04 PROHIBITED CONTENT */}

            <PolicySection
              id="prohibited-content"
              number="04"
              title="Prohibited Content"
              active={activeSection === "prohibited-content"}
            >

              <p>
                A Tenant must not upload, publish, display,
                transmit or store content through KarobarOne
                that:
              </p>

              <BulletList
                items={[
                  "belongs to another person where the Tenant has no lawful right to use it;",
                  "infringes copyright, trademark, patent or other proprietary rights;",
                  "is obscene, pornographic, paedophilic or harmful to children;",
                  "unlawfully invades another person’s privacy;",
                  "unlawfully harasses or targets persons on protected grounds;",
                  "promotes unlawful money laundering or gambling;",
                  "unlawfully promotes enmity or violence;",
                  "deliberately deceives or misleads users about the origin or nature of information;",
                  "knowingly impersonates another person or business;",
                  "contains malicious software, viruses or harmful computer code;",
                  "threatens India’s sovereignty, integrity, security, public order or other interests protected by applicable law; or",
                  "otherwise violates applicable law.",
                ]}
              />

            </PolicySection>

            {/* 05 INTELLECTUAL PROPERTY */}

            <PolicySection
              id="intellectual-property"
              number="05"
              title="Intellectual Property"
              active={
                activeSection === "intellectual-property"
              }
            >

              <p>
                Tenants may upload or publish only content they:
              </p>

              <BulletList
                items={[
                  "own;",
                  "have validly licensed;",
                  "have permission to use; or",
                  "are otherwise legally authorised to use.",
                ]}
              />

              <p>
                Content being publicly available through a
                search engine, website, social-media platform or
                other online source does{" "}
                <strong>
                  not automatically mean that it is
                  copyright-free.
                </strong>
              </p>

              <p>
                KarobarOne may remove or restrict allegedly
                infringing material in accordance with its{" "}
                <strong>
                  Intellectual Property, Copyright, Trademark
                  & Takedown Policy
                </strong>
                .
              </p>

            </PolicySection>

            {/* 06 MISLEADING PRACTICES */}

            <PolicySection
              id="misleading-practices"
              number="06"
              title="Misleading and Unfair Business Practices"
              active={
                activeSection === "misleading-practices"
              }
            >

              <p>
                A Tenant must not:
              </p>

              <BulletList
                items={[
                  "make false or misleading representations regarding its goods or services;",
                  "misrepresent product quality, characteristics, availability or features;",
                  "publish fake reviews or falsely represent itself as a Customer;",
                  "conceal mandatory charges;",
                  "intentionally misrepresent pricing;",
                  "advertise products or services in a manner inconsistent with what is actually supplied; or",
                  "engage in an unfair trade practice prohibited under applicable consumer law.",
                ]}
              />

              <p>
                The Tenant remains responsible for ensuring
                that information displayed to Customers is
                accurate and sufficient for an informed
                purchasing decision.
              </p>

            </PolicySection>

            {/* 07 FRAUD AND PAYMENT ABUSE */}

            <PolicySection
              id="fraud-payment"
              number="07"
              title="Fraud and Payment Abuse"
              active={activeSection === "fraud-payment"}
            >

              <p>
                A Tenant must not use KarobarOne or an
                integrated Payment Service Provider to:
              </p>

              <BulletList
                items={[
                  "process fraudulent transactions;",
                  "launder money;",
                  "process transactions unrelated to its genuine business;",
                  "misrepresent the nature of a transaction;",
                  "knowingly process stolen or unauthorised payment credentials;",
                  "manipulate refunds, cancellations or transaction records;",
                  "circumvent applicable Payment Service Provider restrictions; or",
                  "use the Platform for unlawful or unauthorised financial activity.",
                ]}
              />

              <p>
                The Tenant must comply with the KYC,
                merchant-category and transaction requirements
                of its applicable Payment Service Provider.
              </p>

            </PolicySection>

            {/* 08 SECURITY */}

            <PolicySection
              id="security"
              number="08"
              title="Platform and Security Abuse"
              active={activeSection === "security"}
            >

              <p>
                A Tenant must not:
              </p>

              <BulletList
                items={[
                  "attempt unauthorised access to another Tenant’s account or data;",
                  "bypass Platform security controls;",
                  "introduce malware or malicious code;",
                  "interfere with Platform availability;",
                  "intentionally exploit security vulnerabilities;",
                  "use automated systems in a manner that materially damages or disrupts the Platform; or",
                  "use KarobarOne to conduct attacks against another computer system or network.",
                ]}
              />

              <p>
                Suspected security vulnerabilities should be
                reported to KarobarOne rather than exploited.
              </p>

            </PolicySection>

            {/* 09 PAYMENT PROVIDER RULES */}

            <PolicySection
              id="payment-rules"
              number="09"
              title="Compliance with Payment Service Provider Rules"
              active={activeSection === "payment-rules"}
            >

              <p>
                Where a Tenant connects a Payment Service
                Provider, the Tenant must comply with that
                provider’s then-current:
              </p>

              <BulletList
                items={[
                  "acceptable-use requirements;",
                  "prohibited and restricted business rules;",
                  "KYC requirements;",
                  "card-network requirements; and",
                  "applicable merchant conditions.",
                ]}
              />

              <p>
                If a Payment Service Provider does not permit
                a particular product, service or business
                category, the Tenant must not use that Payment
                Service Provider to process transactions for
                that activity.
              </p>

              <p>
                KarobarOne does not guarantee that any
                particular business category will be accepted
                by a Payment Service Provider.
              </p>

            </PolicySection>

            {/* 10 REVIEW AND REMOVAL */}

            <PolicySection
              id="review-removal"
              number="10"
              title="KarobarOne Review and Removal"
              active={activeSection === "review-removal"}
            >

              <p>
                KarobarOne may review, reject, restrict,
                unpublish or remove content, products, services
                or Store functionality where KarobarOne
                reasonably believes that:
              </p>

              <BulletList
                items={[
                  "this AUP has been violated;",
                  "applicable law may have been violated;",
                  "required licences or permissions are missing;",
                  "a valid intellectual-property complaint has been received;",
                  "fraudulent or unsafe activity is suspected;",
                  "the activity violates applicable third-party provider requirements; or",
                  "action is required pursuant to a lawful government, regulatory or judicial direction.",
                ]}
              />

              <p>
                KarobarOne may act immediately where the
                suspected violation involves serious illegality,
                fraud, security risk, child safety, counterfeit
                goods, prohibited content or comparable material
                risk.
              </p>

            </PolicySection>

            {/* 11 SUSPENSION */}

            <PolicySection
              id="suspension"
              number="11"
              title="Suspension or Termination"
              active={activeSection === "suspension"}
            >

              <p>
                Violation of this AUP may result in one or more
                of the following:
              </p>

              <BulletList
                items={[
                  "rejection of content;",
                  "removal of a product or service;",
                  "temporary restriction of functionality;",
                  "suspension of a Store;",
                  "suspension of the Tenant account; or",
                  "permanent termination for serious or repeated violations.",
                ]}
              />

              <p>
                Where appropriate for a non-serious violation,
                KarobarOne may provide the Tenant an opportunity
                to correct the issue.
              </p>

              <p>
                KarobarOne is not required to provide advance
                notice where immediate action is reasonably
                necessary to comply with law, protect
                Customers, address fraud or security risks, or
                prevent serious harm.
              </p>

            </PolicySection>

            {/* 12 THIRD-PARTY ACTION */}

            <PolicySection
              id="third-party"
              number="12"
              title="Third-Party Action"
              active={activeSection === "third-party"}
            >

              <p>
                Payment Service Providers, Logistics Service
                Providers and other third parties independently
                enforce their own policies.
              </p>

              <p>
                Accordingly, a third party may independently
                refuse, restrict or terminate services even
                where the Tenant’s KarobarOne account remains
                active.
              </p>

              <p>
                KarobarOne cannot override such third-party
                compliance decisions.
              </p>

            </PolicySection>

            {/* 13 REPORTING */}

            <PolicySection
              id="reporting"
              number="13"
              title="Reporting Prohibited or Unlawful Activity"
              active={activeSection === "reporting"}
            >

              <p>
                Suspected unlawful, fraudulent, prohibited or
                infringing activity on a KarobarOne Store may
                be reported to:
              </p>

              <ContactCard />

              <p>
                Reports should identify the relevant Store,
                content, product or service and provide
                sufficient information for KarobarOne to review
                the complaint.
              </p>

              <p>
                KarobarOne may request additional evidence where
                necessary.
              </p>

            </PolicySection>

            {/* 14 CHANGES */}

            <PolicySection
              id="changes"
              number="14"
              title="Changes to this Policy"
              active={activeSection === "changes"}
            >

              <p>
                KarobarOne may update this AUP where necessary
                to reflect:
              </p>

              <BulletList
                items={[
                  "changes in applicable Indian law;",
                  "regulatory requirements;",
                  "Payment Service Provider requirements;",
                  "Logistics Service Provider requirements; or",
                  "material risks affecting Platform legality or safety.",
                ]}
              />

              <p>
                The latest version published by KarobarOne will
                apply from its stated effective date, subject to
                applicable law.
              </p>

            </PolicySection>

            {/* 15 CONTACT */}

            <PolicySection
              id="contact"
              number="15"
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
          <span>
            assistance@karobarone.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 shrink-0 text-[#1264F5]" />
          <span>
            karobaroneofficial@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 shrink-0 text-[#1264F5]" />
          <span>
            +91 96746 65053
          </span>
        </div>

        <div className="pt-1 text-sm">
          <strong>Chief Grievance Officer:</strong>{" "}
          Mr. Ghosh
        </div>

      </div>

    </div>
  );
}