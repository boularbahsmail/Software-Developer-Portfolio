import React from "react";

// Works Data
import works from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// 
const Works = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="projects">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#Latest Works</h1>
            <p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
                Digital Explorers is a knowledge exchange initative
                between 2 buzzing ICT, offering.
            </p>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
                {
                    works ?
                        works.map((work, index) => 
                            <div key={index} title={`${work.work_title} - ${work.genre}`} className="bg-cyan-900 rounded-lg p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0">
                                <div className="w-45 felx justify-center items-center">
                                    <img 
                                        className="rounded-lg w-100" 
                                        src={work.image_url} 
                                        alt="Work-Image" />
                                </div>
                                <div className="flex flex-col justify-center items-start w-55 pb-0">
                                    <h2 className="text-2xl text-white font-bold my-5 mb-2">{work.work_title}</h2>
                                    <b className="text-teal-500 mb-2">⎯⎯ {work.genre}</b>
                                    <p className="text-gray-300 text-sm leading-6 m-0">{work.description}</p>
                                    <button className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white" style={{width: "100%"}} title="Visit website">
                                        <a href="" className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0">
                                            <span>Visit website</span>
                                            <HiOutlineArrowNarrowRight />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        )
                    : null
                }
            </div>
        </div>
    );
}

export default Works;