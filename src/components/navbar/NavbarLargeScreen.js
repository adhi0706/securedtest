import NavbarItem from "./NavbarItem";
import { navItems } from "./navItems";
import { useState } from "react";
import Button from "../common/Button";
import Logo from "../common/Logo";

const NavbarLargeScreen = ({
  handleNavigation,
  nextPath,
  darkMode,
  toggleTheme,
}) => {
  const [dropDown, setDropDown] = useState("");

  return (
    <nav className="lg:py-6 lg:px-10 py-4 px-8 font-nunitoSans font-light text-base text-secondary dark:text-primary flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="bg-cardBackgroundLight dark:bg-cardBackgroundDark px-4 rounded-full border-2 border-cardBorderColorLight dark:border-cardBorderColorDark flex items-center space-x-6">
        {navItems.map((item) => {
          return (
            <NavbarItem
              key={item["to"]}
              to={item["to"]}
              items={item["items"]}
              dropDown={dropDown}
              setDropDown={setDropDown}
              darkMode={darkMode}
            >
              {item["label"]}
            </NavbarItem>
          );
        })}
      </div>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleTheme}>
          {darkMode ? (
            <i className="fa-regular fa-brightness fa-lg"></i>
          ) : (
            <i className="fa-regular fa-moon fa-lg"></i>
          )}
        </button>
        {nextPath !== "/auditexpress/home" && (
          nextPath !== null ? (
            <Button className="w-36" text={"Login"} onClick={handleNavigation} />
          ) : (
            <Button
              className="w-36"
              text="Request Quote"
              onClick={handleNavigation}
            />
          )
        )}
      </div>
    </nav>
  );
};

export default NavbarLargeScreen;
