export type QuestionType =
    | "text"
    | "single"
    | "multi"
    | "textarea"
    | "ai"
    | "metrics"

export interface QuestionConfig {
    id: string
    number: number
    section: string
    text: string
    type: QuestionType
    options?: string[]
    required?: boolean
    isMain?: boolean
    dependency?: string
    relatedQuestions?: string[]
    display?: string
    condition?: {
        questionId: string
        operator:
            | "equals"
            | "notEquals"
            | "contains"
        value: string
    }
}

export const q160: QuestionConfig = {
    id: "q160",
    number: 160,
    section: "IT Growth & Automation",
    text: "Which parts of your business require manual work?",
    type: "multi",

    options: [
        "Enquiry Handling",
        "Sales & Follow-up",
        "Customer Service",
        "Order Management",
        "Payment Collection",
        "Inventory Management",
        "Procurement",
        "Production",
        "Scheduling",
        "Logistics",
        "Reporting",
        "Documentation",
        "Marketing",
        "Employee / Workforce Management",
        "Other",
    ],

    relatedQuestions: [
        "q153",
        "q154",
        "q164",
        "q165",
        "q166",
    ],
}

export const q153: QuestionConfig = {
    id: "q153",
    number: 153,
    section: "IT Growth & Automation",
    text: "What should happen to your current enquiry/sales process after digitisation?",
    type: "multi",
    options: [
        "Remain Mostly Manual",
        "Partially Automated",
        "Mostly Automated",
        "Fully Digital Where Practical",
        "Not Sure",
    ],
    dependency: "q160",
}

export const q154: QuestionConfig = {
    id: "q154",
    number: 154,
    section: "IT Growth & Automation",
    text: "Which activities should the website reduce manually?",
    type: "multi",
    options: [
        "Answering Basic Questions",
        "Sending Catalogues",
        "Sharing Prices",
        "Quotations",
        "Appointment Scheduling",
        "Lead Collection",
        "Order Collection",
        "Payment Collection",
        "Customer Follow-up",
        "Support Requests",
        "Dealer Enquiries",
    ],
    dependency: "q160",
}

export const q164: QuestionConfig = {
    id: "q164",
    number: 164,
    section: "IT Growth & Automation",
    text: "Which sales process should technology improve?",
    type: "multi",
    options: [
        "Lead Capture",
        "Lead Qualification",
        "Follow-up",
        "Quote Generation",
        "Sales Pipeline",
        "Order Creation",
        "Payments",
        "Upselling",
        "Repeat Sales",
        "Reporting",
    ],
    dependency: "q160",
}

export const q165: QuestionConfig = {
    id: "q165",
    number: 165,
    section: "IT Growth & Automation",
    text: "Which customer-service process should technology improve?",
    type: "multi",
    options: [
        "FAQ",
        "Ticketing",
        "WhatsApp Response",
        "Appointment",
        "Order Tracking",
        "Documents",
        "Support",
        "Feedback",
        "Reviews",
        "Customer Portal",
    ],
    dependency: "q160",
}

export const q166: QuestionConfig = {
    id: "q166",
    number: 166,
    section: "IT Growth & Automation",
    text: "Which operational process should technology improve?",
    type: "multi",
    options: [
        "Inventory",
        "Procurement",
        "Production",
        "Scheduling",
        "Logistics",
        "Workforce",
        "Reporting",
        "Approval Workflow",
        "Documents",
        "Vendor Management",
        "Project Management",
    ],
    dependency: "q160",
}

export const q161: QuestionConfig = {
    id: "q161",
    number: 161,
    section: "IT Growth & Automation",
    text: "What software do you already use?",
    type: "multi",

    options: [
        "CRM",
        "ERP",
        "Accounting Software",
        "POS System",
        "Inventory Management Software",
        "E-commerce Platform",
        "Booking / Appointment Software",
        "Project Management Software",
        "HR / Payroll Software",
        "Marketing Automation",
        "WhatsApp Business",
        "Email",
        "Excel / Spreadsheets",
        "Google Sheets",
        "Other",
        "None",
    ],

    relatedQuestions: [
        "q162",
        "q169",
    ],
}

export const q162: QuestionConfig = {
    id: "q162",
    number: 162,
    section: "IT Growth & Automation",
    text: "Where do you currently store customer/lead information?",
    type: "multi",
    options: [
        "Paper",
        "Excel",
        "Google Sheets",
        "CRM",
        "ERP",
        "Accounting System",
        "WhatsApp",
        "Email",
        "Multiple Systems",
        "Not Systematically Stored",
    ],
    dependency: "q161",
}

export const q169: QuestionConfig = {
    id: "q169",
    number: 169,
    section: "IT Growth & Automation",
    text: "Would integrating existing systems be valuable?",
    type: "single",
    options: [
        "Yes urgently",
        "Yes eventually",
        "Maybe",
        "No",
        "Not Sure",
    ],
    dependency: "q161",
    relatedQuestions: [
        "q170",
    ],
    display: "Multiple systems present",
}

export const q170: QuestionConfig = {
    id: "q170",
    number: 170,
    section: "IT Growth & Automation",
    text: "Which systems should ideally communicate with each other?",
    type: "multi",
    options: [
        "Website + CRM",
        "Website + ERP",
        "Website + Inventory",
        "Website + Accounting",
        "CRM + WhatsApp",
        "CRM + Email",
        "E-commerce + Logistics",
        "Payments + Accounting",
        "Booking + Calendar",
        "Other",
    ],
    dependency: "q169",
    condition: {
        questionId: "q169",
        operator: "notEquals",
        value: "No",
    },
}

export const q163: QuestionConfig = {
    id: "q163",
    number: 163,
    section: "IT Growth & Automation",
    text: "What technology could help your business?",
    type: "multi",

    options: [
        "Website / Web Platform",
        "E-commerce",
        "CRM",
        "ERP",
        "Inventory Management",
        "Accounting Integration",
        "Booking System",
        "Customer Portal",
        "Dealer Portal",
        "Mobile App",
        "Analytics & Reporting",
        "Marketing Automation",
        "AI",
        "Cloud Solutions",
        "Process Automation",
        "System Integration",
        "Cybersecurity",
        "Other",
        "Not Sure",
    ],

    relatedQuestions: [
        "q156",
        "q171",
        "q174",
    ],
}

export const q156: QuestionConfig = {
    id: "q156",
    number: 156,
    section: "IT Growth & Automation",
    text: "Should your website eventually become more than an informational website?",
    type: "single",
    options: [
        "No",
        "E-commerce",
        "Booking Platform",
        "Customer Portal",
        "Dealer Portal",
        "SaaS Platform",
        "Marketplace",
        "Mobile App Backend",
        "CRM-connected Platform",
        "Not Sure",
    ],
    dependency: "q163",
    relatedQuestions: [
        "q157",
    ],
}

export const q157: QuestionConfig = {
    id: "q157",
    number: 157,
    section: "IT Growth & Automation",
    text: "Which future digital capability is most important?",
    type: "multi",
    options: [
        "Online Sales",
        "Booking",
        "Customer Login",
        "Dealer Portal",
        "Subscription",
        "Payment",
        "CRM",
        "Marketing Automation",
        "AI",
        "Analytics",
        "ERP Integration",
        "Inventory",
        "Mobile App",
    ],
    dependency: "q156",
}

export const q171: QuestionConfig = {
    id: "q171",
    number: 171,
    section: "IT Growth & Automation",
    text: "What is your highest-priority IT investment?",
    type: "single",
    options: [
        "Website",
        "Sales System",
        "Operations Automation",
        "E-commerce",
        "Customer Experience",
        "Analytics",
        "AI",
        "Mobile App",
        "Infrastructure",
        "Security",
        "Marketing Technology",
        "Not Sure",
    ],
    dependency: "q163",
    relatedQuestions: [
        "q172",
    ],
}

export const q172: QuestionConfig = {
    id: "q172",
    number: 172,
    section: "IT Growth & Automation",
    text: "What is stopping you from adopting more technology?",
    type: "multi",
    options: [
        "Cost",
        "Lack of Knowledge",
        "Unclear ROI",
        "Lack of Staff",
        "Implementation Complexity",
        "Previous Bad Experience",
        "Data Migration",
        "Security Concern",
        "Resistance to Change",
        "No Reliable Technology Partner",
        "Not Sure",
    ],
    dependency: "q171",
}

export const q174: QuestionConfig = {
    id: "q174",
    number: 174,
    section: "IT Growth & Automation",
    text: "Which IT services appear most relevant based on your business?",
    type: "ai",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
    dependency: "q163",
}

export const q167: QuestionConfig = {
    id: "q167",
    number: 167,
    section: "IT Growth & Automation",
    text: "Which repetitive task would you automate first?",
    type: "textarea",
}

export const q173: QuestionConfig = {
    id: "q173",
    number: 173,
    section: "Investment & Growth",
    text: "What should technology improve most?",
    type: "single",
    options: [
        "Revenue Growth",
        "Cost Reduction",
        "Customer Experience",
        "Operational Efficiency",
        "Employee Productivity",
        "Business Scalability",
        "Decision Making",
        "Other",
    ],
    relatedQuestions: [
        "q184",
    ],
}

export const q184: QuestionConfig = {
    id: "q184",
    number: 184,
    section: "Investment & Growth",
    text: "Which non-financial return matters most?",
    type: "single",
    options: [
        "Better Customer Experience",
        "Brand Credibility",
        "Faster Decisions",
        "Better Data",
        "Employee Productivity",
        "Process Control",
        "Compliance",
        "Scalability",
        "Competitive Advantage",
    ],
    dependency: "q173",
}

export const q175: QuestionConfig = {
    id: "q175",
    number: 175,
    section: "Investment & Growth",
    text: "How would you prefer to introduce new technology?",
    type: "single",
    options: [
        "All at Once",
        "Step by Step",
        "Pilot First",
        "Start Small and Scale",
        "Depends on the Project",
        "Not Sure",
    ],
}

export const q176: QuestionConfig = {
    id: "q176",
    number: 176,
    section: "Investment & Growth",
    text: "What is your annual revenue range?",
    type: "single",
    options: [
        "Prefer not to say",
        "Under ₹5 Lakh",
        "₹5–10 Lakh",
        "₹10–25 Lakh",
        "₹25–50 Lakh",
        "₹50 Lakh–₹1 Crore",
        "₹1–5 Crore",
        "₹5–10 Crore",
        "Above ₹10 Crore",
    ],
}

export const q177: QuestionConfig = {
    id: "q177",
    number: 177,
    section: "Investment & Growth",
    text: "What growth do you want?",
    type: "textarea",
}

export const q178: QuestionConfig = {
    id: "q178",
    number: 178,
    section: "Investment & Growth",
    text: "How much can technology influence that growth?",
    type: "single",
    options: [
        "Very little",
        "A little",
        "Moderately",
        "Significantly",
        "A major part of growth",
        "Not Sure",
    ],
}

export const q179: QuestionConfig = {
    id: "q179",
    number: 179,
    section: "Investment & Growth",
    text: "How much do you currently spend on technology?",
    type: "single",
    options: [
        "Nothing",
        "Under ₹25,000/year",
        "₹25,000–₹50,000/year",
        "₹50,000–₹1 Lakh/year",
        "₹1–5 Lakh/year",
        "₹5–10 Lakh/year",
        "Above ₹10 Lakh/year",
        "Not Sure",
    ],
}

export const q180: QuestionConfig = {
    id: "q180",
    number: 180,
    section: "Investment & Growth",
    text: "What percentage of revenue would you invest if value is clear?",
    type: "single",
    options: [
        "Less than 1%",
        "1–2%",
        "2–5%",
        "5–10%",
        "More than 10%",
        "Not Sure",
    ],
}

export const q181: QuestionConfig = {
    id: "q181",
    number: 181,
    section: "Investment & Growth",
    text: "What actual IT project budget would you consider?",
    type: "single",
    options: [
        "Under ₹25,000",
        "₹25,000–₹50,000",
        "₹50,000–₹1 Lakh",
        "₹1–3 Lakh",
        "₹3–5 Lakh",
        "₹5–10 Lakh",
        "Above ₹10 Lakh",
        "Not Sure",
    ],
}

export const q182: QuestionConfig = {
    id: "q182",
    number: 182,
    section: "Investment & Growth",
    text: "How quickly should the investment produce enough value?",
    type: "single",
    options: [
        "Within 3 months",
        "Within 6 months",
        "Within 12 months",
        "Within 1–2 years",
        "Long-term",
        "Not Sure",
    ],
}

export const q183: QuestionConfig = {
    id: "q183",
    number: 183,
    section: "Investment & Growth",
    text: "What financial result matters most?",
    type: "single",
    options: [
        "Increase Revenue",
        "Reduce Costs",
        "Save Time",
        "Increase Profitability",
        "Improve Cash Flow",
        "Increase Customer Retention",
        "Reduce Risk",
        "Not Sure",
    ],
    relatedQuestions: [
        "q185",
    ],
}

export const q185: QuestionConfig = {
    id: "q185",
    number: 185,
    section: "Investment & Growth",
    text: "How should IT investments be justified internally?",
    type: "multi",
    options: [
        "Direct ROI",
        "Payback Period",
        "Revenue Growth",
        "Cost Saving",
        "Time Saving",
        "Competitive Necessity",
        "Strategic Growth",
        "Customer Experience",
        "Combination",
    ],
    dependency: "q183",
}

export const q186: QuestionConfig = {
    id: "q186",
    number: 186,
    section: "Investment & Growth",
    text: "How comfortable are you investing before results are fully proven?",
    type: "single",
    options: [
        "Very uncomfortable",
        "Somewhat uncomfortable",
        "Neutral",
        "Somewhat comfortable",
        "Very comfortable",
        "Depends on the project",
    ],
}

export const q187: QuestionConfig = {
    id: "q187",
    number: 187,
    section: "Investment & Growth",
    text: "What type of technology investment plan best fits your objectives?",
    type: "ai",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
}

export const q188: QuestionConfig = {
    id: "q188",
    number: 188,
    section: "Website Visual System",
    text: "What visual personality do you want?",
    type: "single",
    options: [
        "Professional",
        "Modern",
        "Minimal",
        "Premium",
        "Friendly",
        "Bold",
        "Creative",
        "Technical",
        "Traditional",
        "Elegant",
    ],
    relatedQuestions: [
        "q192",
        "q193",
    ],
}

export const q192: QuestionConfig = {
    id: "q192",
    number: 192,
    section: "Website Visual System",
    text: "What background preference do you have?",
    type: "single",
    options: [
        "Mostly White",
        "Mostly Light",
        "Mostly Dark",
        "Mixed Light-Dark",
        "System Decide",
    ],
    dependency: "q188",
}

export const q193: QuestionConfig = {
    id: "q193",
    number: 193,
    section: "Website Visual System",
    text: "How strong should accent colours be?",
    type: "single",
    options: [
        "Minimal",
        "Moderate",
        "Strong",
        "Very Bold",
    ],
    dependency: "q188",
}

export const q189: QuestionConfig = {
    id: "q189",
    number: 189,
    section: "Website Visual System",
    text: "Which colour combination do you prefer?",
    type: "multi",

    options: [
        "Monochrome",
        "Black & White",
        "Blue & White",
        "Blue & Grey",
        "Green & White",
        "Green & Beige",
        "Red & White",
        "Orange & White",
        "Purple & White",
        "Yellow & Black",
        "Navy & Gold",
        "Earth Tones",
        "Pastel Colours",
        "Dark & Premium",
        "Bright & Vibrant",
        "System Decide",
    ],

    relatedQuestions: [
        "q190",
        "q191",
        "q194",
        "q195",
    ],
}

export const q190: QuestionConfig = {
    id: "q190",
    number: 190,
    section: "Website Visual System",
    text: "Should the website colours match your existing logo/brand colours?",
    type: "single",
    options: [
        "Yes",
        "Mostly",
        "No",
        "I don't have fixed brand colours",
        "System Decide",
    ],
    dependency: "q189",
}

export const q191: QuestionConfig = {
    id: "q191",
    number: 191,
    section: "Website Visual System",
    text: "Which colour should dominate the website?",
    type: "single",
    options: [
        "Darkest Palette Colour",
        "Main Brand Colour",
        "Light Background",
        "System Decide",
    ],
    dependency: "q189",
    display: "Palette selected",
}

export const q194: QuestionConfig = {
    id: "q194",
    number: 194,
    section: "Website Visual System",
    text: "Where should the accent colour be used most?",
    type: "single",
    options: [
        "CTA Buttons",
        "Headings",
        "Icons",
        "Background Sections",
        "Product Highlights",
        "Links",
        "System Decide",
    ],
    dependency: "q189",
}

export const q195: QuestionConfig = {
    id: "q195",
    number: 195,
    section: "Website Visual System",
    text: "Which colour palette best fits your business automatically?",
    type: "ai",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
    dependency: "q189",
}

export const q113: QuestionConfig = {
    id: "q113",
    number: 113,
    section: "Publishing & Authorisation",
    text: "Which supplied information are you authorising for public publication?",
    type: "multi",
    options: [
        "Business Name",
        "Logo",
        "Phone",
        "WhatsApp",
        "Email",
        "Address",
        "Products",
        "Services",
        "Prices",
        "Client Names",
        "Client Logos",
        "Testimonials",
        "Certifications",
        "Team",
        "Portfolio",
        "Social Profiles",
    ],
}

export const q114: QuestionConfig = {
    id: "q114",
    number: 114,
    section: "Publishing & Authorisation",
    text: "Please confirm ownership/permission for submitted content.",
    type: "multi",
    required: true,
    options: [
        "Right to use logo",
        "Right to use photos-media",
        "Permission for client logos",
        "Permission for testimonials",
        "Submitted information is accurate",
    ],
}

export const q115: QuestionConfig = {
    id: "q115",
    number: 115,
    section: "Publishing & Authorisation",
    text: "What should happen after website generation?",
    type: "single",
    options: [
        "Publish after generation",
        "Generate and let me review",
        "Generate draft for platform approval",
        "Save only—do not publish",
    ],
    display: "Q114 confirmations completed",
}

export const SECTION_3_MAIN_QUESTIONS: QuestionConfig[] = [
    q160,
    q161,
    q163,
    q167,
    q173,
    q175,
    q176,
    q177,
    q178,
    q179,
    q180,
    q181,
    q182,
    q183,
    q186,
    q187,
    q188,
    q189,
]

export const SECTION_3_QUESTIONS: QuestionConfig[] = [
    q153,
    q154,
    q156,
    q157,
    q160,
    q161,
    q162,
    q163,
    q164,
    q165,
    q166,
    q167,
    q169,
    q170,
    q171,
    q172,
    q173,
    q174,
    q175,
    q176,
    q177,
    q178,
    q179,
    q180,
    q181,
    q182,
    q183,
    q184,
    q185,
    q186,
    q187,
    q188,
    q189,
    q190,
    q191,
    q192,
    q193,
    q194,
    q195,
    q113,
    q114,
    q115,
]

export function getSection3QuestionById(
    id: string
): QuestionConfig | undefined {
    return SECTION_3_QUESTIONS.find(
        (question) => question.id === id
    )
}