import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";
import Image from "next/image";

export const BenefitsCardIcon = ({ img, imgAlt = "" }) => {
  const { darkMode } = useSelector(getHomeSelector);
  return (
    <div className="benefits-card-icon">
      <img
        layout="intrinsic"
        style={{
          filter: darkMode
            ? "brightness(0) invert(1)"
            : "brightness(1) invert(0)",
        }}
        src={img}
        alt={"icon"}
      />
    </div>
  );
};

const BenefitsCard = ({ header, description, image, imageAlt = "" }) => {
  return (
    <div className="benefits-card">
      <BenefitsCardIcon
        img={`/assets/images/icons/${image}.svg`}
        imgAlt={imageAlt}
      />
      <div className="benefits-card-header">{header}</div>
      {description.length > 1 && (
        <div className="benefits-card-description">{description}</div>
      )}
    </div>
  );
};

export default BenefitsCard;
