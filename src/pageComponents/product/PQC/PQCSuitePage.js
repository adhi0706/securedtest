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

function PQCSuitePage() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="product-container">
      <MetaTags
        data={{
          title: "PQC Suite: Quantum-Safe Security Products",
          desc:
            "A comprehensive Post-Quantum Cryptography suite: APIs, SDKs, VPN, Chat, File Sharing, PKI, IoT, and HSM.",
          keywords:
            "PQC, post-quantum cryptography, Kyber, Dilithium, Falcon, SPHINCS+, quantum-safe, VPN, KMS, HSM, PKI, SSL, CA, IoT",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="PQC SUITE"
          title="Quantum-Safe Security for the Next Era"
          image={"/assets/images/ProductPages/ss/hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://securedapp.io/contact")
          }
        />
        <ProductCard
          header={"What is the PQC Suite?"}
          description={
            "The PQC Suite is a modular, end‑to‑end platform for adopting post‑quantum cryptography across your stack. It combines a managed API service, unified SDKs, and ready‑to‑use apps (File Sharing, Chat, VPN, Sign/PKI, IoT Device Manager, HSM/KMS) so teams can protect data in transit and at rest. Built on NIST‑track algorithms with hybrid modes, it enables phased migration, crypto‑agility, and enterprise controls without rewriting existing systems."
          }
          buttonText={"Talk to us"}
          image={"/assets/images/ProductPages/ss/1.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Features"}
            title={"Key Capabilities Across the PQC Suite"}
            description={
              "Drop-in APIs, unified SDKs, and infrastructure services to protect data in transit and at rest—today and against future quantum threats."
            }
          />
          <FeatureCards featureData={features} variant="key-capabilities" />
        </div>
        <ProductWhyCard
          header={"Why Teams Choose Our PQC Suite"}
          descriptions={whyChoose}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/sw/2.webp"}
          imageAlt={"PQC collaboration illustration"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"How PQC Future-Proofs Your Security"}
            description={
              "Adopt PQC with confidence using standards-based algorithms, enterprise controls, and an upgrade-ready architecture."
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

export default PQCSuitePage;
