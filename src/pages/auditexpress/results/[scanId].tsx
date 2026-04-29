import { useRouter } from "next/router";
import ScanPage from "../../../AuditExpress/ScanPage"; // Adjust the path to where your ScanPage component is located

const ScanResultPage = () => {
  const router = useRouter();
  const { scanId, score, vulnerabilityCount, lines, duration } = router.query;
  // console.log(scanId);

  // console.log(lines);

  // Parse vulnerabilityCount from string back to object
  const parsedVulnerabilityCount = vulnerabilityCount
    ? JSON.parse(vulnerabilityCount as string)
    : null;

  // If score or parsedVulnerabilityCount is not available, you may want to handle it (e.g., show loading state or error)
  if (!score || !parsedVulnerabilityCount) {
    return <div>Loading...</div>;
  }

  // Construct resultData based on parsed query parameters
  // console.log(duration);

  const resultData = {
    score: Number(score),
    lines: Number(lines),
    duration: Number(duration),
    vulnerabilityCount: parsedVulnerabilityCount,
  };
  // console.log(resultData);

  return <ScanPage scanId={scanId} resultData={resultData} />;
};

export default ScanResultPage;
