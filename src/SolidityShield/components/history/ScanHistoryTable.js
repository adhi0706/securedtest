import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import Pagination from "../common/Pagination";
import Link from "next/link";
import { formatDate, downloadfReportPdf } from "../../functions";
import ScanReport from "../../pages/scanReport/ScanReport";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";

const StatusTypeComponent = ({ status }) => {
  return (
    <div
      className={`sss-history-status-type-component-container ${
        status === "Succeeded"
          ? "sss-history-status-type-component-container-green"
          : status === "Failed"
          ? "sss-history-status-type-component-container-red"
          : "sss-history-status-type-component-container-yellow"
      }`}
    >
      <div className="sss-history-status-type-component">
        <FontAwesomeIcon
          icon={
            status === "Succeeded"
              ? faCheck
              : status === "Failed"
              ? faXmark
              : faSpinner
          }
        />
        <div className="">{status}</div>
      </div>
    </div>
  );
};

const ScanHistoryTable = ({ scanHistoryData, statusFilter }) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(false);
  const [downloadId, setDownload] = useState();
  const auth = useSelector(getUserData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = scanHistoryData.filter(
    (data) => data.status === statusFilter || statusFilter === "All"
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="sss-history-table-container">
      <div className="sss-history-table-scrollable">
        <div className="sss-history-table">
          <div className="sss-history-table-header">
            {/* <div className="sss-history-table-checkbox-container">
              <div className="sss-history-table-checkbox-header sss-history-table-header-item">
                <input type="checkbox" />
              </div>
            </div> */}
            <div className="sss-history-table-report-id-container">
              <div className="sss-history-table-header-report-id sss-history-table-header-item">
                REPORT ID
              </div>
            </div>
            <div className="sss-history-table-date-container">
              <div className="sss-history-header-table-date sss-history-table-header-item">
                DATE
              </div>
            </div>
            <div className="sss-history-table-report-link-container">
              <div className="sss-history-table-header-report-link sss-history-table-header-item">
                REPORT LINK
              </div>
            </div>
            {/* <div className="sss-history-table-status-container">
              <div className="sss-history-table-header-status sss-history-table-header-item">
                STATUS
              </div>
            </div> */}
            <div className="sss-history-table-options-container">
              <div className="sss-history-table-header-options sss-history-table-header-item"></div>
            </div>
          </div>
          <div className="sss-history-table-body">
            {paginatedData.map((data, index) => {
              return (
                (data.status !== statusFilter || statusFilter === "All") && (
                  <div className="sss-history-table-row">
                    {/* <div className="sss-history-table-checkbox-container">
                      <div className="sss-history-table-checkbox">
                        <input type="checkbox" />
                      </div>
                    </div> */}
                    <div className="sss-history-table-report-id-container">
                      <div className="sss-history-table-report-id">
                        {data.id}
                      </div>
                    </div>
                    <div className="sss-history-table-date-container">
                      <div className="sss-history-table-date">
                        {formatDate(data.date)}
                      </div>
                    </div>
                    <div className="sss-history-table-report-link-container">
                      <div className="sss-history-table-report-link">
                        <Link
                          href={"/solidity-shield-scan/report?id=" + data.id}
                        >
                          {"Report - " + data.id}
                        </Link>
                      </div>
                    </div>
                    {/* <div className="sss-history-table-status-container">
                      <div className="sss-history-table-status">
                        {<StatusTypeComponent status={data.status} />}
                      </div>
                    </div> */}
                    <div
                      onMouseEnter={() => setHoveredRowIndex(index)}
                      onMouseLeave={() => setHoveredRowIndex(null)}
                      className="sss-history-table-options-container"
                    >
                      <div className="sss-history-table-options">
                        <img
                          layout="intrinsic"
                          src="/assets/images/solidity-shield-scan/scan-history-table-option.svg"
                          alt="Option Icon"
                        />
                      </div>
                      {hoveredRowIndex === index && (
                        <div
                          className={`sss-history-table-options-dropdown ${
                            hoveredRowIndex === paginatedData.length - 1 &&
                            "bottom-0"
                          }`}
                        >
                          <div className="sss-history-table-options-dropdown-item">
                            <Link
                              href={
                                "/solidity-shield-scan/report?id=" + data.id
                              }
                            >
                              View
                            </Link>
                          </div>
                          <div
                            onClick={() => {
                              downloadfReportPdf(data.id, auth.user);
                            }}
                            className="sss-history-table-options-dropdown-item"
                          >
                            Download
                          </div>
                          {/* scan report start */}
                          {/* <div
                            style={{
                              textAlign: "left",
                              opacity: "0",
                              position: "absolute",
                              left: "-9999px",
                              top: "-9999px",
                              width: "auto",
                              height: "auto",
                              overflow: "hidden",
                            }}
                          >
                            <ScanReport downloadId={data.id} />
                          </div> */}
                          {/* scan report end */}
                        </div>
                      )}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalLength={filteredData.length}
      />
    </div>
  );
};

export default ScanHistoryTable;
