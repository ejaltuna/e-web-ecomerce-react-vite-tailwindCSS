import { useContext } from "react";
import { useState } from "react";
import {useCartDetails} from "@/context/useCartDetails"
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetail from "@/components/cart/CartDetail";

import Logo from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcons from "@/components/icons/MenuIcons";
import CartIcons from "@/components/icons/CartIcons";
import CloseIcons from "@/components/icons/CloseIcons";


const NavHeader = () => {
    const [isOpenMenu, SetIsOpenMenu] = useState(false);
    const [isOpenCartDetail, setIsOpenCartDetail] = useState(false);
    const {countTotalamountProduct}= useContext(useCartDetails)

    const handleMenu = () => {
        SetIsOpenMenu(true);
    };
    const handleClose = () => {
        SetIsOpenMenu(false);
    };
    const handleOpenCartDetail = () => {};

    return (
        <>
            <header className="container relative mx-auto  flex items-center gap-4 p-4 md:px-8">
                <button onClick={handleMenu} className="md:hidden ">
                    <MenuIcons />
                </button>
                <img
                    src={Logo}
                    alt="Logo empresa"
                    className="mr-auto mb-1 md:mr-0"
                />
                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0  ${
                        isOpenMenu
                            ? "absolute  top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-4 bg-white  p-4"
                            : "hidden"
                    }`}
                >
                    <button onClick={handleClose} className="mb-10 md:hidden">
                        <CloseIcons />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4 ">
                    <button className="relative"
                        onClick={() => setIsOpenCartDetail(!isOpenCartDetail)}
                    >
                        <CartIcons />
                        <span className="absolute top-0 left-full -translate-x-1 rounded-lg bg-orange-primary px-1 text-xs font-bold text-white">
                           {countTotalamountProduct}
                        </span>
                    </button>

                    <img
                        src={Avatar}
                        alt="Imagen de perfil"
                        className="w-9 hover:rounded-full hover:border-2 hover:border-orange-primary md:cursor-pointer"
                    />
                    {isOpenCartDetail && (
                        <>
                            <CartDetail />
                        </>
                    )}
                </div>
            </header>
            <span className="container mx-auto hidden h-[1px] w-full bg-gray-300 md:block"></span>
        </>
    );
};
export default NavHeader;
