import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { auditStats, scanReportData } from "./scanReport.data";
import { getReport, getScanHistoryData, getUser } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { setLoader } from "../../redux/commonSlice";
import Footer from "../../components/common/Footer";

const ScanReportBar = ({ type, number, color, width = "100%" }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        border: `1px solid grey,`,
        borderRadius: "10px",
      }}
      className="sss-scan-report-bar-container"
    >
      <div
        style={{
          backgroundColor: color,
          width: width,
          maxWidth: "100%",
          borderRadius: `${width === "100%" ? "10px" : "10px 0 0 10px"}`,
          height: "40px",
        }}
        className={`sss-scan-report-bar`}
      >
        <div className="sss-scan-report-bar-type">{type}</div>
        <div className="sss-scan-report-bar-number">{number}</div>
      </div>
    </div>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Get the day of the week
  const weekday = formattedDate.split(",")[0];

  // Format the day with ordinal suffix
  const day = date.getDate();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  // Get the month and year
  const monthYear = formattedDate.split(", ")[1];

  return `${weekday} | ${
    monthYear.split(" ")[0]
  } ${dayWithSuffix}, ${date.getFullYear()}`;
}

const ScanReport = ({ downloadId }) => {
  const auth = useSelector(getUserData);
  const scanHistory = useSelector(getScanHistory);
  const [history, setHistory] = useState(scanHistory.history);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useRouter();

  let url;
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
    url = window.location.href;
  }
  var id = url && url.split("?id=")[1];
  if (!id) {
    id = 0;
  }

  useEffect(() => {
    async function fetch() {
      dispatch(setLoader(true));
      await getUser({ dispatch });
      !localStorage.getItem("UserEmail") &&
        navigate.push("/algoshield/auth");
      await getScanHistoryData({
        userEmail: localStorage.getItem("UserEmail"),
        dispatch,
      });
      setHistory(scanHistory.history);
      if (
        auth.user.remainingCredits === 0 &&
        (scanHistory.history.length > 1 ||
          Number(scanHistory.history[0].id) !== Number(id))
      ) {
        !downloadId && toast("Upgrade to view the report");
        !downloadId && navigate.push("/algoshield/overview");
      }
      //alert(id);
      const report = await getReport({ id: id, email: auth.user.email });
      setData(report);
      console.log(report);
      dispatch(setLoader(false));
    }
    fetch();
  }, [!history && history, !data && data, !auth.user.email && auth.user]);

  return (
    <div id={`scan-report-${id}`} className="sss-scan-report-screen-container">
      <div className="sss-scan-report-screen">
        <div className="sss-scan-report-header">
          <div className="">Scan Report</div>
        </div>
        <div className="sss-scan-report-body-container">
          <div className="sss-scan-report-body">
            <div className="sss-scan-report-body-header">
              <div className="sss-scan-report-body-header-title">
                Solidity Shield Scan
              </div>
              <div className="sss-scan-report-body-header-time">
                {data && formatDate(data.date)}
              </div>
            </div>
            <div className="sss-scan-report-body-bars">
              {data && (
                <div>
                  <ScanReportBar
                    type={"Critical"}
                    number={data.findings.high_issues}
                    color={"#ff6666"}
                    width={`${(data.findings.high_issues / 10) * 80 + 20}%`}
                  />
                  <ScanReportBar
                    type={"Medium"}
                    number={data.findings.medium_issues}
                    color={"#ffa366"}
                    width={`${(data.findings.medium_issues / 20) * 80 + 20}%`}
                  />
                  <ScanReportBar
                    type={"Low"}
                    number={data.findings.low_issues}
                    color={"#ffff33"}
                    width={`${(data.findings.low_issues / 30) * 80 + 20}%`}
                  />
                  <ScanReportBar
                    type={"Gas Optimization"}
                    number={data.findings.optimization_issues}
                    color={"#d98cb3"}
                    width={`${
                      (data.findings.optimization_issues / 30) * 80 + 20
                    }%`}
                  />
                  <ScanReportBar
                    type={"Informational Issues"}
                    number={data.findings.informational_issues}
                    color={"#b3b3b3"}
                    width={`${
                      (data.findings.informational_issues / 100) * 80 + 20
                    }%`}
                  />
                </div>
              )}
            </div>
            <div className="sss-scan-report-body-audit-stats">
              <div className="sss-scan-report-body-audit-title">
                Audit Statistics
              </div>
              {data && (
                <div className="sss-scan-report-body-audit-stats-table">
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Audit Score
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.score}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Audit Hash
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.id}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Number of Contracts
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.contracts}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Lines of code scaneed
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.lines}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Lines of Assembly
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.assembly_lines}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      ERC Standard used
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {data.ercs.join(", ")}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      Total Vulnerabilities found
                    </div>
                    <div className="sss-scan-report-body-audit-stats-table-row-value">
                      {Object.values(data.findings).reduce(
                        (accumulator, currentValue) => {
                          return accumulator + currentValue;
                        },
                        0
                      )}
                    </div>
                  </div>
                  <div
                    className={`sss-scan-report-body-audit-stats-table-row ${"border-b"}`}
                  >
                    <div className="sss-scan-report-body-audit-stats-table-row-name">
                      By SecureDApp
                    </div>
                    <div
                      style={{ textDecoration: "underline" }}
                      className="sss-scan-report-body-audit-stats-table-row-value"
                    >
                      <Link href={"/algoshield/contact"}>
                        Request Manual Audit
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScanReport;
