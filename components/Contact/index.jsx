import React from "react";

// React Icons
import { 
        FaLinkedinIn, 
        FaCodepen,
        FaGithub,
        FaTwitter
    } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20" id="contact">
            <h1 className="text-3xl text-teal-500 font-bold sm:text-5xl">
                Feel free, <br /> Say hi;
            </h1>
            <div className="my-10 grid grid-cols-2 gap-0 lg:grid-cols-5 sm:grid-cols-3 sm:gap-4">
                <ul>
                    <li className="mb-4 text-gray-300 text-md w-max" title="LinkedIn">
                        <a href="" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn />
                            <span className="text-sm font-initial">user/John-Doe</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="Codepen">
                        <a href="" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaCodepen />
                            <span className="text-sm font-initial">/johndoe</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="mb-4 text-gray-300 text-md w-max" title="GitHub">
                        <a href="" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub />
                            <span className="text-sm font-initial">/johndoe</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="Twitter">
                        <a href="" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                            <span className="text-sm font-initial">/johndoe</span>
                        </a>
                    </li>
                </ul>
                <div className="mt-10 sm:mt-0">
                    <h2 className="text-2xl text-teal-500 font-bold mb-2 sm:text-3xl">Start project?</h2>
                    <h3 className="text-md text-gray-400 sm:text-xl">Hello@johndoe.com</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;