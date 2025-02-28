import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import {
  getPaymentSelector,
  setCouponCode,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../common/CustomButton";
import {
  payPhonpe,
  payCrypto,
  payCryptoVerify,
  checkCoupon,
} from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { pricingDetails } from "../../pages/pricing/pricing.data";

const PaymentModal = () => {
  const { paymentModal, selectedPlan, couponCode } =
    useSelector(getPaymentSelector);
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [phase, setPhase] = useState(1);
  const [web3PayDetails, setWeb3PayDetails] = useState();

  const [isLargeScreen, setIsLargeScreen] = useState(null);
  useEffect(() => {
    var vw = window.innerWidth;
    if (vw < 900) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  }, [isLargeScreen === null]);

  const closeModal = () => {
    setPhase(1);
    dispatch(setPaymentModal(false));
  };

  const nextPhase = () => {
    setPhase(2);
  };

  const price = pricingDetails.find((item) => item.id === selectedPlan)
    .pricingCard.price;

  return (
    paymentModal && (
      <div className="sss-payment-modal-container">
        <div style={{ minWidth: "50vw" }} className="sss-payment-modal">
          <div className="sss-payment-modal-header">
            <div className="sss-payment-modal-header-title flex gap-2">
              Payment of {price} {couponCode.length > 0 && "(-) Coupon"}
              {couponCode && (
                <span
                  className="text-400 text-[12px] underline text-red-500 cursor-pointer"
                  onClick={() => dispatch(setCouponCode(""))}
                >
                  remove coupon
                </span>
              )}
            </div>
            <div className="sss-payment-modal-close-container">
              <i
                onClick={closeModal}
                className="fa-solid fa-xmark fa-xl cursor-pointer"
              />
            </div>
          </div>
          <div className="sss-payment-modal-body">
            {phase === 1 && (
              <div className="sss-payment-modal-body-methods">
                <div
                  style={{ maxHeight: "120px" }}
                  className="sss-payment-modal-body-method"
                >
                  {!isLargeScreen && (
                    <div className="sss-payment-modal-body-method-image">
                      <img
                        layout="intrinsic"
                        src="/assets/images/solidity-shield-scan/phonepe-icon.svg"
                        alt="Phonpe"
                        style={{ maxHeight: "80px" }}
                      />
                    </div>
                  )}
                  <div className="sss-payment-modal-body-method-button">
                    <CustomButton
                      text={"Pay via PhonPe"}
                      className={
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3 active:bg-white"
                      }
                      onClick={() => {
                        payPhonpe({
                          planid: selectedPlan,
                          email: auth.user.email,
                          couponCode,
                        });
                      }}
                    />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                      (UPI, Card & Net Banking)
                    </p>
                  </div>
                </div>
                <div
                  style={{ maxHeight: "120px" }}
                  className="sss-payment-modal-body-method"
                >
                  {!isLargeScreen && (
                    <div className="sss-payment-modal-body-method-image">
                      <img
                        layout="intrinsic"
                        src="/assets/images/solidity-shield-scan/crypto-icon.png"
                        alt="USDT"
                      />
                    </div>
                  )}
                  <div className="sss-payment-modal-body-method-button">
                    <CustomButton
                      onClick={async () => {
                        var pay = await payCrypto({
                          planid: selectedPlan,
                          email: auth.user.email,
                          couponCode,
                        });
                        console.log(pay);
                        setWeb3PayDetails(pay);
                        pay && nextPhase();
                      }}
                      text={"Pay via USDT"}
                      className={
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3 active:bg-white"
                      }
                    />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                      (USDT Polygon)
                    </p>
                  </div>
                </div>
                {!couponCode && (
                  <div
                    style={{ maxHeight: "120px" }}
                    className="sss-payment-modal-body-method"
                  >
                    <div className="sss-payment-modal-body-method-button">
                      <p style={{ marginBottom: "10px" }}>
                        Have a coupon code ? Apply here.
                      </p>
                      <div className="flex justify-start items-center">
                        <input
                          className="sss-settings-screen-input-text-field"
                          type="text"
                          placeholder="Coupon Code"
                          id="coupon"
                        />
                        <CustomButton
                          onClick={async () => {
                            var status = await checkCoupon(
                              document.getElementById("coupon").value,
                              dispatch
                            );
                            if (status) {
                              toast.success(
                                "Coupon Applied Successfully. Proceed with Payment"
                              );
                            } else {
                              //toast.error("Invalid Coupon Code");
                            }
                          }}
                          text={"Apply"}
                          className={
                            "w-[100px] bg-tertiary border rounded-xl border-tertiary py-3 active:bg-white"
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {phase === 2 && web3PayDetails.network && (
              <div className="sss-payment-modal-body-crypto-container">
                <div
                  style={{ transform: "scale(0.7)", margin: "0 auto" }}
                  className="sss-payment-modal-body-crypto-qr"
                >
                  {web3PayDetails && (
                    <QRCode value={web3PayDetails.pay_address} />
                  )}
                </div>
                <div className="sss-payment-modal-body-cyrpto-details">
                  <div
                    style={{ fontSize: "17px" }}
                    className=""
                  >{`Chain : ${web3PayDetails.network.toUpperCase()}`}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "17px",
                    }}
                    className=""
                  >
                    {`To : ${web3PayDetails.pay_address}`}
                    <div
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          web3PayDetails.pay_address
                        );
                        toast("Wallet Address copied to clipboard");
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </div>
                  </div>
                  <div style={{ fontSize: "17px" }} className="">{`Amount : ${
                    web3PayDetails.pay_amount
                  } ${web3PayDetails.pay_currency.toUpperCase()} `}</div>
                </div>
                <div className="sss-payment-modal-fotter">
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      onClick={closeModal}
                      text={"Cancel"}
                      className={
                        "w-[120px] py-3 px-2 rounded-xl border border-tertiary active:bg-tertiary"
                      }
                    />
                  </div>
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      text={"Verify"}
                      className={
                        "w-[120px] border border-tertiary py-3 px-2 rounded-xl bg-tertiary active:bg-white"
                      }
                      onClick={async () => {
                        var data = await payCryptoVerify({
                          id: web3PayDetails.payment_id,
                          transactionId: web3PayDetails.newTransactionId,
                          amount: web3PayDetails.payAmount,
                        });
                        if (data.payment_status === "success") {
                          closeModal();
                          navigate.push("/solidity-shield-scan/billing");
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
