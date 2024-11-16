import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimes } from "react-icons/fa";

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

const OTPVerification = ({ onSuccess, OTPemail, onClose }) => {
  const [otp, setOtp] = useState("");
  const otpSentRef = useRef(false);
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    const handleSendOTPOnce = async () => {
      if (!OTPemail || otpSentRef.current) return;
      otpSentRef.current = true;
      try {
        const response = await sendOTP({ email: OTPemail });
        if (response.message) {
          toast.success("OTP sent successfully!");
        } else {
          toast.error("Failed to send OTP.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.log(error);
        otpSentRef.current = false;
      }
    };
    handleSendOTPOnce();
  }, [OTPemail]);

  const handleSubmitOTP = () => {
    if (otp) {
      localStorage.setItem("UserOtp", otp);
      toast.success("OTP stored successfully!");
      if (onSuccess) onSuccess(otp);
    } else {
      toast.warning("Please enter the OTP.");
    }
  };

  return (
    <div id="poppins-regular" className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className={`relative w-full max-w-sm p-6 rounded-lg shadow-lg ${theme === "dark" ? "bg-[#001938] text-white" : "bg-white text-black"}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">OTP Verification</h2>
          <p className="mt-2 text-sm text-gray-500">Enter the OTP sent to your registered email to continue.</p>
        </div>

        {/* OTP Input Field */}
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 mb-4 text-lg text-black border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          {/* Submit Button */}
          <button
            onClick={handleSubmitOTP}
            className="w-full flex items-center justify-center gap-2 py-2 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaCheckCircle />
            Validate OTP
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default OTPVerification;
