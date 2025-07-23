import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import { sendOTP, verifyOTP, getUser } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, login } from "../../redux/auth/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const user = auth.user;
  const navigate = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [button, setButton] = useState("Send OTP");

  useEffect(() => {
    localStorage.getItem("UserJwtToken") &&
      navigate.push("/algoshield");
    console.log(user);
  });

  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <AuthScrenHeader
          title={"Sign in to your account"}
          description={
            "AlgoShield: Instantly scan your Algorand smart contracts, uncover vulnerabilities with fixes, get a safety score, and download a full audit report—all in under a minute!"
          }
        />
        <div className="auth-screen-body">
          <AuthCard>
            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
              onChange={setEmail}
              regexCheck={/^\S+@\S+\.\S+$/}
              message={"Invalid Email"}
            />
            {button === "Log In" ? (
              <AuthInputField
                authInputType={"text"}
                placeholder={"OTP"}
                onChange={setOtp}
                regexCheck={/^\d{4}$/}
                message={"Invalid OTP"}
              />
            ) : null}
            <AuthButton
              children={button}
              onClick={async () => {
                if (button === "Send OTP") {
                  await sendOTP({
                    email,
                    dispatch,
                    selector: user,
                  });
                  setButton("Log In");
                } else {
                  await verifyOTP({ email, otp, dispatch });
                  setButton("Send OTP");
                  //navigate.push("/solidity-shield-scan/overview");
                  console.log(user);
                }
              }}
            />
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
