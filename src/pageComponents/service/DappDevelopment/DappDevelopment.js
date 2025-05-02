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
import WhyChooseCard from "../../../components/productService/WhyChooseCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import Benefits from "../sections/Benefits";
import { platforms, faqsData, functions, benefits, industries } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function DappDevelopment() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "DApp Development Solutions: Secure No-Code Blockchain Apps",
          desc: "Build secure, scalable DApps with our no-code platform. Leverage Ethereum, Binance Smart Chain, and Solana for efficient blockchain solutions.",
          keywords:
            "DApp development, decentralized apps, blockchain solutions, no-code platform, smart contracts, DeFi, digital wallets, Ethereum, Binance Smart Chain, Solana, secure DApps, blockchain gaming, real estate tokenization, supply chain blockchain, Web 3.0 development",
          image: "/assets/images/ServicePages/s1-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DAPP DEVELOPMENT"
          title="Empowering Developers with Secure, No-Code Blockchain Solutions"
          image={"/assets/images/ServicePages/s1-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is DApp Development"}
          description={
            "DApp Development involves developing decentralized applications wherein the back-end code runs on a decentralized P2P network. The discipline in coding DApps is much higher compared to conventional app development, as smart contracts are immutable once deployed on the main network. These DApp applications utilize smart contracts to execute code autonomously and manage transactions without any central authority."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s1-1.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Our Focus"}
            title={"Uniques Dapp Development Services"}
            description={
              "We offer a comprehensive range of dApp development services, from building applications from the ground up to providing consultancy and ongoing support. Our experts consistently deliver transformative results to ensure your business success."
            }
          />
          <FeatureCards featureData={functions} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <Benefits
          benefitsData={platforms}
          title={"DApp Development Blockchain Platform We Leverage"}
          subTitle={""}
          button={""}
          img={"/assets/images/ServicePages/s1-2.webp"}
        />
        <ProductCard
          header={"What SecureDapp has to offer"}
          description={`SecureDApp offers a comprehensive range of services designed specifically for developers building decentralized applications. Our no-code platform allows developers of all skill levels to get started easily, without the need for extensive coding experience. The security-based approach ensures that your DApps are built on a solid, transparent, and secure foundation.
            <br /> <br />Our dedicated experts develop tailored Web 3.0-based DApp development solutions. With a focus on blockchain application development, we ensure your decentralized applications are secure, efficient, and transformative for your business.`}
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s1-3.webp"}
        />
        <div className="service-why-choose">
          <SectionTitle
            name={"Benefits"}
            title={"Benefits of Dapp Development"}
          />
          <div className="service-why-choose-cards">
            {benefits.map((data) => {
              return (
                <WhyChooseCard
                  icon={data.icon}
                  imageBackground={data.imageBackground}
                  title={data.header}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
        <div>
          <SectionTitle name={"Industries"} title="Industries we Work With" />
          <div className="how-it-works-section">
            {industries.map((data) => {
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

export default DappDevelopment;
