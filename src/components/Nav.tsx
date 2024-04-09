import cozyLogo from "/cozy-logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { hoverText, navLinks } from "../constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Nav = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav
      className=" fixed w-full z-50
        flex items-center justify-between 
        py-2 px-8  bg-nav-color
        font-montserrat font-medium text-sm md:text-base"
    >
      {/* left side */}
      <div className="w-10 h-10 md:w-16 md:h-16">
        <img src={cozyLogo} alt="logo" />
      </div>
      {/* right side */}
      {isAboveMediumScreens ? (
        //   full screen
        <ul className="flex gap-4  ">
          {navLinks.map((link) => (
            <li key={link.label} className={hoverText}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      ) : (
        // small screen
        <div>
          {!isMenuToggled ? (
            <Bars3Icon
              className={`w-6 h-8 ${hoverText}`}
              onClick={toggleMenu}
            />
          ) : (
            <XMarkIcon
              className={`w-6 h-8 ${hoverText}`}
              onClick={toggleMenu}
            />
          )}
        </div>
      )}
      {/* drop menu */}
      {isMenuToggled && !isAboveMediumScreens && (
        <div className="absolute top-full right-0  bg-nav-color px-8 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={` my-2 ${hoverText}`}
              onClick={() => setIsMenuToggled(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
