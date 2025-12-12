export const navItems = [
  {
    to: "",
    items: [
      { name: "Solidity Shield", to: "/solidity-shield" },
      { name: "Secure Watch", to: "/secure-watch" },
      { name: "Secure CMS (Consent)", to: "/secure-cms" },
      { name: "Audit Express", to: "/auditexpress/home" },
      { name: "Secure Trace", to: "/secure-trace" },
      { name: "Secure Pad", to: "/secure-pad" },
      { name: "PQC Suite", to: "/pqc" },
      { name: "SecureX-ID", to: "/web3-kyc" },
      {
        name: "SecureX DID",
        to: "https://securexdid.com",
        external: true,
      },
    ],
    label: "Product",
  },
  {
    to: "",
    items: [
      {
        title: "Audit",
        children: [
          { name: "Smart Contract Audit", to: "/smart-contract-audit" },
          { name: "Dapp Security Audit", to: "/dapp-security-audit" },
          { name: "Token Audit", to: "/token-audit" },
          { name: "RWA Audit", to: "/rwa-audit" },
        ],
      },
      {
        title: "Security",
        children: [
          { name: "Web3 Security", to: "/web3-security" },
          { name: "Blockchain Forensic", to: "/blockchain-forensic" },
        ],
      },
      {
        title: "Regulatory Solutions",
        children: [
          { name: "Crypto Compliance & AML", to: "/crypto-compliance-aml" },
          {
            name: "Decentralized Identity (DID)",
            to: "/decentralized-identity-did",
          },
          { name: "DApp Development", to: "/dapp-development" },
          { name: "NFTs Development", to: "/nfts-development" },
          { name: "DeFi Development", to: "/defi-development" },
          {
            name: "SOX Compliance",
            to: "/sox-compliance-sarbanes-oxley-compliance-audit",
          },
          { name: "ITGC Compliance", to: "/itgc-audit-services" },
        ],
      },
      {
        title: "Training & Education",
        children: [{ name: "LevelUp Academy", to: "/levelup-academy" }],
      },
    ],
    label: "Services",
  },
  {
    to: "",
    items: [
      { name: "Blogs", to: "https://securedapp.io/blog", external: true },
      { name: "About Us", to: "/about" },
      { name: "Our Authors", to: "/authors" },
      { name: "Media", to: "/media" },
      { name: "White Papers", to: "/white-paper" },
    ],
    label: "Resources",
  },
  {
    to: "",
    items: [],
    label: "Pricing",
  },
];
