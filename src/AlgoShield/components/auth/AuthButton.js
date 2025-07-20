const AuthButton = ({ children, onClick, filled = true }) => {
  return (
    <div className="auth-button-container">
      <button
        onClick={onClick}
        className={`auth-button ${
          !filled
            ? "bg-[#F8FAFC] active:bg-tertiary active:text-black"
            : "bg-[#12D576] text-black active:bg-[#F8FAFC] active:text-black"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default AuthButton;
