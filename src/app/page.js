"use client"

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";
import Link from "next/link";

const Typewriter = dynamic(() => import("typewriter-effect"));

const Home = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
            <div className="container mx-auto px-12 py-16 items-center content-center relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
                            Hello World!
                            <span className="inline-block animate-wave origin-bottom-right">👋</span>
                        </h1>

                        <h2 className="text-4xl md:text-5xl font-bold">
                            I&#39;m{" "}
                            <span
                                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Kaveesha Sulakshana
                            </span>
                        </h2>

                        <div
                            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Full Stack Developer",
                                        "Frontend Developer",
                                        "Backend Developer",
                                        "Android Developer"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>

                        <p className="text-gray-300 text-lg max-w-xl">
                            Passionate about creating beautiful, functional, and user-friendly applications.
                            Specialized in both frontend and backend development.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link href="/project">
                                <button

                                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium">
                                    View Projects
                                </button>
                            </Link>
                            <button
                                className="px-8 py-3 border-2 border-gray-500 rounded-lg hover:border-purple-500 transition-all duration-300 font-medium">
                                Contact Me
                            </button>
                        </div>

                        <div className="flex gap-6 justify-center md:justify-start pt-4">
                            <a href="https://github.com/ksulakshana02"
                               target="_blank"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FiGithub size={24}/>
                            </a>
                            <a href="https://www.linkedin.com/in/ksulakshana/"
                               target="_blank"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FiLinkedin size={24}/>
                            </a>
                            <a href="https://x.com/Ksulakshana1"
                               target="_blank"
                               className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                <FiTwitter size={24}/>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative w-full max-w-lg mx-auto">
                            <div
                                className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                            <div
                                className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                            <div
                                className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="relative">
                                <Image
                                    src="/bro.png"
                                    alt="Illustration of a person sitting with a laptop and coding"
                                    width={500}
                                    height={500}
                                    className="transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;