import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SectionTitle = ({ name, title, description }) => {
  const isSpecial =
    useRouter().asPath.includes("blog") || useRouter().asPath.includes("media");
  return (
    <div className="section-title">
      {name !== undefined && (
        <div className="flex justify-center items-center space-x-3">
          <img
            layout="intrinsic"
            className="section-title-icon-image"
            src="/assets/images/stroke-left.svg"
            alt="stroke left"
          />
          <div className="section-title-icon-label">{name}</div>
          <img
            layout="intrinsic"
            className="section-title-icon-image"
            src="/assets/images/stroke-right.svg"
            alt="stroke right"
          />
        </div>
      )}
      {isSpecial ? (
        <h1 className="section-title-header">{title}</h1>
      ) : title === "Frequently Asked Questions" ? (
        <h3 className="section-title-header">{title}</h3>
      ) : (
        <h2 className="section-title-header">{title}</h2>
      )}
      <div className="section-title-description">{description}</div>
    </div>
  );
};

export default SectionTitle;
