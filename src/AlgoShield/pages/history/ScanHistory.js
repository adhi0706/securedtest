import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  getHistorySelector,
  setHistoryStatusFilter,
} from "../../redux/dashboard/historySlice";
import { getScanHistory } from "../../redux/scanHistory/scanHistorySlice";
import { getScanHistoryData, getUser, getJwt } from "../../functions";
import { useDispatch } from "react-redux";
import ScanHistoryTable from "../../components/history/ScanHistoryTable";
import { scanHistoryDummyData } from "./scanHistory.data";
import Pagination from "../../components/common/Pagination";
import { getUserData } from "../../redux/auth/authSlice";
import { setLoader } from "../../redux/commonSlice";
import Footer from "../../components/common/Footer";

const scanHistoryStatusFilter = ["Succeeded", "Failed", "Inprogress", "All"];

const ScanHistory = () => {
  const { statusFilter } = useSelector(getHistorySelector);
  const auth = useSelector(getUserData);
  var scanHistory = useSelector(getScanHistory);
  const [history, setHistory] = useState(scanHistory.history);
  const dispatch = useDispatch();
  const navigate = useRouter();

  async function fetch() {
    await getScanHistoryData({
      userEmail: localStorage.getItem("UserEmail"),
      dispatch,
    });
    setHistory(scanHistory.history);
    //alert(history.length);
  }

  useEffect(() => {
    async function fetch() {
      dispatch(setLoader(true));
      var data = await getScanHistoryData({
        userEmail: auth.user?.email || 'user',
        dispatch,
      });
      setHistory(data);
      dispatch(setLoader(false));
    }
    
    // For AlgoShield, we don't need authentication since we're using localStorage
    fetch();
  }, []);

  return (
    <div className="sss-scan-history-container">
      <div className="sss-scan-history">
        <div className="sss-scan-history-header-container">
          <div className="sss-scan-history-header">History</div>
          <div className="sss-scan-history-header-right">
            <div className="sss-scan-history-header-button">
              <div className="sss-scan-history-header-button-icon">
                {/* <img layout="intrinsic"   layout="intrinsic"   
                  src="/assets/images/solidity-shield-scan/history-filter.svg"
                  alt="Filter Icon"
                /> */}
              </div>
              <div onClick={fetch} className="">
                Reload history
              </div>
              <div className="sss-scan-history-header-button-text"></div>
            </div>
            {/* <div className="sss-scan-history-header-button">
              <div className="sss-scan-history-header-button-icon">
                <img layout="intrinsic"   layout="intrinsic"   
                  src="/assets/images/solidity-shield-scan/history-export.svg"
                  alt="Export Icon"
                />
              </div>
              <div className="">Export</div>
              <div className="sss-scan-history-header-button-text"></div>
            </div> */}
          </div>
        </div>
        <div className="sss-scan-history-body">
          <div className="sss-scan-history-body-header">
            <div className="sss-scan-history-body-header-filter-container">
              {scanHistoryStatusFilter.map((filter) => {
                return (
                  <div
                    onClick={() => dispatch(setHistoryStatusFilter(filter))}
                    className={`sss-scan-history-body-header-filter ${
                      filter === statusFilter &&
                      "sss-scan-history-body-header-filter-selected"
                    }`}
                  >
                    {filter}
                    <div
                      className={`sss-scan-history-body-header-filter-under ${
                        filter === statusFilter &&
                        "sss-scan-history-body-header-filter-under-selected"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <ScanHistoryTable
            scanHistoryData={history}
            statusFilter={statusFilter}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ScanHistory;
