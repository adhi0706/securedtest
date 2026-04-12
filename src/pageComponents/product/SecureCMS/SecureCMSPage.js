"use client";

import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import MetaTags from "../../../components/common/MetaTags";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import BookMeetCta from "../../../components/common/bookMeetCta";
import { faqsData, features, benefits, whyChoose } from "./data";

function SecureCMSPage() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="product-container">
      <MetaTags
        data={{
          title: "Secure CMS: Enterprise Consent Management System",
          desc: "Secure CMS orchestrates user consent and preferences with real-time syncing, adaptive policies, and audit-ready reporting across every customer touchpoint.",
          keywords:
            "Secure CMS, consent management system, privacy compliance, consent orchestration, GDPR consent, CCPA compliance, preference center, data privacy platform",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE CMS"
          title="Consent Intelligence for Privacy-First Teams"
          image={"/assets/images/ProductPages/ss/hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://cms.securedapp.io")
          }
        />
        <ProductCard
          header={"What is Secure CMS?"}
          description={
            "Secure CMS is a centralized consent orchestration platform that captures, stores, and distributes user privacy choices across channels. Policy builders and real-time syncing ensure every interaction reflects the latest consent state."
          }
          buttonText={"Talk to us"}
          image={"/assets/images/ProductPages/ss/1.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Features"}
            title={"What Makes Secure CMS a Leading Consent Platform?"}
            description={
              "Purpose-built modules keep privacy teams and builders aligned on honoring user choices, no matter where consent is collected."
            }
          />
          <FeatureCards featureData={features} />
        </div>
        <ProductWhyCard
          header={"Why Teams Choose Secure CMS"}
          descriptions={whyChoose}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/sw/2.webp"}
          imageAlt={"Secure CMS collaboration illustration"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"How Secure CMS Elevates Consent Operations"}
            description={
              "Accelerate user trust while maintaining rigorous privacy, compliance, and governance standards."
            }
          />
          <FeatureCards featureData={benefits} />
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

export default SecureCMSPage;
