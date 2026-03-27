import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need to change my smart contract code to use SecureWatch?",
    answer: "No. SecureWatch operates entirely off-chain, monitoring public and mempool data without requiring any modifications to your deployed contracts."
  },
  {
    question: "How fast does SecureWatch detect an exploit?",
    answer: "SecureWatch analyzes transactions within the mempool (before they are finalized), meaning it can often detect and theoretically mitigate threats in real-time, under 12 seconds."
  },
  {
    question: "Can it automatically pause my contract?",
    answer: "Yes. If your protocol supports pausable architecture (like OpenZeppelin's Pausable), we can trigger an automated transaction to halt activity when a severe threat score is reached."
  },
  {
    question: "What blockchains do you support?",
    answer: "We natively support Ethereum, Binance Smart Chain, Polygon, Avalanche, Arbitrum, and Optimism. Custom integrations for non-EVM chains are available on the Fortress plan."
  }
];

const RTMFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="rtm-faq-container">
      <div className="rtm-faq-inner">
        <h2>Frequently Asked Questions</h2>
        <div className="rtm-faq-list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`rtm-faq-item ${activeIndex === i ? 'active' : ''}`}
            >
              <div className="rtm-faq-question" onClick={() => toggleFAQ(i)}>
                <h4>{faq.question}</h4>
                <span className="rtm-faq-icon">{activeIndex === i ? '−' : '+'}</span>
              </div>
              <div className="rtm-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTMFAQ;
