"use client";

import Button from "../../../components/common/Button";
import BenefitsCard from "../../../components/productService/BenefitsCard";
import { useRouter } from "next/router";
import Image from "next/image";

const Benefits = ({ benefitsData, title, subTitle, button, img, link }) => {
  const navigate = useRouter();
  return (
    <div className="benefits">
      <div className="benefits-header">
        <div className="benefits-header-content">
          <div className="benefits-header-content-title">{title}</div>
          <div className="benefits-header-content-description">{subTitle}</div>
        </div>
        {link && (
          <div className="benefits-header-button">
            <Button
              text={"Get Started"}
              onClick={() => typeof window !== "undefined" && window.open(link)}
              filled={true}
            />
          </div>
        )}
      </div>
      <div className="benefits-body">
        <div className="benefits-body-content">
          {benefitsData.map((data) => {
            return (
              <BenefitsCard
                header={data.header}
                description={data.description}
                image={data.image}
                imageAlt={data.imageAlt}
              />
            );
          })}
        </div>
        <div className="benefits-body-image">
          <img layout="intrinsic" src={img} alt={"image"} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
