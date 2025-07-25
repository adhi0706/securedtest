"use client";

import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import ProductCard from "../../../components/productService/ProductCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import MetaTags from "../../../components/common/MetaTags";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import Benefits from "../sections/Benefits";
import { services, benefits, faqsData, offerings } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function ITGCService() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "Blockchain Identity Verification for Secure KYC & Compliance",
          desc: "Secure your business with Blockchain Identity Verification for KYC and compliance. Trusted by 120+ companies in DeFi, NFTs, and crypto exchanges.",
          keywords:
            "Blockchain Identity Verification, KYC, Compliance, Decentralized Finance, NFT Marketplaces, Cryptocurrency Exchanges",
          image: "/assets/images/ServicePages/s5-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
      <ProductServiceHero
  name={
    <>
      <span className="green-x">ITGC Compliance Solutions</span>
    </>
  }
  title="Secure Your IT Controls for Audits, Compliance and Business Resilience"
  image={"/assets/images/ServicePages/s10-hero.webp"}
  imgStyle={{ height: "300px", objectFit: "cover" }}
  service={true}
/>
        <ProductCard
          header={"What is ITGC Compliance ?"}
          description={
            "ITGC (Information Technology General Controls) refers to the essential set of policies, procedures, and safeguards implemented across an organisation’s IT environment. These controls are designed to ensure the confidentiality, integrity, and availability of data managed through information systems. By enhancing the reliability of systems and applications, ITGCs play a crucial role in ensuring the accuracy of financial reporting. They also help organisations meet audit standards and mitigate technology-related risks. <br/><br/>Core ITGC areas include access controls, which govern who can view or alter data; change management protocols to ensure secure system updates; and data backup and recovery measures to maintain continuity. Additionally, IT operations monitoring helps identify irregular activities, while logical and physical security protect systems from unauthorised access. Together, these controls form the backbone of IT compliance frameworks. Implementing and maintaining them is key for audit readiness, especially in regulated industries."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/itgc-2.png"}
        />
        
       <div className="px-4 lg:px-24 py-16">
  <SectionTitle
    name={"Services"}
    title={"Why ITGC Compliance is Essential ?"}
  />
  <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 lg:gap-6 max-w-4xl mx-auto mt-8">
    {services.map((service, index) => (
      <div 
        key={index}
        className="rounded-lg shadow-md border border-gray-200 p-3 lg:p-4 text-center hover:shadow-lg transition-shadow duration-300 lg:w-72 lg:flex-shrink-0"
      >
        <h3 className="text-sm lg:text-base mb-2 lg:mb-3 break-words">
          {service.header}
        </h3>
        <p className="leading-relaxed text-xs lg:text-sm break-words whitespace-normal">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>
        <div className="px-4 lg:px-24 py-16">
  <div className="max-w-4xl mx-auto text-left">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6 ">
      ITGC in Regulated Industries
    </h2>
    <p className="text-lg mb-8 leading-relaxed">
      Enterprises across Finance, Healthcare, Crypto, SaaS, and E-commerce face increasing scrutiny on internal IT controls. A compliant ITGC framework ensures you're prepared for:
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Sarbanes-Oxley (SOX) Audits</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• SOC 2 & ISO 27001 Certifications</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Risk-Based Regulatory Assessments</span>
          </li>
        </ul>
      </div>
    </div>
    <p className="text-lg mt-8 leading-relaxed">
      Enterprises across Finance, Healthcare, Crypto, SaaS, and E-commerce face increasing scrutiny on internal IT controls. A compliant ITGC framework ensures you're prepared for:
    </p>
  </div>
</div>

        <div className="px-4 lg:px-24 py-16">
  <div className="max-w-4xl mx-auto text-left">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6 ">
      What are ITGC Services?
    </h2>
    <p className="text-md mb-8 leading-relaxed">
      SecureDApp's ITGC Compliance Services are designed to access, enhance and automate your IT control environment. We help you:
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Conduct risk-based ITGC assessments</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Map controls to business processes</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Align with compliance frameworks (SOX, ISO, etc.)</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Automate evidence collection and reporting</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="">• Prepare for internal and external audits</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        <div className="px-4 lg:px-24 py-16">
  <div className="max-w-4xl mx-auto text-left">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6 ">
      Why Choose SecureDApp for ITGC Compliance?
    </h2>
    
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">• End-to-End ITGC Strategy</h3>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span>We build and operationalise customised control frameworks tailored to your IT landscape, whether on-premise or cloud-based.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">• Regulatory Alignment</h3>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span>We ensure your controls align with SOX, SOC 2, ISO 27001, and other compliance frameworks.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">• Expert-Led Audits</h3>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span>Our IT auditors and consultants provide pre-audit reviews, gap analysis, and remediation plans that align with best practices. In-house CISA, CISO and IT compliance experts to plan, execute and oversee the audit flow as per the guidelines of SEBI.</span>
          </li>
          <li className="flex items-start">
            <span>The audits mandated by SEBI, including the assessment of ITGCs, must typically be carried out by independent, certified external auditors who possess expertise in information systems security.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Certified Information Systems Auditor (CISA):</h3>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span>SecureDApp has in-house resource who is globally recognised for certification in information systems audit control, assurance, and security professionals, and is frequently specified or highly preferred by regulators like SEBI.</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">• Real-Time Reporting</h3>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start">
            <span>Gain visibility into IT control effectiveness and compliance posture with intuitive dashboards and monitoring tools.</span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</div>
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default ITGCService;
