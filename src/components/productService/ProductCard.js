"use client";

import { useRouter } from "next/router";
import Button from "../common/Button";
import Image from "next/image";

const ProductCard = ({
  header,
  description,
  buttonText,
  link,
  image,
  imageAlt,
}) => {
  const router = useRouter();
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          layout="intrinsic"
          src={image}
          alt={router.asPath.replace("/", "")}
        />
      </div>
      <div className="product-card-content">
        <div className="product-card-content-header">{header}</div>
        <div
          className="product-card-content-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        {link && (
          <div className="product-card-content-button">
            <Button
              text={buttonText}
              onClick={() => typeof window !== "undefined" && window.open(link)}
              filled={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
