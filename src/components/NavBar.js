import React from "react";
import DesktopNavBar from "./DesktopNavBar";

import navLinks from "../data/navlinks";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  return (
    <div className="relative bg-white">
      <DesktopNavBar navLinks={navLinks} />
      <MobileNavBar navLinks={navLinks} />
    </div>
  );
}

export default NavBar;
