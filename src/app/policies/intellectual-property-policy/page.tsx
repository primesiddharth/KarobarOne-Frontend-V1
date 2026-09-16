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
    id: "ip-requirement",
    label: "Intellectual Property Requirement",
    number: "01",
  },
  {
    id: "counterfeit",
    label: "Counterfeit and Infringing Goods",
    number: "02",
  },
  {
    id: "reporting",
    label: "Reporting Intellectual Property Infringement",
    number: "03",
  },
  {
    id: "notice",
    label: "Where to Send an Infringement Notice",
    number: "04",
  },
  {
    id: "review",
    label: "Review of Complaints",
    number: "05",
  },
  {
    id: "takedown",
    label: "Takedown or Restriction",
    number: "06",
  },
  {
    id: "tenant-response",
    label: "Tenant Response",
    number: "07",
  },
  {
    id: "repeat-infringement",
    label: "Repeat or Serious Infringement",
    number: "08",
  },
  {
    id: "preservation",
    label: "Preservation of Removed Material",
    number: "09",
  },
  {
    id: "orders",
    label: "Court and Government Orders",
    number: "10",
  },
  {
    id: "grievance",
    label: "Grievance Timeline",
    number: "11",
  },
  {
    id: "false-complaints",
    label: "False or Abusive Complaints",
    number: "12",
  },
  {
    id: "ownership",
    label: "No Transfer of Tenant Ownership",
    number: "13",
  },
  {
    id: "contact",
    label: "Contact",
    number: "14",
  },
];

export default function IntellectualPropertyPolicyPage() {
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
              Intellectual Property{" "}
              <span className="text-[#1264F5]">Policy</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              This Policy explains how KarobarOne protects intellectual
              property rights and handles copyright, infringement and
              takedown requests.
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
                    Your rights matter.
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
                    Your intellectual property matters.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    We are committed to responsible and lawful content
                    practices.
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
                This Intellectual Property, Copyright & Takedown Policy
                applies to content, products, services and materials hosted,
                uploaded, displayed or otherwise made available through
                KarobarOne.
              </p>

              <p>
                KarobarOne is owned and operated by{" "}
                <strong>Krishna Waterproof</strong>, a proprietorship.
              </p>

              <p>
                This Policy forms part of the KarobarOne Terms & Conditions
                and explains the requirements relating to intellectual
                property rights, copyright complaints, counterfeit goods,
                infringement reports and takedown requests.
              </p>
            </PolicySection>

            {/* 01 */}
            <PolicySection
              id="ip-requirement"
              number="01"
              title="Intellectual Property Requirement"
              active={activeSection === "ip-requirement"}
            >
              <p>
                Tenants may use only content, products, services and materials
                that they:
              </p>

              <BulletList
                items={[
                  "own;",
                  "have properly licensed;",
                  "are authorised to use;",
                  "are otherwise permitted to use by the applicable rights holder; or",
                  "are permitted to use under applicable law.",
                ]}
              />

              <p>
                Tenants must not use content or materials that infringe or
                unlawfully misuse copyright, trademark, patent, design, trade
                secret or any other intellectual property right.
              </p>

              <p>
                The fact that content is publicly available on the internet
                does not mean that it is free from copyright or other
                intellectual property restrictions.
              </p>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="counterfeit"
              number="02"
              title="Counterfeit and Infringing Goods"
              active={activeSection === "counterfeit"}
            >
              <p>
                Tenants must not use KarobarOne to sell, promote, distribute
                or otherwise make available:
              </p>

              <BulletList
                items={[
                  "counterfeit or fake branded goods;",
                  "unauthorised replicas;",
                  "pirated or unauthorised copyrighted material;",
                  "goods bearing trademarks without proper authorisation;",
                  "products that otherwise infringe third-party intellectual property rights; and",
                  "other unlawful or infringing goods or materials.",
                ]}
              />

              <p>
                KarobarOne may restrict, unpublish, remove or otherwise take
                action against suspected counterfeit or infringing content.
              </p>

              <p>
                Payment Service Providers may independently restrict or refuse
                transactions involving prohibited or infringing goods.
              </p>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="reporting"
              number="03"
              title="Reporting Intellectual Property Infringement"
              active={activeSection === "reporting"}
            >
              <p>
                A copyright owner, trademark owner, authorised representative
                or other rights holder may report suspected intellectual
                property infringement to KarobarOne.
              </p>

              <p>
                An infringement complaint should include the following
                information:
              </p>

              <BulletList
                items={[
                  "Name and contact information of the complainant;",
                  "Identification of the intellectual property right allegedly infringed;",
                  "Identification and description of the allegedly infringing content, product or material;",
                  "Exact Store URL, page URL or product link where the allegedly infringing material appears;",
                  "Explanation of ownership or authority to act on behalf of the rights holder;",
                  "Supporting documents or evidence of ownership or authorisation;",
                  "A good-faith statement that the use is not authorised by the rights holder, its agent or applicable law; and",
                  "A declaration that the information provided is materially accurate.",
                ]}
              />

              <p>
                KarobarOne may request additional information or supporting
                documents where reasonably necessary to evaluate a complaint.
              </p>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="notice"
              number="04"
              title="Where to Send an Infringement Notice"
              active={activeSection === "notice"}
            >
              <p>
                Intellectual property infringement notices may be submitted to
                the following contact:
              </p>

              <InfoCard
                letter="A"
                title="Chief Grievance Officer"
              >
                <p>
                  <strong>Mr. Ghosh</strong>
                </p>

                <p>
                  KarobarOne
                  <br />
                  South Kumrakhali, Kolkata – 700103
                  <br />
                  West Bengal, India
                </p>

                <p>GSTIN: 19BBPPG1029N2Z9</p>

                <div className="mt-4 space-y-2">
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

                  <a
                    href="tel:+919674665053"
                    className="flex items-center gap-2 text-[#1264F5] hover:underline"
                  >
                    <Phone size={15} />
                    +91 96746 65053
                  </a>
                </div>
              </InfoCard>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="review"
              number="05"
              title="Review of Complaints"
              active={activeSection === "review"}
            >
              <p>
                KarobarOne may review intellectual property complaints and may
                request additional evidence or clarification where necessary.
              </p>

              <p>
                Depending on the circumstances, KarobarOne may:
              </p>

              <BulletList
                items={[
                  "request supporting evidence from the complainant;",
                  "contact the affected Tenant;",
                  "restrict or unpublish the relevant content;",
                  "remove the allegedly infringing material;",
                  "take other lawful platform or compliance action.",
                ]}
              />

              <p>
                Submission of a complaint does not automatically establish that
                infringement has occurred. KarobarOne may require additional
                evidence or, where appropriate, a legal or judicial
                determination.
              </p>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              id="takedown"
              number="06"
              title="Takedown or Restriction"
              active={activeSection === "takedown"}
            >
              <p>
                KarobarOne may remove, disable, restrict or otherwise limit
                access to content or materials where:
              </p>

              <BulletList
                items={[
                  "infringement is established;",
                  "the Tenant cannot demonstrate lawful ownership or authority;",
                  "counterfeit activity is established;",
                  "applicable law requires action;",
                  "a valid court order, government direction or other lawful instruction requires action; or",
                  "there is a material legal or compliance risk.",
                ]}
              />

              <p>
                KarobarOne may take action without prior notice where legally
                required or where immediate action is reasonably necessary.
              </p>
            </PolicySection>

            {/* 07 */}
            <PolicySection
              id="tenant-response"
              number="07"
              title="Tenant Response"
              active={activeSection === "tenant-response"}
            >
              <p>
                Where appropriate, KarobarOne may notify the affected Tenant
                and provide an opportunity to demonstrate a lawful basis for
                using the relevant content or material.
              </p>

              <p>
                Examples of supporting evidence may include:
              </p>

              <BulletList
                items={[
                  "proof of ownership;",
                  "licence agreements;",
                  "written permission or authorisation;",
                  "purchase or licensing records;",
                  "trademark authorisation;",
                  "evidence that material is in the public domain; or",
                  "another lawful basis for use.",
                ]}
              />

              <p>
                False, forged or misleading evidence may result in suspension
                or termination of the Tenant's Store or account.
              </p>
            </PolicySection>

            {/* 08 */}
            <PolicySection
              id="repeat-infringement"
              number="08"
              title="Repeat or Serious Infringement"
              active={activeSection === "repeat-infringement"}
            >
              <p>
                Repeated or serious intellectual property violations may
                result in stronger enforcement action.
              </p>

              <BulletList
                items={[
                  "removal of infringing content;",
                  "restriction of Store functionality;",
                  "Store suspension;",
                  "account or service suspension;",
                  "termination of the Tenant account or Store.",
                ]}
              />

              <p>
                KarobarOne may take immediate action in cases involving serious
                counterfeiting, deliberate piracy, fraudulent rights
                documentation or repeated infringement.
              </p>
            </PolicySection>

            {/* 09 */}
            <PolicySection
              id="preservation"
              number="09"
              title="Preservation of Removed Material"
              active={activeSection === "preservation"}
            >
              <p>
                Where required under applicable Indian intermediary law,
                KarobarOne may preserve removed information, content or
                related records for at least 180 days, or for a longer period
                where required by a court, government authority or applicable
                law.
              </p>

              <p>
                Preservation of information does not mean that the removed
                material will remain publicly accessible.
              </p>
            </PolicySection>

            {/* 10 */}
            <PolicySection
              id="orders"
              number="10"
              title="Court and Government Orders"
              active={activeSection === "orders"}
            >
              <p>
                KarobarOne may comply with valid court orders, government
                notices, statutory directions and other lawful instructions
                relating to intellectual property or allegedly infringing
                content.
              </p>

              <p>
                Where a legally prescribed timeline applies, KarobarOne will
                follow the applicable timeline.
              </p>
            </PolicySection>

            {/* 11 */}
            <PolicySection
              id="grievance"
              number="11"
              title="Grievance Timeline"
              active={activeSection === "grievance"}
            >
              <p>
                Where applicable, eligible complaints may be acknowledged
                within 24 hours.
              </p>

              <p>
                KarobarOne will seek to resolve applicable grievances within
                the statutory period prescribed by law.
              </p>

              <p>
                For general grievances, the ordinary resolution target may be
                within 7 days, subject to the nature of the complaint and any
                more specific statutory timeline that applies.
              </p>
            </PolicySection>

            {/* 12 */}
            <PolicySection
              id="false-complaints"
              number="12"
              title="False or Abusive Complaints"
              active={activeSection === "false-complaints"}
            >
              <p>
                Complaints must not be knowingly false, fraudulent or
                misleading.
              </p>

              <p>
                KarobarOne may reject complaints that are insufficient,
                unsupported or submitted without a reasonable basis.
              </p>

              <p>
                KarobarOne may also take appropriate action where complaint
                mechanisms are misused for fraudulent or unlawful purposes.
              </p>
            </PolicySection>

            {/* 13 */}
            <PolicySection
              id="ownership"
              number="13"
              title="No Transfer of Tenant Ownership"
              active={activeSection === "ownership"}
            >
              <p>
                KarobarOne does not claim ownership of Tenant content merely
                because that content is hosted, processed, displayed or made
                available through the Platform.
              </p>

              <p>
                Ownership remains with the Tenant or applicable rights holder,
                subject to the limited rights and licence granted to KarobarOne
                under the Terms & Conditions to host, process, display and
                provide the Platform services.
              </p>
            </PolicySection>

            {/* 14 */}
            <PolicySection
              id="contact"
              number="14"
              title="Contact"
              active={activeSection === "contact"}
            >
              <p>
                For intellectual property complaints, takedown requests or
                questions regarding this Policy, contact KarobarOne using the
                details below.
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
                <div className="absolute left-1/2 top-1 bottom-1 w-px -translate-x-1/2 bg-[#DDE9F8]" />

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
        <strong>Krishna Waterproof</strong>, a
        proprietorship.
        <br />
        GSTIN: 19BBPPG1029N2Z9
        <br />
        South Kumrakhali, Kolkata – 700103,
        <br />
        West Bengal, India
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

      <div className="mt-5 border-t border-[#DDE9F8] pt-4">
        <p className="text-sm font-bold text-[#071B49]">
          Chief Grievance Officer
        </p>

        <p className="mt-1 text-sm text-[#506486]">
          Mr. Ghosh
        </p>
      </div>
    </div>
  );
}