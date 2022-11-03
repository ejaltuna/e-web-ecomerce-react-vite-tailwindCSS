import Logo from '@/assets/images/logo.svg'
import Avatar from '@/assets/images/image-avatar.png'
import car from '@/assets/images/icon-cart.svg'
import LogoIcons from '@/components/icons/LogoIcons';
import MenuIcons from '@/components/icons/MenuIcons';
import CartIcons from '@/components/icons/CartIcons';
import CloseIcons from '@/components/icons/CloseIcons';
import { useState } from 'react';

const NavHeader = () => {
    const [navClass, setNavClass] = useState('hidden font-bold md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0');

    const handleMenu = () => {
        setNavClass('absolute font-bold w-4/5 top-0 left-0 p-8 gap-y-4 bg-white h-full flex flex-col md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0');

    }
    const handleClose = () => {
         setNavClass('hidden font-bold md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0');
    }

    return (
        <header className='flex container mx-auto items-center px-4 gap-4 py-5'>
            <button onClick={handleMenu} className='md:hidden '><MenuIcons /></button>
            <img src={Logo} alt="Logo empresa" className='mr-auto md:mr-0 mb-1' />
            <nav className={navClass}>
                <button onClick={handleClose} className='mb-10 md:hidden'><CloseIcons /></button>
                <a href="">Collections</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
            <div className='flex gap-4'>
                <button ><CartIcons /></button>
                <img src={Avatar} alt="Imagen de perfil" className='w-9' />
            </div>
        </header>

    );
}
export default NavHeader;