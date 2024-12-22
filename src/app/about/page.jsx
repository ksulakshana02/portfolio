import React from "react";
import GitHubCalendar from "react-github-calendar";
import {DiJava, DiReact, DiNodejs, DiMongodb, DiPython, DiMysql, DiGit, DiVisualstudio} from "react-icons/di";
import {
    SiDocker,
    SiExpress,
    SiGithub,
    SiJavascript, SiPostman,
    SiSpring,
    SiSpringboot, SiTailwindcss,
    SiTypescript, SiWebstorm
} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {FaAws} from "react-icons/fa";

const TechIcon = ({children}) => (
    <div
        className="p-4 bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200 hover:bg-gray-700">
        {children}
    </div>
);

const TechStack = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            <TechIcon>
                <SiJavascript size={40} className="text-yellow-400 justify-self-center hover:text-yellow-300"/>
            </TechIcon>
            <TechIcon>
                <SiTypescript size={40} className="text-blue-400 justify-self-center hover:text-yellow-300"/>
            </TechIcon>
            <TechIcon>
                <DiJava size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>
            <TechIcon>
                <DiPython size={40} className="text-yellow-400 justify-self-center hover:text-yellow-300"/>
            </TechIcon>

            <TechIcon>
                <TbBrandNextjs size={40} className="text-gray-400 justify-self-center hover:text-gray-300"/>
            </TechIcon>
            <TechIcon>
                <DiReact size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>
            <TechIcon>
                <SiTailwindcss size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>
            <TechIcon>
                <SiExpress size={40} className="text-gray-400 justify-self-center hover:text-gray-300"/>
            </TechIcon>
            <TechIcon>
                <SiSpringboot size={40} className="text-green-400 justify-self-center hover:text-green-300"/>
            </TechIcon>
            <TechIcon>
                <DiNodejs size={40} className="text-green-400 justify-self-center hover:text-green-300"/>
            </TechIcon>

            <TechIcon>
                <DiMysql size={40} className="text-orange-400 justify-self-center hover:text-orange-300"/>
            </TechIcon>
            <TechIcon>
                <DiMongodb size={40} className="text-green-400 justify-self-center hover:text-green-300"/>
            </TechIcon>
            <TechIcon>
                <SiDocker size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>
            <TechIcon>
                <FaAws size={40} className="text-yellow-400 justify-self-center hover:text-yellow-300"/>
            </TechIcon>
            <TechIcon>
                <SiPostman size={40} className="text-orange-400 justify-self-center hover:text-orange-300"/>
            </TechIcon>

        </div>
    );
};

const ToolStack = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            <TechIcon>
                <DiVisualstudio size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>
            <TechIcon>
                <SiWebstorm size={40} className="text-blue-400 justify-self-center hover:text-blue-300"/>
            </TechIcon>

            <TechIcon>
                <SiSpring size={40} className="text-green-400 justify-self-center hover:text-green-300"/>
            </TechIcon>
            <TechIcon>
                <DiGit size={40} className="text-red-400 justify-self-center hover:text-red-300"/>
            </TechIcon>
            <TechIcon>
                <SiGithub size={40} className="text-gray-400 justify-self-center hover:text-gray-300"/>
            </TechIcon>
        </div>
    );
};

const AboutPage = () => {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-0 gap-8 items-center mb-16">
                    <div className="order-2 md:order-1 justify-self-center">
                        <h1 className="text-5xl font-bold justify-self-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            About Me
                        </h1>
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700">
                            <p className="text-lg leading-relaxed space-y-4">
                                Hello, I am <span className="text-blue-400 font-semibold">Kaveesha Sulakshana</span>, a
                                Bachelor's degree in <span className="text-purple-400 font-semibold">Software Engineering</span>
                                at the Open University of <span className="text-blue-400 font-semibold">Sri Lanka</span>.
                                With a strong foundation in both Frontend and Backend Development, and I am now learning
                                more about <span className="text-blue-400 font-semibold"> Cloud Services.</span>
                                <br/><br/>
                                I'm passionate about building web applications and continuously new skills to improve my
                                knowledge. I aim to apply
                                my skills to create useful and impactful software solutions.
                            </p>
                        </div>
                    </div>
                    {/*<div className="order-1 md:order-2 relative">*/}
                    {/*    <div className="relative w-full aspect-square">*/}
                    {/*        <Image*/}
                    {/*            src="/bro.png"*/}
                    {/*            alt="about"*/}
                    {/*            layout="fill"*/}
                    {/*            objectFit="cover"*/}
                    {/*            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Technical Expertise
                        </h2>
                        <TechStack/>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Development Tools
                        </h2>
                        <ToolStack/>
                    </div>


                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700">
                        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            GitHub Contributions
                        </h2>
                        <div className="flex justify-center">
                            <GitHubCalendar
                                username="ksulakshana02"
                                blockSize={12}
                                blockMargin={5}
                                color="rgb(129, 140, 248)"
                                fontSize={16}
                                className="rounded-lg overflow-hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;