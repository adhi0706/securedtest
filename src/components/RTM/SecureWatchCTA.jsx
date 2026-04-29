import React from 'react';

const ctaCheckmarks = [
    "No contract modifications required",
    "Continuous 24/7 monitoring",
    "Patent-protected technology"
];

const SecureWatchCTA = () => {
    return (
        <section className="rtm-swcta-container">
            <div className="rtm-swcta-inner">
                <h2 className="rtm-swcta-title">
                    Don't Wait for the Exploit. <span className="highlight">Protect Your Protocol Today.</span>
                </h2>
                <div className="rtm-swcta-desc-container">
                    <p className="rtm-swcta-desc">Join 120+ blockchain companies that monitor threats in real time with SecureWatch.</p>
                    <p className="rtm-swcta-desc">Start with a demo to see how continuous monitoring protects your protocol.</p>
                </div>
                
                <div className="rtm-swcta-buttons">
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp" target="_blank" rel="noopener noreferrer" className="rtm-swcta-btn rtm-swcta-btn-primary">
                        Book a Demo <span>&#8594;</span>
                    </a>
                    <a href="https://securewatch.securedapp.io/signup" target="_blank" rel="noopener noreferrer" className="rtm-swcta-btn rtm-swcta-btn-outline">
                        Start Monitoring in Minutes
                    </a>
                </div>

                <div className="rtm-swcta-checkmarks">
                    {ctaCheckmarks.map((item, idx) => (
                        <div key={idx} className="rtm-swcta-check-item">
                            <span className="rtm-swcta-check-icon">✓</span>
                            <span className="rtm-swcta-check-text">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecureWatchCTA;
