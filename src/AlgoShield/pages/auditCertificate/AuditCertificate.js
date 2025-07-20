import { useState } from "react";
import Image from "next/image";
import CustomButton from "../../components/common/CustomButton";

const AuditCertificate = () => {
  const [isAuditCertificate, setIsAuditCertificate] = useState(false);

  return (
    <div className="audit-certificate-container">
      <div className="audit-certificate-screen">
        <div className="audit-certificate-header">Audit Certificate</div>
        <div className="audit-certificate-body">
          {isAuditCertificate ? (
            <div className="audit-certificate-table-container">
              <div className="audit-certificate-table-scrollable">
                <div className="audit-certificate-body-table">
                  <div className="audit-certificate-body-table-header">
                    <div className="audit-certificate-table-header-certificate">
                      Certificate Number
                    </div>
                    <div className="audit-certificate-table-header-company">
                      ABC Company
                    </div>
                    <div className="audit-certificate-table-header-date">
                      14/02/2024
                    </div>
                    <div className="audit-certificate-table-header-email">
                      <CustomButton
                        className={
                          "py-1 px-2 border border-[#424242] rounded-full bg-[#cccccc1a] active:bg-tertiary"
                        }
                        text={"Send to email"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="audit-certificate-body-request">
              <div className="audit-certificate-body-request-text">
                In order to download the certificate your will have to request
              </div>
              <div className="audit-certificate-body-request-button">
                <CustomButton
                  onClick={() => setIsAuditCertificate(true)}
                  text={"Request Audit Certificate"}
                  className={
                    "px-3 py-3 text-sm bg-white border border-tertiary active:bg-tertiary rounded-xl"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditCertificate;
