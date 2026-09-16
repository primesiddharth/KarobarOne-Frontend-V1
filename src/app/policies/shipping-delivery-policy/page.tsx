"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Mail, Phone } from "lucide-react";

const sections = [
  { id: "nature", label: "Nature of KarobarOne Services" },
  { id: "digital-delivery", label: "Digital Delivery of KarobarOne Services" },
  { id: "delivery-method", label: "Delivery Method" },
  { id: "activation-delays", label: "Activation Delays" },
  { id: "tenant-stores", label: "Products Sold Through Tenant Stores" },
  { id: "shipping-disclosures", label: "Tenant Shipping Disclosures" },
  { id: "logistics", label: "Third-Party Logistics Services" },
  { id: "delayed-shipments", label: "Delayed, Lost or Failed Tenant Shipments" },
  { id: "shipping-charge", label: "No Physical Shipping Charge for KarobarOne SaaS" },
  { id: "contact", label: "Contact" },
];

export default function ShippingDeliveryPolicyPage() {
  const [activeSection, setActiveSection] = useState("nature");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      110;

    window.scrollTo({
      top,
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
              Shipping &amp; Delivery{" "}
              <span className="text-[#1264F5]">Policy</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              This Policy explains how KarobarOne delivers its digital
              services and how shipping responsibilities apply to products
              sold through Tenant Stores.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[#627390]">
              <span>Effective Date: 10 September 2026</span>
              <span className="text-[#1264F5]">|</span>
              <span>Last Updated: 10 September 2026</span>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1264F5]">
                  ↗
                </div>

                <div>
                  <div className="text-xs font-bold text-[#071B49]">
                    Digital Delivery
                  </div>
                  <div className="mt-1 text-[10px] text-[#7A8BA7]">
                    Fast &amp; Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
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
                    Your service delivery matters to us.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#667896]">
                    We aim to provide reliable digital access and transparent
                    delivery information.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="min-w-0 pr-4">

            <PolicySection
              id="nature"
              number="01"
              title="Nature of KarobarOne Services"
              active={activeSection === "nature"}
            >
              <p>
                KarobarOne is a <strong>Software-as-a-Service (SaaS)</strong>{" "}
                and technology platform providing digital services including
                website-building, e-commerce, service-booking and related
                technology functionality.
              </p>

              <p>
                KarobarOne does <strong>not ordinarily sell or ship physical
                goods to its Tenants</strong> as part of its SaaS subscription.
              </p>

              <p>
                Accordingly, no physical shipment or courier delivery is
                ordinarily involved when a Tenant purchases a KarobarOne
                subscription.
              </p>
            </PolicySection>

            <PolicySection
              id="digital-delivery"
              number="02"
              title="Digital Delivery of KarobarOne Services"
              active={activeSection === "digital-delivery"}
            >
              <p>
                KarobarOne services are delivered electronically. Following
                successful payment confirmation, the relevant subscription or
                service will be activated or made available electronically,
                subject to completion of any applicable:
              </p>

              <BulletList
                items={[
                  "account verification;",
                  "business verification;",
                  "KYC requirements;",
                  "GSTIN verification where applicable;",
                  "domain configuration;",
                  "technical configuration;",
                  "content or compliance review; and",
                  "other onboarding requirements applicable to the service.",
                ]}
              />

              <p>
                Successful payment alone does not necessarily mean that every
                commerce or public-facing functionality will become immediately
                operational where additional verification or configuration is
                required.
              </p>
            </PolicySection>

            <PolicySection
              id="delivery-method"
              number="03"
              title="Delivery Method"
              active={activeSection === "delivery-method"}
            >
              <p>
                Access to KarobarOne services may be provided through:
              </p>

              <BulletList
                items={[
                  "the Tenant’s KarobarOne account or dashboard;",
                  "the Tenant’s website or Store;",
                  "an assigned or configured domain/subdomain;",
                  "email or other electronic communication; or",
                  "another electronic method supported by KarobarOne.",
                ]}
              />

              <p>
                No physical delivery address is required for delivery of the
                KarobarOne SaaS subscription itself, except where an address is
                required for account verification, invoicing, taxation or
                regulatory purposes.
              </p>
            </PolicySection>

            <PolicySection
              id="activation-delays"
              number="04"
              title="Activation Delays"
              active={activeSection === "activation-delays"}
            >
              <p>
                Activation or availability of certain services may be delayed
                where:
              </p>

              <BulletList
                items={[
                  "required information has not been provided;",
                  "verification remains incomplete;",
                  "submitted information is inaccurate;",
                  "third-party approval is pending;",
                  "domain configuration is incomplete;",
                  "technical setup is incomplete;",
                  "compliance review is required; or",
                  "circumstances outside KarobarOne’s reasonable control affect activation.",
                ]}
              />

              <p>
                KarobarOne will use reasonable efforts to complete
                Platform-controlled activation after the necessary requirements
                have been satisfied.
              </p>
            </PolicySection>

            <PolicySection
              id="tenant-stores"
              number="05"
              title="Products Sold Through Tenant Stores"
              active={activeSection === "tenant-stores"}
            >
              <p>
                KarobarOne enables independent Tenants to sell products and
                services through websites created using the Platform.
              </p>

              <InfoCard title="Seller Responsibility" icon="01">
                <p>
                  Where a Customer purchases a physical product from a Tenant
                  Store, <strong>the Tenant, and not KarobarOne, is the seller
                  of that product.</strong>
                </p>
              </InfoCard>

              <p>Physical shipment and delivery are therefore governed by:</p>

              <BulletList
                items={[
                  "the Tenant’s own Shipping & Delivery Policy;",
                  "the terms displayed on the relevant Tenant Store;",
                  "the applicable Logistics Service Provider’s terms; and",
                  "applicable Indian law.",
                ]}
              />

              <p>
                KarobarOne does not become the seller, courier, carrier or
                logistics provider merely because the Store operates using
                KarobarOne technology.
              </p>
            </PolicySection>

            <PolicySection
              id="shipping-disclosures"
              number="06"
              title="Tenant Shipping Disclosures"
              active={activeSection === "shipping-disclosures"}
            >
              <p>
                A Tenant selling physical goods through KarobarOne is
                responsible for clearly providing Customers with applicable
                shipping and delivery information before purchase, including
                where relevant:
              </p>

              <BulletList
                items={[
                  "expected dispatch or delivery timelines;",
                  "delivery availability or serviceable locations;",
                  "applicable shipping or delivery charges;",
                  "conditions affecting delivery;",
                  "return-shipping costs where applicable; and",
                  "other information required for the Customer to make an informed purchasing decision.",
                ]}
              />

              <p>
                The Tenant is responsible for ensuring such information is
                accurate and current.
              </p>
            </PolicySection>

            <PolicySection
              id="logistics"
              number="07"
              title="Third-Party Logistics Services"
              active={activeSection === "logistics"}
            >
              <p>
                KarobarOne may enable integration with one or more independent
                third-party Logistics Service Providers.
              </p>

              <p>Unless otherwise expressly agreed:</p>

              <BulletList
                items={[
                  "the Tenant maintains its own relationship with the applicable Logistics Service Provider;",
                  "shipping charges and serviceability are determined according to the applicable provider and Tenant arrangement;",
                  "the Tenant remains responsible for fulfilment of Customer orders; and",
                  "KarobarOne acts as a technology and integration facilitator.",
                ]}
              />

              <p>
                KarobarOne does not guarantee delivery performance of an
                independent Logistics Service Provider.
              </p>
            </PolicySection>

            <PolicySection
              id="delayed-shipments"
              number="08"
              title="Delayed, Lost or Failed Tenant Shipments"
              active={activeSection === "delayed-shipments"}
            >
              <p>
                Any delay, loss, damage, failed delivery or other fulfilment
                issue concerning a physical product purchased from a Tenant
                Store must ordinarily be addressed by the Customer with the
                relevant Tenant.
              </p>

              <p>
                The Tenant remains responsible for complying with applicable
                Customer rights relating to delivery, replacement,
                cancellation, return or refund.
              </p>

              <p>
                KarobarOne may provide reasonable technical assistance where
                the issue relates to Platform functionality but does not assume
                the underlying seller’s delivery obligations.
              </p>
            </PolicySection>

            <PolicySection
              id="shipping-charge"
              number="09"
              title="No Physical Shipping Charge for KarobarOne SaaS"
              active={activeSection === "shipping-charge"}
            >
              <p>
                KarobarOne does not ordinarily charge a physical shipping or
                courier fee for delivery of its SaaS subscription because the
                service is delivered electronically.
              </p>

              <p>
                Any separately applicable charges will be disclosed before the
                Tenant purchases the relevant service.
              </p>
            </PolicySection>

            <PolicySection
              id="contact"
              number="10"
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
                <div className="absolute left-1/2 top-1 h-[calc(100%-8px)] w-px -translate-x-1/2 bg-[#DDE9F8]" />

                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    aria-label={`Go to ${section.label}`}
                    onClick={() => scrollToSection(section.id)}
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


/* =========================================================
   REUSABLE POLICY SECTION
========================================================= */

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
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t py-12 transition-all first:border-t-0 first:pt-0 ${
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
          {label && (
            <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#A76D32]">
              {label}
            </div>
          )}

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


/* =========================================================
   BULLET LIST
========================================================= */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#DDE9F8] bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF3FF] text-sm font-bold text-[#1264F5]">
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-[#071B49]">{title}</h3>

          <div className="mt-2 text-[14px] leading-7 text-[#506486]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard() {
  return (
    <div className="rounded-2xl bg-[#F3F8FF] p-6">
      <h3 className="text-lg font-extrabold text-[#071B49]">
        KarobarOne
      </h3>

      <p className="mt-1 text-sm font-semibold text-[#506486]">
        Owned and operated by Krishna Waterproof, a proprietorship
      </p>

      <div className="mt-6 space-y-4 text-sm text-[#506486]">

        <div>
          <p className="font-bold text-[#071B49]">Address</p>
          <p className="mt-1 leading-6">
            South Kumrakhali
            <br />
            Kolkata – 700103
            <br />
            West Bengal, India
          </p>
        </div>

        <div>
          <p className="font-bold text-[#071B49]">GSTIN</p>
          <p className="mt-1">19BBPPG1029N2Z9</p>
        </div>

        <div>
          <p className="font-bold text-[#071B49]">Email</p>

          <div className="mt-2 space-y-2">
            <a
              href="mailto:assistance@karobarone.com"
              className="flex items-center gap-2 transition hover:text-[#1264F5]"
            >
              <Mail className="h-4 w-4 text-[#1264F5]" />
              assistance@karobarone.com
            </a>

            <a
              href="mailto:karobaroneofficial@gmail.com"
              className="flex items-center gap-2 transition hover:text-[#1264F5]"
            >
              <Mail className="h-4 w-4 text-[#1264F5]" />
              karobaroneofficial@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-[#071B49]">Phone</p>

          <a
            href="tel:+919674665053"
            className="mt-2 flex items-center gap-2 transition hover:text-[#1264F5]"
          >
            <Phone className="h-4 w-4 text-[#1264F5]" />
            +91 96746 65053
          </a>
        </div>

      </div>
    </div>
  );
}