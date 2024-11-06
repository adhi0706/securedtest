export const navItems = [
  {
    to: "",
    items: [
      { name: "Solidity Shield", to: "/solidity-shield" },
      { name: "Secure Watch", to: "/secure-watch" },
      { name: "Secure Trace", to: "/secure-trace" },
      { name: "Secure Pad", to: "/secure-pad" },
      { name: "Audit Express", to: "/auditexpress/home" },
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
          { name: "Web3 KYC", to: "/web3-kyc" },
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
      { name: "Blogs", to: "/blog" },
      { name: "About Us", to: "/about" },
      { name: "Our Authors", to: "/authors" },
      { name: "Media", to: "/media" },
    ],
    label: "Resources",
  },
  {
    to: "",
    items: [],
    label: "Pricing",
  },
];
