"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { useRef } from "react";

const NavbarItem = ({
  to,
  children,
  darkMode,
  dropDown,
  setDropDown,
  items = [],
}) => {
  const isVisible = dropDown === children;
  
  const handleMouseEnter = () => setDropDown(children);
  const handleMouseLeave = () => setDropDown("");

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={to} className="h-full flex items-center">
        <div className="py-4 flex space-x-2 items-center cursor-pointer">
          <p
            onClick={() => {
              if (
                children === "Pricing" &&
                typeof window !== "undefined"
              ) {
                window.open("/solidity-shield-scan/pricing");
              }
            }}
            className={`transition-colors duration-200 ${isVisible ? "text-[#00d2ff]" : "text-primary"}`}
          >
            {children}
          </p>
          {items.length > 0 && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform duration-300 ${isVisible ? "rotate-180 text-[#00d2ff]" : "text-white"}`}
              size="xs"
            />
          )}
        </div>
      </Link>
      
      <MegaMenu 
        items={items} 
        label={children} 
        isVisible={isVisible} 
      />
    </div>
  );
};

export default NavbarItem;
