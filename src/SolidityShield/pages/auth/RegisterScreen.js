import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthLogos from "../../components/auth/AuthLogos";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";

const RegisterScreen = () => {
  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <AuthScrenHeader title={"Sign in to your account"} description={""} />
        <div className="auth-screen-body">
          <AuthCard footer={true} isLogin={false}>
            <AuthInputField
              authInputType={"text"}
              placeholder={"First & Last Name"}
            />
            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
            />
            <AuthInputField
              authInputType={"password"}
              placeholder={"Create Password"}
            />
            <div className="login-screen-body-options">
              <div className="login-screen-remember-me">
                <input type="checkbox" />
                <div>
                  I agree with the{" "}
                  <span className="text-[#2563EB] cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  of SecureDApp
                </div>
              </div>
            </div>
            <AuthButton children={"Sign Up"} onClick={() => {}} />
            {/* <AuthButton filled={false}>
              <div className="auth-screen-google">
                <img layout="intrinsic"   layout="intrinsic"   
                  src="/assets/images/solidity-shield-scan/google-logo.svg"
                  alt="Google Logo"
                />
                <div>Sign in With Google</div>
              </div>
            </AuthButton> */}
            <div className="auth-logos-cards">
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/google-logo.svg" />
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/metamask.svg" />
              <AuthLogos imagePath="/assets/images/solidity-shield-scan/github-icon.svg" />
            </div>
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
