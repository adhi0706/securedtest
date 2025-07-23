import { useState } from "react";
import Image from "next/image";
import CustomButton from "../../components/common/CustomButton";

const emailNotificationsQuestions = [
  "Send me email notifications",
  "Once an hour at most",
  "Never",
];

const emailNews = [
  "Tips and Tricks",
  "Offers and Promotions",
  "Research Opportunies",
  "Cuboid Developer Newsletter: Best practices for connecting your work to Substance via our platform",
  "Cuboid Platform Changelog: Stay in the know when we make updates to our APIs",
];

const signInNotifs = [
  {
    title: "Most secure",
    desc: "Receive an email anytime someone signs in to your Cuboid account from an unrecognized device.",
  },
  {
    title: "Standard",
    desc: "Receive an email when someone signs in from a new location, with an unrecognized device.",
  },
  {
    title: "Don't send me any sign-in notifications",
    desc: "",
  },
];

const NotificationSection = ({ title, description, children }) => {
  return (
    <div className="sss-notifications-section-container">
      <div className="sss-notifications-section">
        <div className="sss-notifications-section-title">{title}</div>
        {description && (
          <div className="sss-notifications-section-description">
            {description}
          </div>
        )}
        {children && (
          <div className="sss-notifications-section-children">{children}</div>
        )}
      </div>
    </div>
  );
};

const Notifications = () => {
  const [emailNotification, setEmailNotifications] = useState("Never");

  return (
    <div className="sss-settings-notifications-container">
      <div className="sss-settings-notifications">
        <NotificationSection
          title={"Email Notifications"}
          description={
            "When you're busy or not online, Substance can send you email notifications for any new direct messages or mentions of your name."
          }
        ></NotificationSection>
        <NotificationSection title={"Send me email notifications:"}>
          <div className="sss-settings-notifications-email-notif-selections">
            {emailNotificationsQuestions.map((question) => {
              return (
                <div className="sss-settings-notifications-email-notif-selection">
                  <input
                    type="radio"
                    name="email-notif"
                    value={question}
                    checked={emailNotification === question}
                    onChange={(e) => setEmailNotifications(e.target.value)}
                    className=""
                  />
                  <label>{question}</label>
                </div>
              );
            })}
          </div>
        </NotificationSection>
        <NotificationSection
          title={"Email News & Updates"}
          description={
            "From time to time, we'd like to send you emails with interesting news about Cuboid and your workspace. You can choose which of these updates you'd like to receive :"
          }
        >
          <div className="sss-settings-notifications-email-news">
            {emailNews.map((news) => {
              return (
                <div className="sss-settings-notifications-email-news-row">
                  <input type="checkbox" name="email-news-updates" />
                  <div className="sss-settings-notifications-email-news-row-text">
                    {news}
                  </div>
                </div>
              );
            })}
          </div>
        </NotificationSection>
        <NotificationSection
          title={"Sign-in Notifications"}
          description={
            "These emails help keep your Substance account secure. If you haven't already, you should also enable two-factor authentication."
          }
        >
          <div className="sss-settings-notifications-sign-in">
            {signInNotifs.map((notif) => {
              return (
                <div className="sss-settings-notifs-sign-in-row">
                  <input type="radio" name="sign-in-notif" />
                  <div className="sss-settings-notifs-sign-in-row-detail-container">
                    <div className="sss-settings-notifs-sign-in-row-detail-container-title">
                      {notif.title}
                    </div>
                    <div className="sss-settings-notifs-sign-in-row-detail-container-desc">
                      {notif.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </NotificationSection>
        <div className="sss-settings-notifications-information">
          If you opt out of the above, note that we'll still send you important
          administrative emails, such as password resets.
        </div>
        <div className="sss-settings-notifications-footer">
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

export default Notifications;
