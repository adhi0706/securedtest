import React, { useState } from "react";
import BlogTag from "../blog/BlogTag";

function WhitePaperCard({ details }) {
  // Toast state
  const [showToast, setShowToast] = useState(false);
  // Use subHeading or description for preview
  const preview = details.subHeading || details.description || "";

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", dummyCaptcha: false });
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);


  // Dummy handleDownload and handleSubmit for completeness
  const handleDownload = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.org || !form.dummyCaptcha) {
      setFormError("Please fill all fields and check the captcha.");
      return;
    }
    setFormError("");
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    // Here you would send the email to the API endpoint
    // fetch('/api/addSecurewatchUser', { method: 'POST', body: JSON.stringify({ email: form.email }) })
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {showToast && (
        <div style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.5rem",
          background: "#10B981",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          zIndex: 99999,
          fontWeight: 600,
          fontSize: "1.1rem"
        }}>
          You are subscribed!
        </div>
      )}
      <div
        className="blog-card"
        style={{
          cursor: "default",
          maxWidth: "400px",
          width: "100%",
          margin: "1rem auto",
          boxSizing: "border-box",
        }}
      >
        <div className="blog-card-header">
          <div className="blog-card-header-image-container">
            <img
              layout="intrinsic"
              className="blog-card-header-image"
              src={details.image}
              alt={details.heading}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="blog-card-body">
          <div className="blog-card-body-tags">
            {details.tags &&
              details.tags.split(",").map((tag) => (
                <BlogTag tag={tag} key={tag} onClick={() => {}} />
              ))}
          </div>
          <div className="blog-card-body-header">{details.heading}</div>
          <div className="blog-card-body-preview">{preview}</div>
          <button
            className="blog-card-download"
            style={{
              padding: "0.6rem 1.2rem",
              backgroundColor: "#10B981",
              color: "white",
              borderRadius: "1rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.5rem",
              opacity: 1,
            }}
            onClick={handleDownload}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Whitepaper
          </button>
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
              }}
              onClick={() => setShowModal(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "#fff",
                  borderRadius: "2rem",
                  padding: "3rem 2.5rem",
                  minWidth: "480px",
                  minHeight: "480px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  alignItems: "stretch",
                  maxWidth: "95vw",
                  color: "#222",
                  position: "relative",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "1.2rem",
                    right: "1.2rem",
                    background: "transparent",
                    border: "none",
                    fontSize: "1.7rem",
                    color: "#888",
                    cursor: "pointer",
                    zIndex: 10,
                  }}
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div style={{ fontWeight: 700, fontSize: "1.7rem", marginBottom: "0.5rem", color: "#111" }}>
                  Download Whitepaper
                </div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleInputChange}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "0.9rem",
                        border: "1px solid #e5e7eb",
                        fontSize: "1.1rem",
                        color: "#222",
                      }}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleInputChange}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "0.9rem",
                        border: "1px solid #e5e7eb",
                        fontSize: "1.1rem",
                        color: "#222",
                      }}
                      required
                    />
                    <input
                      type="text"
                      name="org"
                      placeholder="Organization Name"
                      value={form.org}
                      onChange={handleInputChange}
                      style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "0.9rem",
                        border: "1px solid #e5e7eb",
                        fontSize: "1.1rem",
                        color: "#222",
                      }}
                      required
                    />
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", margin: "0.5rem 0" }}>
                      <input
                        type="checkbox"
                        name="dummyCaptcha"
                        checked={form.dummyCaptcha}
                        onChange={handleInputChange}
                        style={{ width: "1.2rem", height: "1.2rem" }}
                      />
                      I'm not a robot
                    </label>
                    {formError && (
                      <div style={{ color: "#ef4444", fontSize: "1rem" }}>{formError}</div>
                    )}
                    <button
                      type="submit"
                      style={{
                        padding: "0.9rem 1.5rem",
                        backgroundColor: "#10B981",
                        color: "white",
                        borderRadius: "1.2rem",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        marginTop: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      Submit
                    </button>
                  </form>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem" }}>
                    <div style={{ fontSize: "1.2rem", color: "#10B981", fontWeight: 600 }}>
                      Thank you! You can now download the whitepaper.
                    </div>
                    <button
                      style={{
                        padding: "0.9rem 1.5rem",
                        backgroundColor: "#10B981",
                        color: "white",
                        borderRadius: "1.2rem",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onClick={() => {
                        setShowModal(false);
                        const link = document.createElement("a");
                        link.href = details.pdfUrl;
                        link.download = "whitepaper.pdf"; // ✅ Force download name
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download Whitepaper
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default WhitePaperCard;

