import { useState } from "react";
import Image from "next/image";
import CustomButton from "../../components/common/CustomButton";

const AccountCard = ({
  logo,
  accountType,
  description,
  toggleValue,
  handleToggle,
}) => {
  return (
    <div className="sss-settings-account-card-container">
      <div className="sss-settings-account-card">
        <div className="sss-settings-account-card-left">
          <img layout="intrinsic" src={logo} alt={accountType} />
          <div className="sss-settings-account-card-left-details">
            <div className="sss-settings-account-card-left-details-title">
              {accountType}
            </div>
            <div className="sss-settings-account-card-left-details-desc">
              {description}
            </div>
          </div>
        </div>
        <div className="sss-settings-account-card-right">
          <div
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              toggleValue ? "bg-tertiary" : "bg-gray-300"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                toggleValue ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectedAccounts = () => {
  const [googleToggleValue, setGoogleToggleValue] = useState(false);
  const [slackToggleValue, setSlackToggleValue] = useState(false);
  const [dropBoxToggleValue, setDropBoxToggleValue] = useState(false);

  return (
    <div className="sss-settings-connected-accounts-container">
      <div className="sss-settings-connected-accounts">
        <div className="sss-settings-connected-accounts-box">
          <div className="sss-settings-connected-accounts-box-icon">
            <img
              layout="intrinsic"
              src="/assets/images/solidity-shield-scan/connected-accounts-verified.svg"
              alt="verified"
            />
          </div>
          <div className="sss-settings-connected-accounts-box-content">
            <div className="sss-settings-connected-accounts-box-content-title">
              Secure Your Account
            </div>
            <div className="sss-settings-connected-accounts-box-content-description">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you'll need to provide a 6 digit
              code. <span className="text-[#70B6C1] underline">Learn more</span>
            </div>
          </div>
        </div>
        <div className="sss-settings-connected-accounts-socials">
          <AccountCard
            logo={
              "/assets/images/solidity-shield-scan/connected-accounts-google.svg"
            }
            accountType={"Google"}
            description={"Plan properly your workflow"}
            toggleValue={googleToggleValue}
            handleToggle={() => setGoogleToggleValue(!googleToggleValue)}
          />
          <AccountCard
            logo={
              "/assets/images/solidity-shield-scan/connected-accounts-slack.svg"
            }
            accountType={"Slack"}
            description={"Integrate Projects Discussions"}
            toggleValue={slackToggleValue}
            handleToggle={() => setSlackToggleValue(!slackToggleValue)}
          />
          <AccountCard
            logo={
              "/assets/images/solidity-shield-scan/connected-accounts-dropbox.svg"
            }
            accountType={"Dropbox"}
            description={"Integrate Projects Management"}
            toggleValue={dropBoxToggleValue}
            handleToggle={() => setDropBoxToggleValue(!dropBoxToggleValue)}
          />
        </div>
        <div className="sss-settings-connected-accounts-footer">
          <div className="sss-settings-connected-accounts-footer-buttons">
            <div className="sss-settings-connected-accounts-footer-discard-button">
              <CustomButton
                className={
                  "py-2 px-3 border border-tertiary rounded-lg active:bg-tertiary"
                }
                text={"Discard"}
              />
            </div>
            <div className="sss-settings-connected-accounts-footer-save-button">
              <CustomButton
                className={
                  "py-2 px-3 border bg-tertiary border-tertiary rounded-lg active:bg-white"
                }
                text={"Save Changes"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedAccounts;
