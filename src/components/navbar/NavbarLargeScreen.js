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
    <nav className="lg:py-6 lg:px-10 py-4 px-8 font-nunitoSans font-light text-base text-primary flex justify-between items-center">
      <div>
        <Logo forceDark={true} />
      </div>
      <div 
        className="bg-[#1e3255] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] px-4 rounded-full border border-white/10 flex items-center space-x-6 relative"
      >
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
        <Button className="w-36" text="Login" onClick={handleNavigation} />
      </div>
    </nav>
  );
};

export default NavbarLargeScreen;
