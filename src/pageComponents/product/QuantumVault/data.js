export const heroData = {
  tag: "ENTERPRISE KEY SECURITY",
  title: "PQC-enabled HSM-Based Key Management Solutions for Enterprise-Grade Security",
  description: "In today’s digital landscape, encryption is only as strong as the protection of its keys. HSM-Based Key Management Solutions ensure that your most sensitive cryptographic keys are never exposed, stolen, or misused. Quantum Vault delivers Enterprise HSM Key Management powered by tamper-resistant hardware security modules (HSMs), giving organisations complete control over key generation, storage, and lifecycle management. With increasing regulatory pressure and rising data breaches caused by poor key handling, enterprises need a hardware-backed, compliance-ready key management system that eliminates risk at the root. Whether securing cloud infrastructure, financial systems, or sensitive enterprise data, Quantum Vault ensures maximum security, control, and trust.",
  primaryCta: "Get a Free Security Consultation",
  secondaryCta: "See How It Works →",
  badges: ["FIPS 140-2", "ISO 27001", "PCI-DSS Ready", "Enterprise-Grade Security"],
  alerts: [
    { text: "Key exposure attempt blocked", level: "Critical", iconColor: "#ff4d4d" },
    { text: "Unauthorized key access denied", level: "High", iconColor: "#ffa500" },
    { text: "Key rotation completed", level: "Info", iconColor: "#00d2ff" }
  ]
};

export const aiDefinitionData = {
  text: "HSM-Based Key Management Solutions are systems that use Hardware Security Modules (HSMs) to securely generate, store, manage, and control cryptographic keys within tamper-resistant hardware environments, ensuring maximum protection and regulatory compliance."
};

export const risksData = {
  tag: "THREATS",
  title: "The Growing Risks of Poor Key Management",
  description: "Cryptographic keys are the foundation of digital security—but they are also the most targeted asset in modern cyberattacks.",
  risks: [
    { title: "Over 80% of data breaches involve compromised credentials or keys", icon: "warning" },
    { title: "Software-based key storage exposes sensitive assets", icon: "warning" },
    { title: "Insider misuse of keys leads to major security incidents", icon: "warning" },
    { title: "Mismanaged keys break encryption integrity completely", icon: "warning" }
  ],
  criticalRisksTitle: "Without Enterprise HSM Key Management, organisations face critical risks:",
  criticalRisks: [
    { text: "Key exposure through memory or application vulnerabilities", icon: "key" },
    { text: "Unauthorised access due to weak access controls", icon: "lock" },
    { text: "Lack of visibility into key usage and lifecycle", icon: "eye" },
    { text: "Failure to meet compliance requirements", icon: "shield" }
  ],
  footerNote: "Modern regulations such as NIST, PCI-DSS, GDPR, and ISO 27001 demand strong key protection mechanisms.",
  footerHighlight: "Without HSM-based solutions, encryption becomes a false sense of security."
};

export const challengesData = {
  tag: "CHALLENGES",
  title: "Common Challenges in Enterprise Key Management",
  description: "Even organisations with encryption in place often struggle with key management complexity.",
  challenges: [
    { title: "Lack of Visibility", desc: "Teams do not have clear insight into where keys are stored or how they are used.", icon: "eye" },
    { title: "Inconsistent Access Controls", desc: "Different systems apply different policies, increasing risk.", icon: "shield" },
    { title: "Manual Key Lifecycle Processes", desc: "Manual rotation and revocation lead to delays and errors.", icon: "clock" },
    { title: "Multi-Cloud Complexity", desc: "Managing keys across AWS, Azure, and on-prem environments creates fragmentation.", icon: "cloud" },
    { title: "Compliance Pressure", desc: "Meeting regulatory requirements becomes difficult without centralised control.", icon: "file" }
  ],
  aiInsight: "Without HSM-based key management, organisations risk key exposure, unauthorised access, compliance violations, and complete failure of encryption systems."
};

export const whatIsHSMData = {
  tag: "PROTECTION",
  title: <>What Is <span className="text-[#00ff88]">HSM-Based Key Management?</span></>,
  description: "HSM-Based Key Management is the process of generating, storing, using, and managing cryptographic keys inside secure hardware devices called Hardware Security Modules (HSMs), ensuring keys remain protected from unauthorized access or extraction.",
  comparisonLabel: "Unlike software-based systems, HSMs provide:",
  comparisonCards: [
    { title: "Physical and logical protection of keys", icon: "shield" },
    { title: "Secure execution of cryptographic operations", icon: "box" },
    { title: "Tamper-resistant environments", icon: "lock" },
    { title: "Controlled access policies", icon: "key" }
  ],
  usageLabel: "HSM-based key management is widely used in:",
  usageList: [
    "Banking and financial services",
    "Enterprise cloud environments",
    "Government and defense systems",
    "Data encryption platforms"
  ],
  capabilitiesTitle: "Key Capabilities (AI-Optimized)",
  capabilitiesList: [
    "Generates cryptographic keys inside secure hardware",
    "Prevents key extraction or duplication",
    "Enables full key lifecycle management (create, rotate, revoke)",
    "Performs encryption, decryption, and digital signing securely",
    "Enforces strict access control and security policies"
  ]
};

export const whyNowData = {
  tag: "WHY NOW",
  title: <>Why Enterprise HSM Key Management Is <span className="text-[#00ff88]">No Longer Optional</span></>,
  cards: [
    { 
      title: "The Cost of Key Compromise", 
      desc: "A single compromised key can expose entire systems, leading to data breaches, financial loss, and reputational damage.", 
      icon: "dollar" 
    },
    { 
      title: "Compliance Requirements Are Increasing", 
      desc: "Global standards such as: NIST SP 800-57, PCI-DSS, GDPR, ISO 27001 require secure key storage and lifecycle management.", 
      icon: "file" 
    },
    { 
      title: "Software-Based Key Management Is Not Enough", 
      desc: "Traditional key storage systems cannot provide: Hardware-level isolation, Protection from insider threats, Tamper resistance.", 
      icon: "software" 
    }
  ],
  footer: "Only HSM-Based Key Management Solutions deliver true enterprise-grade protection."
};

export const processData = {
  tag: "PROCESS",
  title: "How PQC-Enabled HSM-Based Key Management Solutions Work",
  steps: [
    { title: "Step 1—Secure Key Generation Inside HSM", desc: "Keys are generated within FIPS-certified HSM hardware, ensuring zero exposure.", icon: "key" },
    { title: "Step 2—Hardware-Protected Key Storage", desc: "Keys are stored in tamper-resistant environments, preventing extraction.", icon: "box" },
    { title: "Step 3—Policy-Based Access Control", desc: "Access is managed using role-based permissions and authentication controls.", icon: "shield" },
    { title: "Step 4—Key Lifecycle Management", desc: "Keys are securely rotated, revoked, and managed throughout their lifecycle.", icon: "refresh" }
  ],
  howTo: "HSM-based key management works by generating keys within secure hardware, storing them in tamper-resistant environments, enforcing strict access policies, and managing the full lifecycle, including rotation, expiration, and revocation."
};

export const featuresData = {
  tag: "FEATURES",
  title: "Key Features of Quantum Vault HSM Platform",
  cards: [
    { title: "Hardware-Level Key Protection", desc: "Keys remain inside HSM boundaries and are never exposed externally.", icon: "shield" },
    { title: "Centralised Key Lifecycle Management", desc: "Manage key creation, rotation, expiration, and revocation from one platform.", icon: "refresh" },
    { title: "Role-Based Access Control (RBAC)", desc: "Control who can access and use keys with granular permissions.", icon: "users" },
    { title: "Secure Cryptographic Operations", desc: "Perform encryption, decryption, and signing within secure hardware.", icon: "lock" },
    { title: "Multi-Cloud & Hybrid Integration", desc: "Integrates seamlessly with AWS, Azure, GCP, and on-prem systems.", icon: "cloud" },
    { title: "Compliance-Ready Architecture", desc: "Designed to meet FIPS 140-2, PCI-DSS, GDPR, and ISO 27001 requirements.", icon: "file" }
  ]
};

export const differentiatorData = {
  tag: "DIFFERENTIATOR",
  title: "What Makes Quantum Vault Different",
  description: "Most organisations rely on software-based key management systems or fragmented cloud-native tools. While these approaches provide basic functionality, they lack the security, control, and compliance required for enterprise environments. HSM-Based Key Management Solutions like Quantum Vault offer a fundamentally different approach by securing cryptographic keys within dedicated hardware.",
  cards: [
    { title: "Hardware vs Software Key Management", desc: "Software-based systems store keys in application memory or cloud environments, making them vulnerable to attacks. Quantum Vault ensures keys are generated and stored within HSMs, eliminating exposure risk." },
    { title: "Centralised vs Fragmented Control", desc: "Traditional systems often result in multiple key stores across environments. Quantum Vault provides a unified Enterprise HSM Key Management platform with centralised visibility and governance." },
    { title: "Compliance-First Architecture", desc: "Unlike generic key management tools, Quantum Vault is designed to meet strict regulatory standards from the ground up, including PCI-DSS, ISO 27001, and NIST." },
    { title: "Scalable Enterprise Deployment", desc: "Quantum Vault supports large-scale environments with thousands of keys, multiple integrations, and consistent policy enforcement across systems." }
  ]
};

export const protectionData = {
  tag: "PROTECTION",
  title: "Key Risks We Prevent",
  risks: [
    { title: "Key Exposure & Data Breaches", desc: "Unprotected keys can lead to full system compromise.", icon: "warning" },
    { title: "Insider Misuse", desc: "Unauthorised access by internal users can compromise sensitive data.", icon: "user-slash" },
    { title: "Weak Key Storage", desc: "Software-based storage increases vulnerability to attacks.", icon: "lock-open" },
    { title: "Compliance Violations", desc: "Improper key handling leads to regulatory penalties.", icon: "gavel" },
    { title: "Encryption Failure", desc: "Compromised keys render encryption useless.", icon: "unlocked" }
  ]
};

export const industriesData = {
  tag: "INDUSTRIES",
  title: "Industries We Protect",
  description: "SecureDApp provides hardware-backed key management solutions tailored to the specific security and compliance needs of critical industries.",
  industries: [
    { title: "Financial Institutions & Banks", desc: "Secure transactions and protect sensitive financial data.", icon: "university" },
    { title: "Cloud & SaaS Providers", desc: "Ensure encryption and key control across cloud environments.", icon: "cloud" },
    { title: "Healthcare Systems", desc: "Protect patient data and meet compliance requirements.", icon: "heartbeat" },
    { title: "Government & Defense", desc: "Secure classified and mission-critical information.", icon: "shield" },
    { title: "Enterprise IT Infrastructure", desc: "Protect internal systems, applications, and communications.", icon: "server" }
  ]
};

export const processFlowData = {
  tag: "PROCESS",
  title: "Our End-to-End Key Management Process",
  steps: [
    { title: "Asset Discovery & Key Mapping", desc: "Identify and map all cryptographic assets.", icon: "search" },
    { title: "Secure Key Generation", desc: "Generate keys within HSM hardware.", icon: "key" },
    { title: "Key Storage & Access Control", desc: "Store keys securely and enforce strict access policies.", icon: "box" },
    { title: "Lifecycle Management", desc: "Rotate, revoke, and manage keys continuously.", icon: "sync" },
    { title: "Compliance Reporting", desc: "Generate audit-ready reports for regulatory requirements.", icon: "chart-bar" }
  ]
};

export const technologyData = {
  tag: "TECHNOLOGY",
  title: "Technology Powering Quantum Vault",
  cards: [
    { title: "FIPS 140-2 Certified HSM Infrastructure", desc: "Hardware-level security that meets the highest global standards.", icon: "shield" },
    { title: "Secure Key Management Architecture", desc: "Designed for scalability and high availability in enterprise environments.", icon: "key" },
    { title: "Multi-Cloud Deployment Support", desc: "Works seamlessly across AWS, Azure, GCP, and hybrid infrastructures.", icon: "cloud" },
    { title: "Enterprise Integration (SIEM, IAM, APIs)", desc: "Easily connects with your existing security and identity ecosystem.", icon: "plug" }
  ],
  standardsTitle: "Cryptographic Standards and Algorithms Supported",
  standardsDesc: "Quantum Vault supports industry-standard cryptographic algorithms required for secure enterprise operations.",
  standards: [
    { text: "AES (Advanced Encryption Standard)" },
    { text: "RSA (Rivest-Shamir-Adleman)" },
    { text: "ECC (Elliptic Curve Cryptography)" },
    { text: "SHA-2 and SHA-3 hashing algorithms" },
    { text: "TLS/SSL key management" }
  ],
  footerNote: "These standards are widely used across financial systems, cloud platforms, and enterprise security architectures, ensuring compatibility and compliance."
};

export const caseStudiesData = {
  tag: "CASE STUDIES",
  studies: [
    {
      title: "Case Study—Strengthening Security with HSM-Based Key Management Solutions",
      challenge: "A financial services organization was using a mix of cloud-native and application-level key storage mechanisms across its infrastructure. While encryption was implemented, the keys were stored in software environments with inconsistent access controls.",
      approach: "Quantum Vault implemented HSM-Based Key Management Solutions to standardize and secure cryptographic key handling across the organization.",
      steps: [
        "Migrating high-sensitivity keys into HSM-backed infrastructure",
        "Enforcing strict role-based access control policies",
        "Automating key lifecycle processes including rotation and revocation",
        "Establishing centralized visibility into key usage and audit logs"
      ],
      outcomes: [
        "Reduced unnecessary access to sensitive cryptographic keys",
        "Improved audit readiness with centralized control and logging",
        "Achieved consistent key lifecycle management across systems",
        "Strengthened compliance alignment with industry standards"
      ],
      cta: "Explore HSM-Based Key Management Solutions \u2192"
    },
    {
      title: "Case Study—Scaling Enterprise HSM Key Management Across Multi-Cloud Environments",
      challenge: "A SaaS company operating across AWS and Azure experienced rapid growth, resulting in fragmented key management practices. Different teams managed encryption keys independently, leading to inconsistent security controls.",
      approach: "Quantum Vault deployed a centralized Enterprise HSM Key Management platform to unify key control across multi-cloud environments.",
      steps: [
        "Centralizing key storage using HSM-backed infrastructure",
        "Standardizing access control policies across cloud platforms",
        "Integrating with existing cloud services through secure APIs",
        "Automating key lifecycle management processes"
      ],
      outcomes: [
        "Improved visibility into key usage and ownership",
        "Reduced duplication and inconsistency across systems",
        "Simplified compliance reporting through centralized management",
        "Enhanced control over key lifecycle and access policies"
      ],
      cta: "See How Enterprise HSM Key Management Works \u2192"
    }
  ]
};

export const comparisonData = {
  tag: "COMPARISON",
  title: "How Quantum Vault Compares",
  rows: [
    { feature: "Hardware Security", vault: "check", software: "x", manual: "x" },
    { feature: "Key Lifecycle Management", vault: "check", software: "warning", manual: "x" },
    { feature: "Compliance Ready", vault: "check", software: "warning", manual: "x" },
    { feature: "Zero Key Exposure", vault: "check", software: "x", manual: "x" }
  ]
};

export const benefitsData = {
  tag: "BENEFITS",
  title: "Benefits of HSM-Based Key Management Solutions",
  benefits: [
    { title: "Prevent Data Breaches at the Root", desc: "Protect keys to secure all encrypted data.", icon: "shield" },
    { title: "Ensure Regulatory Compliance", desc: "Meet global security standards with ease.", icon: "file-alt" },
    { title: "Protect Business Reputation", desc: "Avoid trust loss caused by security failures.", icon: "building" },
    { title: "Reduce Security Risks", desc: "Minimize exposure and operational vulnerabilities.", icon: "exclamation-triangle" }
  ]
};

export const timingData = {
  tag: "TIMING",
  title: "When Should You Implement HSM-Based Key Management Solutions?",
  subtitle: "Organizations should adopt Enterprise HSM Key Management when:",
  list: [
    "Handling sensitive financial or customer data",
    "Operating in regulated industries (banking, healthcare, government)",
    "Managing encryption keys across multiple environments",
    "Scaling infrastructure across cloud and on-prem systems",
    "Preparing for compliance audits"
  ],
  footer: "Early adoption reduces long-term risk and simplifies security operations."
};

export const integrationData = {
  tag: "INTEGRATIONS",
  title: "Seamless Integration with Your Security Stack",
  items: [
    { title: "SIEM Integration (Logging & Audit)", icon: "file-alt" },
    { title: "IAM System Integration", icon: "users" },
    { title: "REST APIs & Webhooks", icon: "code" },
    { title: "Multi-Cloud Support", icon: "cloud" }
  ]
};

export const pricingData = {
  tag: "PRICING",
  title: "Flexible Engagement Models",
  plans: [
    { name: "Starter", subtitle: "For Small Teams", buttonText: "Get Started", popular: false },
    { name: "Professional", subtitle: "For Growing Enterprises", buttonText: "Get Started", popular: true },
    { name: "Enterprise", subtitle: "For Large Organizations", buttonText: "Contact Sales", popular: false }
  ],
  footerText: "Get a Custom Quote \u2192"
};

export const secureTodayData = {
  title: "Start Securing Your Keys Today",
  description: "Quantum Vault delivers Enterprise HSM Key Management that eliminates key exposure, ensures compliance, and protects your most critical assets.",
  highlights: [
    { text: "Setup in 24 hours", icon: "clock" },
    { text: "No long-term commitment", icon: "bolt" },
    { text: "Enterprise-ready infrastructure", icon: "circle" }
  ],
  trustedTitle: "Trusted for Enterprise Key Security",
  trustedSub: "Quantum Vault is designed for organizations that require:",
  trustedList: [
    "High-assurance cryptographic key protection",
    "Compliance with global security standards",
    "Scalable infrastructure for growing environments",
    "Consistent key governance across systems"
  ],
  footer: "Used across industries including finance, SaaS, and enterprise IT environments.",
  buttons: [
    { text: "Book a Free Demo", primary: true },
    { text: "Talk to a Security Expert", primary: false },
    { text: "Download Security Report", primary: false, outline: true }
  ]
};

export const faqData = {
  tag: "FAQ",
  title: "Frequently Asked Questions",
  faqs: [
    { q: "What is HSM-based key management?", a: "HSM-based key management uses hardware security modules to securely generate, store, and manage cryptographic keys within tamper-resistant environments." },
    { q: "How does enterprise HSM key management work?", a: "It works by generating keys inside secure hardware, enforcing access controls, and managing key lifecycle processes such as rotation and revocation." },
    { q: "Why is HSM better than software key management?", a: "HSMs provide hardware-level security, preventing key extraction and ensuring stronger protection than software-based systems." },
    { q: "What industries need HSM key management?", a: "Industries such as banking, cloud computing, healthcare, and government require HSM-based key protection." },
    { q: "Is HSM required for compliance?", a: "Yes, standards like PCI-DSS, GDPR, and NIST recommend or require secure hardware-based key management." },
    { q: "What is the role of Hardware Security Modules (HSMs) in key management?", a: "Hardware Security Modules (HSMs) play a critical role in key management by providing a secure, tamper-resistant environment for generating, storing, and using cryptographic keys. They ensure that keys never leave the hardware boundary and protect against unauthorized access, making them essential for enterprise-grade encryption and security." },
    { q: "How does HSM-based key management improve encryption security?", a: "HSM-based key management improves encryption security by isolating cryptographic keys within secure hardware, preventing exposure through software vulnerabilities. It ensures all encryption, decryption, and signing operations occur inside the HSM, significantly reducing the risk of key theft and strengthening overall data protection." },
    { q: "What is key lifecycle management in HSM systems?", a: "Key lifecycle management refers to the complete process of managing cryptographic keys, including generation, distribution, usage, rotation, expiration, and revocation. In HSM-based systems, this lifecycle is securely controlled within hardware, ensuring keys remain protected throughout their entire lifespan." },
    { q: "Can HSM-based key management support multi-cloud environments?", a: "Yes, enterprise HSM key management solutions are designed to support multi-cloud and hybrid environments. They integrate with major cloud providers like AWS, Azure, and Google Cloud, allowing organizations to maintain centralized control over encryption keys across distributed infrastructures." },
    { q: "What compliance standards require HSM-based key management?", a: "Several global compliance standards recommend or require HSM-based key management, including PCI-DSS, GDPR, ISO 27001, and NIST guidelines. These regulations emphasize secure key storage, access control, and auditability, which HSMs are specifically designed to provide." },
    { q: "What is the difference between HSM and KMS (Key Management Service)?", a: "An HSM is a physical hardware device that provides tamper-resistant key storage and cryptographic processing, while a Key Management Service (KMS) is typically a software or cloud-based system for managing keys. HSMs offer higher security assurance by ensuring keys are never exposed outside secure hardware environments." },
    { q: "How are cryptographic keys protected inside an HSM?", a: "Cryptographic keys inside an HSM are protected using hardware-level encryption, secure memory, and tamper-detection mechanisms. If unauthorized access is attempted, the HSM can automatically erase keys to prevent compromise, ensuring maximum security against both physical and logical attacks." },
    { q: "What types of keys can be managed using HSM-based solutions?", a: "HSM-based key management solutions can manage various types of cryptographic keys, including symmetric keys (AES), asymmetric keys (RSA, ECC), TLS/SSL keys, API keys, and digital signing keys. This flexibility makes them suitable for enterprise, cloud, and financial applications." },
    { q: "How does HSM-based key management support digital signatures?", a: "HSM-based key management enables secure digital signatures by storing private signing keys in the HSM and performing signing operations within the hardware. This ensures the integrity and authenticity of transactions, documents, and communications without exposing sensitive keys." },
    { q: "Is HSM-based key management scalable for large enterprises?", a: "Yes, enterprise HSM key management solutions are designed for scalability, supporting thousands of keys and high transaction volumes. They can be deployed across multiple environments and integrated with enterprise systems, making them ideal for large-scale operations and growing infrastructure." }
  ]
};
