import React from "react";
import Image from "next/image";
import SectionTitle from "../../../components/common/SectionTitle";

const hows = [
  {
    title: "Analyzing the Project Requirements",
    desc: "We start by deeply understanding your project's goals, functionalities, and potential areas of vulnerability to tailor our audit approach.",
  },
  {
    title: "Review & Auditing the Smart Contracts",
    desc: "Our team meticulously reviews and audits the smart contract code, scrutinizing it for security risks, inefficiencies, and potential flaws",
  },
  {
    title: "Reporting the Findings",
    desc: "After the audit, we compile a comprehensive report detailing our findings, including any issues identified and recommendations for addressing them",
  },
  {
    title: "Publicizing the Audit Report",
    desc: "To foster transparency and trust within the community, we make the audit report publicly available, showcasing our commitment to security and quality.",
  },
];

const HowCard = ({ title, desc }) => {
  return (
    <div className="how-card">
      <div className="how-card-title">{title}</div>
      <div className="how-card-desc">{desc}</div>
    </div>
  );
};

const HowItWorks = () => (
  <div className="how-it-works">
    <SectionTitle
      name="Know how"
      title="How it works"
      description="A Peek Into Our Audit Process"
    />
    <div className="how-cards">
      {hows.map((how) => {
        return <HowCard title={how.title} desc={how.desc} />;
      })}
    </div>
  </div>
);

export default HowItWorks;
