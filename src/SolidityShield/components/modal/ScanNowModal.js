import { useSelector } from "react-redux";
import {
  getCommonSelector,
  setChainType,
  setScanNowModal,
  setSourceType,
} from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { faChevronDown, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../common/CustomButton";
import FileUpload from "../common/FileUpload";
import { getUser, scanSubmit } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";

const sourceTypes = ["Github", "Contract Address", "Upload File"];
const chainTypes = [
  "Ethereum Mainnet",
  "Polygon Mainnet",
  "Sepolia",
  "Polygon Amoy",
];

const ScanNowModalField = ({ label, children }) => {
  return (
    <div className="scan-now-modal-field-container">
      <div className="scan-now-modal-field">
        <div className="scan-now-modal-field-label">{label}</div>
        <div className="scan-now-modal-field-children">{children}</div>
      </div>
    </div>
  );
};

const ScanNowModalInputTextField = ({
  type,
  placeHolder,
  onChangee,
  value,
}) => {
  return (
    <div className="scan-now-modal-input-text-field-container">
      <input
        className="scan-now-modal-input-text-field"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChangee(e.target.value)}
        value={value}
      />
    </div>
  );
};

const ScanNowModalFieldDropDown = ({
  toggleDropDown,
  currentValue,
  values,
  dropDown,
  setValueTypeEvent,
}) => {
  return (
    <div onClick={toggleDropDown} className="scan-now-modal-body-dropdown">
      <div className="scan-now-modal-body-dropdown-content">
        {currentValue}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {dropDown && (
        <div className="scan-now-modal-body-dropdown-options">
          {values.map((filter) => {
            return (
              <div
                onClick={() => setValueTypeEvent(filter)}
                className="scan-now-modal-body-dropdown-option-container"
              >
                <div className="scan-now-modal-body-dropdown-option">
                  {filter}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ScanNowModal = () => {
  const { scanNowModal, sourceType, chainType } =
    useSelector(getCommonSelector);
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const [dropDown, setDropDown] = useState(false);

  const [company, setCompany] = useState();
  const [github, setGithub] = useState();
  const [contractUrl, setContractUrl] = useState();
  const [chainTypeDropDown, setChainTypeDropDown] = useState(false);
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState();
  const [isScanning, setIsScanning] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".sol")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setContract(event.target.result);
      };
      reader.readAsText(selectedFile);
      setFile(selectedFile);
    } else {
      toast.error("Only .sol files are allowed.");
      setFile(null);
      setContract("");
    }
    console.log(contract);
  };

  const closeModal = () => {
    dispatch(setScanNowModal(false));
    setGithub();
    setContractUrl();
    setFile();
    setCompany();
  };

  const toggleChainTypeDropDown = () => {
    setChainTypeDropDown(!chainTypeDropDown);
  };

  const setSourceTypeEvent = (filter) => {
    dispatch(setSourceType(filter));
  };

  const setChainTypeEvent = (filter) => {
    dispatch(setChainType(filter));
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  async function handleSubmit() {
    setIsScanning(true);
    toast("Submitted to scan");
    var res = await scanSubmit({
      inputTypes: sourceType,
      companyName: company,
      githubUrl: github,
      etherscanUrl: contractUrl,
      chain: chainTypes.indexOf(chainType),
      file,
      contract,
      user: auth.user,
      dispatch,
    });
    if (typeof res === "number") {
      closeModal();
      navigate.push(`/solidity-shield-scan/report?id=${res}`);
      setGithub();
      setContractUrl();
      setFile();
      setCompany();
      setIsScanning(false);
    } else if (res === "error") {
      toast.error("Error Scanning!");
      setGithub();
      setContractUrl();
      setFile();
      setCompany();
      setIsScanning(false);
    } else {
      setIsScanning(false);
    }
  }

  return (
    scanNowModal && (
      <div className="scan-now-modal-container">
        <div className="scan-now-modal">
          <div className="scan-now-modal-header">
            <div className="scan-now-modal-header-title">Scan Now</div>
            <div className="scan-now-modal-close-container">
              <i
                onClick={!isScanning && closeModal}
                className="fa-solid fa-xmark fa-xl cursor-pointer"
              />
            </div>
          </div>
          <div className="scan-now-modal-body">
            <ScanNowModalField label={"Select Sources"}>
              <ScanNowModalFieldDropDown
                toggleDropDown={toggleDropDown}
                currentValue={sourceType}
                values={sourceTypes}
                setValueTypeEvent={setSourceTypeEvent}
                dropDown={dropDown}
              />
            </ScanNowModalField>
            {sourceType === "Github" && (
              <div className="scan-now-modal-body-items">
                <ScanNowModalField label={"URL"}>
                  <ScanNowModalInputTextField
                    type={"text"}
                    placeHolder={"Enter Github URL of Flatten Smart Contract"}
                    onChangee={setGithub}
                    value={github}
                  />
                </ScanNowModalField>
                <ScanNowModalField label={"Company Name"}>
                  <ScanNowModalInputTextField
                    type={"text"}
                    placeHolder={"Enter Company Name"}
                    onChangee={setCompany}
                    value={company}
                  />
                </ScanNowModalField>
              </div>
            )}
            {sourceType === "Contract Address" && (
              <div className="scan-now-modal-body-items">
                <ScanNowModalField label={"Select Chain"}>
                  <ScanNowModalFieldDropDown
                    toggleDropDown={toggleChainTypeDropDown}
                    currentValue={chainType}
                    values={chainTypes}
                    setValueTypeEvent={setChainTypeEvent}
                    dropDown={chainTypeDropDown}
                  />
                </ScanNowModalField>
                <ScanNowModalField label={"Contract Address"}>
                  <ScanNowModalInputTextField
                    type={"text"}
                    placeHolder={"Enter contract Address"}
                    value={contractUrl}
                    onChangee={setContractUrl}
                  />
                </ScanNowModalField>
                <ScanNowModalField label={"Company Name"}>
                  <ScanNowModalInputTextField
                    type={"text"}
                    placeHolder={"Enter company name"}
                    onChangee={setCompany}
                    value={company}
                  />
                </ScanNowModalField>
              </div>
            )}
            {sourceType === "Upload File" && (
              <div className="scan-now-modal-body-items">
                <FileUpload file={file} handleChange={handleFileChange} />
                <ScanNowModalField label={"Company Name"}>
                  <ScanNowModalInputTextField
                    type={"text"}
                    placeHolder={"Enter company name"}
                    onChangee={setCompany}
                    value={company}
                  />
                </ScanNowModalField>
              </div>
            )}
          </div>
          <div className="scan-now-modal-fotter">
            <div className="scan-now-modal-footer-button">
              <CustomButton
                onClick={!isScanning && closeModal}
                text={"Cancel"}
                className={
                  "w-[120px] py-3 px-2 rounded-xl border border-tertiary active:bg-tertiary"
                }
              />
            </div>
            <div className="scan-now-modal-footer-button">
              <CustomButton
                text={isScanning ? "Scanning..." : "Scan"}
                className={
                  "w-[120px] border border-tertiary py-3 px-2 rounded-xl  bg-tertiary active:bg-white"
                }
                onClick={!isScanning && handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ScanNowModal;
