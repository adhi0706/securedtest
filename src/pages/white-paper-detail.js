import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import MetaTags from "../components/common/MetaTags";

// Mock data (should match the main white-paper.js)
const whitePaperData = [
  {
    id: 1,
    heading: "SecuredApp Vision & Mission",
    description: "An overview of our project's goals, vision, and mission for secure decentralized applications.",
    content: "SecuredApp aims to revolutionize decentralized security by providing robust solutions for dApps. Our mission is to empower developers and users with tools that ensure safety, transparency, and trust in the blockchain ecosystem.",
    date: "2025-07-01",
    author: "SecuredApp Team",
    image: "https://i.ibb.co/1XnNsXg/dapp.jpg",
    tags: "blockchain",
    url: "securedapp-vision-mission"
  },
  {
    id: 2,
    heading: "Technical Architecture",
    description: "A deep dive into the technical stack, smart contract security, and infrastructure.",
    content: "Our technical architecture leverages the latest in blockchain, smart contract auditing, and scalable infrastructure. We use automated and manual review processes to ensure every contract is secure and reliable.",
    date: "2025-07-10",
    author: "Lead Architect",
    image: "https://i.ibb.co/kSwjs3C/DAPP2.jpg",
    tags: "blockchain, web3",
    url: "technical-architecture"
  },
  {
    id: 3,
    heading: "Roadmap & Milestones",
    description: "Planned features, releases, and future development for SecuredApp.",
    content: "Our roadmap includes new security modules, expanded integrations, and community-driven features. Key milestones include the launch of our audit platform and the release of governance tools.",
    date: "2025-07-15",
    author: "Product Manager",
    image: "https://i.ibb.co/C2R6Vt0/DAPP2.jpg",
    tags: "web3",
    url: "roadmap-milestones"
  },
  {
    id: 4,
    heading: "Tokenomics & Incentives",
    description: "How our token model supports growth and security.",
    content: "SecuredApp's tokenomics are designed to incentivize security best practices and reward contributors. Our staking and rewards system ensures active participation and ongoing improvements.",
    date: "2025-07-18",
    author: "Economics Team",
    image: "https://i.ibb.co/kB8fw0v/3.jpg",
    tags: "token, finance",
    url: "tokenomics-incentives"
  },
  {
    id: 5,
    heading: "Compliance & Legal",
    description: "Ensuring regulatory compliance and legal soundness.",
    content: "We work closely with legal experts to ensure our platform meets global compliance standards. Our white paper outlines the steps taken to adhere to regulations and protect user interests.",
    date: "2025-07-20",
    author: "Legal Advisor",
    image: "https://i.ibb.co/1XnNsXg/dapp.jpg",
    tags: "legal",
    url: "compliance-legal"
  },
  {
    id: 6,
    heading: "Security Audits",
    description: "Our approach to smart contract and platform security audits.",
    content: "Security audits are at the core of SecuredApp. We employ both automated tools and expert reviewers to identify vulnerabilities and ensure robust protection for all users.",
    date: "2025-07-22",
    author: "Security Team",
    image: "https://i.ibb.co/kSwjs3C/DAPP2.jpg",
    tags: "blockchain, web3",
    url: "security-audits"
  },
  {
    id: 7,
    heading: "Community & Governance",
    description: "How our community shapes the future of SecuredApp.",
    content: "Our governance model empowers the community to propose and vote on new features, ensuring that SecuredApp evolves to meet real-world needs and remains transparent.",
    date: "2025-07-23",
    author: "Community Manager",
    image: "https://i.ibb.co/C2R6Vt0/DAPP2.jpg",
    tags: "web3",
    url: "community-governance"
  },
  {
    id: 8,
    heading: "Integration & Partnerships",
    description: "Collaborations and integrations with other platforms.",
    content: "We actively seek partnerships with leading blockchain projects to expand our reach and enhance security. Integrations with DeFi, NFT, and identity platforms are ongoing.",
    date: "2025-07-24",
    author: "Partnerships Lead",
    image: "https://i.ibb.co/kB8fw0v/3.jpg",
    tags: "blockchain",
    url: "integration-partnerships"
  },
  {
    id: 9,
    heading: "Future Innovations",
    description: "Upcoming features and innovations in our ecosystem.",
    content: "SecuredApp is committed to continuous innovation. Our future plans include AI-powered security tools, cross-chain compatibility, and advanced analytics for dApp developers.",
    date: "2025-07-25",
    author: "Innovation Team",
    image: "https://i.ibb.co/1XnNsXg/dapp.jpg",
    tags: "token, finance",
    url: "future-innovations"
  }
];

export default function WhitePaperDetail() {
  const router = useRouter();
  const { url } = router.query; // Get the [url] param from the route

  const paper = whitePaperData.find((item) => item.url === url);

  if (!paper) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>White Paper Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="white-paper-detail-container">
      <MetaTags
        data={{
          title: paper.heading,
          desc: paper.description,
          keywords: paper.tags,
          image: paper.image,
        }}
      />
      <Navbar />
      <div className="white-paper-detail">
        <h1>{paper.heading}</h1>
        <img src={paper.image} alt={paper.heading} style={{ maxWidth: "100%", marginBottom: "1rem" }} />
        <div className="white-paper-meta">
          <span>{paper.author}</span> | <span>{paper.date}</span>
        </div>
        <p style={{ fontWeight: "bold" }}>{paper.description}</p>
        <div style={{ marginTop: "1rem" }}>{paper.content}</div>
      </div>
      <Footer />
    </div>
  );
}
