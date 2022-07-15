import { useState } from 'react';
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, SetMenuOpen] = useState(false);

    const closeMenu = () => {
        if (!menuOpen) {
            SetMenuOpen(menuOpen);
            menuOpen = true;
        }
        else {
            SetMenuOpen(!menuOpen);
            menuOpen = false;
        }
    }

    return (
        <header className={`py-3 px-2 flex justify-between items-center flex-wrap lg:py-7 ${styles.header} ${menuOpen ? `${styles.open}` : ""}`}>
            <div className="z-50">
                <h2 className="text-2xl text-white font-bold">
                    <a href="" title="John Doe">John Doe</a>
                </h2>
            </div>
            <nav>
                <ul 
                    className={`menu hidden absolute left-0 top-0 m-0 py-20 px-2 bg-black z-40 w-52 h-full sm:w-auto sm:bg-transparent sm:flex sm:py-0 sm:static sm:left-unset sm:top-unset ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="mb-4 mx-3 sm:mb-0" title="Experiences">
                        <a href="#experiences" className="text-2xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400" onClick={() => closeMenu()}>
                            Experiences
                        </a>
                    </li>
                    <li className="mb-4 mx-3 sm:mb-0" title="Projects">
                        <a href="#projects" className="text-2xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400" onClick={() => closeMenu()}>
                            Projects
                        </a>
                    </li>
                    <li className="mb-4 mx-3 sm:mb-0" title="Contact">
                        <a href="#contact" className="text-2xs text-white font-semibold ease-in-out duration-150 hover:text-teal-400" onClick={() => closeMenu()}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div 
                className={`flex flex-col justify-center items-center sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} 
                onClick={() => SetMenuOpen(!menuOpen)}>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
            </div>
        </header>
  )
}

export default Navbar;