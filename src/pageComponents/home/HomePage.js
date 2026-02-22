"use client";

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import CTA from "./sections/CTA";
import FAQs from "../../components/common/FAQs";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Solutions from "./sections/solutions";
import Testimonials from "../../components/common/Testimonials";
import Features from "./sections/Features";
import Statitics from "./sections/Statistics";
import { reviews, faqHeaders, faqsData } from "./home.data";
import MetaTags from "../../components/common/MetaTags";
import dynamic from "next/dynamic";
import BrandLogos from "../../components/common/BrandLogos";
import BookMeetCta from "../../components/common/bookMeetCta";

const Home = () => {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div id="home">
      <MetaTags
        data={{
          title: "Real-Time Blockchain Threat Monitoring & Security | SecureDApp",
          desc: "SecureDApp offers blockchain security, smart contract audits, DApp development, and compliance services. Protect your digital assets today.",
          keywords:
            "blockchain security, smart contract audits, DApp development, compliance solutions, Layer 1 and Layer 2 chains, Ethereum security, Algorand security, Solana audits, Aptos blockchain, Hyperledger auditing, Binance Smart Chain security, DeFi protocol audits, NFT security, DAO audits, digital asset protection, non-custodial wallet security, custodial wallet protection, blockchain platform security, intellectual property protection, vulnerability detection blockchain",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <Hero />
      <Statitics />
      <Features />
      <Solutions />
      <HowItWorks />
      <Services />
      <Testimonials reviews={reviews} />
      <br />
      <BrandLogos type="chains" />
      <FAQs faqHeaders={faqHeaders} faqsData={faqsData} />
      <CTA />
      <Footer />
      <BookMeetCta />
    </div>
  );
};

export default Home;
