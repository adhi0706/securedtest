import { useState } from "react";
import Link from "next/link";
import Button from "../../../components/common/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCommonSelector,
  setIsRequestModalOpen,
} from "../../redux/commonSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const services = [
  "Dapp Development",
  "Smart Contract Audit",
  "Dapp Security Audit",
  "Token Audit",
  "Web3 KYC",
  "Web3 security",
  "Blockchain Forensic",
  "RWA Audit",
  "Crypto Compliance & AMl",
  "Decentralized Identity (DID)",
  "NFTs Development",
  "DeFi Development",
  "LevelUp Academy",
];

const RequestQuoteModal = () => {
  const dispatch = useDispatch();
  const { isRequestModalOpen } = useSelector(getCommonSelector);

  const [fullName, setFullName] = useState("");
  const [fullNameWarning, setFullNameWarning] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberWarning, setMobileNumberWarning] = useState("");

  const [selectedService, setSelectedService] = useState("Choose a Service...");
  const [dropDown, setDropDown] = useState(false);

  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const [message, setMessage] = useState("");

  const onFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (value.length === 0) {
      setFullNameWarning("* Compulsory Field");
    } else {
      setFullNameWarning("");
    }
  };

  const onMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value.length === 0) {
      setMobileNumberWarning("* Compulsory Field");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberWarning("Invalid Mobile Number");
    } else {
      setMobileNumberWarning("");
    }
  };

  const handleSelectedService = (e) => {
    setSelectedService(e.target.value);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      setEmailWarning("* Compulsory Field");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailWarning("Invalid Email");
    } else {
      setEmailWarning("");
    }
  };

  const onMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const closeModal = () => {
    dispatch(setIsRequestModalOpen(false));
  };

  if (!isRequestModalOpen) return null;

  const sendMail = async ({ name, email, mobile, description, service }) => {
    if (
      name === "" ||
      email === "" ||
      service === "Choose a Service..." ||
      mobile === ""
    ) {
      toast.error("Please fill in the details");
      return;
    } else if (
      document.getElementById("request-quote-check-privacy").checked === false
    ) {
      toast("Please accept our privacy policy to continue");
      return;
    }
    fetch("https://139-59-5-56.nip.io:3443/contactMail", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        mail: email,
        number: mobile,
        msg: service + "---" + description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        toast.success("Sumbitted. Will soon reach out to you!");
        closeModal();
      })
      .catch((err) => {
        toast.error("Error in sending mail");
      });
  };

  return (
    isRequestModalOpen && (
      <div className="request-quote-modal-container">
        <div className="request-quote-modal">
          <div className="request-quote-modal-close-container">
            <i
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl request-modal-close-button"
            ></i>
          </div>
          <div className="requeset-quote-modal-header">
            Tell us about your Projects
          </div>
          <div className="request-quote-modal-body">
            <div className="request-quote-modal-input-container">
              <input
                value={fullName}
                onChange={onFullNameChange}
                className="request-quote-modal-input-box"
                placeholder="Full Name"
                type="text"
              />
              <div className="requeste-quote-modal-input-warning">
                {fullNameWarning}
              </div>
            </div>
            <div className="request-quote-modal-input-container">
              <input
                value={mobileNumber}
                onChange={onMobileNumberChange}
                className="request-quote-modal-input-box"
                placeholder="Mobile Number"
                type="text"
              />
              <div className="requeste-quote-modal-input-warning">
                {mobileNumberWarning}
              </div>
            </div>
            <div className="request-quote-modal-dropdown-container">
              {/* <select
                value={selectedService}
                onChange={handleSelectedService}
                className="request-quote-modal-dropdown">
                <option value={""}>Choose a Service...</option>
                <option value={"Smart Contract Audit"}>
                  Smart Contract Audit
                </option>
                <option value={"Smart Contract Development"}>
                  Smart Contract Development
                </option>
                <option value={"DAPP Development"}>DAPP Development</option>
                <option value={"Tokenomics Consultation"}>
                  Tokenomics Consultation
                </option>
              </select> */}
              <div
                onClick={toggleDropDown}
                className="request-quote-modal-dropdown"
              >
                <div>{selectedService}</div>
                {dropDown && (
                  <div className="request-quote-modal-dropdown-options">
                    {services.map((service) => {
                      return (
                        <div
                          onClick={() => setSelectedService(service)}
                          className="request-quote-modal-dropdown-option-container"
                        >
                          <div className="request-quote-modal-dropdown-option">
                            {service}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="request-quote-modal-input-container">
              <input
                value={email}
                onChange={onEmailChange}
                className="request-quote-modal-input-box"
                placeholder="Email"
                type="email"
              />
              <div className="requeste-quote-modal-input-warning">
                {emailWarning}
              </div>
            </div>
            <div className="request-quote-modal-textarea-container">
              <textarea
                onChange={onMessageChange}
                className="request-quote-modal-textarea"
              ></textarea>
            </div>
            <div className="request-quote-modal-checkbox-container">
              <input id="request-quote-check-privacy" type="checkbox" />
              <div>
                I agree with the{" "}
                <Link
                  className="text-[#A4CDFF] font-bold"
                  target="_blank"
                  href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                  rel="noreferrer"
                >
                  Privacy Policy
                </Link>{" "}
                and information being used to contact me
              </div>
            </div>
            <div className="request-quote-modal-checkbox-container">
              <input type="checkbox" />
              <div>Get cyber-security research reports .</div>
            </div>
          </div>
          <div className="request-quote-modal-button-container">
            <Button
              onClick={async () => {
                await sendMail({
                  name: fullName,
                  email: email,
                  number: mobileNumber,
                  service: selectedService,
                  description: message,
                });
              }}
              className="w-1/4"
              text={"Submit"}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default RequestQuoteModal;
