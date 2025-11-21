"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import CustomHr from "../common/CustomHr";
import Logo from "../common/Logo";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const navigationItems = [
  {
    title: "Product",
    items: [
      {
        name: "Solidity Shield Scan",
        to: "/solidity-shield",
      },
      {
        name: "Secure Watch",
        to: "/secure-watch",
      },
      {
        name: "Secure CMS (Consent)",
        to: "/secure-cms",
      },
      {
        name: "Audit Express",
        to: "/auditexpress/home",
      },
      {
        name: "Secure Trace",
        to: "/secure-trace",
      },
      {
        name: "Secure Pad",
        to: "/secure-pad",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        name: "Audit",
        to: "/smart-contract-audit",
      },
      {
        name: "Security",
        to: "/web3-security",
      },
      {
        name: "Regulatory Solutions",
        to: "/crypto-compliance-aml",
      },
      {
        name: "Training & Education",
        to: "/levelup-academy",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About Us",
        to: "/about",
      },
      {
        name: "Authors",
        to: "/authors",
      },
      {
        name: "Media",
        to: "/media",
      },
      {
        name: "Career",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/careers",
      },
      {
        name: "Contact Us",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/contact-us",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Blogs",
        to: "/blog",
      },
      {
        name: "Audits",
        to: "/audits",
      },
      {
        name: "Vulnerabilities",
        to: "/solidity-shield-vulnerabilities",
      },
      {
        name: "Github",
        to: "https://github.com/securedapp-github",
      },
      // {
      //   name: "Referral",
      //   to: "",
      // },
      {
        name: "Workplace Policy",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy",
      },
      {
        name: "Shipping & Delivery Policy",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/shipping-and-delivery-policy",
      },
      {
        name: "Pricing Policy",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/pricing-policy",
      },
      {
        name: "Cancellation & Refunds",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/cancellation-and-refund-policy",
      },
      {
        name: "Whitepaper",
        to: "https://securedapp.gitbook.io/securedapp-launchpad",
      },
      // {
      //   name: "Research Reports",
      //   to: "",
      // },
    ],
  },
];

const socials = [
  {
    to: "https://discord.com/invite/pqDC8ddnYQ",
    icon: <FontAwesomeIcon size="xl" icon={faDiscord} />,
  },
  {
    to: "https://x.com/secure_dapp",
    icon: <svg
      width="20"
      height="20"
      className="text-3xl text-black dark:text-white hover:text-green-500"
      viewBox="0 0 1200 1227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill="currentColor"
      />
    </svg>
    ,
  },
  {
    to: "https://www.linkedin.com/company/securedapp/",
    icon: <FontAwesomeIcon size="xl" icon={faLinkedin} />,
  },
  {
    to: "https://telegram.me/securedappcommunity",
    icon: <FontAwesomeIcon size="xl" icon={faTelegram} />,
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  function subscribe() {
    if (email.length === 0) {
      toast("Please enter your email");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Invalid Email");
    } else {
      try {
        fetch("https://139-59-5-56.nip.io:3443/addSecurewatchUser", {
          method: "POST",
          body: JSON.stringify({
            mail: email,
          }),
        })
          .then((res) => {
            if (res.status) {
              toast.success("Succesfully Subscribed!");
              setEmail("");
            } else {
              toast.error("Unexpected error! Try again.");
            }
          })
          .catch((err) => {
            toast.error("Unexpected error! Try again.");
          });
      } catch (error) {
        console.log(error);
        toast.error("Unexpected error! Try again.");
      }
    }
  }
  return (
    <div className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-left">
          <div className="text-lg font-bold">Join our newsletter</div>
          <div className="font-light">Stay up to date with latest news and updates from SecureDApp</div>
        </div>
        <div className="footer-newsletter-right">
          <input
            className="email-input-box"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text={"Subscribe"}
            filled={true}
            onClick={() => subscribe()}
          />
        </div>
      </div>
      <CustomHr />
      <div className="footer-about">
        <div className="footer-about-left">
          <div className="footer-logo">
            <Logo isLeft={true} />
          </div>
          <div className="footer-socials">
            {socials.map((social) => {
              return (
                <div
                  className="hover:cursor-pointer"
                  onClick={() =>
                    typeof window !== "undefined" && window.open(social.to)
                  }
                >
                  {social.icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-about-right">
          {navigationItems.map((navigationItem, navigationIndex) => {
            return (
              <div className="footer-navigation-item">
                <div className="footer-navigation-item-title">
                  {navigationItem.title}
                </div>
                <div className="footer-navigation-item-items">
                  {navigationItem.items.map((item, index) => {
                    return (
                      <div className="footer-navigation-item-item">
                        <Link href={item.to}>{item.name}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CustomHr />
      <div className="footer-legacy">
        <div className="footer-legacy-left">
          <Link
            target="_blank"
            href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
            rel="noreferrer"
          >
            Privacy Policy{" "}
          </Link>
          <FontAwesomeIcon size={"2xs"} icon={faCircle} />
          <Link
            target="_blank"
            href="https://securedapp.gitbook.io/securedapp-launchpad/disclaimer-and-risk-securedapp"
            rel="noreferrer"
          >
            Terms & Conditions
          </Link>
        </div>
        <div className="footer-legacy-right">
          <div>
            © 2024, Vettedcode Technologies India Pvt. Ltd.. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
