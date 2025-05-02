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
import { faqsData, benefitsData, needData, securityAspectData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function RwaAudit() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "RWA Audit: Secure Your Real-World Assets on Blockchain",
          desc: "Ensure the security of your tokenized real-world assets with RWA audits. Gain transparency, compliance, and investor confidence on the blockchain.",
          keywords:
            "RWA audit, real-world asset audit, blockchain asset audit, tokenized asset security, blockchain compliance, asset tokenization audit",
          image: "/assets/images/ServicePages/s8-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="RWA AUDIT"
          title="Audit for Secure Blockchain Asset Valuation"
          image={"/assets/images/ServicePages/s8-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What are Real-world Assets?"}
          description={
            "Real-world assets (RWAs) are tangible assets that exist outside of the digital space, including bonds, real estate properties, commodities, and machinery. In the context of blockchain, RWAs refer to digital tokens representing these physical and traditional financial assets.<br/><br/>Tokenizing real-world assets involves converting them into security tokens on the blockchain, allowing them to be utilized in on-chain transactions. This process enables any valued asset to be tokenized and leveraged within the digital ecosystem."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s8-1.png"}
        />
        <ProductWhyCard
          header={"Real-World Assets Fit for Tokenization"}
          descriptions={[
            `• Real Estate
            <br/><br/>• Art and Collectables
            <br/><br/>• Commodities 
            <br/><br/>• Stocks and Securities
            <br/><br/>• Currencies
            <br/><br/>• Intellectual Property`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s8-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Benefits"}
            title="Benefits of RWA Tokenization"
          />
          <div className="how-it-works-section">
            {benefitsData.map((data) => {
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
          header={"What is RWA Audit?"}
          descriptions={[
            "RWA (Real World Asset) Audit comprehensively evaluates real-world assets tokenized on a blockchain platform. It assesses the underlying asset's value, the accuracy of the token representation, and the overall security and compliance of the tokenization process.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s8-3.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div className="features-section">
          <SectionTitle
            name={"The Need"}
            title={"Need of RWA Security Audit"}
            description={
              "The real-world asset tokenization market is expected to reach $30.1 trillion by 2034. With this in mind, now is the ideal time for early adopters and forward-thinking investors to explore the real-world asset tokenization audit and seize this unique business opportunity from the ground up. Businesses can get the benefit of the following:"
            }
          />
          <FeatureCards featureData={needData} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Assets Audit"}
            title={"Security Aspect of Tokenized Asset Audit"}
            description={
              "To safeguard tokenized assets and prevent unauthorized access, asset tokenization platforms must implement robust security measures :"
            }
          />
          <FeatureCards featureData={securityAspectData} />
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

export default RwaAudit;
