"use client";

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
import { compliances, faqsData, benefits } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function TokenAudit() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title:
            "Token Audit Services: Secure Crypto Assets with Expert Reviews",
          desc: "Ensure the security of your cryptocurrency with our thorough token audit services. Identify vulnerabilities, protect investor funds, and enhance trust.",
          keywords:
            "Token Audit, Crypto Asset Security, Blockchain Audit, Smart Contract Review, Cryptocurrency Audit, Token Security, Blockchain Compliance, Crypto Token Verification, Smart Contract Security, Token Audit Services",
          image: "/assets/images/ServicePages/s4-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="TOKEN AUDIT"
          title="A Must Code Review for Your Smart Contracts"
          image={"/assets/images/ServicePages/s4-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is Token Audit ?"}
          description={
            "Token contracts have become increasingly prevalent in the blockchain space, with many seeking to develop their cryptocurrencies to capture the excitement of the crypto community. Within this, ensuring token security is of utmost importance. A Token Audit involves thoroughly examining a token's smart contract code to uncover vulnerabilities, bugs, and weaknesses that could jeopardize its security and value."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s4-1.webp"}
        />
        <div>
          <SectionTitle name={"Benefits"} title="Benefits of Token Audit" />
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
        <ProductWhyCard
          header={"Why Does Your Business Need Token Audit?"}
          descriptions={[
            `In the blockchain space, "Code is law" and mistakes made during code development can lead to significant security issues if not addressed.<br/><br/>Ensuring bug-free code is essential for any blockchain application. Regular audits provide the necessary security assurance and help identify potential flaws. A comprehensive token audit can perform a vulnerability assessment and correct any detected vulnerability before launch. <br/><br/>A token audit safeguards users' assets by testing for common attacks. By conducting a thorough token audit, you can proactively address potential risks, build trust with users, and offer performance optimization suggestions. As the saying goes, "Prevention is better than cure" and a detailed audit report can do so through smart contract code review, making them secure and reliable.`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s4-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Compliances"}
            title={"Compliance Checks Involve in Token Audit"}
            description={
              "The approach to auditing and compliance checks can differ widely depending on the blockchain platform and its unique vulnerabilities. Each blockchain has its own set of challenges and characteristics, which influence how tokens are reviewed and secured."
            }
          />
          <FeatureCards featureData={compliances} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductCard
          header={"Be Cautious During Token Audit"}
          description={
            "A drop of prevention is worth a pound of cure, but even the best audits require continuous vigilance. <br/><br/>Token audits are crucial for technical robustness and regulatory compliance. Audits are a foundation for building credibility with customers and investors and ensuring adherence to laws and regulations across various jurisdictions. <br/><br/>However, these audits come with challenges like high cost, time-consuming, and require specialized expertise. It's essential to recognize that while token audits are indispensable, they are not foolproof. Some errors or vulnerabilities might still be overlooked, compromising the token's integrity and performance. <br/><br/>Here, experts like SecureDApp skillfully balance the depth and scope of the audit, maintaining transparent communication with clients about the audit's limitations, scope, and results."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s4-3.png"}
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

export default TokenAudit;
