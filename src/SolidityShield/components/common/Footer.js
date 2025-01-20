const Footer = ({ classname }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        background: "white",
        boxShadow: "0px 2px 4px 0px rgba(62, 73, 84, 0.04)",
        borderRadius: "18px",
      }}
      className="product-footer"
    >
      <div style={{ padding: "12px" }}>
        <p style={{ marginBottom: "2px" }}>Technology partner</p>
        <img
          src="/assets/images/solidity-shield-scan/C3ihub.png"
          alt="C3ihub"
          width="40px"
          style={{ margin: "0 auto" }}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <p style={{ marginBottom: "10px" }}>Sandbox</p>
        <img
          src="/assets/images/solidity-shield-scan/IFSCA.png"
          alt="IFSCA"
          width="50px"
          style={{ margin: "0 auto" }}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <p style={{ marginBottom: "10px" }}>Payments partner</p>
        <img
          src="/assets/images/solidity-shield-scan/phonepe-icon.svg"
          alt="Phonpe"
          width="37px"
          style={{ margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Footer;
