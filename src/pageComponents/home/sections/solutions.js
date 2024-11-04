import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

const solutions = [
  {
    title: "Solidity Shield",
    items: [
      "AI-powered smart contract vulnerability detection",
      "Customizable security audits",
      "Enhanced developer workflow",
    ],
    to: "/solidity-shield",
    image: "/assets/images/ProductPages/ss/hero.webp",
  },
  {
    title: "Secure Watch",
    items: [
      "Leverage AI for Real-time threat detection for blockchain projects",
      "Machine learning for anomaly identification",
      "Customizable security measures",
    ],
    to: "/secure-watch",
    image: "/assets/images/ProductPages/sw/hero.webp",
  },
  {
    title: "Secure Trace",
    items: [
      "A sophisticated blockchain forensic tool ",
      "Analyzes transaction data",
      "Supports regulatory compliance",
    ],
    to: "/secure-trace",
    image: "/assets/images/ProductPages/st/st-hero.webp",
  },
  {
    title: "SecurePad",
    items: [
      "A leading cost-free tokenization platform for a comprehensive suite of blockchain services",
      "Enhancing versatility by allowing projects to deploy tokens across multiple blockchains",
      "Decentralized exchange for seamless token trading",
    ],
    to: "/secure-pad",
    image: "/assets/images/ProductPages/sp/sp-hero.jpg",
  },
];

const Solution = ({ title, items = [], to, image, isImageLeft = false }) => {
  const navigate = useRouter();
  return (
    <div
      className={`solution-card lg:flex ${
        isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col items-center`}
    >
      <div className="solution-card-content">
        <div className="solution-card-title">{title}</div>
        <ul className="solution-card-list">
          {items.map((item) => {
            return <li className="solution-card-list-item">{item}</li>;
          })}
        </ul>
        <Button
          onClick={() => navigate.push(to)}
          text={"Learn More"}
          filled={true}
        />
      </div>
      <div className="solution-card-image">
        <img
          layout="intrinsic"
          style={{ borderRadius: "25px 15px 0 0" }}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

const Solutions = () => (
  <div className="solutions">
    <SectionTitle name="Our Solutions" title="Explore Our Security Solutions" />
    <div className="solution-cards">
      {solutions.map((solution, index) => {
        return (
          <Solution
            title={solution.title}
            items={solution.items}
            to={solution.to}
            image={solution.image}
            isImageLeft={index % 2}
          />
        );
      })}
    </div>
  </div>
);

export default Solutions;
