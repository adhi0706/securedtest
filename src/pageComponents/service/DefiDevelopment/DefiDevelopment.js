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
import { faqsData, applicationsData, usesData, workingGuideData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function DefiDevelopment() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "DeFi Development: Securely Transforming Financial Services",
          desc: "Build DeFi platforms with SecureDApp. Our solutions include smart contracts, yield farming, and token creation to securely transform financial services.",
          keywords:
            "DeFi development, decentralized finance, smart contracts, yield farming, DeFi platforms, blockchain finance, secure DeFi solutions, DeFi tokens, decentralized apps",
          image: "/assets/images/ServicePages/s12-hero.png",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DeFi DEVELOPMENT"
          title="Transforming Financial Services"
          image={"/assets/images/ServicePages/s12-hero.png"}
          service={true}
        />
        <ProductCard
          header={"What is a Decentralized Finance (DeFi)?"}
          description={
            "Decentralized Finance (DeFi)) is an emerging financial instrument built on blockchain technology that provides financial services without intermediaries. It includes various applications such as lending, borrowing, trading, and asset management. DeFi platforms operate on a decentralized network, offering transparency, accessibility, and financial inclusion.<br/><br/> DeFi services are decentralized applications (dApps) that utilize the decentralized nature of public blockchains and the power of smart contracts to offer globally accessible financial services."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s12-1.webp"}
        />
        <div>
          <SectionTitle
            name={"Applications"}
            title="Understanding DeFi Applications"
            description={
              "DeFi applications transform the way we interact with money by leveraging blockchain technology. These innovative programs, installed on devices like personal computers, tablets, or smartphones, facilitate various financial activities—such as purchases, loans, gifts, and trading—without intermediaries."
            }
          />
          <div className="how-it-works-section">
            {applicationsData.map((data) => {
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
            name={"Use cases"}
            title={"Decentralized Finance (DeFi) Use Cases"}
          />
          <FeatureCards featureData={usesData} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <div className="features-section">
          <SectionTitle name={"How it works"} title={"DeFi Working Guide"} />
          <FeatureCards featureData={workingGuideData} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductCard
          header={"Why SecureDApp for Your DeFi Needs?"}
          description={
            "At SecureDApp, we specialize in crafting innovative DeFi solutions tailored to your needs. Our recent success in building a cutting-edge DeFi exchange from scratch highlights our expertise and commitment to excellence.<br/><br/>Whether you're looking to launch a new DeFi platform or enhance an existing one, our team brings unparalleled experience in smart contract development, security, and blockchain integration.<br/><br/>By choosing SecureDApp, you're not just selecting a service provider—you're partnering with a dedicated team ready to drive your DeFi vision to success. Let us help you navigate the exciting world of decentralized finance with confidence and efficiency."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s12-2.webp"}
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

export default DefiDevelopment;
