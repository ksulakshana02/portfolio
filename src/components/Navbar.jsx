"use client"

import {useEffect, useState} from "react";
import Link from "next/link";
import {AiFillExperiment, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {CgGitFork} from "react-icons/cg";
import {RiCloseLine, RiMenu4Line} from "react-icons/ri";

const NavBar = () => {
    const [navColor, setNavColor] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavLink = ({href, icon: Icon, children}) => (
        <Link
            href={href}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700/50"
            onClick={() => setExpand(false)}
        >
            <Icon className="text-xl text-white group-hover:text-purple-400 transition-colors"/>
            <span className="group-hover:text-purple-400 text-white transition-colors">{children}</span>
        </Link>
    );

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
            navColor ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/"
                          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        {"<KS />"}
                    </Link>

                    <div className="hidden md:flex items-center gap-2">
                        <NavLink href="/" icon={AiOutlineHome}>Home</NavLink>
                        <NavLink href="/about" icon={AiOutlineUser}>About</NavLink>
                        <NavLink href="/project" icon={AiOutlineFundProjectionScreen}>Projects</NavLink>
                        <NavLink href="/resume" icon={AiFillExperiment}>Resume</NavLink>

                        <a
                            href="https://github.com/ksulakshana02/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                        >
                            <span>Star Repo</span>
                            <CgGitFork className="text-xl"/>
                        </a>
                    </div>
                    <button
                        className="md:hidden text-white text-2xl p-2"
                        onClick={() => setExpand(!expand)}
                    >
                        {expand ? <RiCloseLine/> : <RiMenu4Line/>}
                    </button>
                </div>
                <div className={`md:hidden transition-all duration-300 ${
                    expand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                    <div className="flex flex-col gap-2 pt-4">
                        <NavLink href="/" icon={AiOutlineHome}>Home</NavLink>
                        <NavLink href="/about" icon={AiOutlineUser}>About</NavLink>
                        <NavLink href="/project" icon={AiOutlineFundProjectionScreen}>Projects</NavLink>
                        <NavLink href="/resume" icon={AiFillExperiment}>Resume</NavLink>

                        <a
                            href="https://github.com/ksulakshana02/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                        >
                            <span>Star Repo</span>
                            <CgGitFork className="text-xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;