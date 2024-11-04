"use client";

import { useRouter } from "next/router";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { dummyData } from "./audits.data";
import {
  getAudits,
  getReport,
  getScanHistoryData,
} from "../../SolidityShield/functions";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../SolidityShield/functions";
import MetaTags from "../../components/common/MetaTags";

const GradientCircularProgressbar = ({ value, text }) => {
  let gradientTransform = `rotate(${120})`;

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient
            id={"circularGradient"}
            gradientTransform={gradientTransform}
          >
            <stop offset="0%" stopColor={"#12D576"} />
            <stop offset="100%" stopColor={"#6BFFB7"} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbarWithChildren
        value={value * 10}
        circleRatio={0.75}
        strokeWidth={12}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          pathTransition: "stroke-dashoffset 1s ease 0s",
          strokeLinecap: "butt",
          trailColor: "#F0F0F0",
          pathColor: "url(#circularGradient)",
        })}
      >
        <div className="audits-page-body-progress-value-container">
          <div className="audits-page-body-progress-value">{text}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const FigureComponent = ({ value, text, color }) => {
  return (
    <div
      style={{ border: `2px solid #C6C7F833` }}
      className="audits-page-body-figure-component-container"
    >
      <div className="audits-page-body-figure-component">
        <div className="audits-page-body-figure-component-figure">{value}</div>
        <div className="audits-page-body-figure-component-text">{text}</div>
      </div>
    </div>
  );
};

const AuditsPageCard = ({ headers, details, children }) => {
  return (
    <div className="audits-page-card-container">
      <div className="audits-page-card">
        <div className="audits-page-card-headers">
          {headers.map((header, index) => {
            return (
              <div
                className={`audits-page-card-header ${
                  index === 0
                    ? "min-w-[150px] sm:min-w-[250px] md:min-w-[350px]"
                    : ""
                }`}
              >
                {header}
              </div>
            );
          })}
        </div>
        <div className="audits-page-card-body">
          {details && (
            <div className="audits-page-card-body-rows">
              {details.map((data) => {
                return (
                  <div className="audits-page-card-body-row">
                    <div className="audits-page-card-body-row-topic">
                      {data.topic}
                    </div>
                    <div className="audits-page-card-body-row-value">
                      {data.value}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

const AuditsPage = () => {
  let url;
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
    url = window.location.href;
  }

  const navigate = useRouter();
  var { id2 } = navigate.query;
  var id = url && url.split("?id=")[1];

  const [auditsData, setData] = useState([]);
  const [audits, setAudits] = useState([]);
  const [currentAudit, setCurrentAudit] = useState();
  const [report, setReport] = useState();

  const AuditCard = ({ data }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width:
            typeof window !== "undefined" && window.innerWidth > 800
              ? "calc(33% - 20px)"
              : "calc(100% - 20px)",
          padding: "10px",
          margin: "10px",
        }}
        className="audit-card"
        onClick={() => {
          fetch(data.id);
          navigate.push(`/audits?id=${data.id}`);
        }}
      >
        <div>
          <img
            layout="intrinsic"
            style={{ marginRight: "12px", maxWidth: "90px" }}
            src={data.image}
            alt={data.company}
          ></img>
        </div>
        <div style={{ margin: "auto", width: "100%", textAlign: "left" }}>
          <p style={{ fontSize: "18px" }}>{data.company}</p>
          <p style={{ color: "#858585", fontSize: "14px" }}>
            Audit ID : {data.id}
          </p>
          <p style={{ color: "#858585", fontSize: "14px" }}>
            Audit Date : {formatDate(data.date)}
          </p>
        </div>
      </div>
    );
  };

  if (!id) {
    id = 0;
  }

  async function fetch(e) {
    console.log(e);
    const data = await getReport({ id: e, email: "" });
    data
      ? setReport({
          summary: [
            {
              topic: "Hash",
              value: data.id,
            },
            {
              topic: "Contracts",
              value: data.contracts,
            },
            {
              topic: "Lines",
              value: data.lines,
            },
            {
              topic: "Assembly lines",
              value: data.assembly_lines,
            },
            {
              topic: "ERCs",
              value: data.ercs.join(", "),
            },
          ],
          findings: [
            {
              topic: "CRITICAL",
              value: data.findings.high_issues,
            },
            {
              topic: "Medium",
              value: data.findings.medium_issues,
            },
            {
              topic: "LOW",
              value: data.findings.low_issues,
            },
            {
              topic: "INFORMATIONA",
              value: data.findings.informational_issues,
            },
            {
              topic: "OPTIMIZATIONS",
              value: data.findings.optimization_issues,
            },
          ],
          score: data.score,
        })
      : setReport();
    console.log(data);
    var current = auditsData.find((item) => Number(item.id) === Number(id));
    setCurrentAudit(current);
  }

  useEffect(() => {
    async function getData() {
      var res = await getAudits();
      setData(res);
      setAudits(res);
      var current = res.find((item) => Number(item.id) === Number(id));
      setCurrentAudit(current);
    }
    getData();
    if (id > 0) {
      fetch(id);
    }
    if (!report) {
      //navigate.push("/audits");
    }
  }, [!audits && audits, !currentAudit && currentAudit, !report && report]);

  function search(searchVal) {
    navigate.push("/audits");
    setAudits(
      auditsData.filter((e) =>
        JSON.stringify(e).toLocaleLowerCase().includes(searchVal)
      )
    );
  }

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(audits.length / 9);

  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems =
    audits && audits.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (typeof window !== "undefined") {
      typeof window !== "undefined" && window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="audits-page-container">
      <Navbar />
      <MetaTags
        data={{
          title: "Secure Your Blockchain & DApps: Audits by SecureDApp ",
          desc: "Go beyond smart contracts! SecureDApp offers comprehensive blockchain security audits for your DApps & projects. Build trust & security.",
          keywords:
            "blockchain security audits, smart contract audits, DApp security, blockchain security, smart contract security, security audit, code audit",
        }}
      />
      <div className="audits-page">
        <div className="audits-page-header">
          <div className="audits-page-header-title">Audits</div>
          <h1 className="audits-page-header-description">
            Audits done by SecureDapp
          </h1>
        </div>

        <div className="audits-page-body">
          <div className="audits-page-body-search">
            <div className="audits-page-body-search-input">
              <input
                className="audits-page-body-search-input-box"
                placeholder="Search by Company name, Audit Id or Date"
                onChange={(e) => search(e.target.value)}
                type="text"
              />
            </div>
          </div>
          {report && id > 0 ? (
            <div>
              {currentAudit && (
                <div
                  style={{ marginBottom: "15px" }}
                  className="audits-page-body-logo"
                >
                  <div className="audits-page-body-logo-image">
                    <img
                      layout="intrinsic"
                      src={currentAudit.image}
                      alt={currentAudit.company}
                    />
                  </div>
                  <div className="audits-page-body-logo-desc">
                    <div className="audits-page-body-logo-desc-title">
                      {currentAudit.company}
                    </div>
                    <div className="audits-page-body-logo-desc-timeline">
                      {formatDate(currentAudit.date)}
                    </div>
                  </div>
                </div>
              )}
              <div className="audits-page-body-cards">
                <AuditsPageCard
                  headers={["Executive summary"]}
                  details={report.summary}
                />
                <AuditsPageCard
                  headers={["Audit Findings", "Count"]}
                  details={report.findings}
                />
                <AuditsPageCard headers={["Safety Score"]}>
                  <div className="audits-page-card-body-chart">
                    <div className="audits-page-card-body-chart-left">
                      <GradientCircularProgressbar
                        value={parseFloat(report.score.split("/")[0])}
                        text={report.score}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                      className="audits-page-card-body-chart-right"
                    >
                      {report.findings.map((data) => {
                        return (
                          <FigureComponent
                            value={data.topic}
                            text={data.value}
                          />
                        );
                      })}
                    </div>
                  </div>
                </AuditsPageCard>
              </div>
            </div>
          ) : (
            <div>
              {currentItems.length > 0 ? (
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {currentItems.map((data) => (
                      <AuditCard data={data} />
                    ))}
                  </div>
                  <div className="blog-pagination">
                    <div className="blog-pagniation-arrow-container">
                      <button
                        className="blog-pagination-arrow"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                    </div>
                    <div className="blog-pagination-number">{currentPage}</div>
                    <div className="blog-pagniation-arrow-container">
                      <button
                        className="blog-pagination-arrow"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                "No audit found"
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuditsPage;
