import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthButton from "../../components/auth/AuthButton";
import Footer from "../../components/common/Footer";

export const AuthInputFieldContainer = ({ label, InputField }) => {
  return (
    <div className="auth-input-field-div">
      <div className="auth-input-field-div-label">{label}</div>
      {InputField}
    </div>
  );
};

const ContactUs = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      number.length === 0 ||
      message.length < 3
    ) {
      toast.error("Please fill in the details");
      return;
    } else if (
      document.getElementById("contactus-check-privacy").checked === false
    ) {
      toast("Please accept our privacy policy to continue");
      return;
    }
    fetch("https://139-59-5-56.nip.io:3443/contactMail", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        mail: email,
        number: number,
        msg: `Solidity Shield - ${message}`,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        toast.success("Sumbitted. Will soon reach out to you!");
      })
      .catch((err) => {
        toast.error("Error in sending mail");
      });
  };

  return (
    <div className="contact-us-container">
      <div style={{ marginTop: "30px" }} className="contact-us">
        <div className="contact-us-header">
          <div className="contact-us-header-label">Contact Us</div>
          <div className="contact-us-header-title">Get in Touch</div>
          <div className="contact-us-header-description">
            We'd love to hear from you. Please fill out this form.
          </div>
        </div>
        <div className="contact-us-body">
          <div className="contact-us-body-name">
            <AuthInputFieldContainer
              label={"First Name"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"Full Name"}
                  onChange={setName}
                />
              }
            />
            {/* <AuthInputFieldContainer
              label={"Last Name"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"Last Name"}
                />
              }
            /> */}
          </div>
          <div className="contact-us-body-email">
            <AuthInputFieldContainer
              label={"Email"}
              InputField={
                <AuthInputField
                  authInputType={"email"}
                  placeholder={"you@company.com"}
                  onChange={setEmail}
                />
              }
            />
          </div>
          <div className="contact-us-body-number">
            <AuthInputFieldContainer
              label={"Phone number"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"+1 (555) 000-0000"}
                  onChange={setNumber}
                />
              }
            />
          </div>
          <div className="contact-us-body-message">
            <div className="auth-input-field-div-label">{"Message"}</div>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="contact-us-body-message-textarea"
            />
          </div>
          <div className="contact-us-body-privacy">
            <input id="contactus-check-privacy" type="checkbox" />
            <div className="contact-us-body-privacy-message">
              You agree to our friendly
              <Link
                href={
                  "https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                }
                className="contact-us-body-privacy-link"
              >
                privacy policy
              </Link>
            </div>
          </div>
          <div
            style={{ marginBottom: "20px" }}
            className="contact-us-body-button"
          >
            <AuthButton onClick={sendMail} filled={true}>
              Send Message
            </AuthButton>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
