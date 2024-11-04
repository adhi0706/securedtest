"use client";

import { useDispatch, useSelector } from "react-redux";
import { pricingDetails } from "./pricing.data";
import CustomButton from "../../components/common/CustomButton";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getPaymentSelector,
  setPaymentModal,
  setPlan,
} from "../../redux/dashboard/paymentSlice";
import { getUserData } from "../../redux/auth/authSlice";
import { useRouter } from "next/router";
import MetaTags from "../../../components/common/MetaTags";

const PricingPlanCard = ({
  icon,
  planType,
  price,
  description,
  onClick,
  id,
}) => {
  const auth = useSelector(getUserData);
  return (
    <div className="sss-pricing-plan-card-container">
      <div
        style={{
          border: auth.user.plan === id && "2px solid black",
          borderRadius: "10px",
        }}
        className="sss-pricing-plan-card"
      >
        <div className="sss-pricing-card-header">
          <img layout="intrinsic" src={icon} alt="icon" />
          <div className="sss-pricing-card-header-plan-type">{planType}</div>
        </div>
        <div className="sss-pricing-card-body">
          <div className="sss-pricing-card-body-price">{price}</div>
          <div className="">{"/month"}</div>
        </div>
        <div className="sss-pricing-card-description">{description}</div>
        <div onClick={onClick} className="sss-pricing-card-button-container">
          <button className="sss-pricing-card-button">
            <div className="">
              {auth.user.plan === id && auth.user.plan > 0
                ? "Renew Plan"
                : auth.user.plan === 0 && auth.user.plan === id
                ? "Free Plan"
                : "Get Started"}
            </div>
            {auth.user.plan === 0 && auth.user.plan === id ? (
              ""
            ) : (
              <i className="fa-solid fa-arrow-right"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [currentVisible, setCurrentVisible] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const auth = useSelector(getUserData);
  const navigate = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(
        typeof window !== "undefined" && window.innerWidth >= 768
      );
    };
    handleResize();
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextPricingCard = () => {
    console.log(currentVisible);
    if (currentVisible < 3) setCurrentVisible(currentVisible + 1);
  };

  const previousPricingCard = () => {
    console.log(currentVisible);
    if (currentVisible > 1) setCurrentVisible(currentVisible - 1);
  };
  const dispatch = useDispatch();

  const openModal = (plan) => {
    if (localStorage.getItem("UserEmail")) {
      dispatch(setPaymentModal(true));
      dispatch(setPlan(plan));
    } else {
      navigate.push("/solidity-shield-scan/auth");
    }
  };

  return (
    <div className="sss-pricing-container">
      <MetaTags
        data={{
          title: "Solidity Shield Scan: Secure Audits & Vulnerability Checks",
          desc: "Explore Solidity Shield’s pricing for blockchain security. Compare features and choose the plan that fits your needs with SecureDApp’s solutions.",
          keywords:
            "Solidity Shield Scan, smart contract audits, vulnerability checks, secure audits, Solidity security, blockchain security, contract vulnerability scan, smart contract security",
        }}
      />
      <div
        style={{
          width: "125%",
          transform: "scale(0.8)",
          transformOrigin: "top left",
          overflowX: "auto",
        }}
        className="sss-pricing-plans-scrollable"
      >
        <div className="sss-pricing-plans">
          <div className="sss-pricing-plan-headers">
            <div className="sss-pricing-plan-headers-cards">
              <div className="sss-pricing-plan-headers-card-container"></div>
              {pricingDetails.map((detail, cardIndex) => {
                return (
                  detail.pricingCard.planType &&
                  (isLargeScreen || currentVisible === cardIndex) && (
                    <div className="sss-pricing-plan-headers-card-container">
                      <PricingPlanCard
                        icon={detail.pricingCard.icon}
                        planType={detail.pricingCard.planType}
                        price={detail.pricingCard.price}
                        description={detail.pricingCard.description}
                        onClick={() =>
                          detail.id > 0
                            ? openModal(detail.id)
                            : navigate.push("/solidity-shield-scan/auth")
                        }
                        id={detail.id}
                      />
                      <div className="sss-pricing-card-changer-buttons">
                        <div
                          onClick={previousPricingCard}
                          className="sss-pricing-card-changer-button-container"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronLeft}
                          />
                        </div>
                        <div
                          onClick={nextPricingCard}
                          className="sss-pricing-card-changer-button-container"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronRight}
                          />
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="sss-pricing-plan-body">
            <div className="sss-pricing-plan-details-container">
              {pricingDetails.map((detail, planIndex) => {
                return (
                  (isLargeScreen ||
                    currentVisible === planIndex ||
                    planIndex === 0) && (
                    <div className="sss-pricing-plan-detail-row">
                      {Object.keys(detail.details).map((feature) => {
                        return (
                          <div className="sss-pricing-plan-detail-row-value-container">
                            <div
                              className={`sss-pricing-plan-detail-row-value ${
                                planIndex === 0 &&
                                "sss-pricing-plan-detail-row-value-first"
                              }`}
                            >
                              {detail.details[feature].value === "TICK" ? (
                                <img
                                  layout="intrinsic"
                                  src="/assets/images/solidity-shield-scan/billing-price-tick.svg"
                                  alt="tick"
                                />
                              ) : detail.details[feature].value === "DASH" ? (
                                <img
                                  layout="intrinsic"
                                  src="/assets/images/solidity-shield-scan/billing-price-dash.svg"
                                  alt="-"
                                />
                              ) : (
                                detail.details[feature].value
                              )}
                              {detail.details[feature].info && (
                                <div className="sss-pricing-plan-detail-row-info-container group">
                                  <img
                                    layout="intrinsic"
                                    src="/assets/images/solidity-shield-scan/pricing-plan-info.svg"
                                    alt="i"
                                  />
                                  <div className="sss-pricing-plan-detail-row-info">
                                    <div className="font-semibold">
                                      {detail.details[feature].value}
                                    </div>
                                    {detail.details[feature].info}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-200px" }} className="sss-pricing-plan-footer">
        <div className="sss-pricing-plan-footer-buttons">
          <div className="text-center">Get a custom Plan</div>
          <div className="sas-pricing-plan-footer-button-container">
            <CustomButton
              text={"Contact Us"}
              className={
                "border border-tertiary px-12 py-2 rounded-xl active:bg-tertiary"
              }
              onClick={() => navigate.push("/solidity-shield-scan/contact")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
