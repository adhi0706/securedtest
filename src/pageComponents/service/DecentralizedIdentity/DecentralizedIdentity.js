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
import { faqsData, benefits, differenceData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function DecentralizedIdentity() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title:
            "Decentralized Identity (DID): Secure & Private Digital Identities",
          desc: "SecureDApp's Decentralized Identity solutions ensure privacy, data security, and seamless identity verification. Protect your digital identity now.",
          keywords:
            "decentralized identity, DID solutions, digital identity, privacy-first identities, blockchain identity, identity verification, secure digital identity, identity management, verifiable credentials, decentralized technology",
          image: "/assets/images/ServicePages/s10-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DECENTRALIZED IDENTITY (DID)"
          title="Decentralized Identity (DID) Solutions Offers Privacy-first Digital Identities"
          image={"/assets/images/ServicePages/s10-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is Decentralized Identity (DID)?"}
          description={
            "Decentralized identity is a method for identifying and authenticating users and entities without relying on a central authority. Traditional identity management verifies individuals through attributes like name, Social Security number, birth date, or email address, whereas decentralized identity leverages blockchain and other decentralized technologies. This approach minimizes the risk of data breaches by avoiding the concentration of sensitive information in a single, vulnerable location, thus enhancing overall security."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s10-1.webp"}
        />
        <div>
          <SectionTitle
            name={"Benefits"}
            title="Benefits of DID Technology"
            description={
              "At SecureDApp, we pride ourselves on delivering top-notch smart contract audit services at competitive prices. With years of experience in the industry, we are dedicated to ensuring the reliability and security of your smart contracts without breaking the ban"
            }
          />
          <div className="how-it-works-section">
            {benefits.map((data) => {
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
        <div className="features-section">
          <SectionTitle
            name={"Differences"}
            title={
              "Difference Between Decentralized Identity and Self-sovereign Identity"
            }
            description={
              "While decentralized identity and self-sovereign identity are often used interchangeably, self-sovereign identity specifically encompasses four key attributes:"
            }
          />
          <FeatureCards featureData={differenceData} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductCard
          header={"Decentralized Identity (DID) Applications Across Industrie"}
          description={`• Supply Chain Management
            <br/><br/>• Government and Voting Systems
            <br/><br/>• Education Credentials
            <br/><br/>• Digital Identity Verification
            <br/><br/>• Healthcare
            <br/><br/>• Decentralized Social Media`}
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s10-2.webp"}
        />
        <ProductWhyCard
          header={"Why Choose SecureDApp for Decentralized Identity Service?"}
          descriptions={[
            "SecureDApp stands out as a leading decentralized identity (DID) technology provider due to our unparalleled expertise in blockchain technology and commitment to security. <br/><br/> Our services incorporate advanced cryptographic techniques and decentralized protocols to deliver highly secure, tamper-proof digital identity solutions while ensuring compliance with the latest security standards.<br/><br/>We understand that each organization has different requirements, so we offer customizable DID solutions designed to fit various use cases and industry needs. Our user-centric approach ensures that our DID solutions are easy to use, and enhance the overall user experience.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s10-3.webp"}
          imageAlt={"Product 1 Why Image"}
        />

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

export default DecentralizedIdentity;
