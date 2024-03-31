import cozyLogo from "/cozy-logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="p-4 absolute z-10 w-full">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={cozyLogo} alt="logo" width={60} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label}>
              <a
                href={navlink.href}
                className="leading-normal text-lg text-gray-500"
              >
                {navlink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Bars3Icon className="h-8 w-8 p-1 text-gray-800" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
