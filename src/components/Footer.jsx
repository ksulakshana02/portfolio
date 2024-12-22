import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    const SocialLink = ({href, icon: Icon}) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300 group"
        >
            <Icon className="text-2xl group-hover:text-purple-400 transition-colors"/>
        </a>
    );

    return (
        <footer className="bg-gray-900/95 backdrop-blur-md text-white border-t border-gray-800">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/"
                              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            {"<KS />"}
                        </Link>
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            Building digital experiences with passion and precision
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <div className="flex gap-4">
                            <Link href="/about"
                                  className="text-gray-400 hover:text-purple-400 transition-colors">About</Link>
                            <Link href="/project"
                                  className="text-gray-400 hover:text-purple-400 transition-colors">Projects</Link>
                            <Link href="/resume"
                                  className="text-gray-400 hover:text-purple-400 transition-colors">Resume</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-2">
                            <SocialLink href="https://github.com/ksulakshana02" icon={AiFillGithub}/>
                            <SocialLink href="https://www.linkedin.com/in/ksulakshana/" icon={AiFillLinkedin}/>
                            <SocialLink href="https://x.com/Ksulakshana1" icon={AiOutlineTwitter}/>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {year} Kaveesha Sulakshana. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;