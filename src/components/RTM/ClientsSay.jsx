import React from 'react';
import SectionHeader from '../common/SectionHeader';

const testimonials = [
  {
    quote: "SecureDApp's smart contract audit team demonstrated exceptional thoroughness and professionalism. Their attention to detail in identifying vulnerabilities gave us complete confidence in our deployment.",
    name: "Mr. Romit Goswami",
    title: "Founder, Zapit"
  },
  {
    quote: "We trust SecureDApp to minimize vulnerabilities across our entire blockchain infrastructure. Their expertise in blockchain security is truly world-class.",
    name: "Mr. Basheer",
    title: "Founder, E-Riyal"
  },
  {
    quote: "SecureDApp's platform security solutions gave us the peace of mind we needed to launch confidently. Their team is deeply knowledgeable and responsive.",
    name: "Mr. A Mohammed Eshan",
    title: "Founder, Bits Estate"
  }
];

const tags = [
  "CMMI Level 3 Certified",
  "Launched at IIT Kanpur C3iHub",
  "100+ Projects Secured",
  "Emerging Trends in Cybersecurity 2024"
];

const ClientsSay = () => {
  return (
    <section className="rtm-csay-container">
      <div className="rtm-csay-inner">
        <SectionHeader 
          label="Testimonials" 
          title={<>What Our <span className="text-[#00ff88]">Clients Say</span></>} 
        />
        
        <div className="rtm-csay-grid mt-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rtm-csay-card">
              <div className="rtm-csay-quote-icon">"</div>
              <p className="rtm-csay-quote">"{t.quote}"</p>
              <div className="rtm-csay-author">
                <h4 className="rtm-csay-name">{t.name}</h4>
                <p className="rtm-csay-title-sub">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rtm-csay-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="rtm-csay-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSay;
