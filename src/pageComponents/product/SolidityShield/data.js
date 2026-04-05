import { FiRepeat, FiZap, FiDatabase, FiKey, FiUsers, FiClock, FiFileText, FiShield, FiAlertTriangle, FiCheckCircle, FiSearch, FiLayers, FiCpu, FiUpload, FiMaximize, FiAlertCircle, FiBell, FiBarChart2, FiDollarSign, FiImage, FiGlobe, FiActivity, FiColumns, FiSend, FiSettings, FiCode, FiGitBranch, FiShuffle, FiArchive, FiGithub, FiMonitor, FiX } from 'react-icons/fi';

export const heroData = {
  tag: "SMART CONTRACT SECURITY",
  title: "Smart Contract Security Audit Solution for Secure Blockchain Deployment",
  description: "Solidity Shield combines AI-driven analysis with deep manual auditing to detect vulnerabilities, validate contract logic, and ensure compliance with security standards. Trusted by 120+ organizations.",
  primaryCta: "Get Started",
  secondaryCta: "See How It Works",
  alerts: [
    { text: "Reentrancy detected on Contract 0x7a3...", level: "Critical", iconColor: "#ff4d4f" },
    { text: "Unusual token flow: 12,400 ETH moved", level: "High", iconColor: "#ff8c00" },
    { text: "Governance proposal anomaly flagged", level: "Medium", iconColor: "#ffd700" }
  ]
};

export const threatsData = {
  tag: "THREATS",
  title: "The Growing Threat Landscape Facing Smart Contracts",
  description: "Smart contract vulnerabilities continue to be one of the leading causes of financial loss in blockchain ecosystems. As decentralized applications scale, attackers target flaws in contract logic rather than infrastructure weaknesses.",
  threats: [
    {
      title: "Reentrancy Exploits",
      desc: "Draining funds through recursive calls before state updates complete.",
      icon: <FiRepeat size={28} />
    },
    {
      title: "Flash Loan Attacks",
      desc: "Manipulating protocol logic within a single transaction for profit.",
      icon: <FiZap size={28} />
    },
    {
      title: "Oracle Manipulation",
      desc: "Affecting pricing mechanisms by exploiting external data feeds.",
      icon: <FiDatabase size={28} />
    },
    {
      title: "Access Control Flaws",
      desc: "Exposing administrative privileges through improper permission logic.",
      icon: <FiKey size={28} />
    }
  ],
  footerLink: "See How We Secure Smart Contracts"
};

export const fundamentalsData = {
  tag: "FUNDAMENTALS",
  leftColumn: {
    title: "What Is a Smart Contract?",
    contentLine1: "A smart contract is a digital agreement stored on a blockchain network that executes automatically when predefined conditions are met. These contracts encode the terms between parties directly into code, removing the need for intermediaries.",
    contentLine2: "Operating on decentralized infrastructure, smart contracts ensure outcomes are executed consistently, transparently, and without manual intervention. They are widely used across DeFi, NFTs, gaming, and enterprise blockchain applications.",
    items: [
      { text: "Who can interact with the contract", icon: <FiUsers /> },
      { text: "When interactions can occur", icon: <FiClock /> },
      { text: "What inputs produce what outputs", icon: <FiRepeat /> }
    ]
  },
  rightColumn: {
    title: "What Is Smart Contract Security & Auditing?",
    content: "Smart contract auditing is the process of reviewing, testing, and validating blockchain code to identify vulnerabilities, logic flaws, and security risks before deployment. Unlike traditional testing, auditing focuses on adversarial scenarios.",
    items: [
      { text: "Detects vulnerabilities before deployment", icon: <FiSearch /> },
      { text: "Validates execution logic and contract behavior", icon: <FiFileText /> },
      { text: "Simulates real-world attack scenarios", icon: <FiLayers /> },
      { text: "Reviews permissions and governance structures", icon: <FiShield /> },
      { text: "Provides actionable remediation guidance", icon: <FiCheckCircle /> }
    ]
  }
};

export const optionalSectionData = {
  title: "Why Smart Contract Security Is No Longer Optional",
  cards: [
    {
      title: "The Cost of Undetected Vulnerabilities",
      desc: "A single overlooked flaw can result in complete loss of funds. Blockchain transactions are irreversible, making prevention the only viable defense.",
      icon: <span className="text-[#00ff88] text-2xl font-bold">$</span>
    },
    {
      title: "Regulatory and Business Requirements",
      desc: "Organizations are increasingly expected to demonstrate security readiness. Audited contracts improve compliance posture and investor confidence.",
      icon: <FiLayers className="text-[#00ff88] text-2xl" />
    },
    {
      title: "Traditional Testing Is Not Enough",
      desc: "Functional testing validates expected behavior, but does not account for malicious interactions. Smart contract security requires specialized adversarial analysis.",
      icon: <FiShield className="text-[#00ff88] text-2xl" />
    }
  ],
  footerLink: "Download Smart Contract Security Checklist"
};

export const platformData = {
  tag: "PLATFORM",
  title: "What Is Solidity Shield?",
  description1: "Solidity Shield is an AI-powered smart contract security solution developed to enhance the reliability and safety of Ethereum-based contracts.",
  description2: "It uses advanced algorithms and machine learning models to detect more than 150 types of vulnerabilities, including reentrancy issues, unchecked transfers, and logic flaws. By combining automated scanning with manual expert review, it provides a comprehensive security assessment.",
  stats: [
    { value: "150+", label: "Vulnerability Types Detected", icon: <FiCpu size={24} /> },
    { value: "120+", label: "Organizations Protected", icon: <FiShield size={24} /> },
    { value: "99.9%", label: "Detection Accuracy", icon: <FiSearch size={24} /> }
  ]
};

export const processData = {
  tag: "PROCESS",
  title: "How Solidity Shield Works",
  steps: [
    { num: "01", title: "Code Intake & Scope Definition", desc: "Review of contract specifications, architecture, and intended behavior.", icon: <FiUpload size={24} /> },
    { num: "02", title: "Automated Vulnerability Detection", desc: "AI-powered tools scan the codebase to identify known vulnerability patterns.", icon: <FiMaximize size={24} /> },
    { num: "03", title: "Manual Line-by-Line Review", desc: "Security experts conduct detailed analysis to uncover complex logic flaws.", icon: <FiSearch size={24} /> },
    { num: "04", title: "Attack Simulation & Testing", desc: "Simulated attack scenarios executed to evaluate real-world behavior.", icon: <FiZap size={24} /> },
    { num: "05", title: "Reporting & Remediation", desc: "Detailed reports with severity classification and actionable recommendations.", icon: <FiFileText size={24} /> },
    { num: "06", title: "Revalidation & Final Approval", desc: "Contracts re-tested after fixes to ensure all vulnerabilities are resolved.", icon: <FiCheckCircle size={24} /> }
  ]
};

export const keyFeaturesData = {
  tag: "FEATURES",
  title: "Key Features of Solidity Shield",
  features: [
    { title: "Advanced Vulnerability Detection", desc: "Identifies over 150 types of vulnerabilities across smart contract code.", icon: <FiAlertCircle size={24} /> },
    { title: "AI-Powered Analysis", desc: "Leverages machine learning to detect patterns beyond rule-based systems.", icon: <FiCpu size={24} /> },
    { title: "Real-Time Feedback", desc: "Provides instant notifications during development for faster issue resolution.", icon: <FiBell size={24} /> },
    { title: "Detailed Reporting Dashboard", desc: "Offers visual, easy-to-understand reports with actionable insights.", icon: <FiBarChart2 size={24} /> },
    { title: "ERC Standard Compatibility", desc: "Ensures seamless integration within blockchain ecosystems.", icon: <FiLayers size={24} /> },
    { title: "Automated + Manual Audits", desc: "Covers both common vulnerabilities and complex attack vectors.", icon: <FiSearch size={24} /> }
  ]
};

export const vulnerabilitiesData = {
  tag: "PROTECTION",
  title: "Vulnerabilities We Detect & Prevent",
  items: [
    { title: "Reentrancy Attacks", desc: "Recursive execution allowing repeated withdrawals before balance updates.", icon: <FiRepeat size={24} /> },
    { title: "Unchecked Transfers", desc: "Failures in validating transaction outcomes leading to inconsistencies.", icon: <FiSend size={24} /> },
    { title: "Access Control Issues", desc: "Improper permissions exposing sensitive functions.", icon: <FiKey size={24} /> },
    { title: "Oracle Manipulation", desc: "Exploitation of external data inputs affecting contract outcomes.", icon: <FiDatabase size={24} /> },
    { title: "Flash Loan Attack Paths", desc: "Multi-step attacks exploiting protocol logic within a single transaction.", icon: <FiZap size={24} /> },
    { title: "Business Logic Flaws", desc: "Design-level issues exploitable despite correct code execution.", icon: <FiSettings size={24} /> }
  ]
};

export const industriesData = {
  tag: "INDUSTRIES",
  title: "Industries We Protect with Smart Contract Auditing",
  items: [
    { title: "DeFi Protocols", desc: "Secure handling of large volumes of assets and complex logic.", icon: <FiDollarSign size={24} /> },
    { title: "NFT Platforms", desc: "Protection against unauthorized minting and ownership manipulation.", icon: <FiImage size={24} /> },
    { title: "Crypto Exchanges", desc: "Secure execution of trading and settlement logic.", icon: <FiRepeat size={24} /> },
    { title: "Web3 Applications", desc: "Reliable smart contract behavior across multiple use cases.", icon: <FiGlobe size={24} /> },
    { title: "Enterprise Blockchain", desc: "Secure and predictable execution of business workflows.", icon: <FiActivity size={24} /> },
    { title: "Financial Institutions", desc: "Compliance, transparency, and risk mitigation in blockchain ops.", icon: <FiColumns size={24} /> }
  ]
};

export const methodologyData = {
  tag: "METHODOLOGY",
  title: "Our End-to-End Smart Contract Audit Methodology",
  items: [
    { title: "Source Code Review", desc: "Manual line-by-line review to understand architecture and identify vulnerabilities.", icon: <FiCode size={24} /> },
    { title: "Test Coverage Analysis", desc: "Evaluation of unit tests to ensure sufficient code coverage.", icon: <FiActivity size={24} /> },
    { title: "Static Analysis", desc: "Automated tools to detect known vulnerability patterns.", icon: <FiCpu size={24} /> },
    { title: "Symbolic Execution", desc: "Analysis of execution paths using SMTChecker and taint analysis.", icon: <FiGitBranch size={24} /> },
    { title: "Property-Based Testing", desc: "Fuzz tests and invariant testing to validate behavior under varied conditions.", icon: <FiShuffle size={24} /> },
    { title: "Best Practices Review", desc: "Assessment against industry standards for maintainability and security.", icon: <FiCheckCircle size={24} /> }
  ]
};

export const caseStudyData = {
  tag: "CASE STUDY",
  title: "How We Prevented a Critical Vulnerability",
  cards: [
    { title: "The Challenge", desc: "A blockchain project preparing for deployment had an undetected reentrancy vulnerability in its contract logic.", icon: <FiAlertTriangle size={24} className="text-[#00ff88]" /> },
    { title: "Our Detection Approach", desc: "Through manual review and simulation testing, the vulnerability was identified in a nested call sequence.", icon: <FiSearch size={24} className="text-[#00ff88]" /> },
    { title: "The Outcome", desc: "The issue was resolved before deployment, preventing potential financial loss and enabling a secure product launch.", icon: <FiCheckCircle size={24} className="text-[#00ff88]" /> }
  ],
  cta: "Read More Case Studies"
};

export const comparisonData = {
  title: "How Solidity Shield Compares",
  rows: [
    { label: "Vulnerability detection", ss: true, basic: false, manual: false },
    { label: "AI-assisted analysis", ss: true, basic: "x", manual: "x" },
    { label: "Attack simulation", ss: true, basic: "x", manual: false },
    { label: "Pre-deployment assurance", ss: true, basic: false, manual: false }
  ],
  cta: "See Why Teams Choose Solidity Shield"
};

export const benefitsData = {
  title: "Benefits of Choosing Solidity Shield",
  items: [
    { title: "Strong Vulnerability Detection", desc: "Covers a wide range of vulnerabilities to ensure robust security.", icon: <FiShield size={24} /> },
    { title: "Improved Code Quality", desc: "Identifies areas for optimization and reliability improvement.", icon: <FiCode size={24} /> },
    { title: "Faster Issue Resolution", desc: "Enables quick identification and fixing of vulnerabilities.", icon: <FiZap size={24} /> },
    { title: "Time Efficiency", desc: "Analyzes complex contracts rapidly, reducing development delays.", icon: <FiClock size={24} /> },
    { title: "Historical Report Access", desc: "Maintains a record of past audits for reference and compliance.", icon: <FiArchive size={24} /> },
    { title: "Scalable SaaS Model", desc: "Offers flexible pricing suitable for projects of all sizes.", icon: <FiMaximize size={24} /> }
  ]
};

export const workflowData = {
  title: "Seamless Integration with Your Development Workflow",
  cards: [
    { title: "GitHub & File Upload Support", desc: "Direct upload of contracts from repositories or local files.", icon: <FiGithub size={24} className="text-[#00ff88]" /> },
    { title: "Developer-Friendly Interface", desc: "Simplifies the auditing process with intuitive dashboards.", icon: <FiMonitor size={24} className="text-[#00ff88]" /> },
    { title: "API & Reporting Access", desc: "Easy access to audit results and insights.", icon: <FiBarChart2 size={24} className="text-[#00ff88]" /> }
  ]
};

export const pricingData = {
  tag: "PRICING",
  title: "Flexible Engagement Models",
  cta: "Get a Custom Quote →",
  cards: [
    { name: "Starter", subtitle: "For Early-Stage Projects", desc: "Basic auditing for smaller codebases", buttonLabel: "Get Started", highlight: false },
    { name: "Professional", badge: "Most Popular", subtitle: "For Growing Platforms", desc: "Comprehensive audits for complex contracts", buttonLabel: "Get Started", highlight: true },
    { name: "Enterprise", subtitle: "For Large-Scale Systems", desc: "Advanced auditing and continuous support", buttonLabel: "Contact Sales", highlight: false }
  ]
};

export const ctaData = {
  title: "Start Securing Your Smart Contracts Today",
  desc: "Smart contract vulnerabilities are preventable, but only before deployment. Solidity Shield ensures your contracts are secure, compliant, and ready for production.",
  buttons: [
    { label: "Get Started", type: "primary" },
    { label: "Talk to a Security Expert", type: "outline" },
    { label: "Download Security Checklist", type: "text" }
  ]
};

export const faqData = {
  tag: "FAQ",
  title: "Frequently Asked Questions",
  items: [
     { q: "What kind of smart contracts can be audited by Solidity Shield?", a: "Solidity Shield supports auditing of a wide range of Ethereum-based smart contracts, including DeFi protocols, NFT marketplaces, token contracts, DAOs, and complex multi-contract architectures. It evaluates not just individual contracts but also how they interact with each other." },
     { q: "How long does it typically take to receive an audit report?", a: "The timeline depends on the size and complexity of the smart contract. Smaller contracts may be audited within a few days, while larger DeFi systems can take one to two weeks. The process includes automated scanning, manual review, testing, and report preparation." },
     { q: "How do I get started with Solidity Shield's audit services?", a: "You can get started by uploading your smart contract through GitHub repositories or direct file submission. Once submitted, the audit scope is defined based on your project requirements. Teams can also opt for an initial consultation." },
     { q: "Does Solidity Shield provide guidance for fixing identified vulnerabilities?", a: "Yes, detailed audit reports include clear explanations of each vulnerability along with recommended fixes. The goal is not just to identify issues but to help development teams resolve them efficiently." },
     { q: "How can Solidity Shield help businesses protect their smart contract investments?", a: "Solidity Shield reduces risk by identifying vulnerabilities before deployment, ensuring contracts function securely under all conditions. This prevents financial losses, enhances user trust, and improves project credibility." },
     { q: "What types of vulnerabilities can Solidity Shield detect?", a: "Over 150 types including reentrancy attacks, unchecked transfers, access control issues, arithmetic errors, oracle manipulation, and business logic flaws." },
     { q: "Is automated scanning enough for smart contract security?", a: "Automated scanning identifies known patterns quickly but isn't sufficient alone. Solidity Shield combines automated tools with manual, expert-driven analysis for deeper coverage." },
     { q: "Can Solidity Shield audit complex DeFi protocols?", a: "Absolutely. We specialize in auditing highly complex logic typical in DeFi mechanisms, including AMMs, lending protocols, and liquidity pools." },
     { q: "What is included in the smart contract audit report?", a: "You receive a detailed report outlining the methodology, a severity-classified list of all findings alongside descriptions, and specific remediation steps." },
     { q: "Does Solidity Shield support compliance and regulatory requirements?", a: "Yes, our audits provide the documentation necessary to demonstrate that your contracts have undergone rigorous security testing in alignment with industry best practices." },
     { q: "What pricing plans does Solidity Shield offer?", a: "We offer three flexible tiers: Starter, Professional, and Enterprise, designed to cater to early-stage projects, growing platforms, and large-scale enterprise systems." },
     { q: "What is included in the Starter plan?", a: "The Starter plan includes basic automated scanning and an overview report, ideal for smaller codebases and initial security sanity checks." },
     { q: "How do the Professional and Enterprise plans differ?", a: "The Professional plan covers comprehensive manual and automated audits for complex contracts, whereas the Enterprise tier encompasses advanced, continuous support and dedicated security consultation." },
     { q: "Can I upgrade or customize my plan based on project requirements?", a: "Yes, we offer custom engagements. Our Enterprise tier can be fully customized to meet the unique architectural requirements of your project." },
     { q: "Does Solidity Shield offer support and integration features?", a: "Yes, our platform supports seamless integration with GitHub and CI/CD pipelines, allowing you to incorporate security scanning directly into your development workflow." }
  ]
};
