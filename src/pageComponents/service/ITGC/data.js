import {
  faEnvelope,
  faMouse,
  faPlaneDeparture,
  faSliders,
  faVideo,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export const faqsData = [
  [
    {
      q: "What are the main components of ITGC?",
      a: "ITGC (Information Technology General Controls) typically cover several foundational areas: logical access controls (managing who can access systems and data), change management (governing updates to software and configurations), backup & recovery procedures (ensuring data and system continuity), IT operations monitoring (supervising job schedules, system performance, and incident management), and physical security (protecting hardware and facilities).",
    },
    {
      q: "How often should ITGC controls be tested or audited?",
      a: "ITGC effectiveness should be validated at least annually, often aligning with financial reporting cycles. However, many organisations now adopt continuous monitoring or quarterly reviews to proactively detect issues, improve compliance posture, and reduce the workload during formal audits.",
    },
    {
      q: "What is the relationship between ITGC and SOX compliance?",
      a: "Within SOX frameworks, particularly Section 404, ITGC controls are evaluated as essential components supporting the reliability of financial reporting systems. Strong ITGC helps ensure that financial data remains accurate, complete, and auditable, minimising the risk of material misstatements and audit findings.",
    },
    {
      q: "Can ITGC be automated, and what are the benefits?",
      a: "Yes, many organisations automate ITGC activities such as access provisioning, change tracking, backup testing, and control monitoring. Automation reduces manual errors, improves accuracy, enhances real-time visibility, and streamlines the audit process, making compliance more efficient.",
    },
    {
      q: "Who is responsible for managing ITGC in an organisation?",
      a: "Responsibility for ITGC typically falls on IT leadership teams such as the CIO, CISO, CISA or IT compliance officers, working closely with internal audit, finance, and risk management. Together, they define control policies, enforce implementation, and ensure that systems remain compliant with regulatory standards.",
    },
  ],
];

export const benefits = [
  {
    header: "Why SOX Compliance is Important for Your Business",
    description: `• Protects against financial fraud and data manipulation<br/>
• Enhances credibility with investors and customers<br/>
• Mandatory for US-listed companies and their subsidiaries<br/>
• Required for companies serving US clients or investors<br/>
• Strengthens ITGC controls supporting financial reporting<br/>
• Reduces audit risks and potential financial penalties`,
    icon: "iii",
    image: "flower",
  },
  {
  header: "Who Needs SOX Compliance?",
  description: `• Public companies listed on US stock exchanges<br/>
• Indian subsidiaries of US-listed companies<br/>
• Financial service providers, banks, and fintech firms<br/>
• SaaS companies and IT exporters handling US client data<br/>
• Crypto exchanges and digital asset firms operating globally`,
  icon: "iii",
  image: "box",
},
];

export const services = [
  {
    header: "Reduces the risk of data manipulation and fraud",
  },
  {
    header: "Aligns IT with financial and operational controls",
  },
  {
    header: "Prepares your systems for audits (SOX, ISO, SOC 2)",
  },
  {
    header: "Safeguards brand reputation and customer trust",
  },
  {
    header: "Minimises system downtime and operational risks",
  },
];

export const offerings = [
  {
    header: "SOX 404 Risk Assessments:",
    description: "Identify control gaps in your financial reporting and IT systems."
  },
  {
    header: "ITGC Audits:", 
    description: "Evaluate your IT environment, including access control, change management, and data recovery measures."
  },
  {
    header: "SOX Framework Implementation:",
    description: "Build and operationalise controls aligned with SOX Sections 302 and 404 requirements."
  },
  {
    header: "Automated Evidence Management:",
    description: "Simplify reporting and audit readiness through compliance automation tools."
  },
  {
    header: "Pre-Audit Readiness Support:",
    description: "Prepare for external audits via gap analysis, remediation planning, and internal control testing."
  },
  {
    header: "Regulatory Advisory:",
    description: "Get guidance from in-house experts (CISA, CISO, IT compliance professionals) well-versed in SOX, SEBI, and global regulations."
  }
];
