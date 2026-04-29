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
        <p className="text-secondary opacity-60 text-sm mb-2">Technology partner</p>
        <img
          src="/assets/images/solidity-shield-scan/casper-icon.svg"
          alt="Casper"
          width="40px"
          style={{ margin: "0 auto" }}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <p className="text-secondary opacity-60 text-sm mb-2">Sandbox</p>
        <img
          src="/assets/images/solidity-shield-scan/ifsca-icon.svg"
          alt="IFSCA"
          width="50px"
          style={{ margin: "0 auto" }}
        />
      </div>
      <div style={{ padding: "12px" }}>
        <p className="text-secondary opacity-60 text-sm mb-2">Payments partner</p>
        <img
          src="/assets/images/solidity-shield-scan/phonepe-icon.svg"
          alt="PhonePe"
          width="37px"
          style={{ margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Footer;
