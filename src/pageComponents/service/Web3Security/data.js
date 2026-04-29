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
      q: "What is Web3 security?",
      a: "Web3 security refers to the methods and technologies used to protect decentralized applications (dApps), smart contracts, and other blockchain-based assets from vulnerabilities and cyber threats.",
    },
    {
      q: "Why is Web3 security important?",
      a: "Web3 security is crucial for protecting assets and transactions on decentralized networks, preventing unauthorized access, and ensuring the integrity of blockchain applications.",
    },
    {
      q: "What are common threats in Web3?",
      a: "Common threats include smart contract vulnerabilities, phishing attacks, private key compromises, and decentralized finance (DeFi) protocol exploits.",
    },
    {
      q: "What are DeFi security audits?",
      a: "DeFi security audits focus on decentralized protocols, evaluating their smart contracts and overall security to protect against risks like exploits and vulnerabilities.",
    },
    {
      q: "What are the benefits of crypto security services?",
      a: "Crypto security services protect cryptocurrency transactions and assets against hacking, fraud, and theft.",
    },
  ],
];

export const technologies = [
  {
    header: "Blockchain",
    description:
      "A blockchain is a digital ledger spread across a network of computers with no central control. It keeps track of transactions by adding new data blocks to the chain. These blocks are permanent and can't be changed. When this happens, every computer on the network gets an update. This setup means no single weak spot could bring down the whole system.",
    image: "flower",
  },
  {
    header: "Tokens",
    description:
      "Digital assets and tokens are broad classes of items of value that exist only in digital form. They include cryptocurrencies and central bank digital currencies, non-fungible tokens (NFTs), and tokenized versions of physical assets like art or tickets to concerts and sporting events.",
    image: "box",
  },
  {
    header: "Smart Contracts",
    description:
      "Smart contracts are simply self-executing agreements when predefined conditions are met, like terms agreed between a buyer and a seller. Such contracts are irrevocably encoded on a blockchain and, hence, reliable for integrity.",
    image: "pentagon-1",
  },
];

export const services = [
  {
    header: "Blockchain Security Audit",
    description:
      "A source code and protocol review of a blockchain network is conducted to establish its security, integrity, and efficiency. Within this scope, a blockchain security audit investigates the general architecture, smart contracts, consensus mechanisms, and network configurations.",
  },
  {
    header: "Smart Contract Security Audit",
    description:
      "Specifically intended to audit the code of smart contracts—self-executing agreements with the terms written directly into lines of code. A smart contract security audit includes logic, security flaws, and possible vulnerabilities that can be exploited. This service identifies and solves problems before deployment, thus preventing financial losses and ensuring that smart contracts work as they should.",
  },
  {
    header: "DeFi Security Audit",
    description:
      "Assesses DeFi applications and platforms built on blockchain networks to provide access to financial services without intermediaries. The assessment includes the security of smart contracts, liquidity protocols, and other core components of DeFi platforms, ensuring no vulnerabilities can result in hacking, theft, or system failure.",
  },
  {
    header: "Web3 Penetration Testing",
    description:
      "Involve simulating cyberattacks against Web3 applications to identify any security weaknesses that must be addressed. Web3 penetration testing will also involve evaluating decentralized applications, smart contracts, and the infrastructure to detect vulnerabilities that malicious actors could use.",
  },
  {
    header: "Crypto Security Services",
    description:
      "Range from digital asset and cryptocurrency transaction protection services, including wallet protection, private key security, and encryption methods, to compliance with regulations. They help to avoid theft, fraud, unauthorized access, or any other possible threat to your cryptocurrency holdings and transactions.",
  },
];
