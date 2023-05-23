import logoSneakes from '@/assets/images/logo.svg'
import avatarImage from '@/assets/images/image-avatar.png'
import { CartIcon, CloseIcon, MenuIcon } from '../icons'
import { useState } from 'react'

export const Header = () => {
    // const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<string>('hidden font-bold  md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0')

    const handleOpenMenu = () => {
        // setOpenMenu(true)
        setOpenMenu('absolute top-0 left-0 flex flex-col w-4/5 h-full p-8 font-bold bg-white md:bg-gray-300 gap-y-5 md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0')
    }

    const handleCloseMenu = () => {
        // setOpenMenu(false)
        setOpenMenu('hidden font-bold  md:flex-row md:mr-auto md:flex md:gap-4 md:static md:p-0')
    }

    return (
        <header className="container flex items-center gap-4 px-4 py-8 mx-auto bg-gray-300">
            <button
                className="md:hidden"
                onClick={handleOpenMenu}>
                <MenuIcon />
            </button>

            <img
                alt="logo sneakes"
                src={logoSneakes}
                className="h-5 mb-1 mr-auto md:mx-0"
            />

            <nav className={openMenu}>
                <button
                    onClick={handleCloseMenu}
                    className="mb-12 md:hidden"
                >
                    <CloseIcon />
                </button>

                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={avatarImage} alt="avatar" className='w-10' />
            </div>
        </header>
    )
}
