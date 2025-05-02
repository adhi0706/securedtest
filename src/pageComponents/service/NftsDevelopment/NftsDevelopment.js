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
import { faqsData, servicesData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function NftsDevelopment() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title:
            "NFT Development Services: Create & Secure Unique Digital Assets",
          desc: "Develop, mint, and secure unique NFTs. Build robust NFT platforms tailored to your needs with SecureDApp's expert blockchain solutions.",
          keywords:
            "NFT development, digital assets, NFT minting, NFT platform, blockchain NFT, smart contracts, secure NFTs, NFT marketplace, tokenized assets, digital collectibles",
          image: "/assets/images/ServicePages/s11-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="NFTs DEVELOPMENT"
          title="Comprehensive NFT Development Services for Unique Digital Assets"
          image={"/assets/images/ServicePages/s11-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is NFT Development?"}
          description={
            "NFT development- a process of creating Non-Fungible Tokens (NFTs), which are unique digital assets stored on a blockchain. These tokens can represent digital or physical items, such as art, music, collectibles, virtual real estate, and more. The NFT development process involves designing the digital asset, writing smart contracts to ensure ownership and authenticity, and deploying the NFT on a blockchain platform, ensuring it is secure, verifiable, and transferable."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s11-1.webp"}
        />
        <div>
          <SectionTitle
            name={"Services"}
            title="Take A Look Into Our Services"
          />
          <div className="how-it-works-section">
            {servicesData.map((data) => {
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
        <ProductCard
          header={"Industries We Serve"}
          description={`• Art and collectables
            <br/><br/>• Real Estate
            <br/><br/>• Healthcare
            <br/><br/>• Gaming
            <br/><br/>• Music
            <br/><br/>• Retail
            <br/><br/>• Government and Public Sector
            <br/><br/>• Finance`}
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s11-2.webp"}
        />
        <ProductWhyCard
          header={"Why SecureDApp for Your Business?"}
          descriptions={[
            "SecureDApp provides top-notch NFT development services to a global clientele. SecureDApp has the expertise and resources to turn your vision into reality. NFTs have significantly impacted the blockchain world with applications in digital art, gaming, and more.<br/><br/>Our expert developers and blockchain enthusiasts are committed to delivering high-quality NFT development services tailored to your needs.<br/><br/>Whether you're an artist, brand, or platform aiming to tokenize assets, create NFT collectables, or require customized NFT marketplace development, we ensure your project is secure, scalable, and innovative. ",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s11-3.webp"}
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

export default NftsDevelopment;
