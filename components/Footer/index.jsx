import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaCodepen,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-2">
            <div className="py-4 border-b border-b-gray-800 flex justify-between items-center max-w-6xl m-auto">
                <h2 className="text-md text-white font-semibold">
                    <a href="">John Doe</a>
                </h2>
                <ul className="flex justify-center items-center gap-3">
                    <li className="text-white text-sm" title="LinkedIn">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="Codepen">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaCodepen />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="GitHub">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="text-white text-sm" title="Twitter">
                        <a href="" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
                <ul className="flex justify-center items-center gap-4">
                    <li className="text-gray-400 text-sm" title="Experiences">
                        <a href="#experiences" className="font-bold ease-in-out duration-150 hover:text-white">
                            Experiences
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Projects">
                        <a href="#projects" className="font-bold ease-in-out duration-150 hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li className="text-gray-400 text-sm" title="Contact">
                        <a href="#ontact" className="font-bold ease-in-out duration-150 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
                <h5 className="text-white font-initial text-sm">&copy; 2022 - John Doe. All Rights Reserved.</h5>
            </div>
            <div className="py-8 pt-0 px-2">
                <h5 className="text-white text-sm text-center leading-6">
                    &copy; 2022 - Made with ❤️ by {" "}
                    <a href="https://twitter.com/boularbahsmail" target="_blank" rel="noreferrer" 
                        className="font-semibold text-sky-500">
                        Ismailium
                    </a> {" "}
                    using {" "}
                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer" 
                        className="font-semibold text-sky-500">
                        Next.js
                    </a> {" "}
                    & {" "}
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" 
                        className="font-semibold text-sky-500">
                        TailwindCSS
                    </a>. {" "} <br />
                    Deployed on {" "}
                    <a href="https://vercel.com/" target="_blank" rel="noreferrer" 
                        className="font-semibold text-sky-500">
                        Vercel
                    </a>, {" "}
                    Open Sourced on {" "}
                    <a href="https://github.com/boularbahsmail/Software-Developer-Portfolio" 
                        target="_blank" rel="noreferrer" 
                        className="font-semibold text-sky-500">
                        Github
                    </a>.
                </h5>
            </div>
        </div>
    );
}

export default Footer;