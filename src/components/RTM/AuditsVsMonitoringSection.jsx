import React from 'react';
import SectionHeader from '../common/SectionHeader';

const tableData = [
  {
    method: "Smart Contract Audit",
    purpose: "Identifies code vulnerabilities before deployment",
    limitations: "One-time evaluation",
    role: "Prevents coding flaws before launch"
  },
  {
    method: "Traditional SIEM Monitoring",
    purpose: "Monitors servers, logs, and network infrastructure",
    limitations: "Cannot analyze blockchain transactions",
    role: "Protects traditional IT systems"
  },
  {
    method: "SecureWatch Monitoring",
    purpose: "Analyzes blockchain transactions and contract behavior in real time",
    limitations: "Requires integration with protocol infrastructure",
    role: "Provides continuous on-chain protection"
  }
];

const AuditsVsMonitoringSection = () => {
  return (
    <section className="avm-container">
      <div className="avm-header mb-8">
        <SectionHeader 
          label="Comparison" 
          title={<>Smart Contract Audits vs <span className="text-[#00ff88]">Blockchain Monitoring</span></>} 
        />
        <p className="avm-subtitle">
          Smart contract audits and continuous monitoring serve different roles in a comprehensive security strategy. Using both provides layered security for decentralized platforms.
        </p>
      </div>

      <div className="avm-table-wrapper">
        <table className="avm-table">
          <thead>
            <tr>
              <th>Security Method</th>
              <th>Purpose</th>
              <th>Limitations</th>
              <th className="avm-role-header">Role in Security</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td className="avm-method-col">{row.method}</td>
                <td>{row.purpose}</td>
                <td>{row.limitations}</td>
                <td className="avm-role-col">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AuditsVsMonitoringSection;
