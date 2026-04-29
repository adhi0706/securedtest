import React from "react";
import './SolidityShieldMethodology.css';

const SolidityShieldMethodology = () => {
  return (
    <section className="ss-methodology-container">
      <div className="ss-methodology-inner">
        <div className="ss-methodology-content">
          <h2>Our End-to-End Smart Contract Audit Methodology</h2>
          <p>
            Solidity Shield follows a rigorous, multi-layered approach to ensure your smart contracts are secure, 
            optimized, and compliant with industry standards. We combine automated state-of-the-art scanning 
            with expert manual review to identify vulnerabilities that others might miss.
          </p>
          <ul className="ss-methodology-capabilities">
            <li><strong>Smart Contract Source Code Review:</strong> Manual line-by-line review to understand architecture and identify vulnerabilities.</li>
            <li><strong>Test Coverage Analysis:</strong> Evaluation of unit tests to ensure sufficient code coverage and path validation.</li>
            <li><strong>Static Analysis:</strong> Use of advanced automated tools to detect known vulnerability patterns and coding errors.</li>
          </ul>
        </div>
        <div className="ss-methodology-why">
          <h2>Advanced Testing Methods</h2>
          <div className="ss-why-cards">
            <div className="ss-why-card">
              <h4>Symbolic Execution Testing</h4>
              <p>Analysis of execution paths using advanced testing methods such as SMTChecker and taint analysis to ensure mathematical correctness.</p>
            </div>
            <div className="ss-why-card">
              <h4>Property-Based Testing</h4>
              <p>Execution of fuzz tests and invariant testing to validate behavior under thousands of varied and edge-case conditions.</p>
            </div>
            <div className="ss-why-card">
              <h4>Best Practices Review</h4>
              <p>Assessment against global industry standards to improve maintainability, efficiency, and long-term security.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldMethodology;
