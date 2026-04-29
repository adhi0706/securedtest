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
      q: "What happens if vulnerabilities are found during the audit?",
      a: `When vulnerabilities are identified, the audit team provides detailed recommendations for fixing the issues. After the necessary corrections are made, a follow-up audit may be conducted to ensure all problems have been resolved.`,
    },
    {
      q: "How much does a token audit cost?",
      a: "The cost of a token audit varies based on the complexity of the smart contract and the auditing firm’s pricing structure.",
    },
    {
      q: "Who performs the token audit?",
      a: "Token audits are conducted by specialized security firms or auditors with expertise in blockchain technology and smart contract development.",
    },
    {
      q: "Can the results of the token audit be shared publicly?",
      a: "Yes, many projects share the audit report with the public to build credibility and demonstrate their commitment to security.",
    },
    {
      q: "How often should a token audit be conducted?",
      a: `It’s recommended that a token audit be conducted whenever the smart contract is significantly updated or if the token will be listed on new exchanges.`,
    },
  ],
];

export const benefits = [
  {
    header: "Secure Funds",
    description: `Protect your assets and your investors from potential threats like DDoS attacks, reentrancy, overflows, and flash loan exploits.`,
    icon: "iii",
    image: "flower",
  },
  {
    header: "Performance Optimization Suggestions",
    description: `Audits identify and prevent vulnerabilities and enhance code efficiency for improved performance and resource utilization.`,
    icon: "iii",
    image: "box",
  },
  {
    header: "Greater Investor Confidence",
    description: `An audit provides solid assurance, boosting trust and confidence among potential investors in your token.`,
    icon: "iii",
    image: "feathers",
  },
  {
    header: "Safe Exchange Listings",
    description: `Exchanges prioritize their reputation and are cautious about adding tokens that could pose security risks. A thorough token audit serves as a crucial security endorsement for these platforms.`,
    icon: "iii",
    image: "pentagon-2",
  },
];

export const compliances = [
  {
    header: "ERC-20 Token",
    description: `• ERC-20 tokens are designed for the Ethereum blockchain, allowing for the minting and burning of tokens, which involves creating and destroying tokens. 
                  <br/><br/> • Tokens utilize arithmetic operations such as addition, subtraction, and multiplication, which we thoroughly audit to ensure accuracy.
                  <br/><br/> • As a fungible token standard, ERC-20 tokens are created, transferred, and managed through smart contracts on the Ethereum network. Their adherence to the ERC-20 standard facilitates easy trading on cryptocurrency exchanges.
                  <br/><br/> • ERC-20 tokens are especially susceptible to reentrancy attacks that exploit smart contract vulnerabilities, making audits more crucial.`,
  },
  {
    header: "ERC-721 Token",
    description: `• ERC-721 tokens can store metadata, including the token's name, description, and image, both on-chain and off-chain.
                  <br/><br/> • ERC-721 token audit verifies the accuracy and integrity of the data, ensuring it aligns with the token and is stored and accessed properly.
                  <br/><br/> • Tokens enable owners to approve other users' spending of their tokens.
                  <br/><br/> • The token audit identifies potential security vulnerabilities and risks in the token contract's code and confirms that the contract operates as intended and meets your project's goals.`,
  },
  {
    header: "ERC-1155 Token",
    description: `• ERC-1155 contracts are designed to manage multiple token balances efficiently, allowing for significant improvements in performance during batch transfers of various token types.
                  <br/><br/> • ERC-1155 token audits assess the contract's gas usage and overall efficiency, ensuring optimal performance even with a diverse range of token classes.
                  <br/><br/> • The ability to batch transfer and bundle multiple assets into a single smart contract makes ERC-1155 both cost-effective and capable of significantly reducing gas fees.`,
  },
  {
    header: "ERC-777 Token",
    description: `• ERC-777 is an advanced iteration of the ERC-20 standard designed to enhance efficiency in token transactions while maintaining backward compatibility.
                  <br/><br/> • Leverage well-regarded libraries and standards specifically developed for ERC-777 tokens to ensure robust security and performance. These libraries are regularly audited and updated to adhere to the latest security protocols.
                  <br/><br/> • Before deploying an ERC-777 token contract, audits are necessary to evaluate potential vulnerabilities, including reentrancy attacks, integer overflows, and unauthorized token transfers.`,
  },
];
