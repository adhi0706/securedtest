"use client";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from "react-icons/fa";
import AuthButton from "../../SolidityShield/components/auth/AuthButton";
import AuthCard from "../../SolidityShield/components/auth/AuthCard";
import AuthInputField from "../../SolidityShield/components/auth/AuthInputField";
import AuthScreenHeader from "../../SolidityShield/components/auth/AuthScreenHeader";
  
const sendOTP = async ({ email }) => {
  try {
    const response = await fetch("https://139-59-5-56.nip.io:3443/expressOTP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error("Failed to send OTP");

    const data = await response.json();
    if (data.msg) {
      return { success: true, message: data.msg || "OTP sent successfully!" };
    } else {
      throw new Error(data.message || "OTP sending failed");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error(error.message || "Failed to send OTP");
  }
};

const OTPVerification = ({ onSuccess, OTPemail }) => {
  const [otp, setOtp] = useState("");
  const otpSentRef = useRef(false);

  useEffect(() => {
    const handleSendOTPOnce = async () => {
      if (!OTPemail || otpSentRef.current) return;

      otpSentRef.current = true;
      try {
        const response = await sendOTP({ email: OTPemail });
        if (response.message) {
          toast.success("The OTP for AuditExpress has been sent to your email address. Please verify it to continue with the audit.");
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        toast.error(error.message || "An error occurred. Please try again.");
        otpSentRef.current = false; 
      }
    };

    handleSendOTPOnce();
  }, [OTPemail]);

  const handleSubmitOTP = () => {
    if (otp) {
      localStorage.setItem("UserOtp", otp);
      toast.success("OTP stored successfully!");

      if (onSuccess) {
        onSuccess(otp);
      }
    } else {
      toast.warning("Please enter the OTP.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <AuthScreenHeader
          title="OTP Verification"
          description="To continue with your audit, please enter the OTP sent to your registered email."
        />
        <div className="mt-4">
          <AuthCard>
            <AuthInputField
              authInputType="text"
              placeholder="Enter OTP"
              onChange={setOtp}
              regexCheck={/^\d{4}$/}
              message="Invalid OTP"
            />
            <AuthButton onClick={handleSubmitOTP}>
              <div className="flex items-center justify-center">
                <FaCheckCircle className="mr-2" />
                <p>Validate OTP</p>
              </div>
            </AuthButton>
          </AuthCard>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OTPVerification;
