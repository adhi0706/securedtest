"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageList } from "react-chat-elements";
import { quickReplies, botReplies, guidedFlow } from "./chatFaq";

const RAW_CHATBOT_API = (
  process.env.NEXT_PUBLIC_CHATBOT_API ?? process.env.NEXT_PUBLIC_API_BASE ?? ""
).trim();
const CHATBOT_API_BASE = RAW_CHATBOT_API.endsWith("/")
  ? RAW_CHATBOT_API.slice(0, -1)
  : RAW_CHATBOT_API;

const COMMON_EMAIL_DOMAINS = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "protonmail.com",
];

const COMMON_EMAIL_TLDS = [
  "com",
  "net",
  "org",
  "io",
  "co",
  "ai",
  "app",
  "dev",
  "in",
  "co.uk",
];

const LEVENSHTEIN_THRESHOLD = 2;

const levenshtein = (a = "", b = "") => {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) dp[i][0] = i;
  for (let j = 0; j < cols; j += 1) dp[0][j] = j;
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[rows - 1][cols - 1];
};

const findDomainSuggestion = (domain) => {
  if (!domain) return null;
  const lower = domain.toLowerCase();
  if (COMMON_EMAIL_DOMAINS.includes(lower)) return null;
  let best = null;
  let bestDistance = Infinity;
  for (const candidate of COMMON_EMAIL_DOMAINS) {
    const distance = levenshtein(lower, candidate);
    if (
      distance > 0 &&
      distance <= LEVENSHTEIN_THRESHOLD &&
      distance < bestDistance
    ) {
      best = candidate;
      bestDistance = distance;
    }
  }
  return best;
};

// In-page WhatsApp-style chat widget with LLM streaming via /api/chat
const ASSISTANT_NAME = "SecureDApp Team";

const ChatWidget = ({
  bottomOffset = 96,
  rightOffset = 20,
  mobileBottomOffset = 140,
  mobileTopReserve = 72,
  desktopTopReserve = 72,
}) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      position: "left",
      type: "text",
      title: ASSISTANT_NAME,
      text: botReplies.default,
      date: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [guidedFlowStep, setGuidedFlowStep] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let stored = null;
    try {
      stored = JSON.parse(localStorage.getItem("chatUserInfo") || "null");
    } catch {
      // ignore
    }

    if (stored) {
      setUserInfo(stored);
      setShowForm(false);
      setFormStep(4);
      setFormData((prev) => ({ ...prev, ...stored }));
      const greetingText = `Thanks, ${stored.name}. What can ${ASSISTANT_NAME} handle for you next?`;
      setMessages((prev) => {
        if (prev.some((msg) => msg.text === greetingText)) return prev;
        return prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: greetingText,
          date: new Date(),
        });
      });
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Validation helpers
  const isEmail = (v) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v);
  const isPhone = (v) => {
    const digits = v.replace(/\D/g, "");
    return /^\d{10}$/.test(digits);
  };

  const [savingInfo, setSavingInfo] = useState(false);
  const advanceStep = () => setFormStep((prev) => Math.min(prev + 1, 4));
  const retreatStep = () => setFormStep((prev) => Math.max(prev - 1, 0));

  const setFieldError = (key, message) => {
    setFieldErrors((prev) => ({ ...prev, [key]: message }));
  };

  const clearFieldError = (key) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const fieldOrder = [
    { key: "name", label: "Full Name", placeholder: "Enter your full name" },
    { key: "email", label: "Email", placeholder: "Enter your email address" },
    { key: "phone", label: "Phone", placeholder: "Enter your phone number" },
    {
      key: "company",
      label: "Company",
      placeholder: "Enter your company name",
    },
  ];

  const validateStep = () => {
    const current = fieldOrder[formStep];
    if (!current) return false;
    const value = formData[current.key]?.trim() ?? "";
    clearFieldError(current.key);
    if (!value) {
      setFieldError(current.key, `${current.label} is required.`);
      return false;
    }
    if (current.key === "email") {
      if (!isEmail(value)) {
        setFieldError(current.key, "Please enter a valid email address.");
        return false;
      }
      const domain = value.split("@")[1]?.trim().toLowerCase() ?? "";
      const suggestion = findDomainSuggestion(domain);
      if (suggestion) {
        setFieldError(
          current.key,
          `Please double-check your email domain. Did you mean ${suggestion}?`
        );
        return false;
      }
      const tld = domain.split(".").slice(-2).join(".");
      const topLevel = domain.split(".").pop();
      const normalizedTld = COMMON_EMAIL_TLDS.includes(tld) ? tld : topLevel;
      const isKnownTld = COMMON_EMAIL_TLDS.some((allowed) => {
        if (allowed === normalizedTld) return true;
        if (allowed.includes(".")) {
          return domain.endsWith(allowed);
        }
        return normalizedTld === allowed;
      });
      if (!isKnownTld || (normalizedTld ?? "").length < 2) {
        setFieldError(
          current.key,
          "The email domain ending looks unusual. Please verify the extension (e.g., .com, .in)."
        );
        return false;
      }
    }
    if (current.key === "phone" && !isPhone(value)) {
      setFieldError(current.key, "Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e?.preventDefault?.();
    const lastIndex = fieldOrder.length - 1;
    if (formStep <= lastIndex) {
      if (!validateStep()) return;
      if (formStep < lastIndex) {
        advanceStep();
        return;
      }
    }

    const { name, email, phone, company } = formData;
    setSavingInfo(true);
    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
      };

      const endpoint = CHATBOT_API_BASE
        ? `${CHATBOT_API_BASE}/chatbot/form-submit`
        : "/api/form-submit";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Failed to submit: HTTP ${res.status}`);
      }

      localStorage.setItem("chatUserInfo", JSON.stringify(payload));
      setUserInfo(payload);
      setShowForm(false);
      setFormStep(fieldOrder.length);
      setFieldErrors({});
      setGlobalError("");

      // Start the guided flow
      const startNode = guidedFlow.start;
      setMessages((prev) =>
        prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: startNode.message,
          date: new Date(),
        })
      );
      setGuidedFlowStep("start");
    } catch (err) {
      console.error("ChatWidget form submit error", err);
      setGlobalError(
        err.message || "Could not save your details. Please try again."
      );
    } finally {
      setSavingInfo(false);
    }
  };

  // Track viewport for responsive panel
  useEffect(() => {
    const onResize = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto scroll to bottom when messages/panel change
  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const containerStyles = useMemo(() => {
    const safeInset =
      typeof window !== "undefined"
        ? Number(
            getComputedStyle(document.documentElement)
              .getPropertyValue("env(safe-area-inset-bottom)")
              .replace("px", "")
          ) || 0
        : 0;
    const mobileBottom = (mobileBottomOffset ?? bottomOffset + 24) + safeInset;
    return {
      position: "fixed",
      right: isMobile ? "12px" : `${rightOffset}px`,
      bottom: isMobile ? `${mobileBottom}px` : `${bottomOffset}px`,
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "12px",
      fontFamily: "inherit",
      pointerEvents: "none",
    };
  }, [bottomOffset, rightOffset, isMobile, mobileBottomOffset]);

  const panelStyles = useMemo(() => {
    const sidePadding = isMobile ? 8 : 0;
    const currentBottom = isMobile
      ? mobileBottomOffset ?? bottomOffset + 24
      : bottomOffset;
    const topMargin = isMobile ? mobileTopReserve : desktopTopReserve;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 900;
    const mobileTarget = viewportHeight <= 640 ? "74vh" : "72vh";
    const desired = isMobile ? mobileTarget : "520px";
    return {
      width: isMobile
        ? `calc(100vw - ${sidePadding * 2}px)`
        : "min(380px, 94vw)",
      height: `min(${desired}, calc(100vh - ${currentBottom + topMargin}px))`,
      background:
        "linear-gradient(200deg, rgba(3,11,26,0.96) 0%, rgba(4,24,54,0.92) 55%, rgba(7,39,78,0.88) 100%)",
      borderRadius: isMobile ? "22px 22px 0 22px" : "26px",
      boxShadow:
        "0 28px 80px rgba(1,9,25,0.78), 0 0 0 1px rgba(14,97,185,0.25)",
      border: "1px solid rgba(27,92,152,0.35)",
      overflow: "hidden",
      backdropFilter: "blur(14px)",
      display: open ? "flex" : "none",
      flexDirection: "column",
      pointerEvents: "auto",
    };
  }, [
    open,
    isMobile,
    bottomOffset,
    mobileBottomOffset,
    mobileTopReserve,
    desktopTopReserve,
  ]);

  const headerStyles = {
    padding: isMobile ? "16px 18px" : "18px 20px",
    background: "rgba(3,15,34,0.92)",
    borderBottom: "1px solid rgba(37,148,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#f8fafc",
    minHeight: 58,
    backdropFilter: "blur(16px)",
  };

  const inputBarStyles = {
    padding: isMobile ? "10px 12px" : "14px 18px",
    borderTop: "1px solid rgba(32,123,224,0.18)",
    display: "flex",
    gap: "12px",
    background: "rgba(2,12,30,0.9)",
  };

  // Convert UI messages to LLM history
  const toHistory = () => {
    const out = [];
    for (const m of messages) {
      if (m.position === "right") out.push({ role: "user", content: m.text });
      if (m.position === "left")
        out.push({ role: "assistant", content: m.text });
    }
    return out.slice(-20); // cap
  };

  // Stream from /api/chat
  const streamFromAPI = async (userText) => {
    if (showForm) {
      setGlobalError("Please complete the contact form to start chatting.");
      return;
    }
    try {
      setTyping(true);
      setGlobalError("");
      const endpoint = CHATBOT_API_BASE ? `${CHATBOT_API_BASE}/chat` : "/api/chat";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: toHistory() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => null);
      const assistantText =
        data?.reply?.trim() ||
        "I'm processing your request. Could you rephrase if needed?";
      setMessages((prev) =>
        prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: assistantText,
          date: new Date(),
        })
      );
    } catch (e) {
      setMessages((prev) =>
        prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: "An error occurred while processing your request.",
          date: new Date(),
        })
      );
    } finally {
      setTyping(false);
    }
  };

  const handleSend = async () => {
    if (showForm) {
      setGlobalError("Please complete the contact form to start chatting.");
      return;
    }
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) =>
      prev.concat({
        position: "right",
        type: "text",
        title: "You",
        text,
        date: new Date(),
      })
    );
    await streamFromAPI(text);
  };

  const handleQuickReply = (id) => {
    if (showForm) {
      setGlobalError("Please complete the contact form to use quick replies.");
      return;
    }
    const label = quickReplies.find((q) => q.id === id)?.label || id;
    const canned = botReplies[id];
    setMessages((prev) =>
      prev.concat({
        position: "right",
        type: "text",
        title: "You",
        text: label,
        date: new Date(),
      })
    );

    if (canned) {
      setMessages((prev) =>
        prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: canned,
          date: new Date(),
        })
      );
      return;
    }

    const fallback = botReplies.default;
    setMessages((prev) =>
      prev.concat({
        position: "left",
        type: "text",
        title: ASSISTANT_NAME,
        text: fallback,
        date: new Date(),
      })
    );
  };

  const handleGuidedFlowReply = (option) => {
    // Add user's choice to messages
    setMessages((prev) =>
      prev.concat({
        position: "right",
        type: "text",
        title: "You",
        text: option.label,
        date: new Date(),
      })
    );

    const nextStepId = option.id;
    const nextNode = guidedFlow[nextStepId];

    if (nextNode) {
      // Add bot's next message
      setMessages((prev) =>
        prev.concat({
          position: "left",
          type: "text",
          title: ASSISTANT_NAME,
          text: nextNode.message,
          date: new Date(),
        })
      );

      if (nextNode.end || nextNode.switchToFreeText) {
        setGuidedFlowStep(null); // End of flow or switch to free text
      } else {
        setGuidedFlowStep(nextStepId); // Go to next step
      }
    }
  };

  return (
    <div style={containerStyles} aria-live="polite">
      <div style={panelStyles} role="dialog" aria-label="SecureDApp chat">
        <div style={headerStyles}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              minWidth: 0,
              flex: 1,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                background: "#2ce6c2",
                boxShadow: "0 0 16px rgba(44,230,194,0.55)",
                display: "inline-block",
              }}
            />
            <div style={{ minWidth: 0 }}>
              <strong
                style={{
                  display: "block",
                  width: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: 1.25,
                  fontSize: isMobile ? 16 : 19,
                }}
              >
                {ASSISTANT_NAME}
              </strong>
              <span
                style={{
                  display: "block",
                  color: "#9ab6d8",
                  fontSize: 12,
                  letterSpacing: 0.2,
                }}
              >
                Blockchain security assistant
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              background: "transparent",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            ×
          </button>
        </div>

        {showForm ? (
          <form
            onSubmit={handleFormSubmit}
            style={{ padding: isMobile ? 18 : 22, display: "grid", gap: 16 }}
            aria-label="User Information"
          >
            <div
              style={{
                color: "#e2e8f0",
                fontWeight: 600,
                fontSize: isMobile ? 15 : 16,
              }}
            >
              Let us know how to reach you
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <label
                style={{ color: "#8ea5c7", fontSize: 13, letterSpacing: 0.25 }}
                htmlFor={`chat-form-${fieldOrder[formStep]?.key}`}
              >
                {fieldOrder[formStep]?.label}
              </label>
              <input
                id={`chat-form-${fieldOrder[formStep]?.key}`}
                value={formData[fieldOrder[formStep]?.key] ?? ""}
                onChange={(e) => {
                  clearFieldError(fieldOrder[formStep]?.key);
                  setGlobalError("");
                  setFormData((s) => ({
                    ...s,
                    [fieldOrder[formStep]?.key]: e.target.value,
                  }));
                }}
                placeholder={fieldOrder[formStep]?.placeholder}
                aria-label={fieldOrder[formStep]?.label}
                inputMode={
                  fieldOrder[formStep]?.key === "phone"
                    ? "tel"
                    : fieldOrder[formStep]?.key === "email"
                    ? "email"
                    : "text"
                }
                style={{
                  padding: "13px 16px",
                  borderRadius: 14,
                  border: "1px solid rgba(41,124,220,0.35)",
                  background: "rgba(5,19,44,0.82)",
                  color: "#f8fafc",
                  boxShadow: "0 16px 44px rgba(5,29,62,0.3)",
                  transition: "border 0.2s ease, box-shadow 0.2s ease",
                }}
                autoFocus
              />
              {fieldErrors[fieldOrder[formStep]?.key] && (
                <div
                  role="alert"
                  aria-live="assertive"
                  style={{
                    color: "#f87171",
                    fontSize: 12,
                    lineHeight: 1.4,
                    background: "rgba(248, 113, 113, 0.12)",
                    border: "1px solid rgba(248, 113, 113, 0.35)",
                    borderRadius: 12,
                    padding: "8px 12px",
                  }}
                >
                  {fieldErrors[fieldOrder[formStep]?.key]}
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <button
                type="button"
                onClick={retreatStep}
                disabled={formStep === 0 || savingInfo}
                style={{
                  flex: 1,
                  background:
                    formStep === 0
                      ? "rgba(11,26,54,0.7)"
                      : "rgba(10,33,70,0.55)",
                  color: formStep === 0 ? "#637598" : "#dceafe",
                  border: "1px solid rgba(47,86,148,0.38)",
                  borderRadius: 16,
                  padding: "11px 14px",
                  fontWeight: 600,
                  cursor: formStep === 0 ? "not-allowed" : "pointer",
                  transition: "transform 0.2s ease, border 0.2s ease",
                }}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={savingInfo}
                style={{
                  flex: 1,
                  background: savingInfo
                    ? "rgba(18,121,102,0.9)"
                    : "linear-gradient(135deg, #31e0c0 0%, #1f78ff 100%)",
                  opacity: savingInfo ? 0.7 : 1,
                  color: "#041225",
                  border: "none",
                  borderRadius: 16,
                  padding: "12px 16px",
                  fontWeight: 700,
                  cursor: savingInfo ? "wait" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: savingInfo
                    ? "none"
                    : "0 16px 36px rgba(21,152,203,0.35)",
                }}
              >
                {formStep < fieldOrder.length - 1
                  ? "Next"
                  : savingInfo
                  ? "Saving..."
                  : "Start Chat"}
              </button>
            </div>
          </form>
        ) : (
          <div
            ref={listRef}
            className="cipher-scroll"
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              background: "transparent",
              padding: isMobile ? "8px" : "12px",
            }}
          >
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={messages}
              aria-label="Conversation"
            />
          </div>
        )}

        {typing && (
          <div
            style={{
              padding: "8px 16px",
              fontSize: 12,
              opacity: 0.85,
              color: "#cbd5e1",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 4 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "#5ca4ff",
                  borderRadius: "50%",
                  animation: "typingDot 1.4s infinite ease-in-out",
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "#5ca4ff",
                  borderRadius: "50%",
                  animation: "typingDot 1.4s infinite ease-in-out 0.2s",
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "#5ca4ff",
                  borderRadius: "50%",
                  animation: "typingDot 1.4s infinite ease-in-out 0.4s",
                }}
              />
            </div>
            {ASSISTANT_NAME} is typing…
            <style>{`
              @keyframes typingDot {
                0%, 80%, 100% { opacity: 0.25; transform: translateY(0); }
                40% { opacity: 1; transform: translateY(-2px); }
              }
            `}</style>
          </div>
        )}

        <div
          style={{
            padding: "6px 10px",
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            overflowX: "auto",
            opacity: showForm ? 0.5 : 1,
          }}
        >
          {guidedFlowStep && guidedFlow[guidedFlowStep]?.options
            ? guidedFlow[guidedFlowStep].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleGuidedFlowReply(option)}
                  style={{
                    background: "rgba(59,130,246,0.18)",
                    color: "#e2e8f0",
                    border: "1px solid rgba(148,163,184,0.15)",
                    borderRadius: 16,
                    padding: "6px 12px",
                    fontSize: 12,
                    letterSpacing: 0.2,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {option.label}
                </button>
              ))
            : quickReplies.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQuickReply(q.id)}
                  disabled={showForm || !!guidedFlowStep}
                  style={{
                    background:
                      showForm || !!guidedFlowStep
                        ? "rgba(15,23,42,0.6)"
                        : "rgba(59,130,246,0.18)",
                    color: "#e2e8f0",
                    border: "1px solid rgba(148,163,184,0.15)",
                    borderRadius: 16,
                    padding: "6px 12px",
                    fontSize: 12,
                    letterSpacing: 0.2,
                    cursor:
                      showForm || !!guidedFlowStep ? "not-allowed" : "pointer",
                    opacity: showForm || !!guidedFlowStep ? 0.55 : 1,
                    transition: "all 0.2s ease",
                  }}
                >
                  {q.label}
                </button>
              ))}
        </div>

        {globalError && (
          <div
            role="alert"
            aria-live="assertive"
            style={{
              color: "#f87171",
              fontSize: 12,
              lineHeight: 1.4,
              background: "rgba(248, 113, 113, 0.12)",
              border: "1px solid rgba(248, 113, 113, 0.35)",
              borderRadius: 12,
              padding: "8px 12px",
              margin: "6px 16px",
            }}
          >
            {globalError}
          </div>
        )}

        <div
          style={{
            ...inputBarStyles,
            opacity: showForm || !!guidedFlowStep ? 0.6 : 1,
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={
              guidedFlowStep ? "Select an option above" : "Type your message…"
            }
            aria-label="Type your message"
            style={{
              flex: 1,
              background: "rgba(4,18,42,0.84)",
              color: "#f8fafc",
              border: "1px solid rgba(55,122,228,0.3)",
              borderRadius: 16,
              padding: "13px 18px",
              outline: "none",
              transition: "border 0.2s ease, box-shadow 0.2s ease",
              boxShadow: showForm ? "none" : "0 18px 42px rgba(4,26,56,0.4)",
            }}
            disabled={showForm || !!guidedFlowStep}
          />
          <button
            onClick={handleSend}
            disabled={showForm || !!guidedFlowStep}
            style={{
              background:
                !showForm && input.trim() && !guidedFlowStep
                  ? "linear-gradient(135deg, #30e0be 0%, #1e8fff 100%)"
                  : "rgba(4,18,42,0.7)",
              color:
                !showForm && input.trim() && !guidedFlowStep
                  ? "#021530"
                  : "#9fb4d2",
              border: "none",
              borderRadius: 16,
              padding: "12px 20px",
              fontWeight: 700,
              cursor:
                !showForm && input.trim() && !guidedFlowStep
                  ? "pointer"
                  : "not-allowed",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            aria-disabled={showForm || !input.trim() || !!guidedFlowStep}
          >
            Send
          </button>
        </div>
      </div>

      {(() => {
        const size = isMobile ? 56 : 68;
        const dynamicLauncherStyles = {
          width: size,
          height: size,
          borderRadius: size / 2,
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(135deg, #0ea5e9 0%, #16a34a 100%)",
          color: "#ffffff",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          boxShadow:
            "0 10px 24px rgba(16, 185, 129, 0.35), 0 0 0 2px rgba(255,255,255,0.08) inset",
        };
        return (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close chat" : "Open chat"}
            style={{ ...dynamicLauncherStyles, pointerEvents: "auto" }}
            title={open ? "Close chat" : "Chat with SecureDApp"}
          >
            {open ? (
              // Close icon (high contrast)
              <svg
                width={isMobile ? 20 : 22}
                height={isMobile ? 20 : 22}
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.35))" }}
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#ffffff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Shield icon (solid white strokes for visibility)
              <svg
                width={isMobile ? 26 : 30}
                height={isMobile ? 26 : 30}
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.35))" }}
              >
                <path
                  d="M12 3l6 2v5c0 5-3.4 8.6-6 9.8C9.4 18.6 6 15 6 10V5l6-2z"
                  fill="#ffffff"
                />
                <path
                  d="M9.5 11.5l2 2 3.5-3.5"
                  fill="none"
                  stroke="#0b1222"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        );
      })()}
    </div>
  );
};

export default ChatWidget;