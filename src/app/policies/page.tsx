"use client";

import { useState } from "react";
import Link from "next/link";

const policies = [
  {
    number: "01",
    title: "Terms & Conditions",
    description:
      "The terms governing access to and use of KarobarOne and its services.",
    slug: "/policies/terms-and-conditions",
  },
  {
    number: "02",
    title: "Privacy Policy",
    description: "How we collect, use, store and protect your information.",
    slug: "/policies/privacy-policy",
  },
  {
    number: "03",
    title: "Cookie Policy",
    description: "How we use cookies and similar technologies.",
    slug: "/policies/cookie-policy",
  },
  {
    number: "04",
    title: "Acceptable Use Policy",
    description: "Rules for using KarobarOne safely and responsibly.",
    slug: "/policies/acceptable-use-policy",
  },
  {
    number: "05",
    title: "Intellectual Property, Copyright & Takedown Policy",
    description: "Reporting infringement and our takedown process.",
    slug: "/policies/intellectual-property-policy",
  },
  {
    number: "06",
    title: "Refund & Cancellation Policy",
    description: "Information about refunds and cancellations.",
    slug: "/policies/refund-cancellation-policy",
  },
  {
    number: "07",
    title: "Shipping & Delivery Policy",
    description: "How KarobarOne services are delivered.",
    slug: "/policies/shipping-delivery-policy",
  },
];

export default function PoliciesPage() {
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const togglePolicy = (slug: string) => {
    setOpenPolicy((current) => (current === slug ? null : slug));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071B49]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#F3F8FF]">

        {/* Background shapes */}
        <div className="absolute -left-20 top-24 h-52 w-52 rounded-full bg-[#DCEBFF]" />
        <div className="absolute -right-24 top-20 h-56 w-56 rounded-full bg-[#F4E9D9]" />
        <div className="absolute right-[28%] top-0 h-40 w-40 rounded-full bg-[#E2EEFF] blur-2xl" />

        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 pb-20 pt-20 lg:px-12">

          {/* Hero copy */}
          <div className="relative z-10 max-w-[680px]">

            <span className="mb-4 block text-sm font-bold tracking-[0.18em] text-[#A76D32]">
              LEGAL
            </span>

            <h1 className="text-[48px] font-extrabold leading-[1] tracking-[-2px] sm:text-[60px] lg:text-[68px]">
              Policies &{" "}
              <span className="text-[#1264F5]">
                Legal
              </span>
            </h1>

            <h2 className="mt-6 max-w-[650px] text-xl font-semibold leading-relaxed text-[#142B55]">
              Clear policies for a safer, more trusted
              business ecosystem.
            </h2>

            <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-[#5C6E8E]">
              Find all KarobarOne policies in one place.
              Learn how we handle your data, ensure
              platform safety, manage payments, shipping
              and more.
            </p>

          </div>

          {/* Hero illustration */}
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
                Transparency
              </p>

              <p className="text-sm leading-5 text-[#5E6F8E]">
                today. A stronger
                <br />
                tomorrow.
              </p>

              <span className="absolute right-4 top-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4E9D9] text-lg">
                →
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

      {/* ================= POLICY LIST ================= */}

      <section className="relative z-10 mx-auto -mt-8 max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-12">

        <div className="overflow-hidden rounded-[22px] border border-[#DCE9FA] bg-white shadow-[0_8px_40px_rgba(26,76,140,0.05)]">

          {policies.map((policy) => {
            const isOpen = openPolicy === policy.slug;

            return (
              <article
                key={policy.slug}
                className="border-b border-[#DCE9F8] last:border-b-0"
              >

                {/* Policy row */}
                <button
                  type="button"
                  onClick={() => togglePolicy(policy.slug)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left transition hover:bg-[#FBFDFF] sm:gap-6 sm:px-7"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-lg font-extrabold text-[#1264F5]">
                    {policy.number}
                  </div>

                  <div className="min-w-0 flex-1">

                    <h2 className="text-base font-bold text-[#071B49] sm:text-lg">
                      {policy.title}
                    </h2>

                    <p className="mt-1 text-xs text-[#667896] sm:text-sm">
                      {policy.description}
                    </p>

                  </div>

                  <span className="text-xl text-[#536581]">
                    {isOpen ? "⌃" : "⌄"}
                  </span>

                </button>

                {/* Small preview + open page */}
                {isOpen && (
                  <div className="border-t border-[#E7EEF8] bg-[#FBFDFF] px-7 py-6">

                    <p className="text-sm leading-6 text-[#536581]">
                      View the complete {policy.title} and all
                      applicable sections.
                    </p>

                    <Link
                      href={policy.slug}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1264F5] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0957D8]"
                    >
                      View Policy
                      <span>→</span>
                    </Link>

                  </div>
                )}

              </article>
            );
          })}

        </div>
      </section>

    </main>
  );
}