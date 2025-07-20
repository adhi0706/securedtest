import AuthCardFooter from "./AuthCardFooter";

const AuthCard = ({ children, footer = false, isLogin = false }) => {
  return (
    <div className="auth-card-container">
      <div className="auth-card">
        {children}
        {footer && (
          <AuthCardFooter
            question={`${
              isLogin ? "Don't have an account?" : "Already have an account"
            }`}
            answer={`${isLogin ? "Sign Up" : "Sign In"}`}
          />
        )}
      </div>
    </div>
  );
};

export default AuthCard;
