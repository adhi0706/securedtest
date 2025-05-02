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
import { faqsData, services, technologies } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function Web3Security() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title:
            "Web 3.0 Security: Safeguard Crypto Assets & Blockchain Valuation",
          desc: "Protect your crypto assets with Web 3.0 security services. Get smart contract audits, DeFi protection, and accurate blockchain asset valuation.",
          keywords:
            "Web 3.0 security, crypto asset protection, blockchain valuation, smart contract audit, DeFi security, crypto security audit, decentralized finance audit, blockchain asset valuation, Web 3.0 cybersecurity",
          image: "/assets/images/ServicePages/s6-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="WEB 3.0 SECURITY"
          title="Real-time Prevention from Cyber Threats"
          image={"/assets/images/ServicePages/s6-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is Web 3.0 ?"}
          description={
            "Web 3.0 represents a decentralized internet that runs on blockchain technology and isn't controlled by one group. It's different from Web 2.0, where a handful of big companies call the shots. <br/><br/> Instead, Web3 works on shared records that are more transparent. As more parts of Web 3.0 come into play, a shift is expected to usher in an era where the use and access of the internet are governed by community-run networks, rather than centralized entities."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s6-1.png"}
        />
        <div>
          <SectionTitle
            name={"Technologies"}
            title="Major Technologies Supports Web 3.0"
          />
          <div className="how-it-works-section">
            {technologies.map((data) => {
              return (
                <HowItWorksCard
                  image={data.image}
                  imageAlt={data.imageAlt}
                  title={data.header}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
        <ProductWhyCard
          header={"Why Does Your Business Require Web 3.0 Security Services?"}
          descriptions={[
            `Did you know the Web3 ecosystem experienced total losses of $889.26 million in 2023? To safeguard your business from such significant risks, it's crucial to assess potential threats in Web 3.0 technologies, including:
            <br/><br/> • Smart Contract Hacking
            <br/><br/> • Account and Mobile Wallet Theft
            <br/><br/> • Insufficient Encryption and Verification for API Queries
            <br/><br/> • Inadequate Governance
            <br/><br/> • Privacy Concerns with Decentralized Data Storage
            <br/><br/> • DApp Vulnerabilities
            <br/><br/>As Web 3.0 advances, a thorough risk assessment is essential to safeguard your business and unlock its full potential.`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s6-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Services"}
            title="Explore the Range of Service Under Web 3.0 Security"
            description={""}
          />
          <FeatureCards featureData={services} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
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

export default Web3Security;
