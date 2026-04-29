"use client";

import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";

export const FeatureIcon = ({ icon, iconBackgroundColor, variant }) => {
  const { darkMode } = useSelector(getHomeSelector);
  return (
    icon && (
      <div
        className={`feature-icon ${
          variant === "key-capabilities" ? "feature-icon--key" : ""
        }`}
        style={{ background: `${iconBackgroundColor}` }}
      >
        <img
          layout="intrinsic"
          style={{
            filter: darkMode && "invert(1)",
          }}
          src={`/assets/images/icons/${icon}.svg`}
          alt="icon"
        ></img>
      </div>
    )
  );
};

export const FeatureCard = ({
  icon,
  iconBackgroundColor,
  header,
  description,
  variant,
  tag,
  lede,
  points,
  media,
}) => {
  const cardClassNames = ["feature-card"];
  if (variant === "key-capabilities") {
    cardClassNames.push("feature-card--key");
  }

  const renderKeyCapabilitiesVisual = () => {
    if (variant !== "key-capabilities") {
      return null;
    }

    const hasMedia = Array.isArray(media) && media.length > 0;

    if (!hasMedia && !icon) {
      return null;
    }

    return (
      <div className="feature-card-visual">
        {hasMedia
          ? media.map((mediaItem, mediaIndex) => (
              <div className="feature-card-visual-pane" key={mediaIndex}>
                {mediaItem?.src && (
                  <img
                    className="feature-card-visual-img"
                    src={mediaItem.src}
                    alt={`${header} visual ${mediaIndex + 1}`}
                  />
                )}
              </div>
            ))
          : icon && (
              <div className="feature-card-visual-pane feature-card-visual-pane--single">
                <FeatureIcon
                  icon={icon}
                  iconBackgroundColor={iconBackgroundColor}
                  variant={variant}
                />
              </div>
            )}
      </div>
    );
  };

  return (
    <div className={cardClassNames.join(" ")}>
      {variant === "key-capabilities" ? (
        renderKeyCapabilitiesVisual()
      ) : (
        icon && (
          <div className="feature-card-media">
            <FeatureIcon
              icon={icon}
              iconBackgroundColor={iconBackgroundColor}
              variant={variant}
            />
          </div>
        )
      )}
      <div
        className={`feature-card-content ${
          variant === "key-capabilities" ? "feature-card-content--key" : ""
        }`}
      >
        {tag && <span className="feature-card-tag">{tag}</span>}
        {header && <div className="feature-card-content-header">{header}</div>}
        {variant === "key-capabilities" ? (
          <>
            {lede && <p className="feature-card-lede">{lede}</p>}
            {Array.isArray(points) && points.length > 0 && (
              <ul className="feature-card-points">
                {points.map((point, pointIndex) => (
                  <li className="feature-card-point" key={pointIndex}>
                    <span className="feature-card-point-bullet" aria-hidden="true" />
                    <div>
                      {point.label && (
                        <div className="feature-card-point-label">
                          {point.label}
                        </div>
                      )}
                      {point.text && (
                        <p className="feature-card-point-text">{point.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div
            className="feature-card-content-description"
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {}
          </div>
        )}
      </div>
    </div>
  );
};

export const FeatureCards = ({ featureData, variant }) => {
  return (
    <div
      className={`features-section-cards ${
        variant === "key-capabilities" ? "features-section-cards--key" : ""
      }`}
    >
      {featureData.map((feature, index) => {
        return (
          <FeatureCard
            key={`product-feature-card-${index}`}
            icon={feature.icon}
            iconBackgroundColor={feature.iconBackgroundColor}
            header={feature.header}
            description={feature.description}
            variant={variant}
            tag={feature.tag}
            lede={feature.lede}
            points={feature.points}
            media={feature.media}
          />
        );
      })}
    </div>
  );
};
