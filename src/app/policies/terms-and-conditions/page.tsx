"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";

const sections = [
  { id: "definitions", number: "01", title: "Definitions" },
  { id: "acceptance", number: "02", title: "Acceptance and Electronic Agreement" },
  { id: "age", number: "03", title: "Age and Legal Capacity" },
  { id: "eligibility", number: "04", title: "Eligibility and Verification" },
  { id: "role", number: "05", title: "Role of KarobarOne" },
  { id: "tenant-seller", number: "06", title: "Tenant as Seller or Service Provider" },
  { id: "subscription", number: "07", title: "Subscription and Commercial Terms" },
  { id: "commitment", number: "08", title: "Initial Minimum Commitment" },
  { id: "deposit", number: "09", title: "Advance Subscription Deposit" },
  { id: "early-termination", number: "10", title: "Early Termination of Initial Commitment" },
  { id: "renewal", number: "11", title: "Subscription Renewal" },
  { id: "cancellation", number: "12", title: "Cancellation After Initial Commitment" },
  { id: "missed-payment", number: "13", title: "Missed Subscription Payment" },
  { id: "refunds", number: "14", title: "Credits, Reimbursements and Refunds" },
  { id: "commission", number: "15", title: "Commission" },
  { id: "commission-calculation", number: "16", title: "Commission Calculation" },
  { id: "commission-payable", number: "17", title: "When Commission Becomes Payable" },
  { id: "commission-payment", number: "18", title: "Commission Invoicing and Payment" },
  { id: "commission-circumvention", number: "19", title: "Commission Circumvention" },
  { id: "customer-payments", number: "20", title: "Customer Payments" },
  { id: "third-party-payment", number: "21", title: "Third-Party Payment Services" },
  { id: "shipping", number: "22", title: "Shipping and Logistics" },
  { id: "third-party-services", number: "23", title: "Third-Party Services" },
  { id: "domains", number: "24", title: "Domain Names" },
  { id: "domain-transfer", number: "25", title: "Domain Transfer" },
  { id: "tenant-ip", number: "26", title: "Tenant Content and Intellectual Property" },
  { id: "marketing", number: "27", title: "Marketing and Portfolio Use" },
  { id: "personal-data", number: "28", title: "Personal Data" },
  { id: "acceptable-use", number: "29", title: "Acceptable Use" },
  { id: "moderation", number: "30", title: "Content Moderation and Takedown" },
  { id: "suspension", number: "31", title: "Account Suspension and Termination" },
  { id: "retention", number: "32", title: "Account Closure and Record Retention" },
  { id: "taxes", number: "33", title: "Taxes and Compliance" },
  { id: "business-results", number: "34", title: "No Guarantee of Business Results" },
  { id: "availability", number: "35", title: "Service Availability" },
  { id: "disclaimer", number: "36", title: "Disclaimer" },
  { id: "liability", number: "37", title: "Limitation of Liability" },
  { id: "indemnity", number: "38", title: "Tenant Indemnity" },
  { id: "force-majeure", number: "39", title: "Force Majeure" },
  { id: "service-changes", number: "40", title: "Changes to Services and Commercial Terms" },
  { id: "terms-changes", number: "41", title: "Changes to These Terms" },
  { id: "grievance", number: "42", title: "Grievance Redressal" },
  { id: "governing-law", number: "43", title: "Governing Law" },
  { id: "dispute", number: "44", title: "Dispute Resolution" },
  { id: "arbitration", number: "45", title: "Arbitration" },
  { id: "jurisdiction", number: "46", title: "Jurisdiction" },
  { id: "notices", number: "47", title: "Notices" },
  { id: "severability", number: "48", title: "Severability" },
  { id: "waiver", number: "49", title: "Waiver" },
  { id: "assignment", number: "50", title: "Assignment" },
  { id: "survival", number: "51", title: "Survival" },
  { id: "incorporated-policies", number: "52", title: "Incorporated Policies and Commercial Documents" },
  { id: "contact", number: "53", title: "Contact Information" },
  { id: "acknowledgement", number: "54", title: "Acknowledgement" },
];

function PolicySection({
  id,
  number,
  title,
  active,
  children,
}: {
  id: string;
  number: string;
  title: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t py-12 transition-all ${
        active ? "border-[#CFE2FF]" : "border-[#E8EFF8]"
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
          <h2
            className={`text-2xl font-extrabold tracking-[-0.02em] ${
              active ? "text-[#1264F5]" : "text-[#071B49]"
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#DDE9F8] bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF] text-[#1264F5]">
          ✓
        </div>

        <div>
          <h3 className="font-bold text-[#071B49]">{title}</h3>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="rounded-2xl bg-[#F3F8FF] p-6">
      <h3 className="text-xl font-extrabold text-[#071B49]">
        KarobarOne
      </h3>

      <p className="mt-1 text-sm font-semibold text-[#536581]">
        Owned and operated by Krishna Waterproof, a proprietorship
      </p>

      <div className="mt-5 space-y-2 text-sm leading-6 text-[#506486]">
        <p>
          <strong className="text-[#071B49]">GSTIN:</strong>{" "}
          19BBPPG1029N2Z9
        </p>

        <p>
          <strong className="text-[#071B49]">Address:</strong>{" "}
          South Kumrakhali, Kolkata – 700103, West Bengal, India
        </p>
      </div>

      <div className="mt-5 space-y-3">
        <a
          href="mailto:assistance@karobarone.com"
          className="flex items-center gap-3 text-sm font-semibold text-[#1264F5] hover:underline"
        >
          <Mail className="h-4 w-4" />
          assistance@karobarone.com
        </a>

        <a
          href="mailto:karobaroneofficial@gmail.com"
          className="flex items-center gap-3 text-sm font-semibold text-[#1264F5] hover:underline"
        >
          <Mail className="h-4 w-4" />
          karobaroneofficial@gmail.com
        </a>

        <a
          href="tel:+919674665053"
          className="flex items-center gap-3 text-sm font-semibold text-[#1264F5] hover:underline"
        >
          <Phone className="h-4 w-4" />
          +91 96746 65053
        </a>
      </div>

      <div className="mt-6 border-t border-[#DDE9F8] pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#A76D32]">
          Chief Grievance Officer
        </p>

        <p className="mt-1 font-bold text-[#071B49]">
          Mr. Ghosh
        </p>
      </div>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  useEffect(() => {
    const handleScroll = () => {
      const trigger = 160;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const top = element.getBoundingClientRect().top;

          if (top <= trigger) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white text-[#071B49]">
      {/* HERO */}
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
              Terms &{" "}
              <span className="text-[#1264F5]">
                Conditions
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              These Terms govern access to and use of KarobarOne,
              including its websites, business website-building
              services, e-commerce facilities, booking facilities,
              dashboards, software, integrations and related
              technology services.
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

          {/* HERO ILLUSTRATION */}
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1264F5]">
                  ✓
                </div>

                <div>
                  <div className="text-xs font-bold text-[#071B49]">
                    Protected
                  </div>

                  <div className="text-[10px] text-[#71819A]">
                    Legal framework
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[210px_minmax(0,1fr)_36px]">

          {/* LEFT SIDEBAR */}
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
                          {section.title}
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
                    Your agreement matters.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    Please review these Terms and the policies
                    incorporated into them carefully.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="min-w-0 pr-4">

            {/* 01 */}
            <PolicySection
              id="definitions"
              number="01"
              title="Definitions"
              active={activeSection === "definitions"}
            >
              <p>For these Terms:</p>

              <p>
                <strong className="text-[#071B49]">
                  “KarobarOne”, “Platform”, “we”, “us” or “our”
                </strong>{" "}
                means the KarobarOne technology platform owned
                and operated by Krishna Waterproof.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Tenant”, “you” or “your”
                </strong>{" "}
                means the person or business that registers for
                or uses KarobarOne.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Store”
                </strong>{" "}
                means any website, business website,
                e-commerce storefront, service website or
                booking website created or operated using
                KarobarOne.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Customer” or “End Customer”
                </strong>{" "}
                means a person who visits, contacts, purchases
                from or books services from a Tenant through a
                Store.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Tenant Content”
                </strong>{" "}
                means information, text, images, videos, logos,
                trademarks, product information, service
                information, documents, policies or other
                material supplied by the Tenant.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Paid Subscription”
                </strong>{" "}
                means any paid KarobarOne subscription selected
                by the Tenant.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Subscription Fee”
                </strong>{" "}
                means the fee displayed or otherwise communicated
                for the Paid Subscription selected by the Tenant.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Advance Subscription Deposit”
                </strong>{" "}
                means an amount equal to one month’s applicable
                Subscription Fee collected at initial activation
                of a Paid Subscription.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Commission”
                </strong>{" "}
                means a transaction-related platform charge
                payable by the Tenant to KarobarOne at the rate
                communicated and accepted for the applicable
                subscription or commercial arrangement.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Payment Service Provider”
                </strong>{" "}
                means any third-party payment gateway, payment
                aggregator, bank, payment processor or other
                legally permitted payment service supported by
                the Platform.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Logistics Service Provider”
                </strong>{" "}
                means any third-party shipping, courier,
                fulfilment or logistics service supported by the
                Platform.
              </p>

              <p>
                <strong className="text-[#071B49]">
                  “Third-Party Service”
                </strong>{" "}
                means any independent payment, logistics, domain,
                communication, hosting, analytics, AI,
                infrastructure or other external service
                integrated with or used in connection with
                KarobarOne.
              </p>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              id="acceptance"
              number="02"
              title="Acceptance and Electronic Agreement"
              active={activeSection === "acceptance"}
            >
              <p>
                By creating an account, activating a Store,
                purchasing a subscription, clicking an acceptance
                mechanism or continuing to use KarobarOne, the
                Tenant agrees to be legally bound by these Terms.
              </p>

              <p>The Tenant confirms that:</p>

              <NumberedList
                items={[
                  "information supplied to KarobarOne is materially accurate;",
                  "the Tenant has authority to enter into the agreement;",
                  "where an individual acts for a business, that individual is authorised to bind the business;",
                  "the Tenant will comply with applicable law; and",
                  "the Tenant accepts the other policies incorporated into these Terms.",
                ]}
              />
            </PolicySection>

            {/* 03 */}
            <PolicySection
              id="age"
              number="03"
              title="Age and Legal Capacity"
              active={activeSection === "age"}
            >
              <p>
                A person aged{" "}
                <strong className="text-[#071B49]">
                  18 years or above
                </strong>{" "}
                and otherwise legally competent to contract may
                independently enter into these Terms.
              </p>

              <p>
                Where a person below the legal age of contractual
                capacity is associated with a KarobarOne account,
                such participation must be under a parent or
                lawful guardian where legally permissible.
              </p>

              <p>
                The adult parent or lawful guardian must:
              </p>

              <NumberedList
                items={[
                  "be legally competent to contract;",
                  "have authority to represent the minor;",
                  "provide legally required consent;",
                  "accept these Terms as the contracting representative; and",
                  "assume contractual responsibility for the account to the extent permitted by law.",
                ]}
              />

              <p>
                Nothing in these Terms shall be interpreted as
                imposing an independently enforceable contractual
                obligation on a minor where applicable law does
                not permit it.
              </p>

              <p>
                KarobarOne may request evidence of identity, age,
                authority or guardianship where reasonably
                required.
              </p>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              id="eligibility"
              number="04"
              title="Eligibility and Verification"
              active={activeSection === "eligibility"}
            >
              <p>
                KarobarOne is presently intended primarily for
                persons and businesses operating in India.
              </p>

              <p>
                Registration and continued use may require
                information such as:
              </p>

              <BulletList
                items={[
                  "PAN;",
                  "GSTIN where applicable;",
                  "business identity;",
                  "contact information;",
                  "identity/KYC information;",
                  "licences or registrations where applicable; and",
                  "other information reasonably required for compliance or Platform operation.",
                ]}
              />

              <p>
                The Tenant must keep such information accurate
                and current.
              </p>

              <p>
                KarobarOne may reject, restrict or suspend an
                application or account where information is
                materially false, forged, misleading, unverifiable
                or otherwise creates a legal, fraud, security or
                compliance concern.
              </p>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              id="role"
              number="05"
              title="Role of KarobarOne"
              active={activeSection === "role"}
            >
              <p>
                KarobarOne is principally a{" "}
                <strong className="text-[#071B49]">
                  Software-as-a-Service and technology platform
                </strong>.
              </p>

              <p>
                Unless expressly agreed otherwise:
              </p>

              <NumberedList
                items={[
                  "the Tenant is the legal seller or service provider in transactions with its Customers;",
                  "KarobarOne does not become the seller merely because the transaction occurs through technology supplied by KarobarOne;",
                  "KarobarOne does not manufacture or own Tenant products;",
                  "KarobarOne does not itself perform services advertised by a Tenant;",
                  "the underlying sale or service arrangement is between the Tenant and the Customer; and",
                  "the Tenant remains responsible for its products, services and applicable consumer obligations.",
                ]}
              />

              <p>
                KarobarOne may provide infrastructure,
                integrations, automation, support and platform
                controls without becoming the merchant of record
                for Tenant sales.
              </p>

              <p>
                Nothing in these Terms creates a partnership,
                joint venture, franchise, employment relationship
                or agency unless expressly agreed in writing.
              </p>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              id="tenant-seller"
              number="06"
              title="Tenant as Seller or Service Provider"
              active={activeSection === "tenant-seller"}
            >
              <p>
                The Tenant is responsible for ensuring that its
                Store and commercial activities comply with
                applicable law.
              </p>

              <p>
                This includes responsibility, where applicable,
                for:
              </p>

              <BulletList
                items={[
                  "product and service legality;",
                  "descriptions and representations;",
                  "pricing;",
                  "taxes;",
                  "licences and permits;",
                  "invoicing;",
                  "product quality;",
                  "service quality;",
                  "fulfilment;",
                  "delivery;",
                  "warranties;",
                  "returns;",
                  "refunds;",
                  "cancellations;",
                  "consumer complaints; and",
                  "statutory disclosures.",
                ]}
              />

              <p>
                KarobarOne’s provision of technology or assistance
                does not transfer these seller obligations to
                KarobarOne.
              </p>
            </PolicySection>

            {/* 07 */}
            <PolicySection
              id="subscription"
              number="07"
              title="Subscription and Commercial Terms"
              active={activeSection === "subscription"}
            >
              <p>
                KarobarOne may offer free and paid services.
              </p>

              <p>The applicable:</p>

              <BulletList
                items={[
                  "Subscription Fee;",
                  "Commission rate;",
                  "billing frequency;",
                  "commercial entitlement;",
                  "applicable limits; and",
                  "other variable commercial conditions",
                ]}
              />

              <p>
                will be displayed or communicated through the
                relevant pricing page, subscription selection,
                quotation, order form, dashboard or other
                commercial communication presented to the Tenant.
              </p>

              <p>
                By purchasing or activating the applicable
                service, the Tenant accepts those commercial
                conditions in addition to these Terms.
              </p>

              <p>
                KarobarOne is not required to reproduce variable
                plan or feature information within these Terms.
              </p>
            </PolicySection>

            {/* 08 */}
            <PolicySection
              id="commitment"
              number="08"
              title="Initial Minimum Commitment"
              active={activeSection === "commitment"}
            >
              <p>
                Unless another written commercial arrangement
                expressly provides otherwise, a new Paid
                Subscription carries a{" "}
                <strong className="text-[#071B49]">
                  minimum initial commitment of three months
                </strong>.
              </p>

              <p>
                At initial activation, the Tenant will ordinarily
                be charged:
              </p>

              <NumberedList
                items={[
                  "the applicable first month’s Subscription Fee; and",
                  "an Advance Subscription Deposit equal to one additional month’s Subscription Fee.",
                ]}
              />

              <p>
                Applicable taxes shall be charged as required by
                law.
              </p>
            </PolicySection>

            {/* 09 */}
            <PolicySection
              id="deposit"
              number="09"
              title="Advance Subscription Deposit"
              active={activeSection === "deposit"}
            >
              <p>
                The Advance Subscription Deposit forms part of the
                initial commercial commitment.
              </p>

              <p>
                If the Tenant wishes to discontinue after
                completion of the initial three-month period, the
                Tenant must provide cancellation notice{" "}
                <strong className="text-[#071B49]">
                  before commencement of the third subscription
                  month
                </strong>.
              </p>

              <p>Where valid notice is provided:</p>

              <BulletList
                items={[
                  "the Advance Subscription Deposit will be adjusted against the third month’s Subscription Fee;",
                  "no additional normal Subscription Fee will ordinarily be charged for the third month; and",
                  "the subscription may conclude after completion of the minimum commitment.",
                ]}
              />

              <p>
                If no cancellation notice is provided before
                commencement of the third month, the subscription
                will be treated as continuing.
              </p>

              <p>For a continuing subscription:</p>

              <BulletList
                items={[
                  "50% of the otherwise applicable monthly Subscription Fee will ordinarily be charged for Month 3;",
                  "50% will ordinarily be charged for Month 4; and",
                  "normal recurring billing will ordinarily resume thereafter.",
                ]}
              />

              <p>
                This mechanism adjusts the Advance Subscription
                Deposit against the continuing subscription.
              </p>
            </PolicySection>

            {/* 10 */}
            <PolicySection
              id="early-termination"
              number="10"
              title="Early Termination of Initial Commitment"
              active={activeSection === "early-termination"}
            >
              <p>
                If the Tenant terminates or abandons a Paid
                Subscription before completing the minimum initial
                commitment, the Advance Subscription Deposit will
                ordinarily be{" "}
                <strong className="text-[#071B49]">
                  non-refundable
                </strong>{" "}
                and may be retained or adjusted against the
                contractual commitment.
              </p>

              <p>
                Stopping use of the Platform does not by itself
                extinguish amounts already due.
              </p>

              <p>
                Nothing in this clause overrides any non-waivable
                statutory right.
              </p>
            </PolicySection>

            {/* 11 */}
            <PolicySection
              id="renewal"
              number="11"
              title="Subscription Renewal"
              active={activeSection === "renewal"}
            >
              <p>
                After the initial commitment, a Paid Subscription
                will ordinarily operate on the applicable
                recurring prepaid billing cycle unless another
                arrangement has been accepted.
              </p>

              <p>
                KarobarOne may support automatic or manual payment
                mechanisms.
              </p>

              <p>
                The applicable renewal terms will be displayed or
                communicated to the Tenant.
              </p>
            </PolicySection>

            {/* 12 */}
            <PolicySection
              id="cancellation"
              number="12"
              title="Cancellation After Initial Commitment"
              active={activeSection === "cancellation"}
            >
              <p>
                After completing the initial minimum commitment,
                the Tenant may ordinarily choose:
              </p>

              <InfoCard title="Immediate Cancellation">
                <p>
                  The Tenant may request termination of paid
                  functionality without waiting for the prepaid
                  billing period to expire.
                </p>

                <p className="mt-3">
                  Unused portions of an already-paid billing
                  period are ordinarily non-refundable.
                </p>
              </InfoCard>

              <InfoCard title="End-of-Billing-Cycle Cancellation">
                <p>
                  The Tenant may elect to continue receiving paid
                  functionality until the end of the already-paid
                  billing period and stop further renewal
                  thereafter.
                </p>

                <p className="mt-3">
                  The Tenant must clearly indicate the preferred
                  cancellation method.
                </p>
              </InfoCard>
            </PolicySection>

            {/* 13 */}
            <PolicySection
              id="missed-payment"
              number="13"
              title="Missed Subscription Payment"
              active={activeSection === "missed-payment"}
            >
              <p>
                Where a renewal payment remains unpaid:
              </p>

              <InfoCard title="First 7 Days">
                <p>
                  KarobarOne may provide a seven-day payment
                  grace period during which existing paid
                  functionality may continue.
                </p>
              </InfoCard>

              <InfoCard title="Following 15 Days">
                <p>
                  If payment remains unpaid after the grace
                  period:
                </p>

                <BulletList
                  items={[
                    "the Store may remain accessible;",
                    "management of existing transactions and obligations may remain available; but",
                    "new commercial transactions or other paid functionality may be restricted.",
                  ]}
                />
              </InfoCard>

              <InfoCard title="Thereafter">
                <p>
                  If payment continues to remain unpaid after the
                  above period, KarobarOne may downgrade the Store
                  to an eligible free/non-commercial configuration
                  or otherwise restrict the paid service.
                </p>

                <p className="mt-3">
                  Outstanding amounts remain payable
                  notwithstanding restriction or downgrade.
                </p>
              </InfoCard>
            </PolicySection>

            {/* 14 */}
            <PolicySection
              id="refunds"
              number="14"
              title="Credits, Reimbursements and Refunds"
              active={activeSection === "refunds"}
            >
              <p>
                Ordinary cancellation does not create an
                automatic entitlement to a cash refund.
              </p>

              <p>
                Where an adjustment is approved, KarobarOne may
                ordinarily provide a{" "}
                <strong className="text-[#071B49]">
                  billing credit
                </strong>{" "}
                against future KarobarOne charges.
              </p>

              <p>Unless otherwise stated, billing credits:</p>

              <BulletList
                items={[
                  "are non-transferable;",
                  "have no independent cash value;",
                  "may be used against eligible future KarobarOne invoices;",
                  "may remain valid for up to 12 months; and",
                  "may expire upon permanent account closure.",
                ]}
              />

              <p>
                A monetary refund may nevertheless be processed
                where appropriate or legally required, including
                circumstances involving:
              </p>

              <BulletList
                items={[
                  "duplicate payment;",
                  "proven billing error;",
                  "payment received for a service that cannot be provided;",
                  "verified unauthorised payment; or",
                  "another circumstance requiring monetary repayment under applicable law.",
                ]}
              />

              <p>
                Further provisions are contained in the{" "}
                <strong className="text-[#1264F5]">
                  Refund & Cancellation Policy
                </strong>.
              </p>
            </PolicySection>

            {/* 15 */}
            <PolicySection
              id="commission"
              number="15"
              title="Commission"
              active={activeSection === "commission"}
            >
              <p>
                Certain commercial transactions may attract
                Commission payable to KarobarOne.
              </p>

              <p>
                The applicable Commission rate will be disclosed
                to the Tenant through the relevant commercial
                terms and accepted before the applicable service
                is used.
              </p>

              <p>
                Unless otherwise expressly agreed, Commission may
                apply to qualifying transactions originating
                through KarobarOne regardless of the particular
                permitted payment mechanism used by the Tenant.
              </p>

              <p>
                The applicable Commission rate for a transaction
                may be recorded when that transaction is created
                so that subsequent changes do not retrospectively
                alter the commercial rate applicable to that
                transaction.
              </p>
            </PolicySection>

            {/* 16 */}
            <PolicySection
              id="commission-calculation"
              number="16"
              title="Commission Calculation"
              active={activeSection === "commission-calculation"}
            >
              <p>
                Unless another written commercial arrangement
                provides otherwise, Commission will ordinarily be
                calculated on the applicable taxable value of the
                underlying product or service after qualifying
                discounts and refund adjustments.
              </p>

              <p>
                GST charged on the underlying transaction and
                separately charged shipping amounts will ordinarily
                be excluded from the Commission base.
              </p>
            </PolicySection>

            {/* 17 */}
            <PolicySection
              id="commission-payable"
              number="17"
              title="When Commission Becomes Payable"
              active={activeSection === "commission-payable"}
            >
              <p>
                The point at which Commission becomes payable may
                vary according to the type of transaction.
              </p>

              <p>
                KarobarOne may determine Commission eligibility
                using reliable transaction, payment, booking,
                delivery or other Platform records.
              </p>

              <p>
                This may include transactions involving:
              </p>

              <BulletList
                items={[
                  "prepaid products or services;",
                  "Cash on Delivery;",
                  "permitted offline or alternative payment methods;",
                  "advance payments;",
                  "service bookings; and",
                  "pay-after-service arrangements.",
                ]}
              />

              <p>
                Applicable Commission rules displayed or
                communicated for the relevant commercial workflow
                form part of the Tenant’s commercial arrangement
                with KarobarOne.
              </p>
            </PolicySection>

            {/* 18 */}
            <PolicySection
              id="commission-payment"
              number="18"
              title="Commission Invoicing and Payment"
              active={activeSection === "commission-payment"}
            >
              <p>
                KarobarOne may issue periodic consolidated
                Commission invoices or payment demands.
              </p>

              <p>
                Unless another due date is specified in the
                relevant invoice or commercial arrangement,
                Commission amounts shall ordinarily be payable
                within{" "}
                <strong className="text-[#071B49]">
                  15 calendar days
                </strong>{" "}
                of the invoice or demand date.
              </p>

              <p>
                KarobarOne may require payment of an invoiced
                Commission before final resolution of a Commission
                dispute.
              </p>

              <p>
                Where a subsequent review establishes that an
                adjustment is due to the Tenant, the applicable
                amount may be credited or adjusted against future
                amounts payable.
              </p>
            </PolicySection>

            {/* 19 */}
            <PolicySection
              id="commission-circumvention"
              number="19"
              title="Commission Circumvention"
              active={activeSection === "commission-circumvention"}
            >
              <p>
                The Tenant shall not intentionally conceal,
                manipulate, misrepresent or divert KarobarOne-
                originated transactions for the principal purpose
                of avoiding legitimately applicable Commission.
              </p>

              <p>
                Reasonable evidence of deliberate Commission
                avoidance may result in:
              </p>

              <BulletList
                items={[
                  "reconciliation;",
                  "investigation;",
                  "recovery of applicable amounts;",
                  "restriction of new commercial activity;",
                  "suspension; or",
                  "termination for serious or repeated violations.",
                ]}
              />
            </PolicySection>

            {/* 20 */}
            <PolicySection
              id="customer-payments"
              number="20"
              title="Customer Payments"
              active={activeSection === "customer-payments"}
            >
              <p>
                KarobarOne does not ordinarily receive, hold,
                pool, split or settle the purchase consideration
                payable by a Customer for the Tenant’s goods or
                services.
              </p>

              <p>
                Where online payments are enabled, the Tenant
                ordinarily connects its own supported Payment
                Service Provider account.
              </p>

              <p>
                Settlement of Customer sale proceeds occurs under
                the independent relationship between the Tenant
                and the Payment Service Provider.
              </p>

              <p>
                Amounts separately payable by the Tenant to
                KarobarOne—including Subscription Fees, Commission
                and other agreed charges—are independent of
                Customer payments to the Tenant.
              </p>
            </PolicySection>

            {/* 21 */}
            <PolicySection
              id="third-party-payment"
              number="21"
              title="Third-Party Payment Services"
              active={activeSection === "third-party-payment"}
            >
              <p>
                The Tenant may use Payment Service Providers
                supported by KarobarOne from time to time.
              </p>

              <p>
                The Tenant independently contracts with the
                applicable Payment Service Provider and remains
                responsible for complying with that provider’s:
              </p>

              <BulletList
                items={[
                  "onboarding;",
                  "KYC;",
                  "payment;",
                  "settlement;",
                  "chargeback;",
                  "refund;",
                  "risk;",
                  "restricted-business; and",
                  "other applicable requirements.",
                ]}
              />

              <p>
                KarobarOne may provide technical or onboarding
                assistance but does not guarantee third-party
                approval or continued availability.
              </p>

              <p>
                If a Payment Service Provider independently
                suspends or restricts the Tenant, payment
                functionality dependent upon that provider may
                become unavailable.
              </p>

              <p>
                Such restriction is not a payment suspension
                imposed by KarobarOne.
              </p>
            </PolicySection>

            {/* 22 */}
            <PolicySection
              id="shipping"
              number="22"
              title="Shipping and Logistics"
              active={activeSection === "shipping"}
            >
              <p>
                KarobarOne may support integration with one or
                more independent Logistics Service Providers.
              </p>

              <p>Unless expressly agreed otherwise:</p>

              <NumberedList
                items={[
                  "the Tenant maintains its own relationship/account with the selected Logistics Service Provider;",
                  "the Tenant accepts that provider’s terms;",
                  "the Tenant is responsible for applicable logistics charges; and",
                  "KarobarOne acts only as a technology/integration facilitator.",
                ]}
              />

              <p>
                KarobarOne is not the carrier, courier, warehouse
                operator, insurer or guarantor of delivery.
              </p>

              <p>
                The Tenant remains responsible toward the Customer
                for fulfilment and legally applicable delivery,
                cancellation, replacement and refund obligations.
              </p>

              <p>
                Detailed provisions are contained in the{" "}
                <strong className="text-[#1264F5]">
                  Shipping & Delivery Policy
                </strong>.
              </p>
            </PolicySection>

            {/* 23 */}
            <PolicySection
              id="third-party-services"
              number="23"
              title="Third-Party Services"
              active={activeSection === "third-party-services"}
            >
              <p>
                KarobarOne may integrate or interact with
                independent Third-Party Services.
              </p>

              <p>
                KarobarOne may provide reasonable assistance with
                configuration and integration, but third parties
                independently control matters such as:
              </p>

              <BulletList
                items={[
                  "eligibility;",
                  "approval;",
                  "availability;",
                  "pricing;",
                  "restrictions;",
                  "serviceability;",
                  "suspension; and",
                  "termination.",
                ]}
              />

              <p>
                KarobarOne cannot guarantee continued availability
                of a particular Third-Party Service.
              </p>

              <p>
                Where an integrated provider becomes unavailable,
                corresponding Platform functionality may also
                become unavailable without KarobarOne becoming
                responsible for the provider’s independent
                decision or outage.
              </p>
            </PolicySection>

            {/* 24 */}
            <PolicySection
              id="domains"
              number="24"
              title="Domain Names"
              active={activeSection === "domains"}
            >
              <p>
                Where a domain is supplied as part of a KarobarOne
                subscription and purchased by KarobarOne,
                KarobarOne may remain the registrant and owner of
                that domain while the applicable service remains
                active.
              </p>

              <p>
                A Tenant that wishes to independently own a domain
                may request a separate domain purchase arrangement.
              </p>

              <p>
                Where such domain is separately purchased for
                exclusive Tenant ownership, it may be registered
                in the Tenant’s name, with applicable purchase and
                renewal costs payable separately.
              </p>

              <p>
                KarobarOne may retain technical administration
                access where required to provide the service.
              </p>
            </PolicySection>

            {/* 25 */}
            <PolicySection
              id="domain-transfer"
              number="25"
              title="Domain Transfer"
              active={activeSection === "domain-transfer"}
            >
              <p>
                A Tenant may request transfer of a KarobarOne-owned
                domain following cancellation or closure.
              </p>

              <p>Transfer may be processed subject to:</p>

              <BulletList
                items={[
                  "clearance of outstanding Subscription Fees;",
                  "clearance of Commission;",
                  "clearance of domain and other applicable charges;",
                  "payment of transfer-related charges where applicable;",
                  "technical transfer eligibility; and",
                  "applicable registrar or registry requirements.",
                ]}
              />

              <p>
                A domain transfer is not guaranteed where transfer
                is prohibited or restricted by applicable law,
                registrar/registry requirements, third-party
                disputes or technical restrictions.
              </p>
            </PolicySection>

            {/* 26 */}
            <PolicySection
              id="tenant-ip"
              number="26"
              title="Tenant Content and Intellectual Property"
              active={activeSection === "tenant-ip"}
            >
              <p>
                The Tenant retains ownership of its original
                Tenant Content.
              </p>

              <p>
                The Tenant represents and warrants that it owns,
                has licensed, or otherwise has lawful authority to
                use all Tenant Content supplied to KarobarOne.
              </p>

              <p>
                The mere fact that content is freely accessible
                online does not establish that it is free from
                copyright or other intellectual-property
                restrictions.
              </p>

              <p>
                The Tenant grants KarobarOne a non-exclusive,
                royalty-free licence to host, reproduce, resize,
                transmit, technically modify, cache, display, back
                up and otherwise process Tenant Content to the
                extent reasonably required to provide and operate
                the Platform.
              </p>

              <p>
                Further provisions are contained in the{" "}
                <strong className="text-[#1264F5]">
                  Intellectual Property, Copyright, Trademark &
                  Takedown Policy
                </strong>.
              </p>
            </PolicySection>

            {/* 27 */}
            <PolicySection
              id="marketing"
              number="27"
              title="Marketing and Portfolio Use"
              active={activeSection === "marketing"}
            >
              <p>
                Unless the Tenant opts out, KarobarOne may use
                limited publicly available business-facing
                material such as:
              </p>

              <BulletList
                items={[
                  "Tenant or Store name;",
                  "business logo;",
                  "publicly visible Store screenshot; and",
                  "general non-confidential description of the implemented solution",
                ]}
              />

              <p>
                for KarobarOne’s portfolio, case studies or
                marketing.
              </p>

              <p>
                The Tenant may opt out without additional charge
                by contacting KarobarOne.
              </p>

              <p>
                An opt-out will apply prospectively after
                reasonable administrative processing.
              </p>

              <p>
                This clause does not authorise unrestricted use of
                identifiable Customer personal data.
              </p>
            </PolicySection>

            {/* 28 */}
            <PolicySection
              id="personal-data"
              number="28"
              title="Personal Data"
              active={activeSection === "personal-data"}
            >
              <p>
                KarobarOne may process personal data in accordance
                with its{" "}
                <strong className="text-[#1264F5]">
                  Privacy Policy
                </strong>{" "}
                and applicable law.
              </p>

              <p>
                The Tenant is responsible for ensuring that
                personal data collected through its Store is
                collected and used lawfully and that required
                privacy information or consent is provided.
              </p>

              <p>
                KarobarOne may process anonymised or appropriately
                aggregated information for legitimate Platform
                operation, analysis and improvement where such
                information does not reasonably identify the
                relevant individual.
              </p>

              <p>
                Detailed privacy practices are governed by the
                Privacy Policy.
              </p>
            </PolicySection>

            {/* 29 */}
            <PolicySection
              id="acceptable-use"
              number="29"
              title="Acceptable Use"
              active={activeSection === "acceptable-use"}
            >
              <p>The Tenant must comply with:</p>

              <BulletList
                items={[
                  "applicable Indian law;",
                  "the KarobarOne Acceptable Use Policy;",
                  "applicable Payment Service Provider requirements;",
                  "applicable Logistics Service Provider requirements; and",
                  "licence or regulatory conditions applicable to the Tenant’s activities.",
                ]}
              />

              <p>
                KarobarOne may require additional verification for
                regulated activities.
              </p>

              <p>
                KarobarOne may restrict or prohibit products,
                services, content or activities presenting legal,
                regulatory, fraud, safety, payment,
                intellectual-property or other material Platform
                risks.
              </p>

              <p>
                The detailed prohibited/restricted-use framework
                is contained in the{" "}
                <strong className="text-[#1264F5]">
                  Acceptable Use Policy
                </strong>.
              </p>
            </PolicySection>

            {/* 30 */}
            <PolicySection
              id="moderation"
              number="30"
              title="Content Moderation and Takedown"
              active={activeSection === "moderation"}
            >
              <p>
                KarobarOne may review, restrict, reject, disable
                or remove Tenant Content where reasonably
                necessary to:
              </p>

              <BulletList
                items={[
                  "comply with law;",
                  "respond to valid complaints;",
                  "address intellectual-property infringement;",
                  "address suspected fraud;",
                  "address prohibited or unsafe activity;",
                  "protect Customers;",
                  "protect Platform security; or",
                  "comply with lawful governmental or judicial directions.",
                ]}
              />

              <p>
                Serious violations may result in immediate action
                without prior notice where delay could reasonably
                create legal, security, consumer or Platform risk.
              </p>

              <p>
                For less serious violations, KarobarOne may provide
                a reasonable opportunity to correct the breach.
              </p>
            </PolicySection>

            {/* 31 */}
            <PolicySection
              id="suspension"
              number="31"
              title="Account Suspension and Termination"
              active={activeSection === "suspension"}
            >
              <p>
                KarobarOne may suspend, restrict or terminate
                Platform access for reasons including:
              </p>

              <BulletList
                items={[
                  "material violation of these Terms;",
                  "material violation of an incorporated policy;",
                  "fraud;",
                  "unlawful activity;",
                  "serious or repeated intellectual-property infringement;",
                  "material security risk;",
                  "unpaid amounts;",
                  "deliberate Commission avoidance;",
                  "legally prohibited business activity;",
                  "failure to maintain required licences; or",
                  "binding legal/regulatory requirements.",
                ]}
              />

              <p>
                Where appropriate, restrictions may be limited to
                the affected Store or functionality.
              </p>

              <p>
                Termination does not extinguish financial, tax,
                Customer, indemnity or other obligations accrued
                before termination.
              </p>
            </PolicySection>

            {/* 32 */}
            <PolicySection
              id="retention"
              number="32"
              title="Account Closure and Record Retention"
              active={activeSection === "retention"}
            >
              <p>
                Cancellation, downgrade or termination does not
                automatically require deletion of records that
                KarobarOne is legally or reasonably required to
                retain.
              </p>

              <p>
                Records may continue to be retained for purposes
                including:
              </p>

              <BulletList
                items={[
                  "accounting;",
                  "GST and taxation;",
                  "invoicing;",
                  "Commission reconciliation;",
                  "fraud prevention;",
                  "statutory compliance;",
                  "audit;",
                  "disputes; and",
                  "legal proceedings.",
                ]}
              />

              <p>
                Retention and deletion of personal data will
                additionally be governed by the Privacy Policy and
                applicable law.
              </p>
            </PolicySection>

            {/* 33 */}
            <PolicySection
              id="taxes"
              number="33"
              title="Taxes and Compliance"
              active={activeSection === "taxes"}
            >
              <p>
                The Tenant remains responsible for taxes,
                registrations, licences and regulatory obligations
                applicable to the Tenant’s own business and
                Customer transactions.
              </p>

              <p>
                Where KarobarOne generates documents or provides
                compliance assistance using information supplied by
                the Tenant, the Tenant remains responsible for
                verifying the accuracy of its business information
                and providing required approvals.
              </p>

              <p>
                KarobarOne may separately charge for compliance or
                professional assistance where applicable.
              </p>

              <p>
                Such assistance does not transfer the Tenant’s
                underlying statutory obligations to KarobarOne.
              </p>
            </PolicySection>

            {/* 34 */}
            <PolicySection
              id="business-results"
              number="34"
              title="No Guarantee of Business Results"
              active={activeSection === "business-results"}
            >
              <p>
                KarobarOne provides technology and related
                services.
              </p>

              <p>KarobarOne does not guarantee:</p>

              <BulletList
                items={[
                  "revenue;",
                  "sales;",
                  "profitability;",
                  "Customer acquisition;",
                  "traffic;",
                  "conversion;",
                  "search-engine ranking;",
                  "payment-provider approval;",
                  "logistics-provider approval;",
                  "regulatory approval; or",
                  "any particular commercial result.",
                ]}
              />
            </PolicySection>

            {/* 35 */}
            <PolicySection
              id="availability"
              number="35"
              title="Service Availability"
              active={activeSection === "availability"}
            >
              <p>
                KarobarOne will use commercially reasonable
                efforts to operate and maintain the Platform.
              </p>

              <p>
                However, continuous, uninterrupted or error-free
                availability is not guaranteed.
              </p>

              <p>
                The Platform may be temporarily unavailable due to
                maintenance, security events, external
                infrastructure, Third-Party Services, network
                failures, legal requirements or circumstances
                beyond KarobarOne’s reasonable control.
              </p>

              <p>
                Unless a separate written Service Level Agreement
                expressly provides otherwise, Platform availability
                does not carry an automatic monetary service-credit
                guarantee.
              </p>
            </PolicySection>

            {/* 36 */}
            <PolicySection
              id="disclaimer"
              number="36"
              title="Disclaimer"
              active={activeSection === "disclaimer"}
            >
              <p>
                To the maximum extent permitted by applicable law,
                KarobarOne is provided on an{" "}
                <strong className="text-[#071B49]">
                  “as is” and “as available” basis
                </strong>.
              </p>

              <p>
                KarobarOne does not warrant that:
              </p>

              <BulletList
                items={[
                  "the Platform will always operate uninterrupted;",
                  "all defects can be prevented;",
                  "every Third-Party Service will remain compatible;",
                  "every integration will remain continuously available; or",
                  "use of the Platform will produce a particular business result.",
                ]}
              />

              <p>
                Nothing in these Terms excludes a warranty or
                obligation that cannot legally be excluded.
              </p>
            </PolicySection>

            {/* 37 */}
            <PolicySection
              id="liability"
              number="37"
              title="Limitation of Liability"
              active={activeSection === "liability"}
            >
              <p>
                To the maximum extent permitted by applicable law,
                KarobarOne shall not be liable for indirect,
                incidental, special, punitive or consequential
                losses, including loss of:
              </p>

              <BulletList
                items={[
                  "profit;",
                  "revenue;",
                  "goodwill;",
                  "anticipated savings;",
                  "business opportunity; or",
                  "business continuity,",
                ]}
              />

              <p>
                where such loss is not required by applicable law
                to be compensated.
              </p>

              <p>
                KarobarOne shall not ordinarily be responsible for
                loss independently caused by Third-Party Services.
              </p>

              <p>
                Where KarobarOne is legally liable to a Tenant,
                KarobarOne’s aggregate contractual liability arising
                from the relevant claim shall ordinarily not exceed
                the{" "}
                <strong className="text-[#071B49]">
                  Subscription Fees actually paid by that Tenant to
                  KarobarOne during the three months immediately
                  preceding the event giving rise to the claim
                </strong>.
              </p>

              <p>
                Nothing in these Terms excludes or limits liability
                to the extent such exclusion or limitation is
                prohibited by law.
              </p>
            </PolicySection>

            {/* 38 */}
            <PolicySection
              id="indemnity"
              number="38"
              title="Tenant Indemnity"
              active={activeSection === "indemnity"}
            >
              <p>
                To the extent permitted by law, the Tenant agrees
                to indemnify KarobarOne and Krishna Waterproof
                against third-party claims, liabilities, damages
                and reasonable costs arising from:
              </p>

              <BulletList
                items={[
                  "unlawful products or services offered by the Tenant;",
                  "infringement caused by Tenant Content;",
                  "counterfeit or prohibited goods;",
                  "false or misleading Tenant representations;",
                  "defective Tenant products;",
                  "failure to maintain required licences;",
                  "Tenant tax violations;",
                  "privacy violations attributable to the Tenant;",
                  "Customer claims attributable to Tenant conduct;",
                  "misuse of Third-Party Services;",
                  "breach of these Terms; or",
                  "Tenant fraud or wilful misconduct.",
                ]}
              />

              <p>
                This indemnity does not apply to the extent that
                the relevant loss was directly caused by
                KarobarOne’s own unlawful conduct or another
                liability that cannot legally be excluded.
              </p>
            </PolicySection>

            {/* 39 */}
            <PolicySection
              id="force-majeure"
              number="39"
              title="Force Majeure"
              active={activeSection === "force-majeure"}
            >
              <p>
                KarobarOne will not be treated as being in breach
                to the extent performance is prevented or
                materially affected by circumstances beyond its
                reasonable control, including natural disasters,
                war, civil disturbances, major network or utility
                failures, governmental restrictions, material
                third-party infrastructure failures, cyber
                incidents despite reasonable precautions or
                changes in law.
              </p>
            </PolicySection>

            {/* 40 */}
            <PolicySection
              id="service-changes"
              number="40"
              title="Changes to Services and Commercial Terms"
              active={activeSection === "service-changes"}
            >
              <p>
                KarobarOne may modify Platform functionality,
                integrations and operational arrangements from time
                to time.
              </p>

              <p>
                KarobarOne may also revise pricing, Commission
                rates or other commercial terms prospectively.
              </p>

              <p>
                Where a material commercial change affects an
                existing paid subscription, reasonable notice will
                ordinarily be provided before the revised
                commercial term applies, unless an earlier change
                is required by law, taxation, regulatory direction
                or circumstances outside KarobarOne’s reasonable
                control.
              </p>

              <p>
                Commercial changes will not ordinarily
                retrospectively alter completed transactions.
              </p>
            </PolicySection>

            {/* 41 */}
            <PolicySection
              id="terms-changes"
              number="41"
              title="Changes to These Terms"
              active={activeSection === "terms-changes"}
            >
              <p>
                KarobarOne may amend these Terms to reflect:
              </p>

              <BulletList
                items={[
                  "legal or regulatory changes;",
                  "changes to business operations;",
                  "security requirements;",
                  "material Platform changes; or",
                  "other legitimate requirements.",
                ]}
              />

              <p>
                Material amendments may be communicated through
                email, dashboard notice, account notification or
                publication on KarobarOne.
              </p>

              <p>
                Continued use after the effective date of amended
                Terms constitutes acceptance where legally
                permissible.
              </p>
            </PolicySection>

            {/* 42 */}
            <PolicySection
              id="grievance"
              number="42"
              title="Grievance Redressal"
              active={activeSection === "grievance"}
            >
              <p>
                Complaints concerning KarobarOne may be submitted
                to:
              </p>

              <ContactCard />

              <p>
                KarobarOne will process grievances within
                timelines required under applicable law for the
                relevant type of grievance.
              </p>

              <p>
                Tenant-specific Customer complaints concerning the
                Tenant’s products or services remain primarily the
                responsibility of the Tenant unless applicable law
                requires Platform intervention.
              </p>

              <p>
                By default, the Tenant itself will be treated as
                the seller-side grievance contact unless the Tenant
                designates another legally appropriate
                representative.
              </p>
            </PolicySection>

            {/* 43 */}
            <PolicySection
              id="governing-law"
              number="43"
              title="Governing Law"
              active={activeSection === "governing-law"}
            >
              <p>
                These Terms shall be governed by and interpreted
                in accordance with the{" "}
                <strong className="text-[#071B49]">
                  laws of India
                </strong>.
              </p>

              <p>
                Nothing contained in these Terms is intended to
                exclude a statutory right, remedy or forum that
                cannot lawfully be waived.
              </p>
            </PolicySection>

            {/* 44 */}
            <PolicySection
              id="dispute"
              number="44"
              title="Dispute Resolution"
              active={activeSection === "dispute"}
            >
              <p>
                Before commencing formal proceedings, the parties
                should ordinarily attempt to resolve contractual
                disputes through good-faith discussion.
              </p>

              <p>
                A party raising a dispute should provide sufficient
                information regarding the nature of the dispute
                and requested resolution.
              </p>

              <p>
                Unless urgent interim relief is required, the
                parties should ordinarily attempt resolution for up
                to{" "}
                <strong className="text-[#071B49]">
                  30 days
                </strong>{" "}
                from receipt of written dispute notice.
              </p>
            </PolicySection>

            {/* 45 */}
            <PolicySection
              id="arbitration"
              number="45"
              title="Arbitration"
              active={activeSection === "arbitration"}
            >
              <p>
                A contractual dispute that is legally capable of
                being resolved through arbitration and remains
                unresolved may be referred to arbitration in
                accordance with the{" "}
                <strong className="text-[#071B49]">
                  Arbitration and Conciliation Act, 1996
                </strong>
                , as amended from time to time.
              </p>

              <p>Unless otherwise mutually agreed:</p>

              <BulletList
                items={[
                  "the arbitration shall be conducted by a sole arbitrator;",
                  "the parties shall first attempt to mutually appoint the arbitrator;",
                  "failing agreement, appointment may be made in accordance with applicable law;",
                  "the seat of arbitration shall be Kolkata, West Bengal, India;",
                  "the venue shall ordinarily be Kolkata, subject to online or hybrid proceedings where appropriate; and",
                  "the language of arbitration shall be English.",
                ]}
              />
            </PolicySection>

            {/* 46 */}
            <PolicySection
              id="jurisdiction"
              number="46"
              title="Jurisdiction"
              active={activeSection === "jurisdiction"}
            >
              <p>
                Subject to the arbitration provision, mandatory
                statutory jurisdiction and other non-waivable legal
                rights, competent courts at{" "}
                <strong className="text-[#071B49]">
                  Kolkata, West Bengal
                </strong>{" "}
                shall have jurisdiction in matters arising from
                these Terms.
              </p>
            </PolicySection>

            {/* 47 */}
            <PolicySection
              id="notices"
              number="47"
              title="Notices"
              active={activeSection === "notices"}
            >
              <p>
                KarobarOne may send contractual notices using the
                Tenant’s registered contact information.
              </p>

              <p>
                The Tenant is responsible for keeping its contact
                information accurate and current.
              </p>

              <p>Notices to KarobarOne may be sent to:</p>

              <p className="font-semibold text-[#1264F5]">
                assistance@karobarone.com
                <br />
                karobaroneofficial@gmail.com
              </p>
            </PolicySection>

            {/* 48 */}
            <PolicySection
              id="severability"
              number="48"
              title="Severability"
              active={activeSection === "severability"}
            >
              <p>
                If any provision of these Terms is found invalid or
                unenforceable, the remaining provisions shall
                continue to apply.
              </p>

              <p>
                Any invalid provision should, where legally
                permissible, be interpreted or modified only to the
                minimum extent necessary to preserve its intended
                lawful commercial purpose.
              </p>
            </PolicySection>

            {/* 49 */}
            <PolicySection
              id="waiver"
              number="49"
              title="Waiver"
              active={activeSection === "waiver"}
            >
              <p>
                Failure by KarobarOne to immediately exercise a
                contractual right does not constitute permanent
                waiver of that right.
              </p>
            </PolicySection>

            {/* 50 */}
            <PolicySection
              id="assignment"
              number="50"
              title="Assignment"
              active={activeSection === "assignment"}
            >
              <p>
                The Tenant may not transfer its KarobarOne account
                or contractual rights without required approval
                where such transfer affects identity, PAN, GSTIN,
                ownership, domains, payment arrangements or
                regulatory verification.
              </p>

              <p>
                KarobarOne may lawfully transfer or restructure
                its business or contractual rights as part of a
                business transfer, restructuring or succession,
                subject to applicable law.
              </p>
            </PolicySection>

            {/* 51 */}
            <PolicySection
              id="survival"
              number="51"
              title="Survival"
              active={activeSection === "survival"}
            >
              <p>
                Provisions that by their nature should continue
                after cancellation or termination—including
                provisions concerning:
              </p>

              <BulletList
                items={[
                  "outstanding amounts;",
                  "Commission;",
                  "intellectual property;",
                  "record retention;",
                  "taxation;",
                  "limitation of liability;",
                  "indemnity; and",
                  "dispute resolution",
                ]}
              />

              <p>
                shall survive to the extent applicable.
              </p>
            </PolicySection>

            {/* 52 */}
            <PolicySection
              id="incorporated-policies"
              number="52"
              title="Incorporated Policies and Commercial Documents"
              active={activeSection === "incorporated-policies"}
            >
              <p>
                The following documents form part of the applicable
                KarobarOne contractual framework:
              </p>

              <NumberedList
                items={[
                  "Privacy Policy",
                  "Refund & Cancellation Policy",
                  "Shipping & Delivery Policy",
                  "Acceptable Use Policy",
                  "Cookie Policy",
                  "Intellectual Property, Copyright, Trademark & Takedown Policy",
                  "pricing or subscription information accepted by the Tenant;",
                  "applicable Commission terms;",
                  "accepted quotations or order forms; and",
                  "specific written commercial terms accepted for additional services.",
                ]}
              />

              <p>
                Where a specifically accepted written commercial
                agreement expressly varies these Terms for a
                particular service, that specific provision shall
                prevail for that service to the extent of the
                stated conflict.
              </p>
            </PolicySection>

            {/* 53 */}
            <PolicySection
              id="contact"
              number="53"
              title="Contact Information"
              active={activeSection === "contact"}
            >
              <ContactCard />
            </PolicySection>

            {/* 54 */}
            <PolicySection
              id="acknowledgement"
              number="54"
              title="Acknowledgement"
              active={activeSection === "acknowledgement"}
            >
              <p>
                By registering for, subscribing to, accessing or
                continuing to use KarobarOne, the Tenant confirms
                that it has read, understood and agreed to these
                Terms & Conditions and all applicable incorporated
                policies and commercial terms.
              </p>
            </PolicySection>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#EAF3FF] px-4 py-3 text-sm font-bold text-[#1264F5] transition hover:bg-[#DDEBFF]"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </button>
          </article>

          {/* RIGHT PROGRESS */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 flex justify-center">
              <div className="relative flex flex-col items-center gap-3">
                <div className="absolute top-2 h-[calc(100%-16px)] w-px bg-[#DDE9F8]" />

                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    aria-label={`Go to ${section.title}`}
                    onClick={() =>
                      scrollToSection(section.id)
                    }
                    className={`relative z-10 h-2.5 w-2.5 rounded-full border-2 transition-all ${
                      activeSection === section.id
                        ? "scale-125 border-[#1264F5] bg-[#1264F5]"
                        : "border-[#BFD0E7] bg-white hover:border-[#1264F5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}