import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported
import AuthButton from "../../SolidityShield/components/auth/AuthButton";
import AuthCard from "../../SolidityShield/components/auth/AuthCard";
import AuthInputField from "../../SolidityShield/components/auth/AuthInputField";
import AuthScreenHeader from "../../SolidityShield/components/auth/AuthScreenHeader";

// Function to send OTP using the expressOTP API
const sendOTP = async ({ email }) => {
  try {
    const response = await fetch("https://139-59-5-56.nip.io:3443/expressOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Send OTP when the component mounts and OTPemail is available
  useEffect(() => {
    if (OTPemail) {
      handleSendOTP();
    }
  }, [OTPemail]);

  const handleSendOTP = async () => {
    try {
      const response = await sendOTP({ email: OTPemail });
      if (response.success) {
        setIsOtpSent(true);
        toast.success(response.message);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again.");
    }
  };

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
    <div className="auth-screen-container">
      <div className="auth-screen">
        <AuthScreenHeader
          title="Sign in to your account"
          description="Enter your OTP for verification."
        />
        <div className="auth-screen-body">
          <AuthCard>
            <AuthInputField
              authInputType="text"
              placeholder="Enter OTP"
              onChange={setOtp}
              regexCheck={/^\d{4}$/}
              message="Invalid OTP"
            />
            <AuthButton onClick={handleSubmitOTP}>
              Submit OTP
            </AuthButton>
          </AuthCard>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OTPVerification;
