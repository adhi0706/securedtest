const AuthCardFooter = ({ question, answer }) => {
  return (
    <div className="auth-card-footer">
      <div className="auth-card-footer-question">{question}</div>
      <div className="auth-card-footer-answer">{answer}</div>
    </div>
  );
};

export default AuthCardFooter;
