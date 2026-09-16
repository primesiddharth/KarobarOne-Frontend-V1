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
  { id: "what-are-cookies", label: "What Are Cookies?" },
  {
    id: "cookies-karobarone",
    label: "Cookies KarobarOne May Use",
  },
  {
    id: "third-party",
    label: "Third-Party Cookies",
  },
  {
    id: "payment-provider",
    label: "Payment Service Provider Cookies",
  },
  {
    id: "consent",
    label: "Cookie Consent and Preferences",
  },
  {
    id: "browser",
    label: "Managing Cookies Through the Browser",
  },
  {
    id: "information",
    label: "Information Collected Through Cookies",
  },
  {
    id: "changes",
    label: "Changes to this Cookie Policy",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default function CookiePolicyPage() {
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
      window.removeEventListener("scroll", handleScroll);
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
              Cookie{" "}
              <span className="text-[#1264F5]">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              This Policy explains how KarobarOne uses
              cookies and similar technologies across its
              websites, dashboards and platform-operated
              websites.
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
                This Cookie Policy explains how KarobarOne,
                owned and operated by Krishna Waterproof, a
                proprietorship, uses cookies and similar
                technologies when users access KarobarOne
                websites, dashboards and websites operated
                through the KarobarOne platform.
              </p>

              <div className="rounded-xl bg-[#F7FAFE] p-4">

                <p>
                  <strong>Effective Date:</strong>{" "}
                  10 September 2026
                </p>

                <p className="mt-2">
                  <strong>Last Updated:</strong>{" "}
                  10 September 2026
                </p>

              </div>

              <p>
                This Policy should be read together with the
                KarobarOne Privacy Policy.
              </p>

            </PolicySection>

            {/* 01 WHAT ARE COOKIES */}

            <PolicySection
              id="what-are-cookies"
              number="01"
              title="What Are Cookies?"
              label="WHAT ARE COOKIES"
              active={activeSection === "what-are-cookies"}
            >

              <p>
                Cookies are small data files stored on a
                user&apos;s browser or device when a website
                is visited.
              </p>

              <p>
                Cookies may be used to:
              </p>

              <BulletList
                items={[
                  "maintain login sessions;",
                  "remember preferences;",
                  "provide website functionality;",
                  "maintain security;",
                  "understand website usage; and",
                  "measure or improve advertising and marketing performance.",
                ]}
              />

              <p>
                Similar technologies such as pixels, tags,
                local storage or software-development tools
                may perform comparable functions.
              </p>

            </PolicySection>

            {/* 02 COOKIES KAROBARONE MAY USE */}

            <PolicySection
              id="cookies-karobarone"
              number="02"
              title="Cookies KarobarOne May Use"
              label="COOKIES KAROBARONE MAY USE"
              active={activeSection === "cookies-karobarone"}
            >

              <p>
                KarobarOne may use the following categories
                of cookies.
              </p>

              <InfoCard
                letter="A"
                title="Essential Cookies"
              >

                <p>
                  These cookies are necessary for the operation
                  and security of the Platform. They may be used
                  for purposes such as:
                </p>

                <BulletList
                  items={[
                    "authentication and login;",
                    "session management;",
                    "security;",
                    "fraud prevention;",
                    "maintaining user preferences necessary for operation; and",
                    "enabling essential website or transaction functionality.",
                  ]}
                />

                <p className="mt-4">
                  Disabling essential cookies may prevent
                  certain parts of KarobarOne from functioning
                  correctly.
                </p>

              </InfoCard>

              <InfoCard
                letter="B"
                title="Analytics Cookies"
              >

                <p>
                  KarobarOne may use analytics cookies or
                  similar technologies to understand:
                </p>

                <BulletList
                  items={[
                    "how users access the Platform;",
                    "pages visited;",
                    "website interactions;",
                    "technical performance; and",
                    "general usage patterns.",
                  ]}
                />

                <p className="mt-4">
                  This information may be used to analyse
                  and improve the Platform.
                </p>

              </InfoCard>

              <InfoCard
                letter="C"
                title="Functionality Cookies"
              >

                <p>
                  These cookies may remember choices or
                  preferences made by users and provide
                  enhanced website functionality.
                </p>

              </InfoCard>

              <InfoCard
                letter="D"
                title="Advertising and Marketing Cookies"
              >

                <p>
                  Where advertising or marketing tools are
                  used, cookies or similar technologies may
                  be used to:
                </p>

                <BulletList
                  items={[
                    "measure advertising performance;",
                    "understand campaign conversions;",
                    "limit or manage advertisement delivery; or",
                    "provide advertising based on website interactions, subject to applicable law and consent requirements.",
                  ]}
                />

              </InfoCard>

            </PolicySection>

            {/* 03 THIRD PARTY */}

            <PolicySection
              id="third-party"
              number="03"
              title="Third-Party Cookies"
              label="THIRD-PARTY COOKIES"
              active={activeSection === "third-party"}
            >

              <p>
                Certain KarobarOne functionality may involve
                independent third-party services, including:
              </p>

              <BulletList
                items={[
                  "Payment Service Providers;",
                  "analytics providers;",
                  "advertising platforms;",
                  "security services;",
                  "communication services; and",
                  "other technology providers.",
                ]}
              />

              <p>
                Such third parties may place or access cookies
                or similar technologies when their services
                are used.
              </p>

              <p>
                Third-party cookies and information collected
                through them are also subject to the applicable
                third party&apos;s own privacy and cookie practices.
              </p>

              <p>
                KarobarOne does not control cookies placed
                independently by third-party providers outside
                KarobarOne&apos;s systems.
              </p>

            </PolicySection>

            {/* 04 PAYMENT SERVICE PROVIDER */}

            <PolicySection
              id="payment-provider"
              number="04"
              title="Payment Service Provider Cookies"
              label="PAYMENT SERVICE PROVIDER COOKIES"
              active={activeSection === "payment-provider"}
            >

              <p>
                Where a user accesses a checkout or payment
                interface supplied by an independent Payment
                Service Provider, that provider may use cookies
                or similar technologies for purposes such as:
              </p>

              <BulletList
                items={[
                  "payment processing;",
                  "authentication;",
                  "security;",
                  "fraud prevention;",
                  "transaction functionality; and",
                  "regulatory compliance.",
                ]}
              />

              <p>
                The Payment Service Provider&apos;s own privacy
                and cookie terms will apply to its independently
                controlled processing.
              </p>

            </PolicySection>

            {/* 05 CONSENT */}

            <PolicySection
              id="consent"
              number="05"
              title="Cookie Consent and Preferences"
              label="COOKIE CONSENT AND PREFERENCES"
              active={activeSection === "consent"}
            >

              <p>
                Where consent is required under applicable law,
                KarobarOne may request the user&apos;s permission
                before activating non-essential cookies.
              </p>

              <p>
                Users may be provided with options to:
              </p>

              <BulletList
                items={[
                  "accept optional cookies;",
                  "reject optional cookies; or",
                  "manage cookie preferences.",
                ]}
              />

              <p>
                Essential cookies that are reasonably necessary
                to provide requested services, maintain security
                or operate the Platform may continue to be used
                where permitted by applicable law.
              </p>

            </PolicySection>

            {/* 06 BROWSER */}

            <PolicySection
              id="browser"
              number="06"
              title="Managing Cookies Through the Browser"
              label="MANAGING COOKIES THROUGH THE BROWSER"
              active={activeSection === "browser"}
            >

              <p>
                Users may also manage or delete cookies through
                their browser settings.
              </p>

              <p>
                Most browsers allow users to:
              </p>

              <BulletList
                items={[
                  "view stored cookies;",
                  "delete cookies;",
                  "block particular cookies; or",
                  "block cookies from particular websites.",
                ]}
              />

              <p>
                Blocking certain cookies may affect the
                availability or operation of some KarobarOne
                functionality.
              </p>

            </PolicySection>

            {/* 07 INFORMATION */}

            <PolicySection
              id="information"
              number="07"
              title="Information Collected Through Cookies"
              label="INFORMATION COLLECTED THROUGH COOKIES"
              active={activeSection === "information"}
            >

              <p>
                Depending on the technology used, cookies or
                similar technologies may process information
                such as:
              </p>

              <BulletList
                items={[
                  "IP address;",
                  "browser type;",
                  "device information;",
                  "session identifiers;",
                  "pages viewed;",
                  "interaction information;",
                  "referral information; and",
                  "website usage information.",
                ]}
              />

              <p>
                The collection, use, sharing and retention of
                personal information associated with these
                technologies is governed by the{" "}
                <Link
                  href="/policies/privacy-policy"
                  className="font-semibold text-[#1264F5] underline decoration-[#A76D32] underline-offset-4 transition hover:text-[#0B4FCA]"
                >
                  KarobarOne Privacy Policy
                </Link>{" "}
                and applicable law.
              </p>

            </PolicySection>

            {/* 08 CHANGES */}

            <PolicySection
              id="changes"
              number="08"
              title="Changes to this Cookie Policy"
              label="CHANGES TO THIS COOKIE POLICY"
              active={activeSection === "changes"}
            >

              <p>
                KarobarOne may update this Cookie Policy if:
              </p>

              <BulletList
                items={[
                  "the cookies or technologies used change;",
                  "third-party integrations change; or",
                  "applicable legal requirements change.",
                ]}
              />

              <p>
                The updated Policy will display a revised
                &quot;Last Updated&quot; date.
              </p>

            </PolicySection>

            {/* 09 CONTACT */}

            <PolicySection
              id="contact"
              number="09"
              title="Contact"
              label="CONTACT"
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
            letter === "B" || letter === "D"
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