import { Link } from "react-router-dom";
import banner from "../../../public/task-banner.webp"

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/svnSxHB/Task-Banner-2.png)' }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <div data-aos="flip-down">
                                <h1 className="text-5xl font-bold leadi sm:text-6xl">HapiFy <br />A smarter way to work
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">Organize and manage your team like a boss with HapiFy, a free task management tool
                                    <br className="hidden md:inline lg:hidden" />
                                    packing more capabilities than you can imagine.
                                </p>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                                    <Link to='/dashboard'>
                                        <button className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                                            Lets Explor
                                        </button></Link>

                                </div>
                            </div>

                        </div>
                        <div data-aos="zoom-out-up" className="flex items-center justify-center p-6">
                            <img src={banner} alt="" className="object-contain " />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
