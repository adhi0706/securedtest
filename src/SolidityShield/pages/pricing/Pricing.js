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
import Footer from "../../components/common/Footer";
import { setLoader } from "../../redux/commonSlice";

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
        className={`sss-pricing-plan-card ${auth.user.plan === id ? 'border-2 border-tertiary' : 'border border-[#D2E6FF]'}`}
        style={{ borderRadius: "20px" }}
      >
        <div className="sss-pricing-card-header">
          <img src={icon} alt="icon" className="w-8 h-8" />
          <div className="sss-pricing-card-header-plan-type font-medium text-gray-500">{planType}</div>
        </div>
        <div className="sss-pricing-card-body flex items-baseline gap-1">
          <div className="sss-pricing-card-body-price text-3xl font-bold">{price}</div>
          <div className="text-gray-400 text-sm">{"/month"}</div>
        </div>
        <div className="sss-pricing-card-description text-gray-500 text-sm min-h-[60px]">{description}</div>
        <div className="sss-pricing-card-button-container mt-4">
          <button 
            onClick={onClick}
            className="w-full py-3 rounded-xl bg-[#12D576] text-black font-semibold hover:bg-[#0bc168] transition-colors"
          >
            {auth.user.plan === id && auth.user.plan > 0
              ? "Renew Plan"
              : auth.user.plan === 0 && auth.user.plan === id
              ? "Free Plan"
              : "Get Started"}
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
  const dispatch = useDispatch();

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
    if (currentVisible < 3) setCurrentVisible(currentVisible + 1);
  };

  const previousPricingCard = () => {
    if (currentVisible > 1) setCurrentVisible(currentVisible - 1);
  };

  const openModal = (plan) => {
    if (localStorage.getItem("UserEmail")) {
      dispatch(setPaymentModal(true));
      dispatch(setPlan(plan));
    } else {
      navigate.push("/solidity-shield-scan/auth");
    }
  };

  const [user, setUser] = useState(auth.user);

  useEffect(() => {
    async function fetchUserData() {
      dispatch(setLoader(true));
      try {
        // Assuming getUser is a function that fetches user data without JWT dependency
        const data = await getUser({ dispatch });
        setUser(data);
      } catch (error) {
        navigate.push("/solidity-shield-scan/auth");
      } finally {
        dispatch(setLoader(false));
      }
    }
    if (!user) {
      fetchUserData();
    }
  }, [user, dispatch, navigate]);

  return (
    <div className="sss-pricing-container bg-white min-h-screen">
      <MetaTags
        data={{
          title: "Solidity Shield Scan: Secure Audits & Vulnerability Checks",
          desc: "Explore Solidity Shield’s pricing for blockchain security. Compare features and choose the plan that fits your needs with SecureDApp’s solutions.",
          keywords:
            "Solidity Shield Scan, smart contract audits, vulnerability checks, secure audits, Solidity security, blockchain security, contract vulnerability scan, smart contract security",
        }}
      />
      <div className="sss-pricing-wrapper max-w-[1400px] mx-auto px-4 py-8 text-secondary">
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
      <div className="sss-pricing-plan-footer mt-12 mb-20 text-center">
        <div className="sss-pricing-plan-footer-content flex flex-col items-center gap-6">
          <div className="text-2xl font-semibold text-secondary pt-12">Get a custom Plan</div>
          <div className="sas-pricing-plan-footer-button-container">
            <CustomButton
              text={"Contact Us"}
              className={
                "border border-[#12D576] text-[#12D576] px-16 py-3 rounded-2xl hover:bg-[#12D576] hover:text-white transition-all font-medium"
              }
              onClick={() => navigate.push("/solidity-shield-scan/contact")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);
};

export default Pricing;
