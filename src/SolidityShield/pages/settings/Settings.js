import { useState } from "react";
import Image from "next/image";
import ProfileScreen from "./ProfileScreen";
import ConnectedAccounts from "./ConnectedAccounts";
import Notifications from "./Notifications";
import Footer from "../../components/common/Footer";

const settingsTypes = ["Profile", "Connected Accounts", "Notifications"];

const Settings = () => {
  const [settingsType, setSettingsType] = useState(settingsTypes[0]);

  return (
    <div className="sss-settings-screen-container">
      <div className="sss-settings-screen">
        <div className="sss-settings-header">
          <div className="">Settings</div>
        </div>
        <div className="sss-settings-body">
          <div className="sss-settings-body-header">
            {/* <div className="sss-settings-body-header-filter-container">
              {settingsTypes.map((filter) => {
                return (
                  <div
                    onClick={() => setSettingsType(filter)}
                    className={`sss-settings-body-header-filter ${
                      filter === settingsType &&
                      "sss-settings-body-header-filter-selected"
                    }`}>
                    {filter}
                    <div
                      className={`sss-settings-body-header-filter-under ${
                        filter === settingsType &&
                        "sss-settings-body-header-filter-under-selected"
                      }`}></div>
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className="sss-settings-body-main">
            {settingsType === "Profile" ? (
              <ProfileScreen />
            ) : settingsType === "Connected Accounts" ? (
              <ConnectedAccounts />
            ) : (
              <Notifications />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
