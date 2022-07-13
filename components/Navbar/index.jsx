import { useState } from 'react';
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, SetMenuOpen] = useState(false);
    return (
        <header className="py-3 px-3 flex justify-between items-center flex-wrap lg:py-7">
            <div className="z-50">
                <h2 className="text-2xl text-white font-bold">
                    <a href="" title="John Doe">John Doe</a>
                </h2>
            </div>
            <nav>
                <ul 
                    className={`hidden absolute left-0 top-0 m-0 py-20 px-3 bg-black z-40 w-52 min-h-full sm:w-auto sm:bg-transparent sm:flex sm:py-0 sm:static sm:left-unset sm:top-unset ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="mb-3 mx-3 sm:mb-0" title="Home">
                        <a href="" className="text-2xs text-white font-medium hover:text-teal-400">
                            Home
                        </a>
                    </li>
                    <li className="mb-3 mx-3 sm:mb-0" title="About">
                        <a href="" className="text-2xs text-white font-medium hover:text-teal-400">
                            About
                        </a>
                    </li>
                    <li className="mb-3 mx-3 sm:mb-0" title="Skills">
                        <a href="" className="text-2xs text-white font-medium hover:text-teal-400">
                            Skills
                        </a>
                    </li>
                    <li className="mb-3 mx-3 sm:mb-0" title="Projects">
                        <a href="" className="text-2xs text-white font-medium hover:text-teal-400">
                            Projects
                        </a>
                    </li>
                    <li className="mb-3 mx-3 sm:mb-0" title="Contact">
                        <a href="" className="text-2xs text-white font-medium hover:text-teal-400">
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