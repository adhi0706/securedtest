"use client";

import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import MetaTags from "../../../components/common/MetaTags";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import { faqsData, UsesData, benefits } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function SecureTracePage() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="product-container">
      {" "}
      <MetaTags
        data={{
          title: "SecureTrace: AI-Powered Blockchain Forensics & Compliance",
          desc: "SecureTrace simplifies blockchain investigations with AI-driven tools. Trace transactions, enhance security, and ensure compliance with comprehensive analysis.",
          keywords:
            "SecureTrace, blockchain forensics, AI-powered investigation, blockchain compliance, transaction tracing, forensic analysis, SecureDApp, blockchain security, AI in blockchain, digital asset recovery",
          image: "/assets/images/ProductPages/st/st-hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE TRACE"
          title="SecureTrace: Advanced AI for Blockchain Investigation & Forensic Analysis"
          image={"/assets/images/ProductPages/st/st-hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://securetrace.securedapp.io/")
          }
          isSecureTrace={true}
        />
        <ProductCard
          header={"What is Secure Trace"}
          description={
            "SecureTrace, a sophisticated blockchain forensic tool, harnesses advanced AI and machine learning (ML) technologies. It excels in post-transaction analysis and forensic thread tracing, with a standout feature-Auto-Trace. This feature automates the tracing of transactions, saving time and effort for the user. <br/><br/> SecureTrace analyzes transaction data using specialized blockchain forensic techniques, enhancing the detection of intricate patterns and potential vulnerabilities."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/st/1.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"What are the Benefits of SecureTrace?"}
          />
          <FeatureCards featureData={benefits} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductWhyCard
          header={"How SecureDApp Helps in Compliance and Streamlined Process"}
          descriptions={[
            "The demand for streamlined operations through automated compliance checks and security policy updates is greater than ever. SecureDApp meets this need by focusing on preemptive security measures that enhance regulatory compliance and optimize processes.",
            "With a commitment to proactive security, SecureDApp is instrumental in fostering a secure and reliable blockchain environment, which is crucial for the technology’s sustainable advancement.",
            "As an innovative and forward-thinking company, SecureDApp embodies a dynamic, humble, and challenge-driven approach, positioning itself as a leading force in blockchain security.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/st/2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Use Cases"}
            title="Explore the Use Cases of SecureTrace"
            description={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
          />
          <div className="how-it-works-section">
            {UsesData.map((data) => {
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

export default SecureTracePage;
