import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {CgWebsite} from "react-icons/cg";

const ProjectCard = ({imgPath, title, description, ghLink, demoLink}) => {
    return (
        <div
            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={imgPath}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex gap-4 pt-2">
                    <Link href={ghLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-white font-medium">
                            <BsGithub className="text-xl"/>
                            Code
                        </button>
                    </Link>

                    {demoLink && (
                        <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-white font-medium">
                                <CgWebsite className="text-xl"/>
                                Demo
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            imgPath: "/EDWin.png",
            title: "EDWin",
            description: "Edwin is an online tutoring system designed to connect students with qualified tutors for personalized learning. Built using Next.js, Express, MySQL, and Sequelize ORM, the platform allows students to create profiles, browse and select tutors, and access tutoring sessions seamlessly.",
            ghLink: "https://github.com/ksulakshana02/EDWin-web",
        },
        {
            imgPath: "/wasteless.png",
            title: "Wasteless",
            description: "Wasteless is a food donation app designed to connect donors with people in need. Using Android SDK, Firebase, and Google Maps API, I developed a user-friendly interface that facilitates real-time notifications and geolocation services.",
            ghLink: "https://github.com/ksulakshana02/Food-Donation-Android-App"
        },
        {
            imgPath: "/SchoolX.png",
            title: "SchoolX",
            description: "The School Management System is a platform designed to make school administration easier and more efficient. It is built using Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL. The system provides a simple dashboard for school administrators to manage tasks.",
            ghLink: "https://github.com/ksulakshana02/school-management"
        },
        {
            imgPath: "/StockTrack.png",
            title: "StockTrack",
            description: "This project is an Inventory Management System designed to help businesses track and manage their inventory efficiently. The system is built using React on the front end and Spring Boot with MySQL on the back end.The main responsibilities included creating a secure and user-friendly RESTful API that allows users to manage their inventory data effectively.",
            ghLink: "https://github.com/ksulakshana02/pos-backend"
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        My Projects
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Here are some of my featured works and personal projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imgPath={project.imgPath}
                            title={project.title}
                            description={project.description}
                            ghLink={project.ghLink}
                            demoLink={project.demoLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;