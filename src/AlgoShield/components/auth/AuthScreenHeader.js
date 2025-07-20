
const AuthScrenHeader = ({ title, description }) => {
  return (
    <div className="auth-screen-header">
      <div className="auth-screen-header-title">{title}</div>
      {description && (
        <div className="auth-screen-header-description">{description}</div>
      )}
    </div>
  );
};

export default AuthScrenHeader;
