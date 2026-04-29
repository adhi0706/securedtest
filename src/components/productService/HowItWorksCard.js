import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";
import Image from "next/image";

const HowItWorksCard = ({ image, imageAlt, title, description }) => {
  const { darkMode } = useSelector(getHomeSelector);
  return (
    <div className="how-it-works-card">
      {image && (
        <div className="how-it-works-card-image">
          <img
            layout="intrinsic"
            src={`/assets/images/icons/howitworks/${image}.svg`}
            alt={"icon"}
          />
        </div>
      )}
      {title && <div className="how-it-works-card-title">{title}</div>}
      <div
        className="how-it-works-card-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default HowItWorksCard;
