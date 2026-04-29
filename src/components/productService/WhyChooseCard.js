import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";
import Image from "next/image";
import { useRouter } from "next/router";

export const WhyChooseCardIcon = ({ image, imageBackground }) => {
  const { darkMode } = useSelector(getHomeSelector);
  const router = useRouter();
  return (
    <div
      className="why-choose-card-icon"
      style={{ background: `${imageBackground}` }}
    >
      <img
        layout="intrinsic"
        style={{
          filter: darkMode
            ? "brightness(0) invert(1)"
            : "brightness(1) invert(0)",
        }}
        className="p-2"
        src={image}
        alt={router.asPath.replace("/", "")}
      />
    </div>
  );
};

const WhyChooseCard = ({ icon, imageBackground, title, description }) => {
  return (
    <div className="why-choose-card">
      <div className="why-choose-card-header">
        <div className="why-choose-card-header-image">
          <WhyChooseCardIcon
            image={`/assets/images/icons/${icon}.svg`}
            imageBackground={imageBackground}
          />
        </div>
        <div className="why-choose-card-header-title">{title}</div>
      </div>
      <div className="why-choose-card-description">{description}</div>
    </div>
  );
};

export default WhyChooseCard;
