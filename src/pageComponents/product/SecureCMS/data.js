import {
  LuTriangleAlert as ShieldAlert,
  LuTrendingUp as TrendingUp,
  LuUsers as Users,
  LuDollarSign as DollarSign,
  LuSearchX as SearchX,
  LuFileWarning as FileWarning,
  LuBan as Ban,
  LuActivity as Activity,
  LuShieldCheck as ShieldCheck,
  LuSettings as Settings,
  LuBookOpen as BookOpen,
  LuGlobe as Globe,
  LuCpu as Cpu,
  LuLayoutGrid as Layout,
  LuDatabase as Database,
  LuUserCheck as UserCheck,
  LuFileBox as FileBox,
  LuLandmark as Landmark,
  LuShoppingCart as ShoppingCart,
  LuCloud as Cloud,
  LuScale as Scale
} from 'react-icons/lu';
import React from 'react';

export const complianceRisks = [
  {
    title: "Proof of Consent",
    desc: "Most businesses lack auditable, time-stamped proof of explicit user consent.",
    icon: <SearchX className="w-8 h-8 text-red-500" />
  },
  {
    title: "Rights Requests",
    desc: "Inefficient handling of user data access, correction, and erasure requests.",
    icon: <FileWarning className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Massive Penalties",
    desc: "Non-compliance can trigger penalties up to ₹250 crore under DPDP 2023.",
    icon: <Ban className="w-8 h-8 text-red-600" />
  },
  {
    title: "Loss of Trust",
    desc: "Fragmented systems lead to data leaks and a complete collapse of user trust.",
    icon: <ShieldAlert className="w-8 h-8 text-red-500" />
  }
];

export const provisions = [
  {
    title: "Explicit Consent",
    desc: "Data must be processed only for a specified purpose after obtaining clear, affirmative consent.",
    icon: <UserCheck className="w-6 h-6 text-accent" />
  },
  {
    title: "Purpose Limitation",
    desc: "Personal data should only be used for the specific purpose for which consent was granted.",
    icon: <ShieldAlert className="w-6 h-6 text-accent" />
  },
  {
    title: "Data Principal Rights",
    desc: "Users have the right to access, correct, and erase their personal data at any time.",
    icon: <BookOpen className="w-6 h-6 text-accent" />
  },
  {
    title: "Grievance Redressal",
    desc: "Establishing a mechanism for users to raise concerns and resolve data-related disputes.",
    icon: <Scale className="w-6 h-6 text-accent" />
  }
];

export const processSteps = [
  {
    title: "1. Consent Capture",
    subtitle: "Web & Mobile UI",
    description: "Deploy our lightweight, multi-lingual consent widgets across all your digital touchpoints.",
    icon: <Layout className="w-6 h-6 text-accent" />
  },
  {
    title: "2. Secure Storage",
    subtitle: "Encrypted Logs",
    description: "Every consent event is hashed and stored in our redundant, encrypted cloud infrastructure within India.",
    icon: <Database className="w-6 h-6 text-accent" />
  },
  {
    title: "3. Preference Management",
    subtitle: "User Control",
    description: "Users can access their personalized portal to update or withdraw consent at any time, instantly.",
    icon: <UserCheck className="w-6 h-6 text-accent" />
  },
  {
    title: "4. Compliance Reporting",
    subtitle: "Audit Dashboards",
    description: "Generate comprehensive reports for regulators or internal audits with a single click.",
    icon: <FileBox className="w-6 h-6 text-accent" />
  }
];

export const features = [
  {
    header: "Real-Time Consent Tracking",
    description: "Monitor every consent event as it happens. Built-in hooks for instant propagation to your entire tech stack.",
    icon: "shield-lock",
    iconBackgroundColor: "",
  },
  {
    header: "Automated DPDP Compliance",
    description: "Built-in workflows mapped directly to India's DPDP Act 2023 requirements for notice and consent.",
    icon: "shield-lock",
    iconBackgroundColor: "",
  },
  {
    header: "Immutable Audit Logs",
    description: "Tamper-proof, cryptographically signed logs for every consent change, ready for regulatory inspection.",
    icon: "report-board",
    iconBackgroundColor: "",
  },
  {
    header: "User Rights Management",
    description: "Automated portals for users to exercise their rights: Access, Correction, and Erasure (Right to be Forgotten).",
    icon: "settings-gear",
    iconBackgroundColor: "",
  },
  {
    header: "Multi-language Support",
    description: "Consent notices in all major Indian regional languages to ensure user understanding and valid consent.",
    icon: "users",
    iconBackgroundColor: "",
  },
  {
    header: "API & Webhook Integrations",
    description: "Developer-first architecture with robust APIs and webhooks for seamless platform integration.",
    icon: "settings-flow",
    iconBackgroundColor: "",
  }
];

export const benefits = [
  {
    header: "Risk Prevention",
    description: "Prevent legal & financial risks by automatically enforcing compliance policies.",
    icon: "shield-unlock",
    iconBackgroundColor: "",
  },
  {
    header: "User Trust",
    description: "Build transparency and trust with user-facing preference centers and clear notices.",
    icon: "user-flow",
    iconBackgroundColor: "",
  },
  {
    header: "Centralization",
    description: "Unify scattered consent data into one single, auditable source of truth.",
    icon: "bar-chart",
    iconBackgroundColor: "",
  },
  {
    header: "Cost Reduction",
    description: "Reduces operational costs by automating manual compliance workflows.",
    icon: "setting-dollar",
    iconBackgroundColor: "",
  }
];

export const industryList = [
  { name: "Fintech & Banking", icon: <Landmark className="w-8 h-8 text-accent" /> },
  { name: "E-commerce", icon: <ShoppingCart className="w-8 h-8 text-orange-500" /> },
  { name: "Healthcare", icon: <Activity className="w-8 h-8 text-red-500" /> },
  { name: "SaaS", icon: <Cloud className="w-8 h-8 text-cyan-500" /> },
  { name: "EdTech", icon: <BookOpen className="w-8 h-8 text-emerald-500" /> }
];

export const faqsData = [
  [
    {
      q: "What is a consent management platform?",
      a: "A consent management platform is a software platform that enables businesses to collect, store, manage, and audit user consent for processing personal data. It ensures that consent is captured in a legally valid format, can be withdrawn by the user at any time, and is available as a verifiable record during regulatory audits. Secure CMS is India's purpose-built CMS for DPDP Act compliance."
    },
    {
      q: "What is DPDP compliance?",
      a: "DPDP compliance refers to adherence with India's Digital Personal Data Protection Act, 2023 — a comprehensive data protection law that governs how businesses collect, store, process, and delete the personal data of Indian residents. Compliance requires obtaining explicit user consent, honouring data subject rights, appointing a Data Protection Officer (for Significant Data Fiduciaries), and maintaining auditable consent records."
    },
    {
      q: "Do Indian businesses need a consent management platform?",
      a: "Yes. Any business that processes digital personal data of Indian residents is subject to the DPDP Act, 2023. The Act mandates explicit, purpose-specific consent and gives users enforceable rights to access, correct, and delete their data. A consent management platform is the most reliable way to meet these obligations, maintain audit records, and avoid penalties of up to ₹250 crore."
    },
    {
      q: "How is the DPDP Act different from GDPR?",
      a: "While both laws protect personal data rights, the DPDP Act differs from the EU's GDPR in several key ways. The DPDP Act relies primarily on consent as the legal basis for processing (GDPR recognises six bases). The DPDP Act currently applies only to digital data. GDPR has a more mature enforcement history; DPDP enforcement is beginning now. Both require privacy notices, user rights mechanisms, and breach notification obligations."
    },
    {
      q: "Can users withdraw consent under the DPDP Act?",
      a: "Yes. The DPDP Act gives Data Principals (users) an explicit right to withdraw consent at any time. The withdrawal must be as easy as giving consent in the first place. Secure CMS's self-service Consent Preference Centre makes withdrawal a one-click action, and propagates the change to all connected systems in real time via API."
    },
    {
      q: "What happens if I don't comply with the DPDP Act?",
      a: "Non-compliance with the DPDP Act can result in penalties of up to ₹250 crore per contravention, imposed by India's Data Protection Board after investigation. Beyond financial penalties, businesses risk enforcement orders, suspension of data processing activities, reputational damage, and loss of user trust. Early compliance is significantly less costly than reactive remediation after a regulatory action."
    },
    {
      q: "What is the difference between a CMS and a cookie consent banner?",
      a: "A cookie consent banner is a narrow tool that captures consent for cookie-based tracking on a website. A consent management platform is a comprehensive platform that manages all forms of personal data consent — not just cookies — across web, mobile, and API touchpoints."
    },
    {
      q: "How quickly can SecureCMS be deployed?",
      a: "SecureCMS can be fully deployed in under 24 hours. For web deployments, our JavaScript snippet takes minutes to implement. Mobile SDK integration typically requires less than half a day of engineering effort. Enterprise API integrations with CRM or CDP platforms are guided by our onboarding team and typically complete within 2–5 business days."
    },
    {
      q: "Does SecureCMS support multi-language consent notices?",
      a: "Yes. SecureCMS supports consent notices in 20+ languages, including Hindi, Tamil, Bengali, Telugu, Marathi, Kannada, Gujarati, and English. Multi-language support is available on Growth and Enterprise plans. This is particularly important for businesses with users across India's linguistically diverse states."
    },
    {
      q: "Is SecureCMS compliant with ISO 27001 and SOC 2?",
      a: "SecureCMS's infrastructure is aligned with ISO 27001 information security management standards. We also undergo periodic SOC 2 Type II audits covering Security, Availability, and Confidentiality criteria. SOC 2 audit reports are available to enterprise clients under NDA. These certifications provide the third-party assurance that enterprise procurement and legal teams require."
    },
    {
      q: "How does SecureCMS handle user rights requests under the DPDP Act?",
      a: "SecureCMS includes a built-in User Rights Management module that automates the intake, tracking, and fulfilment of DPDP rights requests — access, correction, erasure, and nomination rights. Each request is assigned an SLA, tracked to completion, and documented in the audit log. This eliminates the need for custom internal tooling and reduces the risk of missing statutory response deadlines."
    },
    {
      q: "Can SecureCMS integrate with my existing CRM or analytics platform?",
      a: "Yes. SecureCMS integrates natively with major CRM platforms (Salesforce, HubSpot, Zoho), analytics platforms (Segment, Mixpanel, CleverTap), and advertising platforms (Google, Meta). Our REST API and webhook system allow any platform to stay in sync with real-time consent status. Custom integrations are supported on Enterprise plans."
    },
    {
      q: "What is the cost of SecureCMS?",
      a: "SecureCMS offers tiered pricing based on the number of monthly consent events, features required, and level of support. The Starter plan is designed for early-stage startups, Growth for scaling SaaS and e-commerce platforms, and Enterprise for exchanges and financial institutions with custom requirements. Contact us for a tailored quote based on your data volume and compliance needs."
    },
    {
      q: "How does SecureCMS store and protect consent data?",
      a: "All consent records are encrypted at rest using AES-256 and in transit using TLS 1.3. Data is stored by default in India (AWS Mumbai region) to ensure data residency compliance. Consent logs are immutable — records cannot be altered retroactively. Role-based access controls and MFA enforcement restrict access to authorised personnel only."
    },
    {
      q: "What is a Data Fiduciary under the DPDP Act?",
      a: "Under the Digital Personal Data Protection Act, 2023, a Data Fiduciary is any person or entity that determines the purpose and means of processing personal data. This includes businesses, startups, apps, and platforms that collect user data. Data Fiduciaries are responsible for obtaining valid consent, maintaining data accuracy, implementing security safeguards, and enabling user rights — all obligations SecureCMS automates."
    }
  ]
];
