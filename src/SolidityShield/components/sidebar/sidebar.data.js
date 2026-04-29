import HistoryLogo from "./images/sidebar-history.svg";
import LogoutLogo from "./images/sidebar-logout.svg";
import OverviewLogo from "./images/sidebar-overview.svg";
import SettingsLogo from "./images/sidebar-settings.svg";
import VulnerabilityLogo from "./images/sidebar-vulnerability.svg";
import PaymentsLogo from "./images/sidebar-payment.svg";
import AuditCertificateLogo from "./images/sidebar-audit-certificate.svg";

export const sidebarItems = [
  {
    image: OverviewLogo,
    name: "Overview",
    to: "overview",
  },
  {
    image: HistoryLogo,
    name: "History",
    to: "history",
  },
  // {
  //   image: VulnerabilityLogo,
  //   name: "Vulnerability Scans",
  //   to: "vulnerability-scans",
  // },
  // {
  //   image: AuditCertificateLogo,
  //   name: "Audit Certificate",
  //   to: "audit-certificate",
  // },
  {
    image: PaymentsLogo,
    name: "Billing",
    to: "billing",
  },
  {
    image: SettingsLogo,
    name: "Profile",
    to: "profile",
  },
  {
    image: LogoutLogo,
    name: "Log Out",
  },
];
