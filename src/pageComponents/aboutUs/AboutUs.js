"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import teamData, { companyCulture } from "./about-us-data";
import CustomHr from "../../components/common/CustomHr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import MetaTags from "../../components/common/MetaTags";

const TeamCard = ({ details }) => {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <div className="team-card">
        <div className="team-card-header">
          <div className="team-card-header-image-container">
            <img
              className="team-card-header-image"
              alt="about-us"
              src={details.image}
            />
          </div>
        </div>
        <div className="team-card-body">
          <div className="team-card-body-name">{details.name}</div>
          <div className="team-card-body-designation">
            {details.designation}
          </div>
          <div className="team-card-body-socials">
            {details.linkedin && (
              <Link target="_blank" href={details.linkedin}>
                <FontAwesomeIcon size="lg" icon={faLinkedin} />
              </Link>
            )}
            {details.twitter && (
              <Link target="_blank" href={details.twitter}>
                <FontAwesomeIcon size="lg" icon={faTwitter} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="about-us">
      <MetaTags
        data={{
          title: "About SecureDApp: Leading Blockchain and Web3 Security",
          desc: "Explore SecureDApp's journey in blockchain security. Meet our team and discover how we're securing the future of Web3 with innovative solutions.",
          keywords:
            "SecureDApp, blockchain security, Web3 security, decentralized applications, dApps protection, cybersecurity, blockchain innovation, Web3 solutions, SecureDApp team, blockchain pioneers",
          image: "/assets/images/about/photo1.png",
        }}
      />
      <Navbar />
      <div className="about-us-hero-container">
        <div className="about-us-hero">
          <h1 className="about-us-hero-title">
            Our Story : From Vision to Reality
          </h1>
          <div className="about-us-hero-description">
            SecureDApp emerged from a united vision to secure the future of
            Web3. Founded by two dedicated innovators from India, the company
            recognized the urgent need for specialized blockchain security
            solutions. Having experienced the devastating effects of
            cyberattacks firsthand, they were compelled by a mission to
            safeguard digital assets and ensure the security of decentralized
            applications (dApps) from their inception through to their
            expansion.
          </div>
          <div className="about-us-hero-description">
            SecureDApp’s journey began with a commitment to fortify the Web3
            ecosystem, not just through innovative security measures and
            building a foundation of trust. Our goal is clear: to pave the way
            for the secure and widespread adoption of Web3 technologies.
            SecureDApp's mission is to create a safer digital world where
            innovation thrives without compromise and every transaction and
            application is shielded from potential threats.
          </div>
          <div className="about-us-hero-image">
            <img
              style={{ maxWidth: "90%" }}
              src="/assets/images/about/photo1.png"
              alt="about-us"
            />
          </div>
          <hr />
        </div>
      </div>
      <div className="about-us-divider">
        <CustomHr />
      </div>
      <div className="about-us-company">
        <div className="about-us-company-eco">
          <div className="about-us-company-eco-image">
            <img
              style={{ maxWidth: "90%", margin: "0 auto" }}
              src="/assets/images/about/photo2.png"
              alt="about-us"
            />
          </div>
          <div className="about-us-company-eco-content-container">
            <div className="about-us-company-eco-content">
              <div className="about-us-company-eco-content-header">
                Creating an Effective Work Ecosystem
              </div>
              <div>
                At SecureDApp, we tackle every challenge with a product-centric
                approach that seamlessly scales across industries. Our
                cutting-edge solutions—Solidity Shield, SecureWatch, and
                SecureTrace—offer complete Web3 security, empowering clients
                across various sectors to fortify their digital assets.
                <br />
                <br />
                Our state-of-the-art infrastructure and streamlined processes
                ensure that our innovative products evolve with your needs,
                providing unparalleled protection and peace of mind.
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-company-culture">
          <div className="about-us-company-culture-content-container">
            <div className="about-us-company-culture-content">
              <div className="about-us-company-culture-content-title">
                <div className="about-us-company-culture-content-title-top">
                  Building a Vibrant Culture
                </div>
                {/* <div className="about-us-company-culture-content-title-bottom">
                  Culture Company's
                </div> */}
              </div>
              <div className="about-us-company-culture-content-description">
                At SecureDApp, we cultivate a culture where innovation and
                equilibrium intertwine seamlessly. Our team embraces autonomy
                and accountability, empowering each member to excel while
                enjoying a balanced work-life dynamic. We believe that true
                excellence is achieved through hard work and fostering an
                environment where creativity flourishes, and results speak
                volumes. Our values are built on :
              </div>
              <div className="about-us-company-culture-content-points">
                {companyCulture.map((item) => {
                  return (
                    <div className="about-us-company-culture-content-point">
                      <div>
                        <img
                          layout="intrinsic"
                          src="/assets/images/green-tick.svg"
                          alt="green tick"
                        />
                      </div>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" about-us-company-culture-image">
            <img
              layout="intrinsic"
              style={{ maxWidth: "90%" }}
              src="/assets/images/about/photo3.png"
              alt="about-us"
            />
          </div>
        </div>
      </div>
      <div className="about-us-team">
        <div className="about-us-team-header">
          <div className="about-us-team-header-title">Our Team</div>
          <div className="about-us-team-header-description">
            Together, we are energized and inspired, dedicated to shaping the
            future of Web3 security. This dedication, fueled by a blend of
            passion and purpose, is what motivates us to push boundaries and
            explore new horizons. At SecureDApp, we are more than a team; we are
            a movement toward a safer and more innovative digital world.
          </div>
        </div>
        <div className="about-us-team-cards">
          {teamData.map((data) => (
            <TeamCard details={data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
