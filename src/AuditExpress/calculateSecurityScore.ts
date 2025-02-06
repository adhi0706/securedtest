export type Vulnerability = {
  type: string;
  reason: string;
};

export type VulnerabilityCount = {
  critical: number;
  high: number;
  medium: number;
  low: number;
  informational: number;
  gas: number;
};

export type AuditReport = {
  vulnerabilityCount: VulnerabilityCount;
  vulnerabilities: Vulnerability[];
};
export const calculateSecurityScore = (report: AuditReport): number => {
  const { critical, high, medium } = report.vulnerabilityCount;

  // Ensure that critical, high, and medium are numbers
  const criticalCount = Number(critical) || 0;
  const highCount = Number(high) || 0;
  const mediumCount = Number(medium) || 0;

  // Calculate the total number of critical, high, and medium vulnerabilities
  const totalVulnerabilities = criticalCount + highCount + mediumCount;

  // Apply the formula: score = 5 - ((critical + high + medium) / 30) * 5
  let score = 5 - (totalVulnerabilities / 30) * 5;

  // Scale the score from 0-5 to 0-100
  const scaledScore = score * 20;

  // Ensure the score is within the 0-100 range
  return Math.max(0, Math.min(100, scaledScore));
};

// export default calculateSecurityScore;
