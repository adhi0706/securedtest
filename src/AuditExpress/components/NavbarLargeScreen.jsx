import NavbarItem from "../../components/navbar/NavbarItem";
import { navItems } from "../../components/navbar/navItems";
import { useState } from "react";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import { TbBrightnessUp,  } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";

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
      <div className="bg-cardBackgroundLight dark:bg-cardBackgroundDark lg:mr-36 px-4 rounded-full border-2 border-cardBorderColorLight dark:border-cardBorderColorDark flex items-center space-x-6">
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
            <TbBrightnessUp className="text-3xl" />
          ) : (
            <IoMoonOutline className=" text-3xl" />
          )}
        </button>
        {nextPath !== undefined && nextPath !== null ? (
          <Button className="w-36 hidden" text={"Login"} onClick={handleNavigation} />
        ) : (
          <Button
            className="w-36 hidden"
            text="Request Quote"
            onClick={handleNavigation}
          ></Button>
        )}
      </div>
    </nav>
  );
};

export default NavbarLargeScreen;
