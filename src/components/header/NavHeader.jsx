import Logo from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import car from "@/assets/images/icon-cart.svg";
import LogoIcons from "@/components/icons/LogoIcons";
import MenuIcons from "@/components/icons/MenuIcons";
import CartIcons from "@/components/icons/CartIcons";
import CloseIcons from "@/components/icons/CloseIcons";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const NavHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0"
  );

  const handleMenu = () => {
    setNavClass(
      "absolute font-bold w-4/5 p-4 top-0 left-0 gap-y-4 bg-white h-full flex flex-col md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0 z-10"
    );
  };
  const handleClose = () => {
    setNavClass(
      "hidden font-bold md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto  flex items-center gap-4 p-2 md:px-8">
        <button onClick={handleMenu} className="md:hidden ">
          <MenuIcons />
        </button>
        <img src={Logo} alt="Logo empresa" className="mr-auto mb-1 md:mr-0" />
        <nav className={navClass}>
          <button onClick={handleClose} className="mb-10 md:hidden">
            <CloseIcons />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcons />
          </button>
          <img src={Avatar} alt="Imagen de perfil" className="w-9 hover:border-2 hover:rounded-full hover:border-orange-primary md:cursor-pointer" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
    </>
  );
};
export default NavHeader;
