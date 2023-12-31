import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../../../public/task-logo.png"
const Footer = () => {
    return (
        <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100 bg-violet-600 text-black">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                           <img src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-bold">HapiFy</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracki uppercase dark:text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a href="https://www.facebook.com/profile.php?id=100085288886971" title="Facebook" className="flex items-center p-1">
                        <FaFacebook className="text-3xl"/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100085288886971" title="Twitter" className="flex items-center p-1">
                        <FaTwitter className="text-3xl"/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100085288886971" title="Instagram" className="flex items-center p-1">
                            <FaInstagram className="text-3xl"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;