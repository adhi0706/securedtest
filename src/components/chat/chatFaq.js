// Simple FAQ/intents configuration for the in-page chat widget
// You can edit these to match SecureDApp FAQs and flows

export const quickReplies = [
  { id: "pricing", label: "Pricing" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const botReplies = {
  pricing:
    "Would you like to get an estimate or understand the cost structure for any of our security, audit, or platform solutions?",
  services:
    "SecureDApp offers Audit, Security, Regulatory Solutions, and Training & Education. Let me know which track you want to explore first.",
  contact:
    "# Contact Us\n\nMerchant Legal entity name: VETTEDCODE TECHNOLOGIES INDIA PRIVATE LIMITED\nRegistered Address: 235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar Bengaluru KARNATAKA 560038\nOperational Address: 235, 2nd and 3rd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Hoysala Nagar Bengaluru KARNATAKA 560038\nTelephone No: 9606015868\nE-Mail ID: hello@securedapp.in",
  default:
    "Hi, you’re chatting with the SecureDApp Team. Ask about smart-contract audits, SecureWatch coverage, or pricing—tap a quick reply or type your question.",
};

export const guidedFlow = {
  start: {
    message: "What are you looking for?",
    options: [
      { id: "security_audit", label: "Security Audit" },
      { id: "real_time_security", label: "Real time Security" },
      { id: "blockchain_forensic", label: "Blockchain Forensic" },
      { id: "kyc_aml", label: "KYC/AML" },
      { id: "decentralised_id", label: "Decentralised ID" },
      { id: "others", label: "Others" },
    ],
  },
  security_audit: {
    message: "We provide several audit services. Which one interests you?",
    options: [{ id: "smart_contract_audit", label: "Smart Contract Audit" }],
  },
  smart_contract_audit: {
    message:
      "Our Smart Contract Audits can include VAPT. Is that a requirement?",
    options: [{ id: "vapt", label: "Yes, include VAPT" }],
  },
  vapt: {
    message:
      "We also offer an express API for automated checks. Would you like to know more?",
    options: [
      { id: "audit_express_api", label: "Tell me about Audit Express API" },
    ],
  },
  audit_express_api: {
    message:
      "Thank you for your interest. A team member will connect with you within the next 12 hours to discuss the Audit Express API.",
    end: true,
  },
  real_time_security: {
    message:
      "Thank you for your interest in Real time Security. A team member will connect with you within the next 12 hours.",
    end: true,
  },
  blockchain_forensic: {
    message:
      "Thank you for your interest in Blockchain Forensics. A team member will connect with you within the next 12 hours.",
    end: true,
  },
  kyc_aml: {
    message:
      "Thank you for your interest in KYC/AML services. A team member will connect with you within the next 12 hours.",
    end: true,
  },
  decentralised_id: {
    message:
      "Thank you for your interest in Decentralised ID. A team member will connect with you within the next 12 hours.",
    end: true,
  },
  others: {
    message:
      "Please drop your requirement in brief here, and the team will get back to you.",
    switchToFreeText: true,
  },
};