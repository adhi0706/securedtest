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
import { faqsData, calendar } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function LevelUpAcademy() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "Level Up Academy: Blockchain Talent & Innovation in India",
          desc: "Join SecureDApp’s Level Up Academy to master blockchain skills with hands-on training in blockchain, DApps, and smart contract development.",
          keywords:
            "blockchain education, Level Up Academy, blockchain talent development, blockchain innovation, blockchain skills training, blockchain certification, SecureDApp, Indian universities, blockchain careers, decentralized applications training",
          image: "/assets/images/ServicePages/s8-3.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="LevelUp Academy"
          title="SecureDApp's flagship initiative aims to foster blockchain talent and innovation across Indian universities and colleges"
          image={"/assets/images/ServicePages/s8-3.webp"}
          service={true}
        />
        <ProductCard
          header={"Why is Blockchain Skill Development in High Demand?"}
          description={`Blockchain technology reshapes industries from banking and finance to agriculture, supply chain, healthcare, government, and education. As more organizations embrace this transformative technology, blockchain skills development is becoming increasingly vital. Navigating the complexities of blockchain can be daunting, but whether you're an experienced professional or just starting out, investing in blockchain education can open doors to new opportunities.<br/><br/>By enhancing your expertise with a focus on blockchain talent development, you position yourself at the forefront of this revolution, ready to advance your skills and career in this exciting field. This is where SecureDApp's blockchain certification program, "Level Up Academy", comes into the picture.`}
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s7-1.webp"}
        />
        <ProductWhyCard
          header={
            "Master Digital World With Our Premium Blockchain Education Program"
          }
          descriptions={[
            `Level Up Academy is SecureDApp's premier initiative designed to cultivate blockchain talent development and drive innovation within Indian universities and colleges. Through a strategic industry-academia blockchain collaboration, we provide a thorough 6-12-week program tailored to empower students and faculty with advanced knowledge in blockchain technology, decentralized applications (DApps), and best practices in security.<br/><br/>
            <b>Our Curriculum Covers</b><br/>
            • Blockchain fundamentals
            <br/>• Smart contract development training
            <br/>• Decentralized applications development
            <br/>• Security audits
            <br/>• Real-world use cases.
            <br/><br/>
            Participants will engage in hands-on learning through practical exercises and projects mentored by industry experts from SecureDApp.
            `,
          ]}
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s2-hero.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"12 week Program"}
            title={"Explore Our Proposed Session Calendar"}
            description={
              "Here's a detailed overview of the Level Up Academy curriculum, designed to provide a structured pathway through the essential aspects of blockchain skill development. Over 12 weeks, you will embark on a comprehensive journey.Each module is crafted to build expertise progressively, culminating in a hands-on capstone project that showcases their skills and knowledge."
            }
          />
          <FeatureCards featureData={calendar} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
          <SectionTitle
            title={"Choose SecureDApp to Enhance Your Blockchain Knowledge"}
            description={
              "SecureDApp provides one of India's best blockchain education programs through its 'Level Up Academy' initiative. We utilize a hybrid learning approach that blends hands-on workshops with flexible online modules for optimal knowledge transfer. Our program also includes specialized training sessions for faculty, enabling them to incorporate blockchain into their teaching effectively. By connecting academic institutions with industry expertise, Level Up Academy is dedicated to building a strong pipeline of blockchain professionals and fostering innovation within the Indian blockchain ecosystem."
            }
          />
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

export default LevelUpAcademy;
