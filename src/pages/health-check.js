import { useState } from "react";

const RAW_CHATBOT_API = (
  process.env.NEXT_PUBLIC_CHATBOT_API ??
  process.env.NEXT_PUBLIC_API_BASE ??
  ""
).trim();
const CHATBOT_API_BASE = RAW_CHATBOT_API.endsWith("/")
  ? RAW_CHATBOT_API.slice(0, -1)
  : RAW_CHATBOT_API;

export default function HealthCheckPage() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("Click the button to run the test.");

  const handleCheck = async () => {
    if (!CHATBOT_API_BASE) {
      setStatus("error");
      setMessage("NEXT_PUBLIC_CHATBOT_API is not configured.");
      return;
    }

    setStatus("checking");
    setMessage("Checking backend /health ...");
    try {
      const res = await fetch(`${CHATBOT_API_BASE}/health`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({}));
      setStatus("ok");
      setMessage(
        data?.status === "ok"
          ? `Healthy (${data.app || "backend"}, env ${
              data.environment || "n/a"
            })`
          : data?.status || "Healthy"
      );
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Backend unreachable");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#e2e8f0",
        padding: "32px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 24,
          padding: "32px",
          background: "rgba(15,23,42,0.92)",
          boxShadow: "0 25px 65px rgba(2,6,23,0.6)",
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>
          SecureBot Backend Status
        </h1>
        <p style={{ marginBottom: 24, color: "#94a3b8" }}>
          This checks{" "}
          <code
            style={{ color: "#cbd5f5" }}
          >{`$${"{"}CHATBOT_API_BASE || "(unset)"}/health`}</code>{" "}
          from the frontend.
        </p>

        <button
          type="button"
          onClick={handleCheck}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            color: "#020617",
            background: "linear-gradient(135deg, #34d399 0%, #3b82f6 100%)",
            marginBottom: 18,
          }}
        >
          {status === "checking" ? "Checking..." : "Run Health Check"}
        </button>

        <div
          role="status"
          style={{
            padding: "12px 16px",
            borderRadius: 14,
            background:
              status === "ok"
                ? "rgba(34,197,94,0.15)"
                : status === "error"
                ? "rgba(248,113,113,0.15)"
                : "rgba(59,130,246,0.1)",
            border:
              status === "ok"
                ? "1px solid rgba(34,197,94,0.45)"
                : status === "error"
                ? "1px solid rgba(248,113,113,0.45)"
                : "1px solid rgba(59,130,246,0.35)",
            color:
              status === "ok"
                ? "#bbf7d0"
                : status === "error"
                ? "#fecaca"
                : "#cbd5f5",
          }}
        >
          {message}
        </div>
      </div>
    </main>
  );
}
