"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, X } from "lucide-react"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { StepWrapper } from "../step-wrapper"
import { NavigationButtons } from "../navigation-buttons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileImage } from "lucide-react";


//  DROPDOWN -----------

interface DropdownSelectProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function DropdownSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex  w-full  items-center justify-between rounded-lg h-10 border border-border bg-muted/30 px-4 py-3 text-left text-sm transition-all hover:border-primary/40 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <span
          className={
            value ? "text-foreground" : "text-muted-foreground"
          }
        >
          {value || placeholder}
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-xl">
          <div
            className="max-h-64 overflow-y-auto p-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {options.map((option) => {
              const selected = value === option

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center hover:bg-[#f0ecea] justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${selected
                    ? " font-semibold"
                    : "hover:bg-muted/60"
                    }`}
                >
                  <span>{option}</span>

                  {selected && (
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

//  MULTI DROPDOWN -----------

interface MultiDropdownSelectProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
}

function MultiDropdownSelect({
  options,
  value,
  onChange,
  placeholder = "Select options",
}: MultiDropdownSelectProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex rounded-lg h-10  w-full items-center justify-between  border border-border bg-muted/30 px-4 py-3 text-left text-sm transition-all hover:border-primary/40 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <span
          className={
            value.length
              ? "text-foreground"
              : "text-muted-foreground"
          }
        >
          {value.length
            ? `${value.length} selected`
            : placeholder}
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {value.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {value.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground"
            >
              {item}

              <button
                type="button"
                onClick={() =>
                  onChange(value.filter((selected) => selected !== item))
                }
                className="rounded-full p-0.5 hover:bg-background"
                aria-label={`Remove ${item}`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-xl">
          <div
            className="max-h-64 overflow-y-auto p-1"
            style={{ scrollbarWidth: "thin" }}
          >
            {options.map((option) => {
              const selected = value.includes(option)

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleOption(option)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${selected
                    ? "bg-muted font-medium"
                    : "hover:bg-muted/60"
                    }`}
                >
                  <span>{option}</span>

                  {selected && (
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

//  OPTIONS ------------

// Business type
const businessTypeOptions = [
  "Manufacturer",
  "Service Provider",
  "Retailer",
  "Wholesaler",
  "Distributor",
  "Dealer",
  "Importer",
  "Exporter",
  "Consultant",
  "Freelancer",
  "Professional Practice",
  "Agency",
  "Contractor",
  "Startup",
  "SaaS Company",
  "Software Company",
  "Marketplace",
  "Educational Institution",
  "Healthcare Provider",
  "Hospitality Business",
  "Restaurant/Food Business",
  "Real Estate",
  "NGO",
  "Product + Service Business",
  "Other",
]

// Industry
const industryOptions = [
  "IT",
  "Software-SaaS",
  "Digital Marketing",
  "Consulting",
  "Manufacturing",
  "Engineering",
  "Automotive",
  "Rubber-Plastic-Polymer",
  "Chemicals",
  "Construction",
  "Architecture",
  "Interior Design",
  "Real Estate",
  "Retail",
  "Wholesale",
  "E-commerce",
  "FMCG",
  "Food & Beverage",
  "Hospitality",
  "Travel",
  "Healthcare",
  "Beauty-Wellness",
  "Fitness",
  "Education",
  "Finance",
  "Accounting-Tax",
  "Legal",
  "Logistics",
  "Agriculture",
  "Textile-Apparel",
  "Jewellery",
  "Electronics",
  "Furniture",
  "Events",
  "Media",
  "Security",
  "HR-Recruitment",
  "Repair-Maintenance",
  "NGO",
  "Other",
]

// What the business sells/provides
const businessOfferingOptions = [
  "Physical Products",
  "Digital Products",
  "Professional Services",
  "Local Services",
  "Online Services",
  "Appointments",
  "Memberships",
  "Subscriptions",
  "Software",
  "SaaS",
  "Projects",
  "Consulting",
  "Experiences",
  "Courses",
  "Products + Services",
  "Other",
]

// Registration
const registrationOptions = [
  "Proprietorship",
  "Partnership",
  "LLP",
  "Pvt Ltd",
  "Public Ltd",
  "OPC",
  "Trust",
  "Society",
  "Section 8",
  "Individual Professional",
  "Unregistered",
  "Other",
]

// Identifiers
const registrationIdentifierOptions = [
  "PAN",
  "GSTIN",
  "Udyam-MSME",
  "CIN",
  "LLPIN",
  "Shop & Establishment",
  "FSSAI",
  "IEC",
  "Professional Licence",
  "Trade Licence",
  "Startup India",
  "None",
  "Other",
]

// Legal name
const legalNameOptions = [
  "Display brand name",
  "Registered legal name",
  "Both",
  "Do not publicly show legal name",
]

// Logo
const logoOptions = [
  "Yes—upload",
  "No—use business name as text",
  "No—add later",
]

const logoTypeOptions = [
  "Wordmark",
  "Lettermark",
  "Symbol",
  "Combination",
  "Emblem",
  "Mascot",
  "Not sure",
]

// Stage
const businessStageOptions = [
  "Pre-launch",
  "Newly Started",
  "Early Stage",
  "Growing",
  "Established",
  "Mature",
  "Expanding",
  "Rebranding",
  "Digitising Offline Business",
]

// Beginning
const businessBeginningOptions = [
  "Family Business",
  "Market Gap",
  "Professional Experience",
  "Freelance Work",
  "Small Shop",
  "Manufacturing Unit",
  "Consultancy",
  "Technology Idea",
  "Side Business",
  "Acquisition",
  "Franchise",
  "Other",
]

// Experience
const experienceOptions = [
  "<1",
  "1–2",
  "3–5",
  "6–10",
  "11–15",
  "16–20",
  "21–30",
  "30+ years",
]

// Business model
const businessModelOptions = [
  "Direct Sales",
  "Retail",
  "Wholesale",
  "Distribution",
  "Dealership",
  "Manufacturing",
  "Contract Manufacturing",
  "Project",
  "Retainer",
  "Subscription",
  "SaaS",
  "Commission",
  "Marketplace",
  "Franchise",
  "Licensing",
  "Consulting",
  "Service Contract",
  "AMC",
  "Rental",
  "Membership",
]

// Customer relationship
const customerRelationshipOptions = [
  "One-time",
  "Repeat Purchase",
  "Long-term Contract",
  "Annual Contract",
  "Subscription",
  "Retainer",
  "AMC",
  "Project",
  "Partnership",
  "Dealer-Distributor",
]

// Team
const teamSizeOptions = [
  "1",
  "2–5",
  "6–10",
  "11–25",
  "26–50",
  "51–100",
  "101–250",
  "250+",
  "Prefer not to display",
]

// Product
const productTypeOptions = [
  "Consumer Goods",
  "Industrial Products",
  "Raw Materials",
  "Components",
  "Machinery",
  "Equipment",
  "Electronics",
  "Food",
  "Apparel",
  "Beauty",
  "Medical",
  "Software",
  "Digital Product",
  "Custom Product",
  "Made-to-order",
  "Wholesale",
  "Other",
]

const productAudienceOptions = [
  "Consumers",
  "Businesses",
  "Manufacturers",
  "Retailers",
  "Dealers",
  "Distributors",
  "Professionals",
  "Institutions",
  "Government",
  "Export Buyers",
  "Other",
]

const productPurposeOptions = [
  "Convenience",
  "Productivity",
  "Cost Reduction",
  "Safety",
  "Performance",
  "Protection",
  "Automation",
  "Decoration",
  "Maintenance",
  "Repair",
  "Health",
  "Comfort",
  "Entertainment",
  "Industrial Application",
  "Business Operations",
  "Other",
]

const productCharacteristicsOptions = [
  "Durable",
  "Lightweight",
  "Heavy Duty",
  "Compact",
  "Portable",
  "Energy Efficient",
  "High Performance",
  "Low Maintenance",
  "Easy Use",
  "Safe",
  "Waterproof",
  "Weather Resistant",
  "Heat Resistant",
  "Chemical Resistant",
  "Corrosion Resistant",
  "Eco-friendly",
  "Recyclable",
  "Customisable",
  "Premium",
  "Cost Effective",
  "Industrial Grade",
]

const customisationOptions = [
  "Fully",
  "Size",
  "Colour",
  "Material",
  "Design",
  "Branding",
  "Specification",
  "Limited",
  "Not Customisable",
]

const productPricingOptions = [
  "Exact Price",
  "Starting From",
  "Range",
  "Request Quote",
  "Contact for Price",
  "Hide Price",
]

const productPriceBandOptions = [
  "<₹500",
  "₹500–1k",
  "₹1k–5k",
  "₹5k–10k",
  "₹10k–25k",
  "₹25k–50k",
  "₹50k–1L",
  "₹1L–5L",
  "₹5L+",
  "Variable-Custom",
]

const productAvailabilityOptions = [
  "Ready Stock",
  "Limited Stock",
  "Made-to-order",
  "Pre-order",
  "Manufacture after Order",
  "Seasonal",
  "On Request",
  "Contact",
]

const productCTAOptions = [
  "Call",
  "WhatsApp",
  "Enquire",
  "Request Quote",
  "Visit Store",
  "Contact Sales",
  "Download Brochure",
]

// Service
const serviceTypeOptions = [
  "Consulting",
  "Professional",
  "Technical",
  "Repair",
  "Maintenance",
  "Installation",
  "Development",
  "Design",
  "Marketing",
  "Healthcare",
  "Education",
  "Training",
  "Legal",
  "Financial",
  "Home-Local Service",
  "Appointment-based",
  "Project-based",
  "Subscription",
  "Managed Service",
  "Other",
]

const serviceDeliveryOptions = [
  "Customer Location",
  "Our Location",
  "Online",
  "Phone",
  "Video",
  "Remote Access",
  "Hybrid",
  "Nationwide",
  "International",
]

const serviceAudienceOptions = [
  "Individuals",
  "Startups",
  "Small Businesses",
  "MSMEs",
  "Enterprises",
  "Manufacturers",
  "Retailers",
  "Professionals",
  "Institutions",
  "Government",
  "Other",
]

const serviceProblemOptions = [
  "Save Time",
  "Reduce Cost",
  "Increase Revenue",
  "Efficiency",
  "Quality",
  "Risk Reduction",
  "Compliance",
  "Technical Problem",
  "Automation",
  "Marketing",
  "Sales",
  "CX",
  "Repair-Maintenance",
  "Skills",
  "Professional Advice",
  "Other",
]

const serviceEngagementOptions = [
  "One-time",
  "Project",
  "Hourly",
  "Daily",
  "Monthly Retainer",
  "Subscription",
  "AMC",
  "Annual Contract",
  "Consultation",
  "On-demand",
  "Package",
  "Custom",
]

const servicePricingOptions = [
  "Fixed",
  "Starting From",
  "Range",
  "Hourly",
  "Daily",
  "Monthly",
  "Project",
  "Subscription",
  "Custom Quote",
  "Contact",
  "Hide Price",
]

const appointmentOptions = [
  "Mandatory",
  "Optional",
  "Consultation First",
  "Site Visit First",
  "No",
]

const responseTimeOptions = [
  "Immediate",
  "Same Day",
  "Within 24h",
  "1–2 Business Days",
  "3–5 Days",
  "1 Week",
  "Scheduled",
  "Depends",
]

const supportOptions = [
  "None",
  "Phone",
  "Email",
  "WhatsApp",
  "Free Support Period",
  "Paid Support",
  "Warranty",
  "AMC",
  "Maintenance",
  "Training",
  "Documentation",
  "Dedicated Manager",
]

const serviceCTAOptions = [
  "Call",
  "WhatsApp",
  "Request Quote",
  "Book Appointment",
  "Consultation",
  "Enquiry",
  "Site Visit",
  "Contact Sales",
]


const primaryCustomerOptions = [
  "Individual Consumers",
  "Small Businesses",
  "Startups",
  "MSMEs",
  "Enterprises",
  "Manufacturers",
  "Retailers",
  "Wholesalers",
  "Dealers",
  "Distributors",
  "Government",
  "Institutions",
  "Hospitals",
  "Professionals",
  "NRIs",
  "International Buyers",
  "Other"
]


const websiteObjectiveOptions = [
  "Company Profile",
  "Business Portfolio",
  "Product Catalogue",
  "Service Catalogue",
  "Lead Generation",
  "Enquiries",
  "Credibility",
  "Business Information",
  "Project Showcase",
  "Expertise Showcase",
  "Appointment Generation",
  "Dealer-Distributor Enquiries",
  "Recruitment",
  "Investor Information",
  "Online Presence",
  "Combination"
] as string[]

const secondaryObjectiveOptions = [
  "Calls",
  "WhatsApp",
  "Quote Requests",
  "Contact Leads",
  "Appointment Requests",
  "Store Visits",
  "Product Discovery",
  "Service Discovery",
  "Brochure Downloads",
  "Portfolio",
  "Newsletter",
  "Social Growth",
  "Recruitment",
  "Dealer Applications",
  "Partnership",
  "Distributor Enquiries"
] as string[]

const relationshipModelOptions = [
  "B2C",
  "B2B",
  "B2B2C",
  "D2C",
  "B2G",
  "C2C",
  "Marketplace",
  "Mixed"
] as string[]

const geographicMarketOptions = [
  "Neighbourhood",
  "Own City",
  "Multiple Cities",
  "State",
  "Multiple States",
  "Pan India",
  "South Asia",
  "International",
  "Global-Remote"
] as string[]

const customerEngagementOptions = [
  "Store",
  "Office",
  "Factory",
  "Customer Location",
  "Phone",
  "WhatsApp",
  "Email",
  "Website",
  "Social Media",
  "Marketplace",
  "Dealer Network",
  "Distributor Network",
  "Online Meeting",
  "Mobile App"
] as string[]

const primaryCTAOptions = [
  "Call Now",
  "WhatsApp",
  "Contact Us",
  "Send Enquiry",
  "Request Quote",
  "Get Consultation",
  "Book Appointment",
  "View Products",
  "View Services",
  "View Portfolio",
  "Visit Store",
  "Download Brochure",
  "Apply Now"
] as string[]

const buyingProcessOptions = [
  "Buy immediately",
  "Call first",
  "Request quotation",
  "Requirement discussion",
  "Consultation",
  "Demo",
  "Site visit",
  "Sample",
  "Negotiation",
  "Appointment",
  "Multiple approvals",
  "Depends"
] as string[]

const salesCycleOptions = [
  "Immediate",
  "Same Day",
  "1–3 Days",
  "4–7 Days",
  "1–2 Weeks",
  "2–4 Weeks",
  "1–3 Months",
  "3+ Months",
  "Varies",
  "Not Sure"
] as string[]

const visitorTypeOptions = [
  "First-time Customer",
  "Existing Customer",
  "Business Owner",
  "Founder",
  "Purchase Manager",
  "Technical Team",
  "Management",
  "Dealer",
  "Distributor",
  "Investor",
  "Candidate",
  "Government Buyer",
  "Consumer"
] as string[]

const customerPriorityOptions = [
  "Price",
  "Quality",
  "Reliability",
  "Speed",
  "Convenience",
  "Availability",
  "Expertise",
  "Customisation",
  "Trust",
  "Certifications",
  "Experience",
  "Location",
  "Warranty",
  "Support",
  "Reputation",
  "Results",
  "Innovation",
  "Safety",
  "Compliance"
] as string[]

const valuesOptions = [
  "Integrity",
  "Transparency",
  "Quality",
  "Reliability",
  "Customer First",
  "Innovation",
  "Accountability",
  "Excellence",
  "Speed",
  "Professionalism",
  "Safety",
  "Sustainability",
  "Collaboration",
  "Respect",
  "Ownership",
  "Continuous Improvement",
  "Affordability",
  "Precision",
  "Trust",
  "Commitment"
] as string[]

const teamHighlightOptions = [
  "Founders",
  "Management",
  "Engineers",
  "Developers",
  "Consultants",
  "Designers",
  "Technicians",
  "Sales",
  "Support",
  "Doctors",
  "Professionals",
  "Trainers",
  "Craftspeople",
  "Production Team",
  "No Team Section"
] as string[]

const publicCompanyInfoOptions = [
  "Experience",
  "Team Size",
  "Customers",
  "Projects",
  "Products",
  "Locations",
  "Countries",
  "Production Capacity",
  "Certifications",
  "Awards",
  "Partnerships",
  "Infrastructure",
  "Technology",
  "Client Brands",
  "None"
] as string[]

const productDifferentiatorOptions = [
  "Better Quality",
  "Design",
  "Material",
  "Longer Life",
  "Higher Performance",
  "More Features",
  "Compact",
  "Large Capacity",
  "Lightweight",
  "Energy Efficient",
  "Easy Use",
  "Low Maintenance",
  "Customisable",
  "Made-to-order",
  "Local",
  "Imported",
  "Proprietary",
  "Certified",
  "Eco-friendly",
  "Premium Finish",
  "Industrial Grade",
  "Food Grade",
  "Medical Grade",
  "Export Grade"
] as string[]

const serviceDifferentiatorOptions = [
  "Faster Service",
  "Expertise",
  "Personalised",
  "Dedicated Manager",
  "End-to-end",
  "Specialist Team",
  "Certified Professionals",
  "On-site",
  "Remote",
  "24×7",
  "Same-day",
  "Response SLA",
  "Transparent Process",
  "Fixed Timeline",
  "Reporting",
  "Post-project Support",
  "Free Consultation",
  "Assessment",
  "Custom Solution"
] as string[]

const operationalAdvantageOptions = [
  "In-house Team",
  "In-house Production",
  "Own Infrastructure",
  "Warehouse",
  "Delivery",
  "Service Team",
  "Automation",
  "SOPs",
  "Quality Management",
  "Fast Procurement",
  "Inventory",
  "Multi-location",
  "Scalable Capacity",
  "Backup Suppliers",
  "Vendor Network"
] as string[]

const commercialAdvantageOptions = [
  "Competitive",
  "Premium Value",
  "Transparent",
  "Fixed Price",
  "Flexible Packages",
  "Subscription",
  "Pay-per-use",
  "EMI",
  "Credit",
  "Volume Pricing",
  "Bulk Discounts",
  "Custom Quotes",
  "No Hidden Charges",
  "Free Trial",
  "Free Consultation",
  "Experience First Then Pay"
] as string[]

const trustFactorOptions = [
  "GST",
  "MSME",
  "ISO",
  "Industry Certification",
  "Government Approval",
  "Professional Licence",
  "Trademark",
  "Patent-IP",
  "Recognised Clients",
  "Testimonials",
  "Experience",
  "Awards",
  "Association Membership",
  "Case Studies",
  "Public Reviews",
  "Physical Facility",
  "Registered Company",
  "None"
] as string[]



const businessStatisticOptions = [
  "Years Experience",
  "Customers",
  "Projects",
  "Products Sold",
  "Orders",
  "Team",
  "Locations",
  "Countries",
  "Production Capacity",
  "Retention",
  "Repeat Customer %"
] as string[]

const certificationOptions = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "GST",
  "Udyam",
  "Startup India",
  "FSSAI",
  "BIS",
  "CE",
  "IEC",
  "Industry Association",
  "Professional Licence",
  "Government Registration",
  "Other",
  "None"
] as string[]

const awardOptions = [
  "Industry Award",
  "Customer-Vendor Award",
  "Government Recognition",
  "Media Recognition",
  "Startup-Competition Recognition",
  "No",
  "Prefer Not to Display"
] as string[]

const portfolioWorkOptions = [
  "Client Projects",
  "Manufactured Products",
  "Installations",
  "Websites",
  "Software",
  "Designs",
  "Construction",
  "Consulting",
  "Events",
  "Before-After",
  "Case Studies",
  "Research",
  "Other"
] as string[]

const projectRequirementOptions = [
  "New Development",
  "Improvement",
  "Cost Reduction",
  "Performance",
  "Automation",
  "Repair",
  "Replacement",
  "Customisation",
  "Expansion",
  "Compliance",
  "Marketing-Sales Growth",
  "Other"
] as string[]

const projectSolutionOptions = [
  "Custom Product",
  "Standard Product",
  "Consulting",
  "Development",
  "Implementation",
  "Installation",
  "Repair",
  "Maintenance",
  "Automation",
  "Marketing",
  "Design",
  "Training",
  "End-to-end"
] as string[]

const projectOutcomeOptions = [
  "Revenue Increase",
  "Cost Reduction",
  "Time Saved",
  "Faster Process",
  "Productivity",
  "Quality",
  "Capacity",
  "Error Reduction",
  "Reliability",
  "Customer Experience",
  "Compliance",
  "Successful Delivery",
  "Not Quantified"
] as string[]

const clientIdentityOptions = [
  "Name + Logo",
  "Name Only",
  "Logo Only",
  "Anonymous",
  "No"
] as string[]

const evidenceOptions = [
  "Project Photos",
  "Before-After",
  "Screenshots",
  "Video",
  "Testimonial",
  "Performance Metrics",
  "Certificate",
  "Case Study",
  "None"
] as string[]

const clientLogoOptions = [
  "Yes",
  "No",
  "Selected Clients Only"
] as string[]

const highlightCustomerOptions = [
  "Enterprises",
  "MSMEs",
  "Startups",
  "Government",
  "Recognised Brands",
  "International",
  "Local Businesses",
  "Consumers",
  "Dealers",
  "Distributors",
  "Institutions"
] as string[]

const permissionOptions = [
  "Yes",
  "No",
  "Some",
  "Need to Verify"
] as string[]

const testimonialOptions = [
  "Written",
  "Video",
  "Google Reviews",
  "Social Reviews",
  "No",
  "Add Later"
] as string[]

const testimonialInfoOptions = [
  "Customer Name",
  "Company",
  "Designation",
  "Photo",
  "Company Logo",
  "Rating",
  "Written Review",
  "Video"
] as string[]

const reviewSourceOptions = [
  "Google",
  "Facebook",
  "Justdial",
  "IndiaMART",
  "Amazon",
  "Flipkart",
  "Trustpilot",
  "LinkedIn",
  "Other Marketplace",
  "None"
] as string[]

const contactChannelOptions = [
  "Phone",
  "WhatsApp",
  "Email",
  "Contact Form",
  "Office",
  "Store",
  "Factory",
  "Google Maps",
  "Social Media"
] as string[]

const whatsappSameOptions = [
  "Yes",
  "No",
  "Do Not Offer WhatsApp"
] as string[]

const locationTypeOptions = [
  "Office",
  "Store",
  "Factory",
  "Warehouse",
  "Clinic",
  "Restaurant",
  "Workshop",
  "Studio",
  "Home Office",
  "Multiple",
  "No Public Location"
] as string[]

const addressDisplayOptions = [
  "Full",
  "Area + City",
  "City Only",
  "Map Only",
  "Hide"
] as string[]

const workingDayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Appointment Only"
] as string[]

const operatingHoursOptions = [
  "Standard Hours",
  "24×7",
  "Morning",
  "Evening",
  "Different Per Day",
  "Appointment Only",
  "Custom + time selectors"
] as string[]

const responseTimeOptions2 = [
  "Immediately",
  "<1 Hour",
  "<4 Hours",
  "Same Business Day",
  "24 Hours",
  "2 Business Days",
  "Varies"
] as string[]

const socialPlatformOptions = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "YouTube",
  "X",
  "Pinterest",
  "Threads",
  "WhatsApp",
  "Telegram",
  "None"
] as string[]

const enquiryPriorityOptions = [
  "Phone",
  "WhatsApp",
  "Email",
  "Website Form",
  "Appointment",
  "Store Visit",
  "Quote"
] as string[]

const formFieldOptions = [
  "Name",
  "Phone",
  "WhatsApp",
  "Email",
  "Company",
  "City",
  "Product",
  "Service",
  "Budget",
  "Quantity",
  "Requirement",
  "Preferred Date",
  "Message"
] as string[]

const leadTypeOptions = [
  "Consumers",
  "Corporate Buyers",
  "Bulk Orders",
  "Dealers",
  "Distributors",
  "Franchise",
  "Suppliers",
  "Partnerships",
  "Investors",
  "Candidates",
  "General Enquiries"
] as string[]

const consultationOptions = [
  "Free",
  "Free with Conditions",
  "Paid",
  "Not Required",
  "No"
] as string[]

const quotationOptions = [
  "Free Quote",
  "Free Estimate",
  "After Requirement Discussion",
  "After Site Visit",
  "Paid Assessment",
  "Fixed Published Pricing",
  "Not Applicable"
] as string[]

const visualAssetOptions = [
  "Logo",
  "Product Photos",
  "Service Photos",
  "Office",
  "Factory",
  "Team",
  "Project",
  "Customer",
  "Videos",
  "Certificates",
  "Brochures",
  "None"
] as string[]

const heroVisualOptions = [
  "Product",
  "Service",
  "Team",
  "Office-Factory",
  "Customer-Application",
  "Abstract Business",
  "Illustration",
  "AI-generated",
  "Stock",
  "System Decide"
] as string[]

const visualStyleOptions = [
  "Corporate",
  "Modern",
  "Minimal",
  "Premium-Luxury",
  "Industrial",
  "Technology",
  "Creative",
  "Friendly",
  "Traditional",
  "Elegant",
  "Bold",
  "Product-focused",
  "Service-focused",
  "System Decide"
] as string[]

const colourApproachOptions = [
  "Existing Brand",
  "Match Logo",
  "Blue Corporate",
  "Dark Premium",
  "White Minimal",
  "Green-Natural",
  "Warm",
  "Vibrant",
  "Neutral",
  "System Decide",
  "Custom"
] as string[]

const impressionOptions = [
  "Professional",
  "Trustworthy",
  "Premium",
  "Modern",
  "Technical",
  "Innovative",
  "Established",
  "Friendly",
  "Affordable",
  "Powerful",
  "Elegant",
  "Simple",
  "Reliable",
  "Industrial",
  "Creative"
] as string[]

const imageIntensityOptions = [
  "Mostly Visual",
  "Balanced",
  "Informational",
  "Product-heavy",
  "Portfolio-heavy",
  "Minimal Images",
  "System Decide"
] as string[]

const languageOptions = [
  "English",
  "Hindi",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
  "Other"
] as string[]

const successfulVisitorActionOptions = [
  "Understand Business",
  "Find Product",
  "Understand Service",
  "Compare Options",
  "Call",
  "WhatsApp",
  "Submit Lead",
  "Request Quote",
  "Book Appointment",
  "Purchase",
  "Download Information",
  "Visit Location"
] as string[]

const mobileImportanceOptions = [
  "Critical",
  "Very Important",
  "Important",
  "Limited",
  "Not Sure"
] as string[]

const businessUSPsOptions = [
  "Premium Quality",
  "Consistent Quality",
  "Better Materials",
  "Superior Finish",
  "Durability",
  "Performance",
  "Accuracy",
  "Quality Control",
  "Tested",
  "Certified",
  "Long Life",
  "Low Maintenance",
  "Safety",
  "Export Quality",
  "Competitive Pricing",
  "Transparent Pricing",
  "Value",
  "No Hidden Charges",
  "Flexible Pricing",
  "Volume Discounts",
  "Wholesale",
  "Manufacturer Pricing",
  "Flexible Terms",
  "Low MOQ",
  "Free Consultation",
  "Free Estimate",
  "Free Demo",
  "Free Trial",
  "Experience First Then Pay",
  "Fast Delivery",
  "Same Day",
  "Quick Turnaround",
  "Fast Response",
  "Fast Installation",
  "Quick Execution",
  "Short Lead Time",
  "Emergency",
  "24×7",
  "Fully Custom",
  "Made-to-order",
  "Custom Size",
  "Colour",
  "Material",
  "Design",
  "Formulation",
  "Software",
  "Tailored Solution",
  "Packages",
  "Branding",
  "Experienced Team",
  "Specialists",
  "Certified Professionals",
  "Technical Expertise",
  "Domain Expertise",
  "Skilled Workforce",
  "Founder-led",
  "Expert Consultation",
  "Research-led",
  "Engineering-led",
  "Technology-first",
  "Personalised",
  "Dedicated Manager",
  "Single Contact",
  "Fast Support",
  "After-sales",
  "Proactive Support",
  "Transparent Communication",
  "Regular Updates",
  "Easy Onboarding",
  "Hassle-free",
  "On-time",
  "Consistent Supply",
  "Dependable",
  "SLA",
  "Proven Process",
  "Low Failure",
  "High Uptime",
  "Continuity",
  "Long-term Support",
  "Latest Tech",
  "AI-powered",
  "Automation-first",
  "Cloud",
  "Data-driven",
  "Digital-first",
  "Proprietary Tech",
  "Modern Infrastructure",
  "Advanced Machinery",
  "Smart Analytics",
  "Local",
  "Pan India",
  "Global",
  "Distribution Network",
  "Doorstep",
  "Remote",
  "Multi-location",
  "Nationwide Delivery",
  "International Shipping",
  "Established",
  "Experience",
  "Customer Base",
  "Recognised Clients",
  "Repeat Customers",
  "Testimonials",
  "Certifications",
  "Government Registered",
  "Licensed",
  "Track Record",
  "In-house",
  "Direct Manufacturer",
  "Own Factory",
  "Modern Machinery",
  "High Capacity",
  "Small Batch",
  "Large Volume",
  "Prototyping",
  "Private Label",
  "OEM",
  "Contract Manufacturing",
  "End-to-end Production",
  "Eco-friendly",
  "Recyclable",
  "Energy Efficient",
  "Low Waste",
  "Sustainable Sourcing",
  "Local Sourcing",
  "Ethical",
  "One-stop",
  "End-to-end",
  "Home Delivery",
  "Online Consultation",
  "Easy Ordering",
  "Flexible Scheduling",
  "Pickup-Drop",
  "Multiple Payments",
  "Easy Returns"
] as string[]

/* =========================================================
   SMALL UI HELPERS
========================================================= */

function Question({
  children,
  required = false,
  hidden = false,
}: {
  children: React.ReactNode
  required?: boolean
  hidden?: boolean
}) {
  return (
    <Label
      className={`text-sm font-semibold leading-6 ${hidden ? "text-[#877a75] " : "text-foreground"
        }`}
    >
      {children}
      {required && (
        <span className="ml-1 text-destructive">*</span>
      )}
    </Label>
  )
}

function Section({
  children,
  muted = false,
}: {
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <div
      className={`grid gap-2 rounded-xl   ${muted
        ? "border-border/70 bg-muted/20"
        : "border-border "
        }`}
    >
      {children}
    </div>
  )
}



export function Step2BasicDetails() {
  const { data, updateData } = useQuestionnaire()
  const d = data as Record<string, any>

  const [businessName, setBusinessName] = useState(
    d.businessName || "",
  )

  const [displayNameChoice, setDisplayNameChoice] = useState(
    d.displayNameChoice || "",
  )

  const [displayBusinessName, setDisplayBusinessName] = useState(
    d.displayBusinessName || "",
  )

  const [tagline, setTagline] = useState(d.tagline || "")

  const [businessType, setBusinessType] = useState(
    d.businessType || "",
  )

  const [industry, setIndustry] = useState(d.industry || "")

  const [businessOffering, setBusinessOffering] = useState(
    d.businessOffering || "",
  )

  const [registrationStructure, setRegistrationStructure] =
    useState(d.registrationStructure || "")

  const [businessIdentifiers, setBusinessIdentifiers] =
    useState<string[]>(
      Array.isArray(d.businessIdentifiers)
        ? d.businessIdentifiers
        : [],
    )

  const [legalNamePreference, setLegalNamePreference] = useState(
    d.legalNamePreference || "",
  )

  const [hasLogo, setHasLogo] = useState(d.hasLogo || "")

  const [logoType, setLogoType] = useState(d.logoType || "")

  const [logoFile, setLogoFile] = useState<File | null>(
    d.logoFile || null,
  )

  const [businessStage, setBusinessStage] = useState(
    d.businessStage || "",
  )

  const [businessBeginning, setBusinessBeginning] = useState(
    d.businessBeginning || "",
  )

  const [establishedYear, setEstablishedYear] = useState(
    d.establishedYear || "",
  )

  const [industryExperience, setIndustryExperience] = useState(
    d.industryExperience || "",
  )

  const [businessModel, setBusinessModel] = useState<string[]>(
    Array.isArray(d.businessModel) ? d.businessModel : [],
  )

  const [customerRelationship, setCustomerRelationship] =
    useState<string[]>(
      Array.isArray(d.customerRelationship)
        ? d.customerRelationship
        : [],
    )

  const [teamSize, setTeamSize] = useState(d.teamSize || "")


  const [sellProducts, setSellProducts] = useState(
    d.sellProducts || "",
  )

  const [productTypes, setProductTypes] = useState(
    d.productTypes || "",
  )

  const [productName, setProductName] = useState(
    d.productName || "",
  )

  const [productCategory, setProductCategory] = useState(
    d.productCategory || "",
  )

  const [productAudience, setProductAudience] = useState(
    d.productAudience || "",
  )

  const [productPurpose, setProductPurpose] = useState(
    d.productPurpose || "",
  )

  const [productCharacteristics, setProductCharacteristics] =
    useState(d.productCharacteristics || "")

  const [productCustomisation, setProductCustomisation] =
    useState(d.productCustomisation || "")

  const [productPricing, setProductPricing] = useState(
    d.productPricing || "",
  )

  const [productPriceBand, setProductPriceBand] = useState(
    d.productPriceBand || "",
  )

  const [productAvailability, setProductAvailability] =
    useState(d.productAvailability || "")

  const [productCTA, setProductCTA] = useState<string[]>(
    d.productCTA || [],
  )

  const [provideServices, setProvideServices] = useState(
    d.provideServices || "",
  )

  const [serviceName, setServiceName] = useState(
    d.serviceName || "",
  )

  const [serviceType, setServiceType] = useState(
    d.serviceType || "",
  )

  const [serviceDelivery, setServiceDelivery] = useState(
    d.serviceDelivery || "",
  )

  const [serviceAudience, setServiceAudience] = useState(
    d.serviceAudience || "",
  )

  const [serviceProblem, setServiceProblem] = useState(
    d.serviceProblem || "",
  )

  const [serviceEngagement, setServiceEngagement] = useState(
    d.serviceEngagement || "",
  )

  const [servicePricing, setServicePricing] = useState(
    d.servicePricing || "",
  )

  const [serviceAppointment, setServiceAppointment] = useState(
    d.serviceAppointment || "",
  )

  const [serviceResponseTime, setServiceResponseTime] =
    useState(d.serviceResponseTime || "")

  const [serviceSupport, setServiceSupport] = useState(
    d.serviceSupport || "",
  )

  const [serviceCTA, setServiceCTA] = useState<string[]>(
    d.serviceCTA || [],
  )

  const [primaryCustomer, setPrimaryCustomer] = useState<string[]>(d.primaryCustomer || [])

  const [websiteObjective, setWebsiteObjective] = useState(
    d.websiteObjective || ""
  )

  const [secondaryObjectives, setSecondaryObjectives] = useState<string[]>(
    Array.isArray(d.secondaryObjectives) ? d.secondaryObjectives : []
  )

  const [relationshipModel, setRelationshipModel] = useState(
    d.relationshipModel || ""
  )

  const [geographicMarket, setGeographicMarket] = useState<string[]>(
    Array.isArray(d.geographicMarket) ? d.geographicMarket : []
  )

  const [customerEngagement, setCustomerEngagement] = useState<string[]>(
    Array.isArray(d.customerEngagement) ? d.customerEngagement : []
  )

  const [primaryCTA, setPrimaryCTA] = useState(
    d.primaryCTA || ""
  )

  const [buyingProcess, setBuyingProcess] = useState(
    d.buyingProcess || ""
  )

  const [salesCycle, setSalesCycle] = useState(
    d.salesCycle || ""
  )

  const [visitorType, setVisitorType] = useState<string[]>(
    Array.isArray(d.visitorType) ? d.visitorType : []
  )

  const [customerPriorities, setCustomerPriorities] = useState<string[]>(
    Array.isArray(d.customerPriorities) ? d.customerPriorities : []
  )

  const [missionStatement, setMissionStatement] = useState(
    d.missionStatement || ""
  )

  const [visionStatement, setVisionStatement] = useState(
    d.visionStatement || ""
  )

  const [values, setValues] = useState<string[]>(
    Array.isArray(d.values) ? d.values : []
  )

  const [teamHighlight, setTeamHighlight] = useState<string[]>(
    Array.isArray(d.teamHighlight) ? d.teamHighlight : []
  )

  const [publicCompanyInfo, setPublicCompanyInfo] = useState(
    d.publicCompanyInfo || ""
  )

  const [businessUSPs, setBusinessUSPs] = useState<string[]>(
    Array.isArray(d.businessUSPs) ? d.businessUSPs : []
  )

  const [productDifferentiators, setProductDifferentiators] = useState(
    d.productDifferentiators || ""
  )

  const [serviceDifferentiators, setServiceDifferentiators] = useState(
    d.serviceDifferentiators || ""
  )

  const [operationalAdvantages, setOperationalAdvantages] = useState(
    d.operationalAdvantages || ""
  )

  const [commercialAdvantages, setCommercialAdvantages] = useState(
    d.commercialAdvantages || ""
  )

  const [trustFactors, setTrustFactors] = useState(
    d.trustFactors || ""
  )

  const [businessStatistics, setBusinessStatistics] = useState<string[]>(
    Array.isArray(d.businessStatistics) ? d.businessStatistics : []
  )

  const [businessStatisticsValues, setBusinessStatisticsValues] = useState(
    d.businessStatisticsValues || ""
  )

  const [certifications, setCertifications] = useState<string[]>(
    Array.isArray(d.certifications) ? d.certifications : []
  )

  const [awards, setAwards] = useState(
    d.awards || ""
  )

  const [awardDetails, setAwardDetails] = useState(
    d.awardDetails || ""
  )

  const [portfolioEnabled, setPortfolioEnabled] = useState(
    d.portfolioEnabled || ""
  )

  const [portfolioWork, setPortfolioWork] = useState(
    d.portfolioWork || ""
  )

  const [projectName, setProjectName] = useState(
    d.projectName || ""
  )

  const [projectRequirement, setProjectRequirement] = useState(
    d.projectRequirement || ""
  )

  const [projectSolution, setProjectSolution] = useState(
    d.projectSolution || ""
  )

  const [projectOutcome, setProjectOutcome] = useState(
    d.projectOutcome || ""
  )

  const [projectOutcomeDetails, setProjectOutcomeDetails] = useState(
    d.projectOutcomeDetails || ""
  )

  const [clientIdentity, setClientIdentity] = useState(
    d.clientIdentity || ""
  )

  const [evidence, setEvidence] = useState<string[]>(
    Array.isArray(d.evidence) ? d.evidence : []
  )

  const [clientLogos, setClientLogos] = useState(
    d.clientLogos || ""
  )

  const [highlightCustomers, setHighlightCustomers] = useState<string[]>(
    Array.isArray(d.highlightCustomers) ? d.highlightCustomers : []
  )

  const [permission, setPermission] = useState(
    d.permission || ""
  )

  const [testimonials, setTestimonials] = useState(
    d.testimonials || ""
  )

  const [testimonialInfo, setTestimonialInfo] = useState<string[]>(
    Array.isArray(d.testimonialInfo) ? d.testimonialInfo : []
  )

  const [reviewSources, setReviewSources] = useState<string[]>(
    Array.isArray(d.reviewSources) ? d.reviewSources : []
  )

  const [socialProofStatement, setSocialProofStatement] = useState(
    d.socialProofStatement || ""
  )

  const [contactChannels, setContactChannels] = useState<string[]>(
    Array.isArray(d.contactChannels) ? d.contactChannels : []
  )

  const [phone, setPhone] = useState(
    d.phone || ""
  )

  const [whatsappSame, setWhatsappSame] = useState(
    d.whatsappSame || ""
  )

  const [whatsappNumber, setWhatsappNumber] = useState(
    d.whatsappNumber || ""
  )

  const [email, setEmail] = useState(
    d.email || ""
  )

  const [locationType, setLocationType] = useState(
    d.locationType || ""
  )

  const [address, setAddress] = useState(
    d.address || ""
  )

  const [addressDisplay, setAddressDisplay] = useState(
    d.addressDisplay || ""
  )

  const [workingDays, setWorkingDays] = useState<string[]>(
    Array.isArray(d.workingDays) ? d.workingDays : []
  )

  const [operatingHours, setOperatingHours] = useState(
    d.operatingHours || ""
  )

  const [responseTime, setResponseTime] = useState(
    d.responseTime || ""
  )

  const [socialPlatforms, setSocialPlatforms] = useState<string[]>(
    Array.isArray(d.socialPlatforms) ? d.socialPlatforms : []
  )

  const [socialUrls, setSocialUrls] = useState<Record<string, string>>(
    d.socialUrls || {}
  )

  const [enquiryPriority, setEnquiryPriority] = useState<string[]>(
    Array.isArray(d.enquiryPriority) ? d.enquiryPriority : []
  )

  const [formFields, setFormFields] = useState<string[]>(
    Array.isArray(d.formFields) ? d.formFields : []
  )

  const [mandatoryFormFields, setMandatoryFormFields] = useState<string[]>(
    Array.isArray(d.mandatoryFormFields) ? d.mandatoryFormFields : []
  )

  const [leadTypes, setLeadTypes] = useState<string[]>(
    Array.isArray(d.leadTypes) ? d.leadTypes : []
  )

  const [consultation, setConsultation] = useState(
    d.consultation || ""
  )

  const [quotation, setQuotation] = useState(
    d.quotation || ""
  )

  const [visualAssets, setVisualAssets] = useState<string[]>(
    Array.isArray(d.visualAssets) ? d.visualAssets : []
  )

  const [heroVisual, setHeroVisual] = useState(
    d.heroVisual || ""
  )

  const [visualStyle, setVisualStyle] = useState(
    d.visualStyle || ""
  )

  const [colourApproach, setColourApproach] = useState(
    d.colourApproach || ""
  )

  const [impression, setImpression] = useState(
    d.impression || ""
  )

  const [imageIntensity, setImageIntensity] = useState(
    d.imageIntensity || ""
  )

  const [homepageSections, setHomepageSections] = useState(
    d.homepageSections || ""
  )

  const [languages, setLanguages] = useState<string[]>(
    Array.isArray(d.languages) ? d.languages : []
  )

  const [successfulVisitorAction, setSuccessfulVisitorAction] = useState(
    d.successfulVisitorAction || ""
  )

  const [mobileImportance, setMobileImportance] = useState(
    d.mobileImportance || ""
  )


  const showBusinessDetails = Boolean(businessName.trim())

  const showLogoType = hasLogo === "Yes—upload"

  const showProductFlow =
    businessOffering === "Physical Products" ||
    businessOffering === "Digital Products" ||
    businessOffering === "Products + Services" ||
    businessOffering === "Other"

  const showServiceFlow = true

  const showProductDetails =
    showProductFlow && sellProducts === "Yes"

  const showServiceDetails =
    showServiceFlow && provideServices === "Yes"



  const saveData = () => {
    updateData({
      businessName,
      displayNameChoice,
      displayBusinessName:
        displayNameChoice === "Same as business name"
          ? businessName
          : displayBusinessName,
      tagline,

      businessType,
      industry,
      businessOffering,

      registrationStructure,
      businessIdentifiers,
      legalNamePreference,

      hasLogo,
      logoType,
      logoFile,

      businessStage,
      businessBeginning,
      establishedYear,
      industryExperience,
      businessModel,
      customerRelationship,
      primaryCustomer,
      websiteObjective,
      secondaryObjectives,
      relationshipModel,
      geographicMarket,
      customerEngagement,
      primaryCTA,
      buyingProcess,
      salesCycle,
      visitorType,
      customerPriorities,
      missionStatement,
      visionStatement,
      values,
      teamHighlight,
      publicCompanyInfo,
      businessUSPs,
      productDifferentiators,
      serviceDifferentiators,
      operationalAdvantages,
      commercialAdvantages,
      trustFactors,
      businessStatistics,
      businessStatisticsValues,
      certifications,
      awards,
      awardDetails,
      portfolioEnabled,
      portfolioWork,
      projectName,
      projectRequirement,
      projectSolution,
      projectOutcome,
      projectOutcomeDetails,
      clientIdentity,
      evidence,
      clientLogos,
      highlightCustomers,
      permission,
      testimonials,
      testimonialInfo,
      reviewSources,
      socialProofStatement,
      contactChannels,
      phone,
      whatsappSame,
      whatsappNumber,
      email,
      locationType,
      address,
      addressDisplay,
      workingDays,
      operatingHours,
      responseTime,
      socialPlatforms,
      socialUrls,
      enquiryPriority,
      formFields,
      mandatoryFormFields,
      leadTypes,
      consultation,
      quotation,
      visualAssets,
      heroVisual,
      visualStyle,
      colourApproach,
      impression,
      imageIntensity,
      homepageSections,
      languages,
      successfulVisitorAction,
      mobileImportance,
      teamSize,

      sellProducts,
      productTypes,
      productName,
      productCategory,
      productAudience,
      productPurpose,
      productCharacteristics,
      productCustomisation,
      productPricing,
      productPriceBand,
      productAvailability,
      productCTA,

      provideServices,
      serviceName,
      serviceType,
      serviceDelivery,
      serviceAudience,
      serviceProblem,
      serviceEngagement,
      servicePricing,
      serviceAppointment,
      serviceResponseTime,
      serviceSupport,
      serviceCTA,
    } as Parameters<typeof updateData>[0])

    return true
  }

  return (
    <StepWrapper
      title="Basic Business Details"
      description="Tell us about your business so we can create a website that represents it accurately."
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div>
            <Question>
              What is the name of your business?
            </Question>
          </div>

          <Input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name"
            className="h-10 rounded-xl"
          />
        </div>

        {showBusinessDetails && (
          <>

            <div className="grid gap-2 md:grid-cols-2">

              <Section>
                <Question hidden>
                  What name should be displayed on the website?
                </Question>

                <DropdownSelect
                  options={[
                    "Same as business name",
                    "Brand or trading name",
                    "Different display name",
                  ]}
                  value={displayNameChoice}
                  onChange={(value) => {
                    setDisplayNameChoice(value)

                    if (value === "Same as business name") {
                      setDisplayBusinessName(businessName)
                    }
                  }}
                  placeholder="Choose display name"
                />

                {displayNameChoice ===
                  "Different display name" && (
                    <Input
                      value={displayBusinessName}
                      onChange={(e) =>
                        setDisplayBusinessName(e.target.value)
                      }
                      placeholder="Enter display name"
                      className="h-10 rounded-xl"
                    />
                  )}
              </Section>

              <Section>
                <Question hidden>
                  What tagline or slogan should be used?
                </Question>

                {/* AI gen  */}
                <Textarea
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="AI Gen..."
                  className="min-h-22.5 resize-none rounded-xl"
                />
              </Section>

            </div>

            <Section>
              <Question hidden>
                Which business name should appear in legal/footer information?
              </Question>

              <DropdownSelect
                options={legalNameOptions}
                value={legalNamePreference}
                onChange={setLegalNamePreference}
                placeholder="Select an option"
              />
            </Section>

            {/* LOGO */}
            <Section>
              <Question hidden>
                Do you have a logo?
              </Question>

              <DropdownSelect
                options={logoOptions}
                value={hasLogo}
                onChange={setHasLogo}
                placeholder="Select an option"
              />

              {hasLogo === "Yes—upload" && (
                <div className="grid gap-2">
                  <Label className="text-sm font-semibold text-[#93908f]" >
                    Upload your logo
                  </Label>

                  {!logoFile ? (
                    <label
                      htmlFor="logo-upload"
                      className="flex h-35 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border hover:bg-muted/20"
                    >
                      <Upload className="mb-3 h-7 w-7 text-muted-foreground" />

                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        PNG, JPG, JPEG or SVG
                      </p>

                      <Input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setLogoFile(e.target.files?.[0] || null)
                        }
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between rounded-xl border bg-muted/20 px-5 py-4 bg-background">
                      <div className="flex items-center gap-2">
                        <FileImage className="h-9 w-9 text-muted-foreground" />

                        <div>
                          <p className="text-sm ">
                            {logoFile.name}
                          </p>

                          <p className="text-sm text-muted-foreground">
                            {(logoFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setLogoFile(null)}
                        className="text-2xl text-muted-foreground hover:text-foreground"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              )}
            </Section>

            {showLogoType && (
              <Section muted>
                <Question hidden>
                  What type of logo do you have?
                </Question>

                <DropdownSelect
                  options={logoTypeOptions}
                  value={logoType}
                  onChange={setLogoType}
                  placeholder="Select logo type"
                />
              </Section>
            )}
          </>
        )}

        {/* BUSINESS TYPE */}

        <Section>
          <Question>
            What type of business are you?
          </Question>

          <DropdownSelect
            options={businessTypeOptions}
            value={businessType}
            onChange={setBusinessType}
            placeholder="Select business type"
          />
        </Section>

        {businessType && (
          <>
            <div className="grid gap-6 md:grid-cols-2">

              <Section >
                <div className="flex flex-col gap-3">
                  <Question hidden>
                    What is your business registration structure?
                  </Question>

                  <DropdownSelect
                    options={registrationOptions}
                    value={registrationStructure}
                    onChange={setRegistrationStructure}
                    placeholder="Select structure"
                  />
                </div>
              </Section>

              <Section>
                <Question hidden>
                  Which registrations/business identifiers do you have?
                </Question>

                <MultiDropdownSelect
                  options={registrationIdentifierOptions}
                  value={businessIdentifiers}
                  onChange={setBusinessIdentifiers}
                  placeholder="Select identifiers"
                />
              </Section>

              <Section>
                <Question hidden>
                  What is your current business stage?
                </Question>

                <DropdownSelect
                  options={businessStageOptions}
                  value={businessStage}
                  onChange={setBusinessStage}
                  placeholder="Select business stage"
                />
              </Section>

              <Section>
                <Question hidden>
                  How did the business begin?
                </Question>

                <DropdownSelect
                  options={businessBeginningOptions}
                  value={businessBeginning}
                  onChange={setBusinessBeginning}
                  placeholder="Select an option"
                />
              </Section>

              <Section>
                <Question hidden>
                  In which year was the business established?
                </Question>

                <Input
                  type="number"
                  min="1800"
                  max={new Date().getFullYear()}
                  value={establishedYear}
                  onChange={(e) =>
                    setEstablishedYear(e.target.value)
                  }
                  placeholder="e.g. 2020"
                  className="h-10 rounded-xl"
                />
              </Section>

              <Section>
                <Question hidden>
                  How much relevant industry experience does the leadership/team have?
                </Question>

                <DropdownSelect
                  options={experienceOptions}
                  value={industryExperience}
                  onChange={setIndustryExperience}
                  placeholder="Select experience"
                />
              </Section>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <Section>
                <div className="flex flex-col gap-3">
                  <Question hidden>
                    What is your primary business model?
                  </Question>

                  <MultiDropdownSelect
                    options={businessModelOptions}
                    value={businessModel}
                    onChange={setBusinessModel}
                    placeholder="Select business models"
                  />
                </div>
              </Section>

              <Section>
                <div className="flex flex-col gap-3">
                  <Question hidden>
                    What kind of customer relationship do you maintain?
                  </Question>

                  <MultiDropdownSelect
                    options={customerRelationshipOptions}
                    value={customerRelationship}
                    onChange={setCustomerRelationship}
                    placeholder="Select relationships"
                  />
                </div>
              </Section>

            </div>

            <Section>
              <Question hidden>
                What is your current team size?
              </Question>

              <DropdownSelect
                options={teamSizeOptions}
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Select team size"
              />
            </Section>
          </>
        )}

        {/* INDUSTRY */}

        <Section>
          <Question>
            What is your primary industry?
          </Question>

          <DropdownSelect
            options={industryOptions}
            value={industry}
            onChange={setIndustry}
            placeholder="Select industry"
          />
        </Section>

        <Section>
          <Question>
            What does your business primarily sell/provide?
          </Question>

          <DropdownSelect
            options={businessOfferingOptions}
            value={businessOffering}
            onChange={setBusinessOffering}
            placeholder="Select offering"
          />
        </Section>


        {/* PRODUCT SECTION */}

        {showProductFlow && (
          <div className="grid gap-6 rounded-2xl bg-muted/10 ">

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Product Information
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Tell us how products should be represented on your website.
              </p>
            </div>

            <Section>
              <Question hidden>
                Do you sell/display products?
              </Question>

              <DropdownSelect
                options={["Yes", "No"]}
                value={sellProducts}
                onChange={setSellProducts}
                placeholder="Select an option"
              />
            </Section>

            {showProductDetails && (
              <>

                <Section>
                  <div className="flex flex-col gap-3">
                    <Question hidden>
                      What types of products do you offer?
                    </Question>

                    <DropdownSelect
                      options={productTypeOptions}
                      value={productTypes}
                      onChange={setProductTypes}
                      placeholder="Select product type"
                    />
                  </div>
                </Section>


                <Section>
                  <Question hidden>
                    What is the product name?
                  </Question>

                  <Input
                    value={productName}
                    onChange={(e) =>
                      setProductName(e.target.value)
                    }
                    placeholder="Enter product name"
                    className="h-11 rounded-xl"
                  />
                </Section>




                <div className="grid gap-6 md:grid-cols-2">
                  <Section>
                    <Question hidden>
                      Which category best describes this product?
                    </Question>

                    <DropdownSelect
                      options={["Other"]}
                      value={productCategory}
                      onChange={setProductCategory}
                      placeholder="Select category"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Who is this product designed for?
                    </Question>

                    <DropdownSelect
                      options={productAudienceOptions}
                      value={productAudience}
                      onChange={setProductAudience}
                      placeholder="Select audience"
                    />
                  </Section>
                </div>




                <div className="grid gap-6 md:grid-cols-2">

                  <Section>
                    <Question hidden>
                      What is the primary purpose of the product?
                    </Question>

                    <DropdownSelect
                      options={productPurposeOptions}
                      value={productPurpose}
                      onChange={setProductPurpose}
                      placeholder="Select purpose"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Which characteristics should be highlighted?
                    </Question>

                    <DropdownSelect
                      options={productCharacteristicsOptions}
                      value={productCharacteristics}
                      onChange={setProductCharacteristics}
                      placeholder="Select characteristic"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Is the product customisable?
                    </Question>

                    <DropdownSelect
                      options={customisationOptions}
                      value={productCustomisation}
                      onChange={setProductCustomisation}
                      placeholder="Select customisation"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      How should product pricing appear?
                    </Question>

                    <DropdownSelect
                      options={productPricingOptions}
                      value={productPricing}
                      onChange={setProductPricing}
                      placeholder="Select pricing"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Which price band applies?
                    </Question>

                    <DropdownSelect
                      options={productPriceBandOptions}
                      value={productPriceBand}
                      onChange={setProductPriceBand}
                      placeholder="Select price band"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      What is the product availability?
                    </Question>

                    <DropdownSelect
                      options={productAvailabilityOptions}
                      value={productAvailability}
                      onChange={setProductAvailability}
                      placeholder="Select availability"
                    />
                  </Section>

                </div>
                <Section>
                  <Question hidden>
                    What should visitors do for this product?
                  </Question>

                  <MultiDropdownSelect
                    options={productCTAOptions}
                    value={productCTA}
                    onChange={setProductCTA}
                    placeholder="Select visitor action"
                  />
                </Section>




              </>
            )}
          </div>
        )}

        {/* SERVICE SECTION */}

        {showServiceFlow && (
          <div className="grid gap-6 rounded-2xl  bg-muted/10 ">

            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Service Information
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                Tell us how your services should be presented online.
              </p>
            </div>

            <Section>
              <Question hidden>
                Do you provide services?
              </Question>

              <DropdownSelect
                options={["Yes", "No"]}
                value={provideServices}
                onChange={setProvideServices}
                placeholder="Select an option"
              />
            </Section>

            {showServiceDetails && (
              <>
                <div className="grid gap-6 md:grid-cols-2">

                  <Section>
                    <Question hidden>
                      What is the service name?
                    </Question>

                    <Input
                      value={serviceName}
                      onChange={(e) =>
                        setServiceName(e.target.value)
                      }
                      placeholder="Enter service name"
                      className="h-10 rounded-xl"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      What type of service is this?
                    </Question>

                    <DropdownSelect
                      options={serviceTypeOptions}
                      value={serviceType}
                      onChange={setServiceType}
                      placeholder="Select service type"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      How is the service delivered?
                    </Question>

                    <DropdownSelect
                      options={serviceDeliveryOptions}
                      value={serviceDelivery}
                      onChange={setServiceDelivery}
                      placeholder="Select delivery method"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Who is this service for?
                    </Question>

                    <DropdownSelect
                      options={serviceAudienceOptions}
                      value={serviceAudience}
                      onChange={setServiceAudience}
                      placeholder="Select audience"
                    />
                  </Section>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <Section>
                    <Question hidden>
                      Which problem does the service address?
                    </Question>

                    <DropdownSelect
                      options={serviceProblemOptions}
                      value={serviceProblem}
                      onChange={setServiceProblem}
                      placeholder="Select problem"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      What service engagement model applies?
                    </Question>

                    <DropdownSelect
                      options={serviceEngagementOptions}
                      value={serviceEngagement}
                      onChange={setServiceEngagement}
                      placeholder="Select engagement model"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      How should service pricing appear?
                    </Question>

                    <DropdownSelect
                      options={servicePricingOptions}
                      value={servicePricing}
                      onChange={setServicePricing}
                      placeholder="Select pricing"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      Does the service require an appointment?
                    </Question>

                    <DropdownSelect
                      options={appointmentOptions}
                      value={serviceAppointment}
                      onChange={setServiceAppointment}
                      placeholder="Select an option"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      What is your typical response/start time?
                    </Question>

                    <DropdownSelect
                      options={responseTimeOptions}
                      value={serviceResponseTime}
                      onChange={setServiceResponseTime}
                      placeholder="Select response time"
                    />
                  </Section>

                  <Section>
                    <Question hidden>
                      What support is included after completion?
                    </Question>

                    <DropdownSelect
                      options={supportOptions}
                      value={serviceSupport}
                      onChange={setServiceSupport}
                      placeholder="Select support"
                    />
                  </Section>

                </div>

                <Section>
                  <Question hidden>
                    What should visitors do for this service?
                  </Question>

                  <MultiDropdownSelect
                    options={serviceCTAOptions}
                    value={serviceCTA}
                    onChange={setServiceCTA}
                    placeholder="Select visitor action"
                  />
                </Section>
              </>
            )}
          </div>
        )}


        <div className="grid gap-6">
          <Section>
            <Question>
              What is the primary purpose of the website?
            </Question>
            <DropdownSelect
              options={websiteObjectiveOptions}
              value={websiteObjective}
              onChange={(value) => setWebsiteObjective(value)}
              placeholder="Select website purpose"
            />
          </Section>

          {websiteObjective && (
            <Section muted>
              <Question hidden>
                What secondary objectives should the website support?
              </Question>
              <MultiDropdownSelect
                options={secondaryObjectiveOptions}
                value={secondaryObjectives}
                onChange={(value) => setSecondaryObjectives(value)}
                placeholder="Select secondary objectives"
              />
            </Section>
          )}

          <Section>
            <Question>
              Who are your primary customers?
            </Question>
            <MultiDropdownSelect
              options={primaryCustomerOptions}
              value={primaryCustomer}
              onChange={setPrimaryCustomer}
              placeholder="Select primary customers"
            />
          </Section>

          {primaryCustomer.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              <Section muted>
                <div className="flex flex-col gap-3">
                  <Question hidden>
                    What business relationship model applies?
                  </Question>
                  <DropdownSelect
                    options={relationshipModelOptions}
                    value={relationshipModel}
                    onChange={(value) => setRelationshipModel(value)}
                    placeholder="Select relationship model"
                  />
                </div>
              </Section>

              <Section muted>
                <Question hidden>
                  Which type of website visitor must primarily be convinced?
                </Question>
                <MultiDropdownSelect
                  options={visitorTypeOptions}
                  value={visitorType}
                  onChange={(value) => setVisitorType(value)}
                  placeholder="Select visitor types"
                />
              </Section>
            </div>
          )}

          <Section>
            <Question>
              What geographic market do you serve?
            </Question>
            <MultiDropdownSelect
              options={geographicMarketOptions}
              value={geographicMarket}
              onChange={(value) => setGeographicMarket(value)}
              placeholder="Select geographic market"
            />
          </Section>

          {geographicMarket.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <Section muted>
                <Question hidden>
                  Where do customers normally engage/buy?
                </Question>
                <MultiDropdownSelect
                  options={customerEngagementOptions}
                  value={customerEngagement}
                  onChange={(value) => setCustomerEngagement(value)}
                  placeholder="Select engagement channels"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  Which website languages are required?
                </Question>
                <MultiDropdownSelect
                  options={languageOptions}
                  value={languages}
                  onChange={(value) => setLanguages(value)}
                  placeholder="Select languages"
                />
              </Section>
            </div>
          )}

          <Section>
            <Question>
              What should be the primary website CTA?
            </Question>
            <DropdownSelect
              options={primaryCTAOptions}
              value={primaryCTA}
              onChange={(value) => setPrimaryCTA(value)}
              placeholder="Select primary CTA"
            />
          </Section>

          {primaryCTA && (
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <Section muted>
                <Question hidden>
                  What is the usual customer buying process?
                </Question>
                <DropdownSelect
                  options={buyingProcessOptions}
                  value={buyingProcess}
                  onChange={(value) => setBuyingProcess(value)}
                  placeholder="Select buying process"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  What is your typical sales cycle?
                </Question>
                <DropdownSelect
                  options={salesCycleOptions}
                  value={salesCycle}
                  onChange={(value) => setSalesCycle(value)}
                  placeholder="Select sales cycle"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  What kinds of leads are you interested in?
                </Question>
                <MultiDropdownSelect
                  options={leadTypeOptions}
                  value={leadTypes}
                  onChange={(value) => setLeadTypes(value)}
                  placeholder="Select lead types"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  Do you provide an initial consultation?
                </Question>
                <DropdownSelect
                  options={consultationOptions}
                  value={consultation}
                  onChange={(value) => setConsultation(value)}
                  placeholder="Select consultation option"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  How are quotations/estimates handled?
                </Question>
                <DropdownSelect
                  options={quotationOptions}
                  value={quotation}
                  onChange={(value) => setQuotation(value)}
                  placeholder="Select quotation method"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  What should a successful visitor ideally do during one website visit?
                </Question>
                <DropdownSelect
                  options={successfulVisitorActionOptions}
                  value={successfulVisitorAction}
                  onChange={(value) => setSuccessfulVisitorAction(value)}
                  placeholder="Select ideal visitor action"
                />
              </Section>
            </div>
          )}

          <Section>
            <Question>
              What matters most to your customers?
            </Question>
            <MultiDropdownSelect
              options={customerPriorityOptions}
              value={customerPriorities}
              onChange={(value) => setCustomerPriorities(value)}
              placeholder="Select customer priorities"
            />
          </Section>

          <Section>
            <Question>
              What are your primary business USPs?
            </Question>
            <MultiDropdownSelect
              options={businessUSPsOptions}
              value={businessUSPs}
              onChange={(value) => setBusinessUSPs(value)}
              placeholder="Select your primary USPs"
            />
          </Section>

          {businessUSPs.length > 0 && (
            <>
              <div className="grid gap-6 md:grid-cols-2 items-start">
                <Section muted>
                  <Question hidden>
                    What should your mission statement be?
                  </Question>
                  <Textarea
                    value={missionStatement}
                    onChange={(e) =>
                      setMissionStatement(e.target.value)
                    }
                    placeholder="AI-generated mission statement suggestions will be based on your answers."
                    className="min-h-22.5 resize-none rounded-xl"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    What should your vision statement be?
                  </Question>
                  <Textarea
                    value={visionStatement}
                    onChange={(e) =>
                      setVisionStatement(e.target.value)
                    }
                    placeholder="AI-generated vision statement suggestions will be based on your answers."
                    className="min-h-22.5 resize-none rounded-xl"
                  />
                </Section>
              </div>
              <div className="grid gap-6 md:grid-cols-2 items-start">

                <Section muted>
                  <Question hidden>
                    Which values represent your business?
                  </Question>
                  <MultiDropdownSelect
                    options={valuesOptions}
                    value={values}
                    onChange={(value) => setValues(value)}
                    placeholder="Select business values"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    Which product-specific differentiators apply?
                  </Question>
                  <DropdownSelect
                    options={productDifferentiatorOptions}
                    value={productDifferentiators}
                    onChange={(value) =>
                      setProductDifferentiators(value)
                    }
                    placeholder="Select product differentiator"
                  />
                </Section>
                <Section muted>
                  <Question hidden>
                    Which service-specific differentiators apply?
                  </Question>
                  <DropdownSelect
                    options={serviceDifferentiatorOptions}
                    value={serviceDifferentiators}
                    onChange={(value) =>
                      setServiceDifferentiators(value)
                    }
                    placeholder="Select service differentiator"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    Which operational advantages apply?
                  </Question>
                  <DropdownSelect
                    options={operationalAdvantageOptions}
                    value={operationalAdvantages}
                    onChange={(value) =>
                      setOperationalAdvantages(value)
                    }
                    placeholder="Select operational advantage"
                  />
                </Section>
              </div>

              <Section muted>
                <Question hidden>
                  Which commercial advantages apply?
                </Question>
                <DropdownSelect
                  options={commercialAdvantageOptions}
                  value={commercialAdvantages}
                  onChange={(value) =>
                    setCommercialAdvantages(value)
                  }
                  placeholder="Select commercial advantage"
                />
              </Section>
            </>

          )}

          <Section>
            <Question>
              Which trust factors can you substantiate?
            </Question>
            <DropdownSelect
              options={trustFactorOptions}
              value={trustFactors}
              onChange={(value) => setTrustFactors(value)}
              placeholder="Select trust factor"
            />
          </Section>

          {trustFactors && (
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2 items-start">
                <Section muted>
                  <Question hidden>
                    What kind of team should be highlighted?
                  </Question>
                  <MultiDropdownSelect
                    options={teamHighlightOptions}
                    value={teamHighlight}
                    onChange={(value) => setTeamHighlight(value)}
                    placeholder="Select team areas"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    What company information should be highlighted publicly?
                  </Question>
                  <DropdownSelect
                    options={publicCompanyInfoOptions}
                    value={publicCompanyInfo}
                    onChange={(value) =>
                      setPublicCompanyInfo(value)
                    }
                    placeholder="Select public information"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    Which business statistics can be displayed?
                  </Question>
                  <MultiDropdownSelect
                    options={businessStatisticOptions}
                    value={businessStatistics}
                    onChange={(value) =>
                      setBusinessStatistics(value)
                    }
                    placeholder="Select statistics"
                  />
                  {businessStatistics.length > 0 && (
                    <Input
                      value={businessStatisticsValues}
                      onChange={(e) =>
                        setBusinessStatisticsValues(e.target.value)
                      }
                      placeholder="Enter actual numeric values for selected metrics"
                      className="h-10 rounded-xl"
                    />
                  )}
                </Section>

                <Section muted>
                  <Question hidden>
                    Which certifications/credentials do you have?
                  </Question>
                  <MultiDropdownSelect
                    options={certificationOptions}
                    value={certifications}
                    onChange={(value) =>
                      setCertifications(value)
                    }
                    placeholder="Select certifications"
                  />
                </Section>

              </div>
              <Section muted>
                <Question hidden>
                  Do you have awards or recognitions worth displaying?
                </Question>
                <DropdownSelect
                  options={awardOptions}
                  value={awards}
                  onChange={(value) => setAwards(value)}
                  placeholder="Select recognition"
                />
                {awards &&
                  !["No", "Prefer Not to Display"].includes(
                    awards
                  ) && (
                    <Input
                      value={awardDetails}
                      onChange={(e) =>
                        setAwardDetails(e.target.value)
                      }
                      placeholder="Enter award name/year"
                      className="h-10 rounded-xl"
                    />
                  )}
              </Section>

              <Section muted>
                <Question hidden>
                  Do you want a portfolio/projects section?
                </Question>
                <DropdownSelect
                  options={["Yes", "No"]}
                  value={portfolioEnabled}
                  onChange={(value) =>
                    setPortfolioEnabled(value)
                  }
                  placeholder="Select an option"
                />
              </Section>

              {portfolioEnabled === "Yes" && (
                <div className="grid gap-6 md:grid-cols-2 items-start">
                  <Section muted>
                    <Question hidden>
                      What work should be showcased?
                    </Question>
                    <DropdownSelect
                      options={portfolioWorkOptions}
                      value={portfolioWork}
                      onChange={(value) =>
                        setPortfolioWork(value)
                      }
                      placeholder="Select work type"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      What is the project/portfolio item name?
                    </Question>
                    <Input
                      value={projectName}
                      onChange={(e) =>
                        setProjectName(e.target.value)
                      }
                      placeholder="Enter project/title"
                      className="h-10 rounded-xl"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      What was the customer's main requirement?
                    </Question>
                    <DropdownSelect
                      options={projectRequirementOptions}
                      value={projectRequirement}
                      onChange={(value) =>
                        setProjectRequirement(value)
                      }
                      placeholder="Select requirement"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      What solution did you provide?
                    </Question>
                    <DropdownSelect
                      options={projectSolutionOptions}
                      value={projectSolution}
                      onChange={(value) =>
                        setProjectSolution(value)
                      }
                      placeholder="Select solution"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      What outcome was achieved?
                    </Question>
                    <DropdownSelect
                      options={projectOutcomeOptions}
                      value={projectOutcome}
                      onChange={(value) =>
                        setProjectOutcome(value)
                      }
                      placeholder="Select outcome"
                    />
                    {projectOutcome &&
                      projectOutcome !== "Not Quantified" && (
                        <Input
                          value={projectOutcomeDetails}
                          onChange={(e) =>
                            setProjectOutcomeDetails(e.target.value)
                          }
                          placeholder="Enter numerical result only if verified"
                          className="h-10 rounded-xl"
                        />
                      )}
                  </Section>

                  <Section muted>
                    <Question hidden>
                      Can the client's identity be displayed?
                    </Question>
                    <DropdownSelect
                      options={clientIdentityOptions}
                      value={clientIdentity}
                      onChange={(value) =>
                        setClientIdentity(value)
                      }
                      placeholder="Select display permission"
                    />
                  </Section>
                  {/* <div className="flex gap-3"> */}
                  <Section muted>
                    <Question hidden>
                      What evidence can be displayed?
                    </Question>
                    <MultiDropdownSelect
                      options={evidenceOptions}
                      value={evidence}
                      onChange={(value) => setEvidence(value)}
                      placeholder="Select evidence"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      Do you want to display client/customer logos?
                    </Question>
                    <DropdownSelect
                      options={clientLogoOptions}
                      value={clientLogos}
                      onChange={(value) =>
                        setClientLogos(value)
                      }
                      placeholder="Select an option"
                    />
                  </Section>
                  {/* </div> */}

                  <Section muted>
                    <Question hidden>
                      Which types of customers should be highlighted?
                    </Question>
                    <MultiDropdownSelect
                      options={highlightCustomerOptions}
                      value={highlightCustomers}
                      onChange={(value) =>
                        setHighlightCustomers(value)
                      }
                      placeholder="Select customer types"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      Do you have permission to display their names/logos?
                    </Question>
                    <DropdownSelect
                      options={permissionOptions}
                      value={permission}
                      onChange={(value) =>
                        setPermission(value)
                      }
                      placeholder="Select permission status"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      Do you have customer testimonials?
                    </Question>
                    <DropdownSelect
                      options={testimonialOptions}
                      value={testimonials}
                      onChange={(value) =>
                        setTestimonials(value)
                      }
                      placeholder="Select testimonial type"
                    />
                  </Section>

                  {testimonials &&
                    !["No", "Add Later"].includes(
                      testimonials
                    ) && (
                      <Section muted>
                        <Question hidden>
                          What testimonial information may be shown?
                        </Question>
                        <MultiDropdownSelect
                          options={testimonialInfoOptions}
                          value={testimonialInfo}
                          onChange={(value) =>
                            setTestimonialInfo(value)
                          }
                          placeholder="Select testimonial information"
                        />
                      </Section>
                    )}

                  <Section muted>
                    <Question hidden>
                      Where are your existing public reviews?
                    </Question>
                    <MultiDropdownSelect
                      options={reviewSourceOptions}
                      value={reviewSources}
                      onChange={(value) =>
                        setReviewSources(value)
                      }
                      placeholder="Select review sources"
                    />
                  </Section>

                  <Section muted>
                    <Question hidden>
                      What social-proof statement should the website use?
                    </Question>
                    <Textarea
                      value={socialProofStatement}
                      onChange={(e) =>
                        setSocialProofStatement(e.target.value)
                      }
                      placeholder="AI-gen..."
                      className="min-h-22.5 resize-none rounded-xl"
                    />
                  </Section>
                </div>
              )}
            </div>
          )}

          <Section>
            <Question>
              How should visitors contact you?
            </Question>
            <MultiDropdownSelect
              options={contactChannelOptions}
              value={contactChannels}
              onChange={(value) =>
                setContactChannels(value)
              }
              placeholder="Select contact channels"
            />
          </Section>

          {contactChannels.length > 0 && (

            <>
              {contactChannels.includes("Phone") && (
                <Section muted>
                  <Question hidden>
                    What is the primary business phone number?
                  </Question>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="h-10 rounded-xl"
                  />
                </Section>
              )}

              {contactChannels.includes("WhatsApp") && (
                <Section muted>
                  <Question hidden>
                    Is WhatsApp the same as primary phone?
                  </Question>
                  <DropdownSelect
                    options={whatsappSameOptions}
                    value={whatsappSame}
                    onChange={(value) =>
                      setWhatsappSame(value)
                    }
                    placeholder="Select an option"
                  />
                  {whatsappSame === "No" && (
                    <Input
                      value={whatsappNumber}
                      onChange={(e) =>
                        setWhatsappNumber(e.target.value)
                      }
                      placeholder="Enter WhatsApp number"
                      className="h-10 rounded-xl"
                    />
                  )}
                </Section>
              )}

              {contactChannels.includes("Email") && (
                <Section muted>
                  <Question hidden>
                    What is the business email?
                  </Question>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="h-10 rounded-xl"
                  />
                </Section>
              )}

              <Section muted>
                <Question hidden>
                  What type of physical location do you have?
                </Question>
                <DropdownSelect
                  options={locationTypeOptions}
                  value={locationType}
                  onChange={(value) => setLocationType(value)}
                  placeholder="Select location type"
                />
              </Section>

              {locationType &&
                locationType !== "No Public Location" && (
                  <>
                    <Section muted>
                      <Question hidden>
                        What is the business address?
                      </Question>
                      <Textarea
                        value={address}
                        onChange={(e) =>
                          setAddress(e.target.value)
                        }
                        placeholder="Enter business address"
                        className="min-h-22.5 resize-none rounded-xl"
                      />
                    </Section>

                    <Section muted>
                      <Question hidden>
                        How should the address be displayed?
                      </Question>
                      <DropdownSelect
                        options={addressDisplayOptions}
                        value={addressDisplay}
                        onChange={(value) =>
                          setAddressDisplay(value)
                        }
                        placeholder="Select address display"
                      />
                    </Section>
                  </>
                )}

              <div className="grid gap-6 md:grid-cols-2 items-start">

                <Section muted>
                  <Question hidden>
                    What are your working days?
                  </Question>
                  <MultiDropdownSelect
                    options={workingDayOptions}
                    value={workingDays}
                    onChange={(value) => setWorkingDays(value)}
                    placeholder="Select working days"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    What are your operating hours?
                  </Question>
                  <DropdownSelect
                    options={operatingHoursOptions}
                    value={operatingHours}
                    onChange={(value) =>
                      setOperatingHours(value)
                    }
                    placeholder="Select operating hours"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    How quickly do you respond to enquiries?
                  </Question>
                  <DropdownSelect
                    options={responseTimeOptions2}
                    value={responseTime}
                    onChange={(value) => setResponseTime(value)}
                    placeholder="Select response time"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    Which social platforms do you use?
                  </Question>
                  <MultiDropdownSelect
                    options={socialPlatformOptions}
                    value={socialPlatforms}
                    onChange={(value) =>
                      setSocialPlatforms(value)
                    }
                    placeholder="Select social platforms"
                  />
                </Section>

                {socialPlatforms.length > 0 &&
                  !socialPlatforms.includes("None") && (
                    <Section muted>
                      <Question hidden>
                        What are the URLs of selected social profiles?
                      </Question>
                      <div className="grid gap-3">
                        {socialPlatforms.map((platform) => (
                          <Input
                            key={platform}
                            value={socialUrls?.[platform] || ""}
                            onChange={(e) =>
                              setSocialUrls({
                                ...socialUrls,
                                [platform]: e.target.value,
                              })
                            }
                            placeholder={`${platform} profile URL`}
                            className="h-10 rounded-xl"
                          />
                        ))}
                      </div>
                    </Section>
                  )}

                <Section muted>
                  <Question hidden>
                    Which enquiry channels should be prioritised?
                  </Question>
                  <MultiDropdownSelect
                    options={enquiryPriorityOptions}
                    value={enquiryPriority}
                    onChange={(value) =>
                      setEnquiryPriority(value)
                    }
                    placeholder="Select priority channels"
                  />
                </Section>

                <Section muted>
                  <Question hidden>
                    What should visitors provide in the enquiry form?
                  </Question>
                  <MultiDropdownSelect
                    options={formFieldOptions}
                    value={formFields}
                    onChange={(value) => setFormFields(value)}
                    placeholder="Select enquiry fields"
                  />
                </Section>

                {formFields.length > 0 && (
                  <Section muted>
                    <Question hidden>
                      Which enquiry fields should be mandatory?
                    </Question>
                    <MultiDropdownSelect
                      options={formFields}
                      value={mandatoryFormFields}
                      onChange={(value) =>
                        setMandatoryFormFields(value)
                      }
                      placeholder="Select mandatory fields"
                    />
                  </Section>
                )}

              </div>

            </>
          )}

          <Section>
            <Question>
              What website visual style do you prefer?
            </Question>
            <DropdownSelect
              options={visualStyleOptions}
              value={visualStyle}
              onChange={(value) => setVisualStyle(value)}
              placeholder="Select visual style"
            />
          </Section>

          <Section>
            <Question>
              What impression should the website create?
            </Question>
            <DropdownSelect
              options={impressionOptions}
              value={impression}
              onChange={(value) => setImpression(value)}
              placeholder="Select desired impression"
            />
          </Section>

          {(visualStyle || impression) && (
            <div className="grid gap-6 md:grid-cols-2">
              <Section muted>
                <Question hidden>
                  What colour approach should the website use?
                </Question>
                <DropdownSelect
                  options={colourApproachOptions}
                  value={colourApproach}
                  onChange={(value) =>
                    setColourApproach(value)
                  }
                  placeholder="Select colour approach"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  Which homepage sections should be included?
                </Question>
                <Textarea
                  value={homepageSections}
                  onChange={(e) =>
                    setHomepageSections(e.target.value)
                  }
                  placeholder="AI-generated homepage section recommendations will be based on your answers."
                  className="min-h-22.5 resize-none rounded-xl"
                />
              </Section>
            </div>
          )}

          <Section>
            <Question>
              What hero/banner visual should be used?
            </Question>
            <DropdownSelect
              options={heroVisualOptions}
              value={heroVisual}
              onChange={(value) => setHeroVisual(value)}
              placeholder="Select hero/banner visual"
            />
          </Section>

          {heroVisual && (
            <div className="grid gap-6 md:grid-cols-3 items-start">
              <Section muted>
                <Question hidden>
                  Which visual assets do you currently have?
                </Question>
                <MultiDropdownSelect
                  options={visualAssetOptions}
                  value={visualAssets}
                  onChange={(value) =>
                    setVisualAssets(value)
                  }
                  placeholder="Select visual assets"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  How image-heavy should the website be?
                </Question>
                <DropdownSelect
                  options={imageIntensityOptions}
                  value={imageIntensity}
                  onChange={(value) =>
                    setImageIntensity(value)
                  }
                  placeholder="Select image intensity"
                />
              </Section>

              <Section muted>
                <Question hidden>
                  How important is mobile usage for your customers?
                </Question>
                <DropdownSelect
                  options={mobileImportanceOptions}
                  value={mobileImportance}
                  onChange={(value) =>
                    setMobileImportance(value)
                  }
                  placeholder="Select mobile importance"
                />
              </Section>
            </div>
          )}
        </div>



      </div>



      <NavigationButtons onNext={saveData} />
    </StepWrapper>
  )
}

export default Step2BasicDetails